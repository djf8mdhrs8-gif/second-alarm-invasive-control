import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Submission = {
  name: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  message: string;
  emergency: boolean;
  preferredTime: string;
  submittedAt: string;
};

type Attachment = {
  filename: string;
  contentBase64: string;
  contentType: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_PHOTO_BYTES = 8 * 1024 * 1024;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

async function deliverViaWebhook(
  submission: Submission,
  webhookUrl: string,
  notifyEmail?: string
) {
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...submission, notifyEmail }),
  });

  if (!response.ok) {
    throw new Error(`Webhook responded with status ${response.status}`);
  }
}

async function deliverViaResend(
  submission: Submission,
  apiKey: string,
  notifyEmail: string,
  attachment: Attachment | null
) {
  const subject = `${submission.emergency ? "🚨 EMERGENCY — " : ""}New lead: ${submission.service} — ${submission.name}`;

  const text = [
    submission.emergency ? "*** EMERGENCY SERVICE REQUEST ***\n" : "",
    `Name:      ${submission.name}`,
    `Phone:     ${submission.phone}`,
    `Email:     ${submission.email}`,
    `Address:   ${submission.address}`,
    `Service:   ${submission.service}`,
    submission.preferredTime ? `Preferred: ${submission.preferredTime}` : "",
    `Received:  ${submission.submittedAt}`,
    "",
    "Message:",
    submission.message,
  ]
    .filter(Boolean)
    .join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FORM_FROM_EMAIL || "Second Alarm Leads <onboarding@resend.dev>",
      to: [notifyEmail],
      reply_to: submission.email,
      subject,
      text,
      attachments: attachment
        ? [{ filename: attachment.filename, content: attachment.contentBase64 }]
        : undefined,
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Resend responded with status ${response.status}: ${body.slice(0, 500)}`);
  }
}

export async function POST(request: Request) {
  const formData = await request.formData().catch(() => null);

  if (!formData) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = formData.get("name");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const address = formData.get("address");
  const service = formData.get("service");
  const message = formData.get("message");
  const emergency = formData.get("emergency");
  const preferredTime = formData.get("preferredTime");
  const photo = formData.get("photo");

  if (
    !isNonEmptyString(name) ||
    !isNonEmptyString(phone) ||
    !isNonEmptyString(email) ||
    !isNonEmptyString(address) ||
    !isNonEmptyString(service) ||
    !isNonEmptyString(message)
  ) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  let attachment: Attachment | null = null;

  if (photo instanceof File && photo.size > 0) {
    if (!photo.type.startsWith("image/")) {
      return NextResponse.json({ error: "Photo must be an image file." }, { status: 400 });
    }
    if (photo.size > MAX_PHOTO_BYTES) {
      return NextResponse.json({ error: "Photo must be smaller than 8MB." }, { status: 400 });
    }
    const bytes = Buffer.from(await photo.arrayBuffer());
    attachment = {
      filename: photo.name || "photo.jpg",
      contentBase64: bytes.toString("base64"),
      contentType: photo.type,
    };
  }

  const submission: Submission = {
    name: name.trim().slice(0, 200),
    phone: phone.trim().slice(0, 50),
    email: email.trim().slice(0, 200),
    address: address.trim().slice(0, 300),
    service: service.trim().slice(0, 100),
    message: message.trim().slice(0, 2000),
    emergency: emergency === "Yes",
    preferredTime: isNonEmptyString(preferredTime) ? preferredTime.trim().slice(0, 100) : "",
    submittedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL;
  const notifyEmail = process.env.CONTACT_FORM_NOTIFY_EMAIL;
  const resendApiKey = process.env.RESEND_API_KEY;

  const deliveries: Array<Promise<void>> = [];

  if (resendApiKey && notifyEmail) {
    deliveries.push(deliverViaResend(submission, resendApiKey, notifyEmail, attachment));
  }

  if (webhookUrl) {
    deliveries.push(deliverViaWebhook(submission, webhookUrl, notifyEmail));
  }

  if (deliveries.length === 0) {
    console.log(
      "[contact-form] New submission (no RESEND_API_KEY or CONTACT_FORM_WEBHOOK_URL configured):",
      submission
    );
    return NextResponse.json({ success: true });
  }

  const results = await Promise.allSettled(deliveries);
  const failures = results.filter((r): r is PromiseRejectedResult => r.status === "rejected");

  for (const failure of failures) {
    console.error("[contact-form] Delivery channel failed:", failure.reason);
  }

  // Succeed if at least one channel delivered the lead.
  if (failures.length === results.length) {
    return NextResponse.json(
      { error: "Unable to submit your request right now. Please call us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}

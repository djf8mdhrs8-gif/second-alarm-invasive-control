import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  address?: unknown;
  service?: unknown;
  message?: unknown;
  emergency?: unknown;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, phone, email, address, service, message, emergency } = payload;

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

  const submission = {
    name: name.trim().slice(0, 200),
    phone: phone.trim().slice(0, 50),
    email: email.trim().slice(0, 200),
    address: address.trim().slice(0, 300),
    service: service.trim().slice(0, 100),
    message: message.trim().slice(0, 2000),
    emergency: emergency === "Yes",
    submittedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL;
  const notifyEmail = process.env.CONTACT_FORM_NOTIFY_EMAIL;

  try {
    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...submission, notifyEmail }),
      });

      if (!response.ok) {
        throw new Error(`Webhook responded with status ${response.status}`);
      }
    } else {
      console.log("[contact-form] New submission (CONTACT_FORM_WEBHOOK_URL not configured):", submission);
    }
  } catch (error) {
    console.error("[contact-form] Failed to deliver submission:", error);
    return NextResponse.json(
      { error: "Unable to submit your request right now. Please call us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}

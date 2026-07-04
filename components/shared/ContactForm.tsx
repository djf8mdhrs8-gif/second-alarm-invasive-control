"use client";

import { useState, type FormEvent } from "react";
import { AlertTriangle, CheckCircle2, Loader2, Send } from "lucide-react";
import { serviceOptions } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [emergency, setEmergency] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    payload.emergency = emergency ? "Yes" : "No";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      form.reset();
      setEmergency(false);
    } catch (err) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please call us directly at (239) 365-6753.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-coastal-500/30 bg-coastal-50 p-10 text-center dark:bg-coastal-950/30">
        <CheckCircle2 className="h-12 w-12 text-coastal-600 dark:text-coastal-400" />
        <h3 className="font-display text-2xl font-bold text-navy-900 dark:text-white">
          Request Received
        </h3>
        <p className="max-w-md text-navy-600 dark:text-navy-300">
          Thank you for reaching out to Second Alarm Invasive Control. A specialist will contact
          you shortly to schedule your inspection.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="focus-ring text-sm font-semibold text-coastal-600 underline dark:text-coastal-400"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy-800 dark:text-navy-200">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="focus-ring w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 dark:border-navy-700 dark:bg-navy-900 dark:text-white"
          placeholder="Jane Smith"
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-navy-800 dark:text-navy-200">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className="focus-ring w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 dark:border-navy-700 dark:bg-navy-900 dark:text-white"
          placeholder="(239) 555-0100"
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy-800 dark:text-navy-200">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="focus-ring w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 dark:border-navy-700 dark:bg-navy-900 dark:text-white"
          placeholder="jane@email.com"
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="address" className="mb-1.5 block text-sm font-semibold text-navy-800 dark:text-navy-200">
          Property Address
        </label>
        <input
          id="address"
          name="address"
          type="text"
          required
          autoComplete="street-address"
          className="focus-ring w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 dark:border-navy-700 dark:bg-navy-900 dark:text-white"
          placeholder="123 Waterfront Dr, Cape Coral, FL"
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-navy-800 dark:text-navy-200">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="focus-ring w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 dark:border-navy-700 dark:bg-navy-900 dark:text-white"
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy-800 dark:text-navy-200">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="focus-ring w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 dark:border-navy-700 dark:bg-navy-900 dark:text-white"
          placeholder="Tell us about the invasive species issue on your property..."
        />
      </div>

      <div className="sm:col-span-2">
        <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gold-500/40 bg-gold-50 px-4 py-3 text-sm font-semibold text-navy-800 dark:bg-gold-500/10 dark:text-gold-200">
          <input
            type="checkbox"
            checked={emergency}
            onChange={(e) => setEmergency(e.target.checked)}
            className="focus-ring h-4 w-4 rounded border-navy-300 text-coastal-600"
          />
          <AlertTriangle size={16} className="text-gold-500" />
          This is an emergency service request
        </label>
      </div>

      {status === "error" && (
        <p className="sm:col-span-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700 dark:bg-red-950/40 dark:text-red-300">
          {errorMessage}
        </p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="focus-ring flex w-full items-center justify-center gap-2 rounded-full bg-coastal-600 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-coastal-700 disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send size={18} />
              Request My Inspection
            </>
          )}
        </button>
      </div>
    </form>
  );
}

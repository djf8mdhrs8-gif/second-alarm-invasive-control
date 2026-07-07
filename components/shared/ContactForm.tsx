"use client";

import { useRef, useState, type FormEvent } from "react";
import {
  AlertTriangle,
  Bird,
  CheckCircle2,
  HelpCircle,
  ImagePlus,
  Loader2,
  PawPrint,
  Send,
  X,
} from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";
type Species = "Green Iguana Removal" | "Muscovy Duck Removal" | "Not Sure / Other";

const speciesOptions: { value: Species; label: string; icon: typeof Bird }[] = [
  { value: "Green Iguana Removal", label: "Iguana", icon: PawPrint },
  { value: "Muscovy Duck Removal", label: "Muscovy Duck", icon: Bird },
  { value: "Not Sure / Other", label: "Not Sure", icon: HelpCircle },
];

const timeWindows = ["Morning (8am–12pm)", "Afternoon (12pm–4pm)", "Evening (4pm–6pm)", "No preference"];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [emergency, setEmergency] = useState(false);
  const [species, setSpecies] = useState<Species | null>(null);
  const [photoName, setPhotoName] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("emergency", emergency ? "Yes" : "No");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      form.reset();
      setEmergency(false);
      setSpecies(null);
      setPhotoName(null);
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
          Report Received
        </h3>
        <p className="max-w-md text-navy-600 dark:text-navy-300">
          Thank you for reporting this to Second Alarm Invasive Control. A specialist will
          contact you shortly to schedule your inspection.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="focus-ring text-sm font-semibold text-coastal-600 underline dark:text-coastal-400"
        >
          Submit another report
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <span className="mb-2 block text-sm font-semibold text-navy-800 dark:text-navy-200">
          What are you dealing with?
        </span>
        <div className="grid grid-cols-3 gap-3">
          {speciesOptions.map((option) => {
            const Icon = option.icon;
            const active = species === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setSpecies(option.value)}
                className={`focus-ring flex flex-col items-center gap-2 rounded-xl border px-3 py-4 text-xs font-bold uppercase tracking-wide transition-colors ${
                  active
                    ? "border-ember-600 bg-ember-600 text-white"
                    : "border-navy-200 text-navy-700 hover:border-ember-500/50 dark:border-navy-700 dark:text-navy-200"
                }`}
              >
                <Icon size={22} />
                {option.label}
              </button>
            );
          })}
        </div>
        <input type="hidden" name="service" value={species ?? ""} required />
      </div>

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
        <label htmlFor="preferredTime" className="mb-1.5 block text-sm font-semibold text-navy-800 dark:text-navy-200">
          Preferred Appointment Time
        </label>
        <select
          id="preferredTime"
          name="preferredTime"
          defaultValue={timeWindows[3]}
          className="focus-ring w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 dark:border-navy-700 dark:bg-navy-900 dark:text-white"
        >
          {timeWindows.map((window) => (
            <option key={window} value={window}>
              {window}
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
        <span className="mb-1.5 block text-sm font-semibold text-navy-800 dark:text-navy-200">
          Add a Photo <span className="font-normal text-navy-400">(optional)</span>
        </span>
        <input
          ref={fileInputRef}
          id="photo"
          name="photo"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => setPhotoName(e.target.files?.[0]?.name ?? null)}
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="focus-ring flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-navy-300 bg-navy-50 px-4 py-4 text-sm font-semibold text-navy-600 transition-colors hover:border-ember-500/50 dark:border-navy-700 dark:bg-navy-900 dark:text-navy-300"
        >
          <ImagePlus size={18} />
          {photoName ?? "Upload a photo of the issue"}
        </button>
        {photoName && (
          <button
            type="button"
            onClick={() => {
              setPhotoName(null);
              if (fileInputRef.current) fileInputRef.current.value = "";
            }}
            className="focus-ring mt-2 flex items-center gap-1 text-xs font-semibold text-navy-500 hover:text-ember-600 dark:text-navy-400"
          >
            <X size={14} /> Remove photo
          </button>
        )}
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
          disabled={status === "submitting" || !species}
          className="focus-ring flex w-full items-center justify-center gap-2 rounded-md bg-ember-600 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-ember-700 disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send size={18} />
              Report This Issue
            </>
          )}
        </button>
        {!species && (
          <p className="mt-2 text-center text-xs text-navy-400">
            Select what you&rsquo;re dealing with above to continue.
          </p>
        )}
      </div>
    </form>
  );
}

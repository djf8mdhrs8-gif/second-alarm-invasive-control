"use client";

import { Phone } from "lucide-react";
import { company } from "@/lib/data";

export function StickyCallButton() {
  return (
    <a
      href={company.phoneHref}
      className="focus-ring fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-2 bg-coastal-600 py-3.5 text-sm font-bold text-white shadow-[0_-4px_20px_rgba(0,0,0,0.15)] sm:hidden"
      aria-label={`Call Second Alarm Invasive Control at ${company.phone}`}
    >
      <Phone size={16} />
      Call Now: {company.phone}
    </a>
  );
}

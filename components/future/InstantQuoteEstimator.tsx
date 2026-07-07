"use client";

import { useState } from "react";
import { Calculator, Phone } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { company } from "@/lib/data";

type ServiceType = "iguana" | "muscovy";
type PropertySize = "small" | "medium" | "large";

const baseRanges: Record<ServiceType, Record<PropertySize, [number, number]>> = {
  iguana: {
    small: [175, 300],
    medium: [300, 550],
    large: [550, 950],
  },
  muscovy: {
    small: [200, 350],
    medium: [350, 650],
    large: [650, 1100],
  },
};

/**
 * Lightweight instant estimate tool. This provides a rough, non-binding
 * range to help qualify leads. A future integration could replace the
 * calculation below with a live pricing engine or CRM-connected quote API.
 */
export function InstantQuoteEstimator() {
  const [service, setService] = useState<ServiceType>("iguana");
  const [size, setSize] = useState<PropertySize>("medium");
  const [showEstimate, setShowEstimate] = useState(false);

  const [low, high] = baseRanges[service][size];

  return (
    <div className="card-surface rounded-3xl p-8 sm:p-10">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500">
        <Calculator size={22} />
      </span>
      <h3 className="mt-5 font-display text-xl font-bold text-navy-900 dark:text-white">
        Instant Quote Estimator
      </h3>
      <p className="mt-2 text-sm text-navy-600 dark:text-navy-300">
        Get a rough estimate in seconds. Final pricing is confirmed after a free on-site
        inspection.
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-navy-500 dark:text-navy-400">
            Service Needed
          </span>
          <div className="grid grid-cols-2 gap-3">
            {(["iguana", "muscovy"] as ServiceType[]).map((s) => (
              <button
                key={s}
                onClick={() => {
                  setService(s);
                  setShowEstimate(false);
                }}
                className={`focus-ring rounded-xl border px-4 py-3 text-sm font-semibold transition-colors ${
                  service === s
                    ? "border-ember-600 bg-ember-600 text-white"
                    : "border-navy-200 text-navy-700 hover:border-coastal-400 dark:border-navy-700 dark:text-navy-200"
                }`}
              >
                {s === "iguana" ? "Green Iguana Removal" : "Muscovy Duck Removal"}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-navy-500 dark:text-navy-400">
            Property Size
          </span>
          <div className="grid grid-cols-3 gap-3">
            {(["small", "medium", "large"] as PropertySize[]).map((s) => (
              <button
                key={s}
                onClick={() => {
                  setSize(s);
                  setShowEstimate(false);
                }}
                className={`focus-ring rounded-xl border px-4 py-3 text-sm font-semibold capitalize transition-colors ${
                  size === s
                    ? "border-ember-600 bg-ember-600 text-white"
                    : "border-navy-200 text-navy-700 hover:border-coastal-400 dark:border-navy-700 dark:text-navy-200"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <Button
          onClick={() => setShowEstimate(true)}
          variant="gold"
          className="w-full justify-center"
        >
          Get My Estimate
        </Button>

        {showEstimate && (
          <div className="rounded-2xl border border-gold-500/30 bg-gold-50 p-5 text-center dark:bg-gold-500/10">
            <p className="text-sm font-semibold text-navy-700 dark:text-navy-200">
              Estimated Range
            </p>
            <p className="mt-1 font-display text-3xl font-bold text-navy-900 dark:text-white">
              ${low} &ndash; ${high}
            </p>
            <p className="mt-2 text-xs text-navy-500 dark:text-navy-400">
              This is a preliminary estimate only. Schedule a free inspection for exact pricing.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button href="/contact" size="md">
                Schedule Free Inspection
              </Button>
              <Button href={company.phoneHref} variant="secondary" size="md" icon={<Phone size={14} />}>
                Call Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

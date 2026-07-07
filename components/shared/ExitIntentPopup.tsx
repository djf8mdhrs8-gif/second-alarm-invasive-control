"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, X } from "lucide-react";
import { company } from "@/lib/data";
import { Button } from "./Button";

const STORAGE_KEY = "sa-exit-intent-shown";

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let triggered = false;

    const onMouseLeave = (e: MouseEvent) => {
      if (triggered) return;
      if (e.clientY <= 0) {
        triggered = true;
        setOpen(true);
        sessionStorage.setItem(STORAGE_KEY, "1");
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", onMouseLeave);
    }, 4000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="exit-intent-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-gold-500/30 bg-white shadow-2xl dark:bg-navy-900"
          >
            <div className="h-2 w-full bg-gradient-to-r from-ember-600 via-gold-500 to-ember-600" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="focus-ring absolute right-4 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-navy-100 text-navy-600 hover:bg-navy-200 dark:bg-navy-800 dark:text-navy-300"
              aria-label="Close popup"
            >
              <X size={16} />
            </button>
            <div className="p-8 text-center">
              <span className="ribbon">Before You Go</span>
              <h3 id="exit-intent-title" className="mt-4 font-display text-2xl font-bold text-navy-900 dark:text-white">
                Claim Your Free Property Inspection
              </h3>
              <p className="mt-3 text-sm text-navy-600 dark:text-navy-300">
                Let our Southwest Florida specialists assess your iguana or Muscovy duck problem
                at no cost. Rapid response available.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button href="/contact" className="justify-center">
                  Schedule My Free Inspection
                </Button>
                <Button
                  href={company.phoneHref}
                  variant="secondary"
                  className="justify-center"
                  icon={<Phone size={16} />}
                >
                  Call {company.phone}
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

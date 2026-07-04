"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { company } from "@/lib/data";

/**
 * Placeholder for a future AI chat assistant integration.
 * Wire this up to a chat provider (e.g. an LLM-backed support widget) by
 * replacing the static panel content with a live conversation component.
 */
export function AIChatPlaceholder() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-5 z-40 hidden sm:block">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80 overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-2xl dark:border-navy-700 dark:bg-navy-900"
          >
            <div className="flex items-center justify-between bg-navy-950 px-5 py-4">
              <span className="text-sm font-bold text-white">Second Alarm Assistant</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="focus-ring text-white/70 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>
            <div className="p-5">
              <p className="text-sm text-navy-600 dark:text-navy-300">
                Our AI assistant is coming soon. For immediate help, call us at{" "}
                <a href={company.phoneHref} className="font-semibold text-coastal-600 dark:text-coastal-400">
                  {company.phone}
                </a>{" "}
                or submit a request through our contact form.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        className="focus-ring flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-white shadow-xl transition-transform hover:-translate-y-0.5 dark:bg-coastal-600"
        aria-label="Open chat assistant"
      >
        <MessageCircle size={22} />
      </button>
    </div>
  );
}

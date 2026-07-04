"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { faqs } from "@/lib/data";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-py bg-white dark:bg-navy-950">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Common Questions"
          title="Frequently Asked Questions"
          description="Answers to the questions we hear most from Southwest Florida homeowners, HOAs, and property managers."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-navy-100 dark:border-navy-800"
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="focus-ring flex w-full items-center justify-between gap-4 bg-navy-50 px-6 py-5 text-left dark:bg-navy-900"
                  aria-expanded={open}
                >
                  <span className="font-semibold text-navy-900 dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-coastal-600 transition-transform dark:text-coastal-400 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="px-6 py-5 text-navy-600 dark:text-navy-300">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

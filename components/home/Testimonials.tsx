"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  function next() {
    setIndex((i) => (i + 1) % testimonials.length);
  }
  function prev() {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }

  return (
    <section className="section-py bg-navy-50 dark:bg-navy-900">
      <Container>
        <SectionHeading
          eyebrow="Client Stories"
          title="Trusted By Homeowners &amp; Communities Alike"
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <Quote className="mx-auto h-10 w-10 text-gold-500/50" />

          <div className="relative mt-6 min-h-[220px] sm:min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div className="mb-4 flex justify-center gap-1">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="text-balance font-display text-xl font-medium text-navy-800 dark:text-navy-100 sm:text-2xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <p className="mt-5 text-sm font-bold text-navy-900 dark:text-white">
                  {current.name}
                </p>
                <p className="text-sm text-navy-500 dark:text-navy-400">{current.role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 text-navy-600 hover:border-coastal-500 hover:text-coastal-600 dark:border-navy-700 dark:text-navy-300"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 w-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-coastal-600" : "bg-navy-300 dark:bg-navy-700"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 text-navy-600 hover:border-coastal-500 hover:text-coastal-600 dark:border-navy-700 dark:text-navy-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

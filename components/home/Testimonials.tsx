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

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="card-surface relative overflow-hidden rounded-[2rem] p-10 sm:p-14">
            <Quote
              className="pointer-events-none absolute -right-4 -top-6 h-40 w-40 text-gold-500/10"
              strokeWidth={1}
            />
            <div className="relative min-h-[240px] sm:min-h-[190px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.name}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="mb-5 flex gap-1">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} size={20} className="fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <p className="text-balance font-display text-2xl font-medium leading-snug text-navy-800 dark:text-navy-100 sm:text-3xl">
                    &ldquo;{current.quote}&rdquo;
                  </p>
                  <p className="mt-6 text-sm font-bold uppercase tracking-wide text-ember-600 dark:text-gold-400">
                    {current.name}
                  </p>
                  <p className="text-sm text-navy-500 dark:text-navy-400">{current.role}</p>
                </motion.div>
              </AnimatePresence>
            </div>
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

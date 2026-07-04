"use client";

import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { galleryItems } from "@/lib/data";

export function BeforeAfterGallery() {
  return (
    <section className="section-py bg-white dark:bg-navy-950">
      <Container>
        <SectionHeading
          eyebrow="Real Results"
          title="Before &amp; After: Properties Reclaimed"
          description="A look at how we've helped Southwest Florida properties recover from invasive species damage. Replace with your own project photography anytime."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-navy-100 dark:border-navy-800"
            >
              <div className="relative grid grid-cols-2">
                <div className="relative flex aspect-square items-center justify-center bg-gradient-to-br from-navy-700 to-navy-900">
                  <span className="absolute left-3 top-3 rounded-full bg-navy-950/70 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-white">
                    Before
                  </span>
                  <ImageIcon className="h-8 w-8 text-white/30" strokeWidth={1.5} />
                </div>
                <div className="relative flex aspect-square items-center justify-center bg-gradient-to-br from-coastal-600 to-coastal-800">
                  <span className="absolute left-3 top-3 rounded-full bg-navy-950/70 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-white">
                    After
                  </span>
                  <ImageIcon className="h-8 w-8 text-white/30" strokeWidth={1.5} />
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs font-bold uppercase tracking-wide text-coastal-600 dark:text-coastal-400">
                  {item.category}
                </span>
                <h3 className="mt-1 font-display text-base font-bold text-navy-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-navy-500 dark:text-navy-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

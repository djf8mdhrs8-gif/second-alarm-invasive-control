"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { processSteps } from "@/lib/data";

export function OurProcess() {
  return (
    <section className="section-py grain-overlay bg-navy-950">
      <Container>
        <SectionHeading
          light
          eyebrow="How It Works"
          title="Our Process"
          description="A clear, consistent path from first call to a protected property."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5 lg:gap-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex items-start gap-4 lg:flex-col lg:items-start lg:gap-0"
            >
              <div className="flex flex-col items-center lg:w-full lg:flex-row">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gold-500/70 bg-gradient-to-br from-ember-600 to-gold-600 font-display text-lg font-bold text-white shadow-lg">
                  0{i + 1}
                </span>
                {i < processSteps.length - 1 && (
                  <ChevronRight
                    className="mt-2 hidden shrink-0 text-gold-500/40 lg:mt-0 lg:ml-2 lg:block"
                    size={20}
                  />
                )}
              </div>
              <div className="lg:mt-4">
                <h3 className="font-display text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-navy-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { stats } from "@/lib/data";

export function StatsCounter() {
  return (
    <section className="section-py grain-overlay bg-gradient-to-br from-navy-900 via-navy-950 to-coastal-950">
      <Container>
        <SectionHeading
          light
          eyebrow="Why Choose Us"
          title="Results Southwest Florida Trusts"
        />

        <div className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} className="text-4xl sm:text-5xl" />
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-navy-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Repeat, ShieldOff, Sun, TrendingUp } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { whyTheyreHere } from "@/lib/data";

const icons = [Sun, ShieldOff, Repeat, TrendingUp, AlertTriangle];

export function WhyTheyreHere() {
  return (
    <section className="section-py bg-navy-50 dark:bg-navy-900">
      <Container>
        <SectionHeading
          eyebrow="The Root Cause"
          title="Why They're Here — And Why It's Getting Worse"
          description="Understanding how these populations took hold explains why a one-time fix rarely works, and why ongoing management matters."
        />

        <div className="relative mt-16">
          <div className="absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-coastal-500/40 via-gold-500/40 to-ember-500/40 lg:block" />
          <div className="grid gap-8 lg:grid-cols-5">
            {whyTheyreHere.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex flex-col items-start"
                >
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold-500/70 bg-white text-ember-600 shadow-md dark:bg-navy-900 dark:text-gold-400">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-300">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Building2, Home, Landmark, Sailboat, ShoppingBag, Users } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { whoWeServe } from "@/lib/data";

const icons = [Home, Landmark, Building2, Sailboat, Users, ShoppingBag];

export function WhoWeServe() {
  return (
    <section className="section-py bg-navy-50 dark:bg-navy-900">
      <Container>
        <SectionHeading
          eyebrow="Who We Serve"
          title="Trusted Across Every Property Type"
          description="From single-family homes to sprawling golf communities, we tailor our approach to your property's unique needs."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whoWeServe.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="card-surface group rounded-2xl p-7 transition-all hover:-translate-y-1 hover:border-coastal-500/50"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-coastal-600/10 text-coastal-600 transition-colors group-hover:bg-coastal-600 group-hover:text-white dark:text-coastal-400">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-navy-600 dark:text-navy-300">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

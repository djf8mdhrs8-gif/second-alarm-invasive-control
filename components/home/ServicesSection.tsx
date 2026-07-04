"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { services } from "@/lib/data";

export function ServicesSection() {
  return (
    <section id="services" className="section-py bg-white dark:bg-navy-950">
      <Container>
        <SectionHeading
          eyebrow="Our Specialties"
          title="Focused Expertise. Proven Results."
          description="We do not provide general pest control. We specialize exclusively in two of Southwest Florida's most disruptive invasive species."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-navy-100 bg-navy-50 p-8 transition-all hover:-translate-y-1 hover:shadow-2xl dark:border-navy-800 dark:bg-navy-900 sm:p-10"
            >
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-coastal-500/10 blur-3xl transition-transform duration-500 group-hover:scale-125" />

              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-coastal-600 dark:text-coastal-400">
                  Service 0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-navy-900 dark:text-white sm:text-3xl">
                  {service.name}
                </h3>
                <p className="mt-4 text-navy-600 dark:text-navy-300">{service.summary}</p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature.title} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-coastal-600 dark:text-coastal-400" />
                      <div>
                        <span className="block text-sm font-semibold text-navy-900 dark:text-white">
                          {feature.title}
                        </span>
                        <span className="block text-sm text-navy-500 dark:text-navy-400">
                          {feature.description}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    href={`/services/${service.slug}`}
                    variant="secondary"
                    icon={<ArrowRight size={16} />}
                  >
                    Explore {service.shortName}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

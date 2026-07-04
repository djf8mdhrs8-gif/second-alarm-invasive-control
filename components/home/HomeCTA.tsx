"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { company } from "@/lib/data";

export function HomeCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(15,107,76,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-grid-pattern bg-[length:36px_36px] opacity-20" />
      <Container className="relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-balance font-display text-3xl font-bold text-white sm:text-4xl"
        >
          Protect Your Property From Invasive Species Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-navy-300"
        >
          Schedule your inspection today and let Southwest Florida&rsquo;s trusted specialists handle
          the rest.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="/contact" variant="gold" size="lg" icon={<ArrowRight size={18} />}>
            Schedule an Inspection
          </Button>
          <Button href={company.phoneHref} variant="ghost" size="lg" icon={<Phone size={18} />}>
            Call {company.phone}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Flame, PawPrint, Phone, ShieldCheck, Waves } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { company } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden grain-overlay bg-navy-950">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,107,76,0.35),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(201,162,75,0.18),transparent_45%)]" />
        <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-30" />
        <div className="absolute inset-0 animate-slow-pan bg-gradient-to-br from-navy-950 via-navy-900/60 to-coastal-950/40" />
      </div>

      <Container className="relative z-10 pt-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="ribbon mb-6"
            >
              <ShieldCheck size={14} />
              Southwest Florida&rsquo;s Invasive Species Specialists
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="text-balance font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl"
            >
              Southwest Florida&rsquo;s Experts in{" "}
              <span className="gradient-text">Iguana &amp; Muscovy Duck Removal</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl text-balance text-lg text-navy-200 sm:text-xl"
            >
              Protecting homes, waterfront properties, HOAs, golf courses, and businesses from
              destructive invasive species.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button href="/contact" size="lg" icon={<ArrowRight size={18} />}>
                Schedule an Inspection
              </Button>
              <Button href={company.phoneHref} variant="ghost" size="lg" icon={<Phone size={18} />}>
                Call {company.phone}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-navy-300"
            >
              <span className="flex items-center gap-2">
                <Waves size={16} className="text-coastal-400" /> Waterfront &amp; Seawall Specialists
              </span>
              <span className="flex items-center gap-2">
                <PawPrint size={16} className="text-coastal-400" /> Humane &amp; FWC-Compliant
              </span>
              <span className="flex items-center gap-2">
                <Flame size={16} className="text-gold-400" /> Firefighter-Owned &amp; Operated
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden aspect-[4/5] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-navy-800 via-navy-900 to-coastal-950 shadow-2xl lg:flex"
          >
            <div className="absolute inset-0 bg-grid-pattern bg-[length:28px_28px] opacity-30" />
            <div className="absolute -top-10 right-0 h-56 w-56 rounded-full bg-coastal-500/30 blur-3xl" />
            <div className="absolute -bottom-10 left-0 h-56 w-56 rounded-full bg-gold-500/20 blur-3xl" />
            <div className="relative flex flex-col items-center gap-4 px-8 text-center">
              <Image
                src="/logo.png"
                alt="Second Alarm Invasive Control — firefighter-owned emblem"
                width={280}
                height={420}
                className="h-64 w-auto drop-shadow-2xl"
                priority
              />
              <p className="text-sm text-navy-300">
                Rapid response invasive species removal for properties across the region.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-navy-400 sm:flex"
      >
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em]">Scroll</span>
        <div className="h-9 w-5 rounded-full border border-navy-500/60 p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-gold-400"
          />
        </div>
      </motion.div>
    </section>
  );
}

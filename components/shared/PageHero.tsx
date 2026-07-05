"use client";

import { motion } from "framer-motion";
import { Container } from "./Container";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb?: { label: string; href?: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden grain-overlay bg-navy-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:36px_36px] opacity-30" />
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-coastal-600/20 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
      <Container className="relative">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-navy-400">
            {breadcrumb.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {crumb.href ? (
                  <a href={crumb.href} className="hover:text-gold-400">
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="ribbon mb-4"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-3xl text-balance font-display text-4xl font-bold text-white sm:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 max-w-2xl text-balance text-lg text-navy-200"
        >
          {description}
        </motion.p>
        {children}
      </Container>
    </section>
  );
}

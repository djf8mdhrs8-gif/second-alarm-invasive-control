"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      {eyebrow && (
        <span
          className={clsxJoin(
            "mb-3 inline-block text-xs font-bold uppercase tracking-[0.25em]",
            light ? "text-gold-400" : "text-coastal-600 dark:text-coastal-400"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={clsxJoin(
          "font-display text-balance text-3xl font-bold sm:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-navy-900 dark:text-white"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsxJoin(
            "mt-4 text-balance text-lg",
            light ? "text-white/75" : "text-navy-600 dark:text-navy-300"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

function clsxJoin(...classes: string[]) {
  return classes.join(" ");
}

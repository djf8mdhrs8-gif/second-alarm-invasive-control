"use client";

import { motion } from "framer-motion";
import { Droplet, Home, ShieldAlert, Sprout, TrendingUp } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { iguanaThreats, muscovyThreats } from "@/lib/data";

const icons = [Home, Sprout, Droplet, ShieldAlert, TrendingUp];

function ThreatColumn({
  label,
  threats,
  accent,
  align,
}: {
  label: string;
  threats: { title: string; description: string }[];
  accent: "coastal" | "gold";
  align: "left" | "right";
}) {
  const accentClasses =
    accent === "coastal"
      ? { text: "text-coastal-400", iconBg: "bg-coastal-500/10", border: "hover:border-coastal-500/40" }
      : { text: "text-gold-400", iconBg: "bg-gold-500/10", border: "hover:border-gold-500/40" };

  return (
    <div>
      <motion.h3
        initial={{ opacity: 0, x: align === "left" ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className={`font-display text-2xl font-bold uppercase tracking-wide ${accentClasses.text}`}
      >
        {label}
      </motion.h3>
      <div className="mt-6 space-y-4">
        {threats.map((threat, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={threat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors ${accentClasses.border} hover:bg-white/[0.06]`}
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${accentClasses.iconBg} ${accentClasses.text}`}
              >
                <Icon size={20} />
              </span>
              <div>
                <h4 className="font-display text-lg font-bold text-white">{threat.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-navy-300">{threat.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function WhyItMatters() {
  return (
    <section className="section-py grain-overlay bg-navy-950">
      <Container>
        <SectionHeading
          light
          eyebrow="Know The Risk"
          title="Why Invasive Species Matter"
          description="Green iguanas and Muscovy ducks pose real, costly threats to Southwest Florida properties. Understanding the risk is the first step toward protecting your investment."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
          <ThreatColumn label="Green Iguanas" threats={iguanaThreats} accent="coastal" align="left" />
          <div className="hidden w-px self-stretch bg-gradient-to-b from-transparent via-white/15 to-transparent lg:block" />
          <ThreatColumn label="Muscovy Ducks" threats={muscovyThreats} accent="gold" align="right" />
        </div>
      </Container>
    </section>
  );
}

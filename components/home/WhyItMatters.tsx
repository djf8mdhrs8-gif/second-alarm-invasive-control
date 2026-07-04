"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { iguanaThreats, muscovyThreats } from "@/lib/data";

type Tab = "iguana" | "muscovy";

export function WhyItMatters() {
  const [tab, setTab] = useState<Tab>("iguana");
  const threats = tab === "iguana" ? iguanaThreats : muscovyThreats;

  return (
    <section className="section-py bg-navy-950">
      <Container>
        <SectionHeading
          light
          eyebrow="Know The Risk"
          title="Why Invasive Species Matter"
          description="Green iguanas and Muscovy ducks pose real, costly threats to Southwest Florida properties. Understanding the risk is the first step toward protecting your investment."
        />

        <div className="mx-auto mt-10 flex w-fit rounded-full border border-white/10 bg-white/5 p-1">
          {(["iguana", "muscovy"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`focus-ring rounded-full px-6 py-2.5 text-sm font-bold transition-colors ${
                tab === t ? "bg-coastal-600 text-white" : "text-navy-300 hover:text-white"
              }`}
            >
              {t === "iguana" ? "Green Iguanas" : "Muscovy Ducks"}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {threats.map((threat, i) => (
            <motion.div
              key={threat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-gold-500/40 hover:bg-white/[0.06]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400">
                <AlertTriangle size={20} />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-white">{threat.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-300">{threat.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { locations, citiesServed } from "@/lib/data";

const coordinates: Record<string, { x: number; y: number }> = {
  "Punta Gorda": { x: 40, y: 10 },
  "Port Charlotte": { x: 45, y: 17 },
  "Cape Coral": { x: 24, y: 32 },
  "Fort Myers": { x: 41, y: 34 },
  "Lehigh Acres": { x: 56, y: 36 },
  Sanibel: { x: 9, y: 38 },
  Captiva: { x: 4, y: 31 },
  "Bonita Springs": { x: 34, y: 55 },
  Estero: { x: 42, y: 50 },
  Naples: { x: 29, y: 74 },
};

const linkedCities = new Set(locations.filter((l) => l.service === "iguana").map((l) => l.city));

export function ServiceMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="section-py grain-overlay bg-navy-950">
      <Container>
        <SectionHeading
          light
          eyebrow="Where We Work"
          title="Serving Southwest Florida, Coast to Coast"
          description="From Punta Gorda to Naples, our team responds across the region."
        />

        <div className="relative mx-auto mt-14 aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-navy-900 via-navy-950 to-coastal-950/60 sm:aspect-[3/4]">
          <div className="absolute inset-0 bg-grid-pattern bg-[length:24px_24px] opacity-30" />
          <div className="absolute -left-16 top-1/3 h-64 w-64 rounded-full bg-coastal-500/10 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-gold-500/10 blur-3xl" />

          {citiesServed.map((city, i) => {
            const coord = coordinates[city];
            if (!coord) return null;
            const isLinked = linkedCities.has(city);
            const slug = locations.find((l) => l.city === city && l.service === "iguana")?.slug;

            const pin = (
              <motion.div
                key={city}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onMouseEnter={() => setActive(city)}
                onMouseLeave={() => setActive((a) => (a === city ? null : a))}
                className="group absolute -translate-x-1/2 -translate-y-full cursor-pointer"
                style={{ left: `${coord.x}%`, top: `${coord.y}%` }}
              >
                <span className="relative flex flex-col items-center">
                  <span
                    className={`mb-1 whitespace-nowrap rounded-md px-2 py-1 text-xs font-bold text-white shadow-lg transition-all ${
                      active === city
                        ? "opacity-100 translate-y-0"
                        : "pointer-events-none -translate-y-1 opacity-0"
                    } ${isLinked ? "bg-ember-600" : "bg-navy-700"}`}
                  >
                    {city}
                  </span>
                  <span className="relative flex h-4 w-4 items-center justify-center">
                    {isLinked && (
                      <span className="absolute h-full w-full animate-ping rounded-full bg-gold-400/60" />
                    )}
                    <MapPin
                      size={isLinked ? 22 : 14}
                      className={isLinked ? "fill-gold-500 text-gold-200" : "fill-navy-400 text-navy-300"}
                    />
                  </span>
                </span>
              </motion.div>
            );

            return isLinked && slug ? (
              <Link key={city} href={`/locations/${slug}`} aria-label={`View ${city} iguana removal page`}>
                {pin}
              </Link>
            ) : (
              pin
            );
          })}
        </div>

        <p className="mt-6 text-center text-sm text-navy-400">
          <span className="mr-1 inline-block h-2 w-2 rounded-full bg-gold-500" /> Dedicated service page &nbsp;&nbsp;
          <span className="mr-1 inline-block h-2 w-2 rounded-full bg-navy-400" /> Also served
        </p>
      </Container>
    </section>
  );
}

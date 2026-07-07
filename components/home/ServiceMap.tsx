"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SWFLMap } from "@/components/shared/SWFLMap";
import { locations, citiesServed } from "@/lib/data";

const coordinates: Record<string, { x: number; y: number }> = {
  "Punta Gorda": { x: 43.75, y: 11.67 },
  "Port Charlotte": { x: 50, y: 15.83 },
  "Cape Coral": { x: 33.75, y: 37.5 },
  "Fort Myers": { x: 47.5, y: 39.17 },
  "Lehigh Acres": { x: 60, y: 40.83 },
  Sanibel: { x: 18.75, y: 41.67 },
  Captiva: { x: 13.75, y: 35.83 },
  "Bonita Springs": { x: 42, y: 64.17 },
  Estero: { x: 46.25, y: 59.17 },
  Naples: { x: 40.75, y: 80 },
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

        <div className="relative mx-auto mt-14 aspect-[2/3] max-w-sm overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
          <SWFLMap className="absolute inset-0 h-full w-full" />

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

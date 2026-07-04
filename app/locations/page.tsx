import type { Metadata } from "next";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/shared/Button";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { locations, siteUrl } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Service Areas | Southwest Florida Invasive Species Removal",
  description:
    "Second Alarm Invasive Control serves Fort Myers, Cape Coral, Naples, Bonita Springs, Estero, Punta Gorda, Port Charlotte, and all of Southwest Florida.",
  path: "/locations",
});

export default function LocationsIndexPage() {
  return (
    <>
      <SchemaMarkup
        schema={breadcrumbSchema([
          { name: "Home", url: siteUrl },
          { name: "Service Areas", url: `${siteUrl}/locations` },
        ])}
      />
      <PageHero
        eyebrow="Where We Work"
        title="Service Areas Across Southwest Florida"
        description="From Fort Myers to Punta Gorda, our team provides rapid, professional invasive species removal throughout the region."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Service Areas" }]}
      />

      <section className="section-py bg-white dark:bg-navy-950">
        <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((loc) => (
            <div key={loc.slug} className="card-surface flex flex-col rounded-2xl p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-coastal-600/10 text-coastal-600 dark:text-coastal-400">
                <MapPin size={20} />
              </span>
              <h2 className="mt-4 font-display text-lg font-bold text-navy-900 dark:text-white">
                {loc.city}
              </h2>
              <p className="mt-2 flex-1 text-sm text-navy-600 dark:text-navy-300">
                {loc.service === "iguana" ? "Green Iguana Removal" : "Muscovy Duck Removal"}
              </p>
              <div className="mt-5">
                <Button href={`/locations/${loc.slug}`} variant="secondary" size="md" icon={<ArrowRight size={14} />}>
                  View Page
                </Button>
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/shared/Button";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { services, siteUrl } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Our Services | Iguana & Muscovy Duck Removal",
  description:
    "Second Alarm Invasive Control specializes exclusively in green iguana removal and Muscovy duck removal throughout Southwest Florida. Explore our services.",
  path: "/services",
});

export default function ServicesIndexPage() {
  return (
    <>
      <SchemaMarkup
        schema={breadcrumbSchema([
          { name: "Home", url: siteUrl },
          { name: "Services", url: `${siteUrl}/services` },
        ])}
      />
      <PageHero
        eyebrow="Specialists, Not Generalists"
        title="Our Services"
        description="We do not provide general pest control. We specialize exclusively in green iguana removal and Muscovy duck removal for Southwest Florida properties."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="section-py bg-white dark:bg-navy-950">
        <Container className="grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.slug}
              className="card-surface rounded-3xl p-8 sm:p-10"
            >
              <h2 className="font-display text-2xl font-bold text-navy-900 dark:text-white">
                {service.name}
              </h2>
              <p className="mt-4 text-navy-600 dark:text-navy-300">{service.summary}</p>
              <ul className="mt-6 space-y-3">
                {service.features.map((f) => (
                  <li key={f.title} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-coastal-600 dark:text-coastal-400" />
                    <span className="text-navy-700 dark:text-navy-200">{f.title}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href={`/services/${service.slug}`} icon={<ArrowRight size={16} />}>
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}

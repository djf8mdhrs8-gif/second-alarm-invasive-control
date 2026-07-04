import { CheckCircle2, Phone, ShieldCheck } from "lucide-react";
import { Container } from "./Container";
import { PageHero } from "./PageHero";
import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";
import { SchemaMarkup } from "./SchemaMarkup";
import { ScenicPlaceholder } from "./ScenicPlaceholder";
import { FAQSection } from "@/components/home/FAQSection";
import { company, services, siteUrl } from "@/lib/data";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import type { LucideIcon } from "lucide-react";

export function ServiceDetailTemplate({
  slug,
  icon: Icon,
  processSteps,
  regulationNote,
}: {
  slug: "green-iguana-removal" | "muscovy-duck-removal";
  icon: LucideIcon;
  processSteps: { title: string; description: string }[];
  regulationNote: string;
}) {
  const service = services.find((s) => s.slug === slug)!;

  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({ name: service.name, description: service.summary, slug }),
          breadcrumbSchema([
            { name: "Home", url: siteUrl },
            { name: "Services", url: `${siteUrl}/services` },
            { name: service.name, url: `${siteUrl}/services/${slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Our Specialty"
        title={service.name}
        description={service.summary}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortName },
        ]}
      >
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href="/contact" size="lg" icon={<CheckCircle2 size={18} />}>
            Schedule an Inspection
          </Button>
          <Button href={company.phoneHref} variant="ghost" size="lg" icon={<Phone size={18} />}>
            Call {company.phone}
          </Button>
        </div>
      </PageHero>

      <section className="section-py bg-white dark:bg-navy-950">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <ScenicPlaceholder
            icon={Icon}
            label={service.heroImageLabel}
            variant="coastal"
            className="order-2 h-full min-h-[320px] rounded-3xl lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <SectionHeading align="left" eyebrow="What's Included" title="Comprehensive Service" />
            <ul className="mt-8 space-y-5">
              {service.features.map((feature) => (
                <li key={feature.title} className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-coastal-600 dark:text-coastal-400" />
                  <div>
                    <p className="font-semibold text-navy-900 dark:text-white">{feature.title}</p>
                    <p className="text-sm text-navy-600 dark:text-navy-300">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="section-py bg-navy-50 dark:bg-navy-900">
        <Container>
          <SectionHeading eyebrow="Our Process" title="How It Works" />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div key={step.title} className="relative">
                <span className="font-display text-4xl font-bold text-coastal-200 dark:text-navy-700">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-navy-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-navy-600 dark:text-navy-300">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-py bg-white dark:bg-navy-950">
        <Container>
          <div className="card-surface flex flex-col items-start gap-6 rounded-3xl p-8 sm:flex-row sm:items-center sm:p-10">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-500">
              <ShieldCheck size={26} />
            </span>
            <div>
              <h3 className="font-display text-xl font-bold text-navy-900 dark:text-white">
                Fully Compliant With Florida Regulations
              </h3>
              <p className="mt-2 text-navy-600 dark:text-navy-300">{regulationNote}</p>
            </div>
          </div>
        </Container>
      </section>

      <FAQSection />
    </>
  );
}

import { CheckCircle2, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Container } from "./Container";
import { PageHero } from "./PageHero";
import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";
import { SchemaMarkup } from "./SchemaMarkup";
import { ScenicPlaceholder } from "./ScenicPlaceholder";
import { FAQSection } from "@/components/home/FAQSection";
import type { LocationContent } from "@/lib/data";
import { company, siteUrl } from "@/lib/data";
import { breadcrumbSchema, localBusinessForCitySchema, serviceSchema } from "@/lib/schema";

export function LocationPageTemplate({ location }: { location: LocationContent }) {
  const isMuscovy = location.service === "muscovy";
  const serviceName = isMuscovy ? "Muscovy Duck Removal" : "Green Iguana Removal";
  const serviceHref = isMuscovy ? "/services/muscovy-duck-removal" : "/services/green-iguana-removal";

  return (
    <>
      <SchemaMarkup
        schema={[
          localBusinessForCitySchema(location.city),
          serviceSchema({
            name: `${serviceName} in ${location.city}`,
            description: location.metaDescription,
            slug: isMuscovy ? "muscovy-duck-removal" : "green-iguana-removal",
          }),
          breadcrumbSchema([
            { name: "Home", url: siteUrl },
            { name: "Service Areas", url: `${siteUrl}/locations` },
            { name: location.title, url: `${siteUrl}/locations/${location.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow={`Serving ${location.city}, FL`}
        title={location.title}
        description={location.intro}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/locations" },
          { label: location.city },
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
          <div>
            <SectionHeading
              align="left"
              eyebrow="Local Expertise"
              title={`Why ${location.city} Needs a Specialist`}
            />
            <ul className="mt-8 space-y-5">
              {location.localDetails.map((detail) => (
                <li key={detail} className="flex gap-4">
                  <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-coastal-600 dark:text-coastal-400" />
                  <p className="text-navy-600 dark:text-navy-300">{detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <ScenicPlaceholder
            icon={MapPin}
            label={`${location.city} Service Area`}
            variant="coastal"
            className="h-full min-h-[320px] rounded-3xl"
          />
        </Container>
      </section>

      <section className="section-py bg-navy-50 dark:bg-navy-900">
        <Container>
          <SectionHeading
            eyebrow="Coverage"
            title={
              isMuscovy
                ? "Communities We Serve Across Southwest Florida"
                : `Neighborhoods We Serve in ${location.city}`
            }
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {location.neighborhoods.map((n) => (
              <div
                key={n}
                className="card-surface rounded-2xl px-5 py-4 text-center text-sm font-semibold text-navy-800 dark:text-navy-100"
              >
                {n}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-py bg-white dark:bg-navy-950">
        <Container>
          <div className="card-surface rounded-3xl p-8 sm:p-12">
            <SectionHeading
              align="left"
              eyebrow="Our Service"
              title={serviceName}
              description={
                isMuscovy
                  ? "Humane, legal Muscovy duck population management for HOAs, golf courses, and waterfront communities."
                  : "Comprehensive inspection, removal, and prevention for green iguanas invading your property."
              }
            />
            <div className="mt-6">
              <Button href={serviceHref} variant="secondary" icon={<CheckCircle2 size={18} />}>
                Learn More About This Service
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <FAQSection />
    </>
  );
}

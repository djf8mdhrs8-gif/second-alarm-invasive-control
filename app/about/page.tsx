import type { Metadata } from "next";
import { Award, Compass, HeartHandshake, ShieldCheck, Sparkles, Target } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { company, siteUrl } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "About Us | Southwest Florida Invasive Species Specialists",
  description:
    "Learn about Second Alarm Invasive Control — Southwest Florida's dedicated specialists in green iguana and Muscovy duck removal, built on expertise, professionalism, and rapid response.",
  path: "/about",
});

const values = [
  {
    icon: ShieldCheck,
    title: "Compliance First",
    description:
      "Every removal we perform follows Florida Fish and Wildlife Conservation Commission guidelines and applicable state regulations.",
  },
  {
    icon: HeartHandshake,
    title: "Humane Practices",
    description:
      "We treat every removal with care, using methods that prioritize humane, ethical treatment whenever applicable.",
  },
  {
    icon: Target,
    title: "Rapid Response",
    description:
      "Invasive species problems don't wait, and neither do we. We prioritize fast scheduling and swift on-site action.",
  },
  {
    icon: Sparkles,
    title: "Premium Service",
    description:
      "From first phone call to final inspection, we deliver a polished, professional experience worthy of Southwest Florida's finest properties.",
  },
  {
    icon: Compass,
    title: "Florida-Specific Expertise",
    description:
      "We understand the unique climate, wildlife regulations, and property challenges specific to Southwest Florida.",
  },
  {
    icon: Award,
    title: "Customer-First Philosophy",
    description:
      "Clear communication, transparent pricing, and reliable follow-through are non-negotiable in everything we do.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup
        schema={breadcrumbSchema([
          { name: "Home", url: siteUrl },
          { name: "About", url: `${siteUrl}/about` },
        ])}
      />

      <PageHero
        eyebrow="About Second Alarm"
        title="Protecting Southwest Florida, One Property at a Time"
        description="We founded Second Alarm Invasive Control around a simple mission: protect Southwest Florida properties from invasive species through expertise, professionalism, and rapid response."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="section-py bg-white dark:bg-navy-950">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading align="left" eyebrow="Our Mission" title="Why We Do This Work" />
            <p className="mt-6 text-navy-600 dark:text-navy-300">
              Southwest Florida&rsquo;s warm climate and abundant waterways make it a haven for invasive
              species — but that same environment leaves homes, HOAs, and businesses vulnerable to
              real, costly damage. Green iguanas undermine seawalls and destroy landscaping.
              Muscovy ducks overwhelm community common areas. We exist to solve these specific
              problems, and only these problems, with a level of focus that generalist pest
              control companies simply cannot match.
            </p>
            <p className="mt-4 text-navy-600 dark:text-navy-300">
              Our team combines hands-on field experience with deep knowledge of Florida wildlife
              regulations, ensuring every job is handled legally, humanely, and effectively — the
              first time.
            </p>
          </div>
          <div className="card-surface rounded-3xl p-8 sm:p-10">
            <h3 className="font-display text-xl font-bold text-navy-900 dark:text-white">
              Our Commitment
            </h3>
            <p className="mt-4 text-navy-600 dark:text-navy-300">
              &ldquo;Protecting Southwest Florida properties from invasive species through expertise,
              professionalism, and rapid response.&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-coastal-600 dark:text-coastal-400">
              <ShieldCheck size={18} />
              FWC-Compliant &amp; Fully Insured
            </div>
          </div>
        </Container>
      </section>

      <section className="section-py bg-navy-50 dark:bg-navy-900">
        <Container>
          <SectionHeading eyebrow="Core Values" title="What Guides Every Job We Take On" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="card-surface rounded-2xl p-7 transition-transform hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-coastal-600/10 text-coastal-600 dark:text-coastal-400">
                  <value.icon size={22} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-navy-600 dark:text-navy-300">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-py bg-white text-center dark:bg-navy-950">
        <Container className="max-w-2xl">
          <SectionHeading
            eyebrow="Ready When You Are"
            title="Let's Protect Your Property Together"
            description="Whether you manage a single home or an entire community, our team is ready to help."
          />
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Schedule an Inspection
            </Button>
            <Button href={company.phoneHref} variant="secondary" size="lg">
              Call {company.phone}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone, ShieldAlert } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ContactForm } from "@/components/shared/ContactForm";
import { InstantQuoteEstimator } from "@/components/future/InstantQuoteEstimator";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { citiesServed, company, siteUrl } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | Schedule an Inspection",
  description:
    "Contact Second Alarm Invasive Control to schedule an iguana removal or Muscovy duck removal inspection anywhere in Southwest Florida. Call (239) 365-6753.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup
        schema={breadcrumbSchema([
          { name: "Home", url: siteUrl },
          { name: "Contact", url: `${siteUrl}/contact` },
        ])}
      />

      <PageHero
        eyebrow="Get In Touch"
        title="Report a Wildlife Issue"
        description="Tell us what you're seeing — a Southwest Florida invasive species specialist will follow up promptly to schedule your inspection."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section-py bg-white dark:bg-navy-950">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <div className="card-surface rounded-3xl p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-coastal-600/10 text-coastal-600 dark:text-coastal-400">
                <Phone size={22} />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-navy-900 dark:text-white">
                Call Now
              </h3>
              <p className="mt-2 text-sm text-navy-600 dark:text-navy-300">
                Speak directly with our team for the fastest response.
              </p>
              <a
                href={company.phoneHref}
                className="focus-ring mt-4 inline-flex items-center gap-2 text-2xl font-bold text-coastal-600 dark:text-coastal-400"
              >
                {company.phone}
              </a>
            </div>

            <div className="card-surface rounded-3xl p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500">
                <ShieldAlert size={22} />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-navy-900 dark:text-white">
                Emergency Service
              </h3>
              <p className="mt-2 text-sm text-navy-600 dark:text-navy-300">
                Aggressive wildlife or urgent property damage? Mark your request as an emergency
                in the form and we&apos;ll prioritize your case.
              </p>
            </div>

            <div className="card-surface rounded-3xl p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-coastal-600/10 text-coastal-600 dark:text-coastal-400">
                <Clock size={22} />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-navy-900 dark:text-white">
                Response Time
              </h3>
              <p className="mt-2 text-sm text-navy-600 dark:text-navy-300">
                Most inspections are scheduled within 24-48 hours of your initial call.
              </p>
            </div>

            <div className="card-surface rounded-3xl p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-coastal-600/10 text-coastal-600 dark:text-coastal-400">
                <Mail size={22} />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-navy-900 dark:text-white">
                Email
              </h3>
              <a
                href={`mailto:${company.email}`}
                className="focus-ring mt-2 inline-block text-sm font-semibold text-coastal-600 dark:text-coastal-400"
              >
                {company.email}
              </a>
            </div>
          </div>

          <div className="card-surface rounded-3xl p-8 sm:p-10">
            <h2 className="font-display text-2xl font-bold text-navy-900 dark:text-white">
              Report the Issue
            </h2>
            <p className="mt-2 text-sm text-navy-600 dark:text-navy-300">
              Tell us what you&rsquo;re seeing, add a photo if you have one, and our team will
              reach out to confirm your appointment.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container className="max-w-2xl">
          <InstantQuoteEstimator />
        </Container>
      </section>

      <section className="section-py bg-navy-50 dark:bg-navy-900">
        <Container>
          <SectionHeading
            eyebrow="Coverage"
            title="Proudly Serving All of Southwest Florida"
            description="No matter where in the region your property is located, our team is ready to help."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {citiesServed.map((city) => (
              <span
                key={city}
                className="flex items-center gap-2 rounded-full border border-navy-200 bg-white px-5 py-2.5 text-sm font-semibold text-navy-800 dark:border-navy-700 dark:bg-navy-950 dark:text-navy-100"
              >
                <MapPin size={14} className="text-coastal-600 dark:text-coastal-400" />
                {city}
              </span>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

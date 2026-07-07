import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { WhyItMatters } from "@/components/home/WhyItMatters";
import { WhyTheyreHere } from "@/components/home/WhyTheyreHere";
import { ServicesSection } from "@/components/home/ServicesSection";
import { OurProcess } from "@/components/home/OurProcess";
import { WhoWeServe } from "@/components/home/WhoWeServe";
import { StatsCounter } from "@/components/home/StatsCounter";
import { ServiceMap } from "@/components/home/ServiceMap";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQSection } from "@/components/home/FAQSection";
import { HomeCTA } from "@/components/home/HomeCTA";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema, localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Iguana Removal & Muscovy Duck Removal in Southwest Florida",
  description:
    "Southwest Florida's trusted specialists in green iguana removal and Muscovy duck removal. Serving Fort Myers, Cape Coral, Naples, Bonita Springs, Estero, and more. Call (239) 365-6753.",
  path: "/",
  keywords: [
    "iguana removal florida",
    "iguana removal southwest florida",
    "iguana removal near me",
    "muscovy duck removal florida",
    "southwest florida invasive species removal",
  ],
});

export default function HomePage() {
  return (
    <>
      <SchemaMarkup schema={[localBusinessSchema(), faqSchema()]} />
      <Hero />
      <WhyItMatters />
      <WhyTheyreHere />
      <ServicesSection />
      <OurProcess />
      <WhoWeServe />
      <StatsCounter />
      <ServiceMap />
      <Testimonials />
      <FAQSection />
      <HomeCTA />
    </>
  );
}

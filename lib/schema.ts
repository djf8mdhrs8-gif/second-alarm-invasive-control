import { company, faqs, siteUrl } from "./data";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "PestControl",
    name: company.name,
    description:
      "Firefighter-owned and operated. Southwest Florida's specialists in green iguana removal and Muscovy duck removal for homeowners, HOAs, property managers, golf courses, and commercial properties.",
    url: siteUrl,
    telephone: company.phone,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: [
      "Fort Myers",
      "Cape Coral",
      "Naples",
      "Bonita Springs",
      "Estero",
      "Sanibel",
      "Captiva",
      "Punta Gorda",
      "Port Charlotte",
      "Lehigh Acres",
    ].map((city) => ({ "@type": "City", name: city })),
    priceRange: "$$",
    image: `${siteUrl}/logo.png`,
    sameAs: [],
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: `${siteUrl}/services/${opts.slug}`,
    provider: {
      "@type": "PestControl",
      name: company.name,
      telephone: company.phone,
    },
    areaServed: {
      "@type": "State",
      name: "Florida",
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function localBusinessForCitySchema(city: string) {
  return {
    "@context": "https://schema.org",
    "@type": "PestControl",
    name: `${company.name} - ${city}`,
    description: `Green iguana and Muscovy duck removal services in ${city}, Florida.`,
    url: siteUrl,
    telephone: company.phone,
    areaServed: {
      "@type": "City",
      name: city,
    },
    priceRange: "$$",
  };
}

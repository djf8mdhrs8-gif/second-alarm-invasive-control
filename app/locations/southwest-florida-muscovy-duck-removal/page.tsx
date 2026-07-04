import type { Metadata } from "next";
import { LocationPageTemplate } from "@/components/shared/LocationPageTemplate";
import { buildMetadata } from "@/lib/metadata";
import { locations } from "@/lib/data";

const location = locations.find((l) => l.slug === "southwest-florida-muscovy-duck-removal")!;

export const metadata: Metadata = buildMetadata({
  title: location.metaTitle,
  description: location.metaDescription,
  path: `/locations/${location.slug}`,
  keywords: [
    "muscovy duck removal florida",
    "muscovy duck removal southwest florida",
    "muscovy duck removal near me",
  ],
});

export default function SouthwestFloridaMuscovyDuckRemovalPage() {
  return <LocationPageTemplate location={location} />;
}

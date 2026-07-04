import type { Metadata } from "next";
import { LocationPageTemplate } from "@/components/shared/LocationPageTemplate";
import { buildMetadata } from "@/lib/metadata";
import { locations } from "@/lib/data";

const location = locations.find((l) => l.slug === "cape-coral-iguana-removal")!;

export const metadata: Metadata = buildMetadata({
  title: location.metaTitle,
  description: location.metaDescription,
  path: `/locations/${location.slug}`,
  keywords: ["iguana removal cape coral", "iguana removal florida", "iguana removal near me"],
});

export default function CapeCoralIguanaRemovalPage() {
  return <LocationPageTemplate location={location} />;
}

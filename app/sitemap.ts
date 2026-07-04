import type { MetadataRoute } from "next";
import { locations, siteUrl } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/services",
    "/services/green-iguana-removal",
    "/services/muscovy-duck-removal",
    "/locations",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const locationRoutes = locations.map((loc) => ({
    url: `${siteUrl}/locations/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...locationRoutes];
}

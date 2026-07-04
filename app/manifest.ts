import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Second Alarm Invasive Control",
    short_name: "Second Alarm",
    description: "Southwest Florida's specialists in green iguana and Muscovy duck removal.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A1929",
    theme_color: "#0A1929",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

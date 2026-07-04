import type { Metadata } from "next";
import { PawPrint } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/shared/ServiceDetailTemplate";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Green Iguana Removal | Southwest Florida",
  description:
    "Professional green iguana removal for Southwest Florida homes, HOAs, golf courses, and waterfront properties. Inspections, removal, and FWC-compliant prevention. Call (239) 365-6753.",
  path: "/services/green-iguana-removal",
  keywords: [
    "iguana removal florida",
    "iguana removal southwest florida",
    "iguana removal near me",
    "green iguana removal",
  ],
});

const processSteps = [
  {
    title: "Property Inspection",
    description: "We assess burrow activity, entry points, and damage across your entire property.",
  },
  {
    title: "Removal Plan",
    description: "A tailored removal strategy is developed based on your property's specific risk factors.",
  },
  {
    title: "Professional Removal",
    description: "Our team executes the removal using humane, FWC-compliant methods.",
  },
  {
    title: "Prevention Plan",
    description: "We provide clear recommendations to reduce the risk of re-infestation long-term.",
  },
];

export default function GreenIguanaRemovalPage() {
  return (
    <ServiceDetailTemplate
      slug="green-iguana-removal"
      icon={PawPrint}
      processSteps={processSteps}
      regulationNote="Green iguanas are classified as an invasive, non-native species in Florida. The FWC encourages removal from private property, and our team follows all applicable state guidelines to ensure every job is handled legally and humanely."
    />
  );
}

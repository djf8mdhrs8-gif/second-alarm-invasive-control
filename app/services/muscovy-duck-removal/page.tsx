import type { Metadata } from "next";
import { Bird } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/shared/ServiceDetailTemplate";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Muscovy Duck Removal | Southwest Florida",
  description:
    "Humane, legal Muscovy duck removal and population management for HOAs, golf courses, and waterfront communities across Southwest Florida. Call (239) 365-6753.",
  path: "/services/muscovy-duck-removal",
  keywords: [
    "muscovy duck removal florida",
    "muscovy duck removal southwest florida",
    "muscovy duck removal near me",
  ],
});

const processSteps = [
  {
    title: "Site Assessment",
    description: "We evaluate flock size, nesting locations, and problem areas across your property.",
  },
  {
    title: "Management Plan",
    description: "A population management plan is built around your community's specific needs.",
  },
  {
    title: "Humane Management",
    description: "Our team carries out the plan using legal, humane, and proven methods.",
  },
  {
    title: "Ongoing Prevention",
    description: "We recommend deterrent strategies to keep populations from returning.",
  },
];

export default function MuscovyDuckRemovalPage() {
  return (
    <ServiceDetailTemplate
      slug="muscovy-duck-removal"
      icon={Bird}
      processSteps={processSteps}
      regulationNote="Muscovy ducks are a non-native, invasive species in Florida. Management activities are carried out in accordance with Florida wildlife regulations, using humane and legal practices at every step."
    />
  );
}

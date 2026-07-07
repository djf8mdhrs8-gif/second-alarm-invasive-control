export const company = {
  name: "Second Alarm Invasive Control",
  shortName: "Second Alarm",
  tagline: "Protecting Southwest Florida from invasive species.",
  phone: "(239) 365-6753",
  phoneHref: "tel:+12393656753",
  email: "info@secondalarminvasive.com",
  url: "https://www.secondalarminvasive.com",
  addressRegion: "FL",
  areaServed: "Southwest Florida",
};

export const citiesServed = [
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
];

export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Green Iguana Removal",
        href: "/services/green-iguana-removal",
        description: "Humane, effective removal & prevention",
      },
      {
        label: "Muscovy Duck Removal",
        href: "/services/muscovy-duck-removal",
        description: "Legal, humane population management",
      },
    ],
  },
  {
    label: "Service Areas",
    href: "/locations",
    children: [
      { label: "Fort Myers", href: "/locations/fort-myers-iguana-removal" },
      { label: "Cape Coral", href: "/locations/cape-coral-iguana-removal" },
      { label: "Naples", href: "/locations/naples-iguana-removal" },
      { label: "Bonita Springs", href: "/locations/bonita-springs-iguana-removal" },
      { label: "Estero", href: "/locations/estero-iguana-removal" },
      { label: "Punta Gorda", href: "/locations/punta-gorda-iguana-removal" },
      { label: "Port Charlotte", href: "/locations/port-charlotte-iguana-removal" },
      { label: "SWFL Muscovy Ducks", href: "/locations/southwest-florida-muscovy-duck-removal" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const iguanaThreats = [
  {
    title: "Seawall & Foundation Damage",
    description:
      "Iguanas dig extensive burrow networks beneath seawalls, docks, and patios — undermining structural integrity and leading to costly collapse and erosion.",
  },
  {
    title: "Landscape Destruction",
    description:
      "Green iguanas devour ornamental plants, flowers, and fruit trees, stripping mature landscaping in a matter of weeks.",
  },
  {
    title: "Pool & Hardscape Damage",
    description:
      "Burrowing beneath pool decks and patios causes cracking, shifting pavers, and expensive structural repairs.",
  },
  {
    title: "Sanitation & Health Concerns",
    description:
      "Iguana droppings carry Salmonella and can contaminate pools, docks, and walkways, creating real sanitation risks for families and guests.",
  },
  {
    title: "Rapid Population Growth",
    description:
      "A single female can lay dozens of eggs per year. Left unmanaged, a small iguana problem becomes a full-blown property infestation.",
  },
];

export const muscovyThreats = [
  {
    title: "Excessive Droppings",
    description:
      "Large Muscovy flocks generate significant waste on docks, pool decks, and common areas — a persistent sanitation and slip hazard.",
  },
  {
    title: "Unsanitary Water Conditions",
    description:
      "Droppings accumulate in retention ponds and canals, degrading water quality in community lakes and waterways.",
  },
  {
    title: "Aggressive Behavior",
    description:
      "Muscovy ducks can become territorial and aggressive toward residents, guests, pets, and children, especially during nesting season.",
  },
  {
    title: "Property & Common Area Damage",
    description:
      "Flocks damage landscaping, gardens, and turf around clubhouses, pools, and community common areas.",
  },
  {
    title: "Rapid Population Increase",
    description:
      "Muscovy ducks breed prolifically and are not native to Florida, allowing populations to multiply quickly without active management.",
  },
];

export const services = [
  {
    slug: "green-iguana-removal",
    name: "Green Iguana Removal",
    shortName: "Iguana Removal",
    heroImageLabel: "Green Iguana on Seawall",
    summary:
      "Comprehensive inspection, removal, and prevention services for green iguanas invading Southwest Florida homes, seawalls, and communities.",
    features: [
      {
        title: "Property Inspections",
        description:
          "Thorough on-site assessments to identify iguana activity, burrow networks, and vulnerable structures across your property.",
      },
      {
        title: "Removal Strategies",
        description:
          "Field-proven removal methods tailored to your property type — from single-family homes to expansive waterfront communities.",
      },
      {
        title: "Prevention Recommendations",
        description:
          "Custom exclusion and landscaping recommendations designed to reduce re-infestation and long-term iguana activity.",
      },
      {
        title: "Florida Regulation Compliance",
        description:
          "All removal work is performed in full compliance with Florida Fish and Wildlife Conservation Commission (FWC) guidelines.",
      },
    ],
  },
  {
    slug: "muscovy-duck-removal",
    name: "Muscovy Duck Removal",
    shortName: "Muscovy Duck Removal",
    heroImageLabel: "Muscovy Duck Flock at Pond",
    summary:
      "Humane, legal Muscovy duck population management for HOAs, golf courses, and waterfront communities across Southwest Florida.",
    features: [
      {
        title: "Site Assessments",
        description:
          "Detailed evaluations of flock size, nesting sites, and problem areas across common grounds, ponds, and waterfront zones.",
      },
      {
        title: "Population Management",
        description:
          "Strategic, ongoing management plans designed to reduce Muscovy populations to sustainable, manageable levels.",
      },
      {
        title: "Humane & Legal Practices",
        description:
          "All work follows Florida wildlife regulations and industry best practices for humane, ethical handling.",
      },
      {
        title: "Prevention Strategies",
        description:
          "Long-term deterrent and habitat-modification strategies to help keep Muscovy populations from returning.",
      },
    ],
  },
];

export const whoWeServe = [
  {
    title: "Homeowners",
    description:
      "Protecting your yard, pool, landscaping, and family from invasive iguanas and nuisance waterfowl.",
  },
  {
    title: "HOAs",
    description:
      "Community-wide management programs that keep common areas, ponds, and amenities clean and safe.",
  },
  {
    title: "Property Managers",
    description:
      "Reliable, professional service you can count on across your entire property portfolio.",
  },
  {
    title: "Golf Courses",
    description:
      "Keeping fairways, greens, and water features free of burrow damage and waterfowl overpopulation.",
  },
  {
    title: "Waterfront Communities",
    description:
      "Specialized seawall and dock protection from iguana burrowing along canals and coastal properties.",
  },
  {
    title: "Commercial Properties",
    description:
      "Discreet, professional removal services that protect your business and its reputation.",
  },
];

export const stats = [
  { label: "Properties Protected", value: 1200, suffix: "+" },
  { label: "Emergency Response Availability", value: 24, suffix: "/7" },
  { label: "Customer Satisfaction Rate", value: 98, suffix: "%" },
  { label: "Years of Combined Experience", value: 15, suffix: "+" },
];

export const whyTheyreHere = [
  {
    title: "Florida's Climate",
    description:
      "Warm, humid conditions year-round mirror the tropical habitats both species evolved in, letting them thrive without a seasonal die-off.",
  },
  {
    title: "No Natural Predators",
    description:
      "Neither species faces meaningful predation pressure in Florida, removing the checks that would otherwise keep populations in balance.",
  },
  {
    title: "Rapid Reproduction",
    description:
      "Green iguanas can lay dozens of eggs per clutch, and Muscovy ducks breed prolifically — populations compound quickly without intervention.",
  },
  {
    title: "Growing Populations",
    description:
      "What started as isolated sightings decades ago has become an established, expanding presence across Southwest Florida communities.",
  },
  {
    title: "Increasing Property Damage",
    description:
      "As populations grow, so does the cumulative cost to seawalls, landscaping, docks, and common areas across the region.",
  },
];

export const processSteps = [
  {
    title: "Inspection",
    description: "We walk your property to identify activity, entry points, and risk areas.",
  },
  {
    title: "Assessment",
    description: "We evaluate severity and build a removal plan specific to your property.",
  },
  {
    title: "Humane Removal",
    description: "Our team executes the plan using FWC-compliant, humane methods.",
  },
  {
    title: "Cleanup",
    description: "We leave your property clean, safe, and free of debris from the work performed.",
  },
  {
    title: "Prevention",
    description: "You receive clear recommendations to reduce the risk of the problem returning.",
  },
];

export const testimonials = [
  {
    name: "Diane R.",
    role: "Homeowner, Cape Coral",
    quote:
      "They responded the same day I called and had the iguana problem under control within a week. Professional from start to finish.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    role: "HOA Board President, Fort Myers",
    quote:
      "Our community pond was overrun with Muscovy ducks. Second Alarm handled it legally, humanely, and completely — highly recommend for any HOA.",
    rating: 5,
  },
  {
    name: "Karen L.",
    role: "Property Manager, Naples",
    quote:
      "I manage a dozen properties and Second Alarm is the only invasive species company I trust. Communication is excellent every time.",
    rating: 5,
  },
  {
    name: "Bill S.",
    role: "Waterfront Homeowner, Sanibel",
    quote:
      "Iguanas were undermining our seawall. The team explained everything, resolved the issue fast, and gave us a prevention plan.",
    rating: 5,
  },
  {
    name: "Trevor H.",
    role: "Golf Course Operations Director, Bonita Springs",
    quote:
      "Reliable, discreet, and effective. They keep our fairways and water features free of damage year-round.",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "Are iguanas protected in Florida?",
    answer:
      "No. Green iguanas are an invasive, non-native species in Florida and are not protected under state law. The Florida Fish and Wildlife Conservation Commission (FWC) actually encourages homeowners to remove green iguanas from their private property. All removal work should still be performed humanely and in compliance with FWC guidelines, which is exactly how our team operates.",
  },
  {
    question: "What damage can iguanas cause?",
    answer:
      "Green iguanas dig extensive burrows that can undermine seawalls, docks, foundations, and patios. They also destroy landscaping, damage pool decks, and leave droppings that create sanitation concerns. Left unaddressed, iguana activity can lead to thousands of dollars in structural and landscaping repairs.",
  },
  {
    question: "Can Muscovy ducks be relocated?",
    answer:
      "Muscovy duck management in Florida is regulated, and relocation is not typically a permitted or effective long-term solution. Our approach focuses on legal, humane population management and prevention strategies that are compliant with Florida regulations and deliver lasting results for your property.",
  },
  {
    question: "Do you service HOAs and commercial properties?",
    answer:
      "Yes. We work extensively with HOAs, property managers, golf courses, waterfront communities, and commercial properties throughout Southwest Florida, providing tailored inspection and management programs for shared and common areas.",
  },
  {
    question: "How quickly can you respond?",
    answer:
      "We prioritize rapid response for all inquiries and offer emergency service options for urgent situations. In most cases, we can schedule an inspection within 24-48 hours of your initial call.",
  },
  {
    question: "Are your methods humane and legal?",
    answer:
      "Absolutely. Every removal and management strategy we use complies with Florida wildlife regulations and is carried out using humane, professional practices. Compliance and ethics are core to how we operate.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve Southwest Florida, including Fort Myers, Cape Coral, Naples, Bonita Springs, Estero, Sanibel, Captiva, Punta Gorda, Port Charlotte, Lehigh Acres, and the surrounding areas.",
  },
];

export type LocationContent = {
  slug: string;
  city: string;
  service: "iguana" | "muscovy";
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  localDetails: string[];
  neighborhoods: string[];
};

export const locations: LocationContent[] = [
  {
    slug: "fort-myers-iguana-removal",
    city: "Fort Myers",
    service: "iguana",
    title: "Fort Myers Iguana Removal",
    metaTitle: "Iguana Removal Fort Myers, FL | Second Alarm Invasive Control",
    metaDescription:
      "Professional iguana removal in Fort Myers, FL. Fast, humane, FWC-compliant green iguana removal for homes, HOAs, and waterfront properties. Call (239) 365-6753.",
    intro:
      "Fort Myers' canal-front neighborhoods and lush landscaping make it a hotspot for green iguana activity. Our local team provides fast, professional iguana removal throughout the Fort Myers area, protecting seawalls, pools, and landscaping from costly damage.",
    localDetails: [
      "Fort Myers' extensive canal systems and waterfront neighborhoods create ideal burrowing conditions for green iguanas along seawalls and docks.",
      "Historic and riverfront districts near the Caloosahatchee River see high iguana activity due to mature tree canopy and landscaping.",
      "Gated communities and HOAs throughout Fort Myers rely on us for scheduled inspection and removal programs.",
    ],
    neighborhoods: [
      "McGregor Boulevard corridor",
      "Fort Myers River District",
      "Iona",
      "Whiskey Creek",
      "Gateway",
      "College Parkway area",
    ],
  },
  {
    slug: "cape-coral-iguana-removal",
    city: "Cape Coral",
    service: "iguana",
    title: "Cape Coral Iguana Removal",
    metaTitle: "Iguana Removal Cape Coral, FL | Second Alarm Invasive Control",
    metaDescription:
      "Trusted iguana removal in Cape Coral, FL — home to over 400 miles of canals. Protect your seawall, dock, and landscaping. Call (239) 365-6753.",
    intro:
      "With over 400 miles of canals, Cape Coral has one of the highest concentrations of green iguanas in Southwest Florida. Our team specializes in protecting Cape Coral's waterfront homes, seawalls, and docks from burrowing damage.",
    localDetails: [
      "Cape Coral's unmatched canal network gives iguanas nearly unlimited seawall and burrow habitat, making proactive removal essential.",
      "Gulf-access waterfront homes throughout Cape Coral face the highest risk of seawall undermining from iguana burrows.",
      "We work directly with Cape Coral HOAs and waterfront communities on recurring inspection schedules.",
    ],
    neighborhoods: [
      "Southwest Cape Coral canals",
      "Yacht Club area",
      "Tarpon Point",
      "Pelican neighborhood",
      "Trafalgar area",
      "Coral Oaks",
    ],
  },
  {
    slug: "naples-iguana-removal",
    city: "Naples",
    service: "iguana",
    title: "Naples Iguana Removal",
    metaTitle: "Iguana Removal Naples, FL | Second Alarm Invasive Control",
    metaDescription:
      "Premium iguana removal services in Naples, FL for luxury homes, golf courses, and waterfront estates. Discreet, professional, FWC-compliant. Call (239) 365-6753.",
    intro:
      "Naples' luxury waterfront estates, golf communities, and manicured landscaping require a discreet, premium approach to iguana removal. We provide white-glove invasive species services tailored to Naples' most exclusive properties.",
    localDetails: [
      "Naples' golf course communities face persistent iguana burrowing along fairways, cart paths, and water features.",
      "High-end waterfront estates along the Gulf and Naples Bay require careful, discreet removal service.",
      "Our team is experienced working with Naples property managers and estate staff to coordinate seamless service.",
    ],
    neighborhoods: [
      "Port Royal",
      "Aqualane Shores",
      "Park Shore",
      "Pelican Bay",
      "Old Naples",
      "Golf course communities along Airport-Pulling Road",
    ],
  },
  {
    slug: "bonita-springs-iguana-removal",
    city: "Bonita Springs",
    service: "iguana",
    title: "Bonita Springs Iguana Removal",
    metaTitle: "Iguana Removal Bonita Springs, FL | Second Alarm Invasive Control",
    metaDescription:
      "Fast, humane iguana removal in Bonita Springs, FL for homes, HOAs, and golf communities. FWC-compliant removal and prevention. Call (239) 365-6753.",
    intro:
      "Bonita Springs' mix of golf communities, waterfront neighborhoods, and preserved natural areas creates abundant habitat for green iguanas. We provide targeted removal and prevention services throughout the Bonita Springs area.",
    localDetails: [
      "Bonita Springs' golf and country club communities frequently report iguana burrowing near water hazards and greens.",
      "Coastal neighborhoods near Barefoot Beach and the Imperial River see high iguana density along seawalls.",
      "We support Bonita Springs HOAs with proactive, scheduled removal programs to prevent re-infestation.",
    ],
    neighborhoods: [
      "Barefoot Beach area",
      "Bonita Bay",
      "Spring Creek",
      "Imperial River corridor",
      "Pelican Landing",
      "Village of East Bonita",
    ],
  },
  {
    slug: "estero-iguana-removal",
    city: "Estero",
    service: "iguana",
    title: "Estero Iguana Removal",
    metaTitle: "Iguana Removal Estero, FL | Second Alarm Invasive Control",
    metaDescription:
      "Professional iguana removal in Estero, FL for homes, HOAs, and commercial properties. Rapid response and prevention plans. Call (239) 365-6753.",
    intro:
      "Estero's rapidly growing residential and commercial developments sit alongside preserved wetlands and canals — an ideal combination for iguana activity. We help Estero property owners stay ahead of infestations with rapid, professional removal.",
    localDetails: [
      "Estero's proximity to the Estero River and surrounding preserves means consistent iguana pressure on adjacent residential communities.",
      "New and established HOAs throughout Estero rely on us for both emergency response and ongoing prevention.",
      "Commercial properties along US-41 and Corkscrew Road corridors benefit from our discreet daytime service scheduling.",
    ],
    neighborhoods: [
      "Estero River corridor",
      "The Brooks communities",
      "Preserve at Corkscrew",
      "Fountain Lakes",
      "University Village area",
      "Corkscrew Road corridor",
    ],
  },
  {
    slug: "punta-gorda-iguana-removal",
    city: "Punta Gorda",
    service: "iguana",
    title: "Punta Gorda Iguana Removal",
    metaTitle: "Iguana Removal Punta Gorda, FL | Second Alarm Invasive Control",
    metaDescription:
      "Trusted iguana removal in Punta Gorda, FL for waterfront homes and communities along Charlotte Harbor. Call (239) 365-6753.",
    intro:
      "Punta Gorda's historic waterfront and extensive canal system along Charlotte Harbor make it a prime location for green iguana activity. Our team provides thorough inspection and removal services throughout Punta Gorda's coastal neighborhoods.",
    localDetails: [
      "Charlotte Harbor's waterfront neighborhoods see significant iguana burrowing along seawalls and canal banks.",
      "Punta Gorda Isles' extensive canal network requires consistent monitoring to prevent seawall undermining.",
      "Our team coordinates with Punta Gorda HOAs on community-wide removal and prevention programs.",
    ],
    neighborhoods: [
      "Punta Gorda Isles",
      "Burnt Store Isles",
      "Historic Downtown Punta Gorda",
      "Charlotte Harbor waterfront",
      "Punta Gorda Golf & Yacht communities",
      "Alligator Creek area",
    ],
  },
  {
    slug: "port-charlotte-iguana-removal",
    city: "Port Charlotte",
    service: "iguana",
    title: "Port Charlotte Iguana Removal",
    metaTitle: "Iguana Removal Port Charlotte, FL | Second Alarm Invasive Control",
    metaDescription:
      "Reliable iguana removal in Port Charlotte, FL for canal-front homes and communities. FWC-compliant, humane removal. Call (239) 365-6753.",
    intro:
      "Port Charlotte's extensive canal system and waterfront communities provide extensive habitat for green iguanas. We deliver dependable, professional removal services to homeowners and HOAs throughout Port Charlotte.",
    localDetails: [
      "Port Charlotte's canal-front subdivisions experience consistent iguana burrowing pressure along seawalls.",
      "Waterfront communities near the Myakka and Peace Rivers see elevated iguana activity during warmer months.",
      "We provide flexible scheduling for Port Charlotte homeowners and property managers across the region.",
    ],
    neighborhoods: [
      "Port Charlotte canal system",
      "Deep Creek",
      "El Jobean waterfront",
      "Peace River corridor",
      "South Gulf Cove",
      "Harbour Heights",
    ],
  },
  {
    slug: "southwest-florida-muscovy-duck-removal",
    city: "Southwest Florida",
    service: "muscovy",
    title: "Southwest Florida Muscovy Duck Removal",
    metaTitle: "Muscovy Duck Removal Southwest Florida | Second Alarm Invasive Control",
    metaDescription:
      "Humane, legal Muscovy duck removal throughout Southwest Florida. Serving HOAs, golf courses, and waterfront communities. Call (239) 365-6753.",
    intro:
      "Muscovy ducks are a non-native, invasive species that thrive in Southwest Florida's abundant retention ponds, canals, and community water features. Second Alarm Invasive Control provides humane, legal Muscovy duck population management throughout the entire region — from Fort Myers and Cape Coral to Naples and Punta Gorda.",
    localDetails: [
      "Southwest Florida's abundance of retention ponds and community lakes creates ideal breeding conditions for Muscovy duck flocks.",
      "HOAs and golf communities across the region face recurring sanitation and aggression concerns from growing flocks.",
      "Our team provides region-wide service, coordinating population management plans for communities of any size.",
    ],
    neighborhoods: [
      "Fort Myers",
      "Cape Coral",
      "Naples",
      "Bonita Springs",
      "Estero",
      "Punta Gorda",
      "Port Charlotte",
      "Lehigh Acres",
    ],
  },
];

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.secondalarminvasive.com";

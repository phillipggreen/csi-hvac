export type HomeServiceCategory = {
  eyebrow: string;
  title: string;
  description: string;
  services: readonly string[];
  ctaLabel: string;
  href: string;
  image: string;
  imageAlt: string;
};

export const homeRedesignContent = {
  hero: {
    eyebrow: "Comfort Specialist Heating & Cooling",
    heading: ["Keeping Richmond comfortable.", "Keeping businesses running."],
    description:
      "Residential and commercial HVAC and restaurant equipment services throughout Central Kentucky.",
    serviceLine: ["HVAC", "Restaurant Equipment", "Residential", "Commercial"],
  },
  introduction: {
    eyebrow: "Built around the work that matters",
    heading: "One company. Two specialties.",
    description:
      "Comfort Specialist brings residential and commercial HVAC service and restaurant equipment support together under one local company. We help homeowners, businesses, restaurants, and new construction projects across Richmond and Central Kentucky.",
    specialties: [
      {
        title: "Heating & Cooling",
        text: "Installation, repair, maintenance, inspection, and replacement for residential and commercial HVAC systems.",
      },
      {
        title: "Commercial Kitchens",
        text: "Repair and installation support for refrigeration, cooking equipment, ice machines, and other restaurant essentials.",
      },
    ],
  },
  services: [
    {
      eyebrow: "Residential + Commercial",
      title: "HVAC Services",
      description:
        "Comfort Specialist provides heating and cooling service for homes, commercial properties, and new construction in Richmond and across Central Kentucky. From a single repair to a complete installation, we focus on practical solutions for dependable comfort.",
      services: ["Installation", "Repair", "Maintenance", "Inspection", "Replacement"],
      ctaLabel: "Explore HVAC Services",
      href: "/hvac-services",
      image: "/images/HVAC-1.jpg",
      imageAlt: "Indoor HVAC system and ductwork installed in new construction",
    },
    {
      eyebrow: "Commercial Equipment",
      title: "Restaurant Equipment",
      description:
        "Commercial kitchens rely on equipment that performs throughout the workday. Comfort Specialist supports restaurant operators with equipment repair, installation, inspection, and replacement for the systems behind daily service.",
      services: ["Refrigeration", "Ovens & Ranges", "Fryers & Grills", "Ice Machines", "Repair & Installation"],
      ctaLabel: "Explore Restaurant Equipment",
      href: "/restaurant-equipment-services",
      image: "/images/Kitchen.jpg",
      imageAlt: "Professional commercial kitchen with stainless steel cooking equipment",
    },
  ] satisfies HomeServiceCategory[],
  trust: {
    eyebrow: "Who we serve",
    heading: "Local service. Professional results.",
    description:
      "From Richmond to Lexington and communities throughout Central Kentucky, Comfort Specialist supports the spaces where people live and work—and the equipment businesses depend on every day.",
    audiences: ["Homeowners", "Businesses", "Restaurants", "New Construction"],
  },
  selectedReviewNames: ["Tonya Owens", "Sherri Wesley", "Scott Cole"],
  reviews: {
    eyebrow: "Customer reviews",
    heading: "Trusted when comfort matters.",
    description:
      "Read what Central Kentucky customers have shared about working with Comfort Specialist Heating & Cooling.",
  },
  serviceArea: {
    eyebrow: "Local coverage",
    heading: "Serving Central Kentucky",
    description:
      "Comfort Specialist provides HVAC and restaurant equipment services throughout Richmond, Lexington, and surrounding communities.",
  },
  closingCta: {
    eyebrow: "Let’s get to work",
    heading: "Ready to get comfort back?",
    description:
      "Whether you need help with an HVAC system or commercial restaurant equipment, call Comfort Specialist or reach out to discuss your service needs.",
  },
} as const;

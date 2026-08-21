export type LocalizedServiceSection = {
  readonly title: string;
  readonly description: string;
  readonly bullets: readonly string[];
  readonly closing?: string;
  readonly ctaLabel?: string;
  readonly image?: string;
  readonly imageAlt?: string;
  readonly imagePosition?: "left" | "right";
};

export type LocalizedInfoCard = Omit<LocalizedServiceSection, "ctaLabel" | "image" | "imageAlt" | "imagePosition"> & {
  readonly tone: "blue" | "red";
};

export const serviceAreas = {
  lexington: {
    city: "Lexington",
    state: "KY",
    hero: {
      title: "HVAC & Restaurant Equipment Services in Lexington, KY",
      description:
        "At Comfort Specialist, we take pride in being Lexington, KY’s trusted partner for dependable HVAC services and commercial restaurant equipment support. With years of hands-on experience, a deep understanding of Lexington’s seasonal climate, and a passion for delivering exceptional service, we have built a reputation for reliability, quality, and professionalism. Whether you’re battling Kentucky’s humid summers or preparing for the frosty winters that roll in from the north, our team is ready to deliver year-round indoor comfort for homes, businesses, and restaurants.",
    },
    hvacIntro: {
      title: "Full-Service HVAC Solutions in Lexington, KY",
      description:
        "As Lexington locals, we understand that HVAC isn’t just about comfort—it’s about health, safety, and efficiency. Our comprehensive range of HVAC services supports homeowners, business owners and property managers across Fayette County.",
    },
    hvacServices: [
      {
        title: "HVAC Installation",
        description:
          "Installing a new HVAC system is a significant investment, and getting it done right is essential. At Comfort Specialist, we approach HVAC installations with precision, care, and long-term performance in mind. We work with homeowners looking to upgrade to more energy-efficient systems, new home builders needing full system installs, and commercial clients seeking HVAC solutions for their business locations. Our installation services include:",
        bullets: [
          "In-depth load calculations to size your system accurately",
          "Professional ductwork layout and HVAC zoning design",
          "Thermostat setup and smart thermostat integration",
          "Seamless installation of energy-efficient models",
          "Post-installation inspections to ensure peak performance",
        ],
        closing:
          "We work with all major HVAC brands and systems, including heat pumps, split systems, mini-splits, and furnaces.",
        ctaLabel: "Call Now",
        image: "/images/HVAC-1.jpg",
        imageAlt: "New HVAC system installed in a Lexington home under construction",
        imagePosition: "right",
      },
      {
        title: "HVAC Repair",
        description:
          "When your HVAC system fails, the disruption can be significant—especially during Kentucky’s extreme summer highs or winter lows. Our repair services are designed to be fast, thorough, and long-lasting. We use state-of-the-art diagnostic tools and proven repair techniques to restore your comfort with minimal downtime. We fix common HVAC issues such as:",
        bullets: [
          "No heating or cooling output",
          "Uneven temperatures throughout your space",
          "Thermostat calibration issues",
          "Refrigerant leaks and recharge needs",
          "Noisy or constantly cycling systems",
          "Broken blowers, compressors, or ignition systems",
        ],
        closing:
          "Our technicians are equipped to diagnose problems on-site and can often make repairs during the first visit.",
        ctaLabel: "Call Now",
        image: "/images/HVAC-3.jpg",
        imageAlt: "HVAC air handler and ductwork in a Lexington construction project",
        imagePosition: "left",
      },
      {
        title: "HVAC Maintenance",
        description:
          "Preventive HVAC maintenance is the key to extending the lifespan of your system and maintaining energy efficiency. Just like any major mechanical system, your HVAC unit needs regular attention to operate at its best. Our maintenance services are designed to catch small problems before they escalate and ensure everything is running as it should. We offer:",
        bullets: [
          "Seasonal maintenance (spring and fall tune-ups)",
          "Filter replacements and airflow assessments",
          "Thermostat recalibration",
          "System lubrication and part inspections",
          "HVAC energy auditing",
          "HVAC air balancing and zoning checks",
        ],
        closing:
          "Our Lexington maintenance clients enjoy lower utility bills, fewer unexpected breakdowns, and better indoor air quality.",
        ctaLabel: "Contact Us Today",
        image: "/images/HVAC-5.jpg",
        imageAlt: "Outdoor HVAC unit and insulated ductwork maintained in Lexington",
        imagePosition: "right",
      },
    ] satisfies LocalizedServiceSection[],
    hvacCards: [
      {
        title: "HVAC Inspection",
        description:
          "Whether you’re purchasing a home in Lexington, preparing your property for sale, or just want a second opinion on your HVAC system’s condition, our inspection services provide peace of mind. We offer unbiased, detailed evaluations that help you make informed decisions. Our inspections cover:",
        bullets: [
          "Full system operation assessments",
          "Ductwork evaluation for efficiency and air leaks",
          "Refrigerant level checks and airflow testing",
          "Ventilation and exhaust safety",
          "Indoor air quality and filtration effectiveness",
        ],
        closing:
          "We provide written reports that outline the current state of your system along with suggestions for repairs, upgrades, or replacements if needed.",
        tone: "blue",
      },
      {
        title: "HVAC Replacement",
        description:
          "If your HVAC system is more than 10–15 years old, frequently needs repairs, or struggles to maintain consistent indoor temperatures, it may be time for a replacement. We help Lexington homeowners and businesses transition to newer, more efficient systems that can improve comfort and reduce energy costs. Our HVAC replacement services include:",
        bullets: [
          "System selection and sizing guidance",
          "Safe removal of old HVAC units",
          "Retrofitting ductwork when necessary",
          "Installation of modern, high-efficiency systems",
          "Warranty-backed labor and parts coverage",
        ],
        closing:
          "Replacing your system is also an opportunity to introduce new features like smart thermostats, zoning, and enhanced air purification.",
        tone: "blue",
      },
    ] satisfies LocalizedInfoCard[],
    commercialHvac: {
      title: "Commercial HVAC Services in Lexington",
      description:
        "Businesses across Lexington rely on Comfort Specialist for robust, commercial-grade HVAC solutions. From local office buildings and retail stores to smaller commercial spaces, we deliver custom-designed HVAC systems tailored to the unique requirements of commercial properties. We offer:",
      bullets: [
        "Commercial HVAC installation and retrofitting",
        "System troubleshooting and repair",
        "Energy-efficient upgrades and energy auditing",
        "Ductwork design and air balancing",
        "Rooftop unit service and split system setups",
      ],
      closing:
        "Our commercial HVAC clients appreciate our ability to minimize downtime, meet compliance requirements, and provide reliable performance year after year.",
      ctaLabel: "Call Now",
      image: "/images/HVAC-5.jpg",
      imageAlt: "Commercial HVAC equipment and ductwork serving a Lexington property",
      imagePosition: "left",
    } satisfies LocalizedServiceSection,
    newBuilds: {
      title: "HVAC for New Home Builds",
      description:
        "We work directly with home builders, general contractors, and homeowners on new residential construction projects throughout Lexington. We handle everything from system design to final installation. Our new build services include:",
      bullets: [
        "Load calculation and system sizing",
        "Custom HVAC zoning for multi-level homes",
        "Energy code compliance",
        "Seamless duct integration into architectural plans",
        "Final testing and commissioning",
      ],
      closing:
        "If you’re building a new home in areas like Beaumont or Hartland, count on us to design a comfortable, efficient system from the ground up.",
      ctaLabel: "Get a Free Quote",
      image: "/images/HVAC-6.jpg",
      imageAlt: "HVAC ductwork installed in a new Lexington home build",
      imagePosition: "right",
    } satisfies LocalizedServiceSection,
    restaurantIntro: {
      title: "Restaurant Equipment Services in Lexington",
      description:
        "In addition to HVAC services, we specialize in restaurant equipment support for Lexington’s vibrant dining scene. Whether you operate a fine-dining restaurant in downtown, a fast-casual spot on Richmond Road, or a franchise in south Lexington, our team can help you maintain and repair the tools that keep your kitchen running.",
    },
    restaurantServices: [
      {
        title: "Restaurant Equipment Repair",
        description:
          "We understand that a single broken appliance can bring your kitchen to a halt. Our repair services are fast, accurate, and cost-effective. We diagnose and fix:",
        bullets: [
          "Walk-in and reach-in coolers",
          "Freezers and ice machines",
          "Flat-top grills, fryers, and stoves",
          "Ovens and combination cooking units",
          "Ventilation hoods and exhaust fans",
        ],
        closing:
          "We know how important it is to minimize downtime, especially during peak business hours. That’s why we offer prompt scheduling and 24/7 emergency repair services.",
        tone: "blue",
      },
      {
        title: "Restaurant Equipment Inspection",
        description:
          "Avoid failed health inspections and surprise breakdowns with our routine restaurant equipment inspections. We provide comprehensive evaluations that cover:",
        bullets: [
          "Equipment condition and performance",
          "Refrigeration temperature consistency",
          "Ventilation and exhaust function",
          "Electrical and gas safety connections",
          "Manufacturer maintenance guidelines",
        ],
        closing:
          "Our team documents all findings and can schedule follow-up services based on your needs.",
        tone: "blue",
      },
      {
        title: "Restaurant Equipment Replacement",
        description:
          "Sometimes repairs aren’t enough. When it’s time to replace outdated or non-functional kitchen equipment, Comfort Specialist helps you choose the best replacement that fits your space and your menu. We assist with:",
        bullets: [
          "Appliance selection based on kitchen layout",
          "Efficient removal of old or non-working equipment",
          "Gas, electric, and ventilation connections",
          "Code-compliant installation",
        ],
        closing:
          "Whether it’s a new range, fryer, or cooler, we make the transition as seamless as possible.",
        tone: "red",
      },
      {
        title: "Restaurant Equipment Installation",
        description:
          "Opening a new restaurant or upgrading your kitchen? We install new appliances and equipment for commercial kitchens of all types. We ensure every unit is installed to manufacturer specifications and local code requirements. Installation services include:",
        bullets: [
          "Equipment setup and anchoring",
          "Utility hookups",
          "Exhaust and ventilation system integration",
          "Performance testing",
        ],
        closing:
          "We’re familiar with the equipment needs of a wide range of cuisines and service formats.",
        tone: "red",
      },
    ] satisfies LocalizedInfoCard[],
    faqs: [
      { question: "What types of HVAC systems do you install in Lexington homes?", answer: null },
      { question: "How often should HVAC maintenance be performed?", answer: null },
      { question: "Do you offer emergency HVAC repair services in Lexington?", answer: null },
      { question: "Can you help if my restaurant equipment stops working during dinner service?", answer: null },
      { question: "Do you offer HVAC services for new home builds in Lexington?", answer: null },
    ],
    whyChoose: {
      title: "Why Choose Comfort Specialist?",
      description:
        "Choosing the right HVAC company can make a world of difference in your home or business’s comfort, safety, and operational costs. Here’s what sets us apart:",
      bullets: [
        "We are locally owned and operated, with a deep knowledge of Lexington’s climate and housing styles.",
        "Our technicians are licensed, certified, and continuously trained on the latest technologies and techniques.",
        "We respond quickly to service calls and emergencies, with transparent communication and no high-pressure sales tactics.",
        "We work with top brands and industry-best tools to ensure reliability and durability in everything we install or repair.",
        "We support restaurants and commercial kitchens with the same level of expertise and urgency we bring to HVAC work.",
      ],
      closing: "Our mission is to provide comfort and peace of mind with every service call.",
      ctaLabel: "Contact Us Today",
      image: "/images/HVAC-2.jpg",
      imageAlt: "Outdoor HVAC condenser installed beside a brick wall",
      imagePosition: "right",
    } satisfies LocalizedServiceSection,
    finalCta: {
      title: "Need HVAC Services in Lexington, KY?",
      paragraphs: [
        "If you’re searching for an HVAC company or restaurant equipment specialist in Lexington, look no further than Comfort Specialist. Whether you’re installing a new system, repairing a faulty unit, or maintaining the appliances that keep your kitchen moving, our expert team is here to help.",
        "We treat every job—big or small—with the same care, urgency, and dedication to excellence. From homeowners in Andover needing seasonal maintenance to restaurant owners near the University of Kentucky facing an urgent kitchen repair, we’re the trusted team for heating, cooling, and commercial equipment solutions in the Bluegrass region.",
      ],
      ctaLabel: "Call Now",
    },
  },
} as const;

export const lexingtonServiceArea = serviceAreas.lexington;

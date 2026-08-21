import type { ServiceCardProps } from "@/components/shared/service-card";

export const hvacServicesContent = {
  hero: {
    title: "HVAC Services in Richmond, KY",
    paragraphs: [
      "At Comfort Specialist, we’ve been proudly serving Richmond, KY, and the surrounding areas for over 20 years. As a locally owned and operated business, we’re committed to providing reliable, high-quality heating, ventilation, and air conditioning services for both residential and commercial customers. Whether you’re dealing with a broken air conditioner, planning a new construction project, or looking to improve your indoor air quality, our expert team has the experience, tools, and dedication to get the job done right.",
      "Our goal is simple: to deliver professional, friendly, and dependable HVAC solutions that keep your home or business comfortable year-round. From quick air conditioner repair services to HVAC installations for residential homes and local businesses, Comfort Specialist is Richmond’s trusted HVAC contractor.",
    ],
  },
  comprehensive: {
    title: "Comprehensive HVAC Solutions for Residential & Commercial Properties",
    description:
      "We understand that every property has different heating and cooling needs, which is why we provide a full range of HVAC services tailored to both homeowners and business owners. Our experienced technicians are trained to handle small jobs like filter changes and thermostat setups as well as complex commercial installations and system replacements. If you need a new system, we can also help get started with Synchrony to get a low-interest credit card for all of your business needs!",
    image: "/images/HVAC-3.jpg",
    imageAlt: "Indoor HVAC air handler and ductwork installed in new construction",
  },
  services: [
    {
      title: "HVAC Installation",
      icon: "installation",
      tone: "blue",
      description:
        "Whether you’re upgrading an outdated system or installing an HVAC unit for a brand-new property, our team specializes in precise, efficient installations. We provide HVAC installation services for homes, offices, restaurants, shops, and more. Our experts will help you choose the right system based on your property size, energy needs, and budget. We make sure every installation is performed with attention to detail to ensure optimal airflow, energy efficiency, and long-term performance.",
    },
    {
      title: "HVAC Repair",
      icon: "repair",
      tone: "blue",
      description:
        "When your air conditioner or heating system fails, you need fast, reliable service. Comfort Specialist offers expert HVAC repair and troubleshooting for all makes and models. We diagnose issues quickly and perform high-quality repairs to restore comfort to your home or business. From malfunctioning thermostats and clogged ducts to refrigerant leaks and complete system failures, we have the tools and experience to handle any problem. We also specialize in emergency AC repair in Richmond, KY, ensuring your system is back up and running when you need it most.",
    },
    {
      title: "HVAC Maintenance",
      icon: "maintenance",
      tone: "blue",
      description:
        "Routine maintenance is essential for maximizing your HVAC system’s performance and lifespan. Our maintenance plans are designed to prevent costly breakdowns, improve energy efficiency, and ensure your equipment operates at peak capacity. During maintenance visits, we clean components, check refrigerant levels, replace filters, lubricate moving parts, and identify potential issues before they become serious problems. Regular service also helps improve indoor air quality and reduces monthly energy bills.",
    },
    {
      title: "HVAC Replacement",
      icon: "replacement",
      tone: "red",
      description:
        "If your HVAC system is over 10–15 years old, frequently breaks down, or struggles to maintain a consistent temperature, it may be time for a replacement. We offer comprehensive HVAC replacement services, helping you select a modern, energy-efficient unit that fits your property’s unique needs. Our technicians handle the entire replacement process, including removal of the old system, proper installation of the new equipment, and setup of thermostats and zoning controls for maximum comfort and efficiency.",
    },
    {
      title: "HVAC Inspection",
      icon: "inspection",
      tone: "red",
      description:
        "Whether you’re purchasing a new home, planning renovations, or preparing your business for seasonal changes, an HVAC inspection ensures your system is safe, efficient, and ready to perform. Our technicians thoroughly evaluate ductwork, airflow, filters, thermostats, and key components to identify issues before they lead to costly repairs. Inspections are especially important for commercial properties, ensuring your HVAC systems meet Richmond’s building and safety codes.",
    },
    {
      title: "HVAC Cleaning",
      icon: "cleaning",
      tone: "red",
      description:
        "A clean HVAC system performs better, lasts longer, and improves your indoor air quality. Over time, dust, dirt, and allergens can accumulate within vents and filters, reducing efficiency and contributing to poor air circulation. Our HVAC cleaning services include deep cleaning coils and air filters to ensure your system delivers clean, healthy air to your home or business.",
    },
    {
      title: "HVAC Troubleshooting",
      icon: "troubleshooting",
      tone: "light",
      description:
        "Strange noises, weak airflow, rising energy bills, or inconsistent temperatures can all indicate underlying problems with your HVAC system. Our troubleshooting services involve a detailed diagnostic process where we assess each part of your system to identify root causes. Once we determine the problem, we provide a clear explanation of your repair or replacement options so you can make informed decisions.",
    },
    {
      title: "HVAC Ductwork & Ventilation",
      icon: "ductwork",
      tone: "light",
      description:
        "Your ductwork plays a critical role in maintaining proper airflow throughout your property. Damaged, poorly installed, or leaky ducts can lead to uneven heating and cooling, wasted energy, and higher utility bills. We specialize in ductwork installation, repair, and sealing to ensure your system operates efficiently. Additionally, we provide ventilation solutions that improve air circulation, reduce indoor pollutants, and help maintain healthier living and working environments.",
    },
    {
      title: "HVAC Thermostat Setup & System Zoning",
      icon: "thermostat",
      tone: "light",
      description:
        "Modern thermostats and zoning systems allow you to take control of your home or business’s comfort like never before. We install programmable and smart thermostats that help you manage temperatures efficiently and save on energy costs. For multi-story homes or local office suites, system zoning allows you to customize heating and cooling levels in different rooms for optimal comfort and energy savings, ensuring you only pay to condition the spaces you’re actually using.",
    },
  ] satisfies ServiceCardProps[],
  supportFeatures: [
    {
      tone: "blue",
      imagePosition: "right",
      image: "/images/HVAC-4.jpg",
      imageAlt: "Outdoor HVAC condenser installed beside a brick wall",
      items: [
        {
          title: "HVAC Refrigerant Recharge",
          description:
            "Low refrigerant levels can significantly impact your air conditioner’s ability to cool your home or business. Our technicians provide quick and accurate refrigerant recharges to restore proper performance and efficiency. We also check for leaks and ensure your system operates within manufacturer-recommended specifications.",
        },
        {
          title: "HVAC Air Balancing",
          description:
            "If some rooms in your home or office are too hot while others remain too cold, our HVAC air balancing services can fix uneven airflow issues. By adjusting dampers, ductwork, and airflow distribution, we ensure every room maintains a consistent and comfortable temperature.",
        },
      ],
      ctaLabel: "Get a Free Quote",
    },
    {
      tone: "red",
      imagePosition: "left",
      image: "/images/HVAC-5.jpg",
      imageAlt: "Commercial HVAC equipment with insulated ductwork",
      items: [
        {
          title: "HVAC Energy Auditing",
          description:
            "Rising energy bills often signal inefficiencies within your HVAC system. Our energy auditing services evaluate your system’s performance, insulation, and ductwork to identify areas where energy is being wasted. After the audit, we provide actionable recommendations to improve efficiency and help you save on long-term operating costs.",
        },
        {
          title: "HVAC Filter Change",
          description:
            "Air filters play a vital role in maintaining healthy indoor air quality and efficient system operation. Dirty or clogged filters can restrict airflow, increase energy usage, and strain your HVAC system. We provide fast, reliable filter replacement services and can recommend high-quality filters suited to your property’s needs.",
        },
      ],
      ctaLabel: "Contact Us Today",
    },
  ] as const,
  newBuilds: {
    title: "HVAC Services for New Builds & Construction Projects",
    description:
      "Comfort Specialist isn’t just for homeowners—we also work with contractors, builders, and property managers on construction projects throughout Richmond, KY. Whether it’s installing HVAC systems in restaurants, offices, or other commercial properties, our team has the experience and resources to manage projects efficiently. We collaborate closely with construction teams to ensure HVAC installations are efficient, compliant with building codes, and tailored to the unique needs of each space.",
  },
  whyChoose: {
    title: "Why Choose Comfort Specialist?",
    bullets: [
      "Over 20 years of HVAC expertise serving Richmond and surrounding communities",
      "Locally owned and operated business committed to excellence",
      "Specialists in both residential and commercial applications",
      "Comprehensive service offerings from repair to full system installations",
      "Transparent pricing and friendly, professional service every step of the way",
    ],
    image: "/images/HVAC-6.jpg",
    imageAlt: "HVAC ductwork installed in a new construction project",
  },
  finalCta: {
    title: "Schedule Your HVAC Service in Richmond, KY Today",
    description:
      "At Comfort Specialist Heating & Cooling, we understand that your comfort is essential. Whether you need fast air conditioner repair, a full HVAC system replacement, or expert installation for a new construction project, our team delivers dependable solutions you can trust. Our HVAC company in Richmond, KY has built our reputation on quality work, exceptional service, and a commitment to keeping Richmond families and businesses comfortable year-round.",
    ctaLabel: "Get a Free Quote",
  },
};

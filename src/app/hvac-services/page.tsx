import type { Metadata } from "next";

import { InteriorPageHero } from "@/components/layout/interior-page-hero";
import { ComprehensiveHvac } from "@/components/services/comprehensive-hvac";
import { HvacFinalCta, HvacWhyChooseSection, NewBuildsSection } from "@/components/services/hvac-lower-sections";
import { HvacServiceGrid } from "@/components/services/hvac-service-grid";
import { HvacSupportFeatures } from "@/components/services/hvac-support-features";
import { hvacServicesContent } from "@/data/hvac-services-content";

export const metadata: Metadata = {
  title: "HVAC Services in Richmond, KY",
  description:
    "Residential and commercial heating and cooling services from Comfort Specialist Heating & Cooling in Richmond, Kentucky.",
};

export default function HvacServicesPage() {
  return (
    <>
      <InteriorPageHero
        description={hvacServicesContent.hero.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        title={hvacServicesContent.hero.title}
      />
      <ComprehensiveHvac />
      <HvacServiceGrid />
      <HvacSupportFeatures />
      <NewBuildsSection />
      <HvacWhyChooseSection />
      <HvacFinalCta />
    </>
  );
}

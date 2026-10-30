import type { Metadata } from "next";

import { HvacPerformanceAndConstruction } from "@/components/services/hvac-performance-and-construction";
import { HvacServiceIntroduction } from "@/components/services/hvac-service-introduction";
import { HvacServiceOfferings } from "@/components/services/hvac-service-offerings";
import { HvacTrustAndCta } from "@/components/services/hvac-trust-and-cta";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "HVAC Services in Richmond, KY",
  description:
    "Residential and commercial heating and cooling services from Comfort Specialist Heating & Cooling in Richmond, Kentucky.",
  path: "/hvac-services",
});

export default function HvacServicesPage() {
  return (
    <div className="modern-service-page">
      <HvacServiceIntroduction />
      <HvacServiceOfferings />
      <HvacPerformanceAndConstruction />
      <HvacTrustAndCta />
    </div>
  );
}

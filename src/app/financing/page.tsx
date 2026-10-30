import type { Metadata } from "next";

import { FinancingContent } from "@/components/financing/financing-content";
import { UtilityPageHero } from "@/components/shared/utility-page-hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "HVAC Financing in Richmond, KY",
  description:
    "Learn about HVAC financing through Synchrony for eligible Comfort Specialist Heating & Cooling customers in Richmond, Kentucky.",
  path: "/financing",
});

export default function FinancingPage() {
  return (
    <div className="modern-service-page">
      <UtilityPageHero
        description="Comfort Specialist Heating & Cooling offers financing options through Synchrony to help eligible customers manage the cost of HVAC service and equipment."
        eyebrow="Financing"
        title="Comfort Now. Flexibility to Pay Over Time."
      />
      <FinancingContent />
    </div>
  );
}

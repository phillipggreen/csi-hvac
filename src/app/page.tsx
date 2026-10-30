import type { Metadata } from "next";

import { HomeIntroductionModern } from "@/components/home/home-introduction-modern";
import { ModernHomeCta } from "@/components/home/modern-home-cta";
import { ModernHomeHero } from "@/components/home/modern-home-hero";
import { HomeSelectedReviews } from "@/components/home/home-selected-reviews";
import { HomeServiceAreaHighlight } from "@/components/home/home-service-area-highlight";
import { HomeTrustModern } from "@/components/home/home-trust-modern";
import { PrimaryServiceCategories } from "@/components/home/primary-service-categories";
import { createPageMetadata } from "@/lib/metadata";
import { localBusinessJsonLd, serializeJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "HVAC & Restaurant Equipment Services in Richmond, KY | Comfort Specialist Heating & Cooling",
  description: "Comfort Specialist Heating & Cooling provides HVAC and restaurant equipment services in Richmond, Kentucky.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="modern-home">
      <script dangerouslySetInnerHTML={{ __html: serializeJsonLd(localBusinessJsonLd) }} type="application/ld+json" />
      <ModernHomeHero />
      <HomeIntroductionModern />
      <PrimaryServiceCategories />
      <HomeTrustModern />
      <HomeSelectedReviews />
      <HomeServiceAreaHighlight />
      <ModernHomeCta />
    </div>
  );
}

import type { Metadata } from "next";

import { InteriorPageHero } from "@/components/layout/interior-page-hero";
import { ComprehensiveRestaurantEquipment } from "@/components/services/comprehensive-restaurant-equipment";
import { RestaurantFinalCta, RestaurantWhyTrustSection } from "@/components/services/restaurant-lower-sections";
import { RestaurantServiceGrid } from "@/components/services/restaurant-service-grid";
import { RestaurantSupportFeatures } from "@/components/services/restaurant-support-features";
import { restaurantEquipmentContent } from "@/data/restaurant-equipment-content";

export const metadata: Metadata = {
  title: "Restaurant Equipment Services in Richmond, KY",
  description:
    "Restaurant equipment repair, installation, replacement, and maintenance from Comfort Specialist Heating & Cooling in Richmond, Kentucky.",
};

export default function RestaurantEquipmentServicesPage() {
  return (
    <>
      <InteriorPageHero description={<p>{restaurantEquipmentContent.hero.description}</p>} title={restaurantEquipmentContent.hero.title} />
      <ComprehensiveRestaurantEquipment />
      <RestaurantServiceGrid />
      <RestaurantSupportFeatures />
      <RestaurantWhyTrustSection />
      <RestaurantFinalCta />
    </>
  );
}

import type { Metadata } from "next";

import { RestaurantMaintenanceAndProjects } from "@/components/services/restaurant-maintenance-and-projects";
import { RestaurantServiceIntroduction } from "@/components/services/restaurant-service-introduction";
import { RestaurantServiceOfferings } from "@/components/services/restaurant-service-offerings";
import { RestaurantTrustAndCta } from "@/components/services/restaurant-trust-and-cta";

export const metadata: Metadata = {
  title: "Restaurant Equipment Services in Richmond, KY",
  description:
    "Restaurant equipment repair, installation, replacement, and maintenance from Comfort Specialist Heating & Cooling in Richmond, Kentucky.",
};

export default function RestaurantEquipmentServicesPage() {
  return (
    <div className="modern-service-page">
      <RestaurantServiceIntroduction />
      <RestaurantServiceOfferings />
      <RestaurantMaintenanceAndProjects />
      <RestaurantTrustAndCta />
    </div>
  );
}

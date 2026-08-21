import { ServiceFeatureBands } from "@/components/services/service-feature-bands";
import { restaurantEquipmentContent } from "@/data/restaurant-equipment-content";

export function RestaurantSupportFeatures() {
  return <ServiceFeatureBands ariaLabel="Restaurant equipment maintenance and installation services" features={restaurantEquipmentContent.supportFeatures} />;
}

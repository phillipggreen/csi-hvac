import { ContentContainer } from "@/components/shared/content-container";
import { ServiceCard } from "@/components/shared/service-card";
import { restaurantEquipmentContent } from "@/data/restaurant-equipment-content";

export function RestaurantServiceGrid() {
  const primaryServices = restaurantEquipmentContent.services.slice(0, 6);
  const supportingServices = restaurantEquipmentContent.services.slice(6);

  return (
    <section aria-label="Restaurant equipment service categories" className="pt-8 pb-10 sm:pt-10 sm:pb-12 lg:pt-10 lg:pb-16">
      <h2 className="sr-only">Restaurant Equipment Services</h2>
      <ContentContainer>
        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {primaryServices.map((service) => <ServiceCard density="detailed" key={service.title} {...service} />)}
        </div>
        <div className="mt-6 grid items-stretch gap-6 md:grid-cols-2">
          {supportingServices.map((service) => <ServiceCard density="detailed" key={service.title} {...service} />)}
        </div>
      </ContentContainer>
    </section>
  );
}

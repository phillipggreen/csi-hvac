import { ContentContainer } from "@/components/shared/content-container";
import { ServiceCard } from "@/components/shared/service-card";
import { hvacServicesContent } from "@/data/hvac-services-content";

export function HvacServiceGrid() {
  return (
    <section aria-label="HVAC service categories" className="pt-8 pb-10 sm:pt-10 sm:pb-12 lg:pt-10 lg:pb-16">
      <h2 className="sr-only">Core HVAC Services</h2>
      <ContentContainer className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
        {hvacServicesContent.services.map((service) => <ServiceCard density="detailed" key={service.title} {...service} />)}
      </ContentContainer>
    </section>
  );
}

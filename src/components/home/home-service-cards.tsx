import { ServiceCard } from "@/components/shared/service-card";
import { ContentContainer } from "@/components/shared/content-container";
import { homeContent } from "@/data/home-content";

export function HomeServiceCards() {
  return (
    <section aria-label="Primary HVAC services" className="py-8 lg:py-12">
      <ContentContainer className="grid items-stretch gap-6 lg:grid-cols-3">
        {homeContent.services.map((service) => <ServiceCard key={service.title} {...service} />)}
      </ContentContainer>
    </section>
  );
}

import { ServiceFeatureBands } from "@/components/services/service-feature-bands";
import { hvacServicesContent } from "@/data/hvac-services-content";

export function HvacSupportFeatures() {
  return <ServiceFeatureBands ariaLabel="Additional HVAC services" features={hvacServicesContent.supportFeatures} />;
}

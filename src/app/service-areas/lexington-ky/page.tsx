import type { Metadata } from "next";

import { LexingtonCommercialAndConstruction } from "@/components/service-areas/lexington-commercial-and-construction";
import { LexingtonHvacServices } from "@/components/service-areas/lexington-hvac-services";
import { LexingtonIntroduction } from "@/components/service-areas/lexington-introduction";
import { LexingtonRestaurantServices } from "@/components/service-areas/lexington-restaurant-services";
import { LexingtonTrustAndCta } from "@/components/service-areas/lexington-trust-and-cta";

export const metadata: Metadata = {
  title: "HVAC & Restaurant Equipment Services in Lexington, KY",
  description:
    "HVAC installation, repair, maintenance, commercial HVAC, and restaurant equipment services from Comfort Specialist Heating & Cooling in Lexington, Kentucky.",
};

export default function LexingtonServiceAreaPage() {
  return (
    <div className="modern-service-page">
      <LexingtonIntroduction />
      <LexingtonHvacServices />
      <LexingtonCommercialAndConstruction />
      <LexingtonRestaurantServices />
      <LexingtonTrustAndCta />
    </div>
  );
}

import type { Metadata } from "next";

import { InteriorPageHero } from "@/components/layout/interior-page-hero";
import {
  CommercialHvacBand,
  HvacInformationCards,
  LexingtonFaqSection,
  LexingtonFinalCta,
  LexingtonWhyChooseSection,
  LocalizedHvacServices,
  NewHomeBuildsSection,
  RestaurantServiceCards,
  ServiceAreaIntro,
} from "@/components/service-areas/service-area-sections";
import { lexingtonServiceArea } from "@/data/service-areas";

export const metadata: Metadata = {
  title: "HVAC & Restaurant Equipment Services in Lexington, KY",
  description:
    "HVAC installation, repair, maintenance, commercial HVAC, and restaurant equipment services from Comfort Specialist Heating & Cooling in Lexington, Kentucky.",
};

export default function LexingtonServiceAreaPage() {
  return (
    <>
      <InteriorPageHero description={<p>{lexingtonServiceArea.hero.description}</p>} title={lexingtonServiceArea.hero.title} />
      <ServiceAreaIntro {...lexingtonServiceArea.hvacIntro} />
      <LocalizedHvacServices />
      <HvacInformationCards />
      <CommercialHvacBand />
      <NewHomeBuildsSection />
      <ServiceAreaIntro {...lexingtonServiceArea.restaurantIntro} />
      <RestaurantServiceCards />
      <LexingtonFaqSection />
      <LexingtonWhyChooseSection />
      <LexingtonFinalCta />
    </>
  );
}

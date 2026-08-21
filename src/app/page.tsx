import type { Metadata } from "next";

import { FaqSection } from "@/components/home/faq-section";
import { HomeCta } from "@/components/home/home-cta";
import { HomeHero } from "@/components/home/home-hero";
import { HomeIntro } from "@/components/home/home-intro";
import { HomeServiceCards } from "@/components/home/home-service-cards";
import { HvacOverview } from "@/components/home/hvac-overview";
import { Testimonials } from "@/components/home/testimonials";
import { WhyChooseUs } from "@/components/home/why-choose-us";

export const metadata: Metadata = {
  title: "HVAC Services in Richmond, KY",
  description: "Comfort Specialist Heating & Cooling provides HVAC and restaurant equipment services in Richmond, Kentucky.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeIntro />
      <HvacOverview />
      <HomeServiceCards />
      <WhyChooseUs />
      <Testimonials />
      <FaqSection />
      <HomeCta />
    </>
  );
}

import Image from "next/image";

import { ContentContainer } from "@/components/shared/content-container";
import { PrimaryCta } from "@/components/shared/primary-cta";
import { SectionHeading } from "@/components/shared/section-heading";
import { restaurantEquipmentContent } from "@/data/restaurant-equipment-content";
import { siteConfig } from "@/data/site-config";

export function RestaurantWhyTrustSection() {
  const content = restaurantEquipmentContent.whyTrust;

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <ContentContainer className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <SectionHeading>{content.title}</SectionHeading>
          <p className="mt-6 max-w-2xl leading-7 text-charcoal/85">{content.description}</p>
          <PrimaryCta className="mt-8" href={siteConfig.phone.href}>Get a Free Quote</PrimaryCta>
        </div>
        <div className="relative mx-auto w-full max-w-xl before:absolute before:inset-2 before:z-10 before:border-2 before:border-brand-red before:content-['']">
          <Image alt={content.imageAlt} className="aspect-[4/3] w-full object-cover" height={900} loading="eager" sizes="(min-width: 1024px) 42vw, 90vw" src={content.image} unoptimized width={1200} />
        </div>
      </ContentContainer>
    </section>
  );
}

export function RestaurantFinalCta() {
  const content = restaurantEquipmentContent.finalCta;

  return (
    <section className="bg-soft-gray py-16 text-center sm:py-20">
      <ContentContainer>
        <div className="mx-auto max-w-4xl">
          <SectionHeading centered>{content.title}</SectionHeading>
          <p className="mt-6 leading-7 text-charcoal/85 sm:text-lg">{content.description}</p>
          <PrimaryCta className="mt-8" href={siteConfig.phone.href}>{content.ctaLabel}</PrimaryCta>
        </div>
      </ContentContainer>
    </section>
  );
}

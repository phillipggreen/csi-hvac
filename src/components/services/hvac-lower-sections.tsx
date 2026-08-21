import Image from "next/image";

import { ContentContainer } from "@/components/shared/content-container";
import { PrimaryCta } from "@/components/shared/primary-cta";
import { SectionHeading } from "@/components/shared/section-heading";
import { hvacServicesContent } from "@/data/hvac-services-content";
import { siteConfig } from "@/data/site-config";

export function NewBuildsSection() {
  const content = hvacServicesContent.newBuilds;
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <ContentContainer>
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading centered className="section-title-rule">{content.title}</SectionHeading>
          <p className="mt-12 leading-7 text-charcoal/85 sm:text-lg">{content.description}</p>
        </div>
      </ContentContainer>
    </section>
  );
}

export function HvacWhyChooseSection() {
  const content = hvacServicesContent.whyChoose;
  return (
    <section className="pt-4 pb-16 sm:pt-6 sm:pb-20 lg:pt-8 lg:pb-24">
      <ContentContainer className="grid items-center gap-10 lg:grid-cols-2 lg:gap-10">
        <div>
          <SectionHeading>{content.title}</SectionHeading>
          <ul className="mt-7 list-disc space-y-2 pl-5 leading-7 text-charcoal/90">
            {content.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
          <PrimaryCta className="mt-8" href={siteConfig.phone.href}>Call Now</PrimaryCta>
        </div>
        <div className="relative mx-auto w-full max-w-2xl before:absolute before:inset-2 before:z-10 before:border-2 before:border-brand-red before:content-['']">
          <Image alt={content.imageAlt} className="aspect-[4/3] w-full object-cover" height={900} loading="eager" sizes="(min-width: 1024px) 42vw, 90vw" src={content.image} unoptimized width={1200} />
        </div>
      </ContentContainer>
    </section>
  );
}

export function HvacFinalCta() {
  const content = hvacServicesContent.finalCta;
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

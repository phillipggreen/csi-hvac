import Image from "next/image";

import { ContentContainer } from "@/components/shared/content-container";
import { PrimaryCta } from "@/components/shared/primary-cta";
import { SectionHeading } from "@/components/shared/section-heading";
import { hvacServicesContent } from "@/data/hvac-services-content";
import { siteConfig } from "@/data/site-config";

export function ComprehensiveHvac() {
  const content = hvacServicesContent.comprehensive;

  return (
    <section className="pt-14 pb-10 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-12">
      <ContentContainer className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <SectionHeading>{content.title}</SectionHeading>
          <p className="mt-6 max-w-2xl leading-7 text-charcoal/85">{content.description}</p>
          <PrimaryCta className="mt-8" href={siteConfig.phone.href}>Call Now</PrimaryCta>
        </div>
        <div className="relative mx-auto w-full max-w-xl before:absolute before:inset-2 before:z-10 before:border-2 before:border-brand-red before:content-['']">
          <Image alt={content.imageAlt} className="aspect-[4/3] w-full object-cover" height={1600} loading="eager" sizes="(min-width: 1024px) 42vw, 90vw" src={content.image} unoptimized width={1200} />
        </div>
      </ContentContainer>
    </section>
  );
}

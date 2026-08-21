import Image from "next/image";

import { ContentContainer } from "@/components/shared/content-container";
import { PrimaryCta } from "@/components/shared/primary-cta";
import { SectionHeading } from "@/components/shared/section-heading";
import { homeContent } from "@/data/home-content";
import { siteConfig } from "@/data/site-config";

export function HvacOverview() {
  const { body, heading, services } = homeContent.overview;
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <ContentContainer className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <SectionHeading>{heading}</SectionHeading>
          <p className="mt-6 leading-7 text-charcoal/85">{body}</p>
          <ul className="mt-6 list-disc space-y-1 pl-5 text-charcoal/90">
            {services.map((service) => <li key={service}>{service}</li>)}
          </ul>
          <PrimaryCta className="mt-8" href={siteConfig.phone.href}>Get a Free Quote</PrimaryCta>
        </div>
        <div className="relative mx-auto w-full max-w-xl before:absolute before:inset-2 before:z-10 before:border-2 before:border-brand-red before:content-['']">
          <Image alt="New HVAC system and ductwork installed in a Richmond construction project" className="aspect-[4/5] w-full object-cover" height={1600} loading="eager" sizes="(min-width: 1024px) 42vw, 90vw" src="/images/HVAC-1.jpg" unoptimized width={1200} />
        </div>
      </ContentContainer>
    </section>
  );
}

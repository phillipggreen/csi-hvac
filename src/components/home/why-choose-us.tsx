import Image from "next/image";

import { ContentContainer } from "@/components/shared/content-container";
import { PrimaryCta } from "@/components/shared/primary-cta";
import { SectionHeading } from "@/components/shared/section-heading";
import { homeContent } from "@/data/home-content";
import { siteConfig } from "@/data/site-config";

export function WhyChooseUs() {
  const { body, heading, reasons } = homeContent.whyChoose;
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <ContentContainer className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <div className="relative mx-auto w-full max-w-xl before:absolute before:inset-2 before:z-10 before:border-2 before:border-brand-red before:content-['']">
          <Image alt="Outdoor HVAC condenser installed beside a brick home" className="aspect-[4/5] w-full object-cover" height={1333} loading="eager" sizes="(min-width: 1024px) 42vw, 90vw" src="/images/HVAC-2.jpg" unoptimized width={1000} />
        </div>
        <div>
          <SectionHeading>{heading}</SectionHeading>
          <p className="mt-6 leading-7 text-charcoal/85">{body}</p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-charcoal/90">
            {reasons.map((reason) => <li key={reason.title}><strong>{reason.title}:</strong> {reason.text}</li>)}
          </ul>
          <h3 className="mt-9 text-2xl font-black uppercase text-charcoal sm:text-3xl">Proudly Serving</h3>
          <p className="mt-4 leading-7 text-charcoal/90">{siteConfig.serviceAreas.join(" / ")}</p>
          <PrimaryCta className="mt-7" href={siteConfig.phone.href}>Contact Us Today</PrimaryCta>
        </div>
      </ContentContainer>
    </section>
  );
}

import Image from "next/image";

import { ContentContainer } from "@/components/shared/content-container";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { PrimaryCta } from "@/components/shared/primary-cta";
import { SectionHeading } from "@/components/shared/section-heading";
import type { LocalizedInfoCard, LocalizedServiceSection } from "@/data/service-areas";
import { lexingtonServiceArea } from "@/data/service-areas";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

type CenteredIntroProps = {
  description: string;
  title: string;
};

export function ServiceAreaIntro({ description, title }: CenteredIntroProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <ContentContainer>
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading centered className="section-title-rule">{title}</SectionHeading>
          <p className="mt-10 leading-7 text-charcoal/85 sm:text-lg">{description}</p>
        </div>
      </ContentContainer>
    </section>
  );
}

function ServiceCopy({ service, lightText = false }: { service: LocalizedServiceSection; lightText?: boolean }) {
  return (
    <>
      <h2 className={cn("text-3xl font-black uppercase leading-tight sm:text-4xl", lightText ? "text-white" : "text-charcoal")}>{service.title}</h2>
      <p className={cn("mt-5 leading-7", lightText ? "text-white/95" : "text-charcoal/85")}>{service.description}</p>
      <ul className={cn("mt-5 list-disc space-y-1.5 pl-5 leading-7", lightText ? "text-white/95" : "text-charcoal/90")}>
        {service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
      </ul>
      {service.closing && <p className={cn("mt-5 leading-7", lightText ? "text-white/95" : "text-charcoal/85")}>{service.closing}</p>}
      {service.ctaLabel && <PrimaryCta className="mt-7 self-start" href={siteConfig.phone.href} tone={lightText ? "white" : "red"}>{service.ctaLabel}</PrimaryCta>}
    </>
  );
}

export function LocalizedHvacServices() {
  return (
    <section aria-label="Lexington HVAC services" className="pb-12 sm:pb-16 lg:pb-20">
      <ContentContainer className="space-y-16 sm:space-y-20 lg:space-y-24">
        {lexingtonServiceArea.hvacServices.map((service) => {
          const imageFirst = service.imagePosition === "left";

          return (
            <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14" key={service.title}>
              <div className={cn(imageFirst ? "lg:order-2" : "lg:order-1")}>
                <ServiceCopy service={service} />
              </div>
              <div className={cn("relative mx-auto w-full max-w-xl before:absolute before:inset-2 before:z-10 before:border-2 before:border-brand-red before:content-['']", imageFirst ? "lg:order-1" : "lg:order-2")}>
                <Image alt={service.imageAlt} className="aspect-[4/3] w-full object-cover" height={1200} loading="eager" sizes="(min-width: 1024px) 42vw, 90vw" src={service.image} unoptimized width={1200} />
              </div>
            </article>
          );
        })}
      </ContentContainer>
    </section>
  );
}

function InformationCard({ card }: { card: LocalizedInfoCard }) {
  return (
    <article className={cn("flex min-h-full flex-col px-6 py-10 text-center text-white sm:px-8 lg:px-10 lg:py-12", card.tone === "blue" ? "bg-brand-blue" : "bg-brand-red")}>
      <h2 className="text-center text-2xl font-black uppercase sm:text-3xl">{card.title}</h2>
      <p className="mt-5 leading-7 text-white/95">{card.description}</p>
      <ul className="mx-auto mt-5 list-disc space-y-1.5 pl-5 text-left leading-7 text-white/95">
        {card.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
      </ul>
      {card.closing && <p className="mt-6 leading-7 text-white/95">{card.closing}</p>}
    </article>
  );
}

export function HvacInformationCards() {
  return (
    <section aria-label="HVAC inspection and replacement" className="pb-16 sm:pb-20 lg:pb-24">
      <ContentContainer className="grid items-stretch gap-6 lg:grid-cols-2">
        {lexingtonServiceArea.hvacCards.map((card) => <InformationCard card={card} key={card.title} />)}
      </ContentContainer>
    </section>
  );
}

export function CommercialHvacBand() {
  const service = lexingtonServiceArea.commercialHvac;

  return (
    <section className="mx-auto max-w-[1600px] bg-brand-red text-white">
      <article className="grid lg:grid-cols-3">
        <div className="relative min-h-72 lg:min-h-[430px]">
          <Image alt={service.imageAlt} className="object-cover" fill loading="eager" sizes="(min-width: 1024px) 34vw, 100vw" src={service.image} unoptimized />
        </div>
        <div className="flex flex-col justify-center px-5 py-12 sm:px-8 lg:col-span-2 lg:px-12 xl:px-16">
          <ServiceCopy lightText service={service} />
        </div>
      </article>
    </section>
  );
}

export function NewHomeBuildsSection() {
  const service = lexingtonServiceArea.newBuilds;

  return (
    <section className="mx-auto max-w-[1600px] bg-soft-gray">
      <article className="grid lg:grid-cols-3">
        <div className="flex flex-col justify-center px-5 py-12 sm:px-8 lg:col-span-2 lg:px-12 xl:px-16">
          <ServiceCopy service={service} />
        </div>
        <div className="relative min-h-72 lg:min-h-[430px]">
          <Image alt={service.imageAlt} className="object-cover" fill loading="eager" sizes="(min-width: 1024px) 34vw, 100vw" src={service.image} unoptimized />
        </div>
      </article>
    </section>
  );
}

export function RestaurantServiceCards() {
  return (
    <section aria-label="Lexington restaurant equipment services" className="pb-16 sm:pb-20 lg:pb-24">
      <ContentContainer className="grid items-stretch gap-6 lg:grid-cols-2">
        {lexingtonServiceArea.restaurantServices.map((card) => <InformationCard card={card} key={card.title} />)}
      </ContentContainer>
    </section>
  );
}

export function LexingtonFaqSection() {
  const answeredFaqs = lexingtonServiceArea.faqs.filter((faq) => faq.answer !== null);

  if (answeredFaqs.length === 0) return null;

  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <SectionHeading centered className="section-title-rule">Frequently Asked Questions</SectionHeading>
      <ContentContainer className="mt-12" size="faq">
        <FaqAccordion idPrefix="lexington-faq" items={answeredFaqs} />
      </ContentContainer>
    </section>
  );
}

export function LexingtonWhyChooseSection() {
  const service = lexingtonServiceArea.whyChoose;

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <ContentContainer className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div><ServiceCopy service={service} /></div>
        <div className="relative mx-auto w-full max-w-xl before:absolute before:inset-2 before:z-10 before:border-2 before:border-brand-red before:content-['']">
          <Image alt={service.imageAlt} className="aspect-[4/3] w-full object-cover" height={1200} loading="eager" sizes="(min-width: 1024px) 42vw, 90vw" src={service.image} unoptimized width={1200} />
        </div>
      </ContentContainer>
    </section>
  );
}

export function LexingtonFinalCta() {
  const content = lexingtonServiceArea.finalCta;

  return (
    <section className="bg-soft-gray py-16 text-center sm:py-20">
      <ContentContainer>
        <div className="mx-auto max-w-4xl">
          <SectionHeading centered>{content.title}</SectionHeading>
          <div className="mt-6 space-y-5 leading-7 text-charcoal/85 sm:text-lg">
            {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <PrimaryCta className="mt-8" href={siteConfig.phone.href}>{content.ctaLabel}</PrimaryCta>
        </div>
      </ContentContainer>
    </section>
  );
}

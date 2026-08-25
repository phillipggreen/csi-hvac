import Image from "next/image";

import { ContentContainer } from "@/components/shared/content-container";
import { PrimaryCta } from "@/components/shared/primary-cta";
import type { LocalizedInfoCard, LocalizedServiceSection } from "@/data/service-areas";
import { lexingtonServiceArea } from "@/data/service-areas";
import { siteConfig } from "@/data/site-config";

function ServiceDetails({ service, inverted = false }: { service: LocalizedServiceSection; inverted?: boolean }) {
  return (
    <>
      <p className={inverted ? "text-white/78" : "text-charcoal/80"}>{service.description}</p>
      <ul className="mt-6 space-y-3">
        {service.bullets.map((bullet) => (
          <li className="flex gap-3" key={bullet}>
            <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-brand-red" />
            <span className={inverted ? "text-white/86" : "text-charcoal/82"}>{bullet}</span>
          </li>
        ))}
      </ul>
      {service.closing ? (
        <p className={`mt-6 font-semibold ${inverted ? "text-white" : "text-brand-blue"}`}>{service.closing}</p>
      ) : null}
    </>
  );
}

function InformationCard({ card, index }: { card: LocalizedInfoCard; index: number }) {
  return (
    <article className="border-t-4 border-brand-red bg-white p-6 shadow-[0_18px_50px_rgba(8,37,68,0.08)] sm:p-8 lg:p-10">
      <p className="text-xs font-black tracking-[0.2em] text-brand-red">0{index}</p>
      <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-brand-blue sm:text-3xl">{card.title}</h3>
      <div className="mt-5 text-[15px] leading-7">
        <ServiceDetails service={card} />
      </div>
    </article>
  );
}

export function LexingtonHvacServices() {
  const [installation, repair, maintenance] = lexingtonServiceArea.hvacServices;

  return (
    <>
      <section aria-labelledby="lexington-core-hvac" className="bg-white py-16 sm:py-20 lg:py-28">
        <ContentContainer size="wide">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-red">Residential heating &amp; cooling</p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-tight tracking-[-0.025em] text-brand-blue sm:text-4xl lg:text-5xl" id="lexington-core-hvac">
              Core HVAC service for Lexington properties.
            </h2>
          </div>

          <article className="mt-10 scroll-mt-28 overflow-hidden bg-brand-blue lg:grid lg:grid-cols-[0.92fr_1.08fr]" id="hvac-installation">
            <div className="relative min-h-[340px] sm:min-h-[440px] lg:min-h-full">
              <Image alt={installation.imageAlt ?? ""} className="object-cover" fill sizes="(min-width: 1024px) 44vw, 100vw" src={installation.image ?? ""} />
            </div>
            <div className="p-7 text-[15px] leading-7 sm:p-10 lg:p-12 xl:p-14">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/60">Primary service</p>
              <h3 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">{installation.title}</h3>
              <div className="mt-6">
                <ServiceDetails inverted service={installation} />
              </div>
              <PrimaryCta className="mt-8" href={siteConfig.phone.href}>{installation.ctaLabel}</PrimaryCta>
            </div>
          </article>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {[repair, maintenance].map((service) => (
              <article className="scroll-mt-28 border border-brand-blue/15 p-6 sm:p-8 lg:p-10" id={service === repair ? "hvac-repair" : "hvac-maintenance"} key={service.title}>
                <h3 className="text-2xl font-black uppercase leading-tight text-brand-blue sm:text-3xl">{service.title}</h3>
                <div className="mt-5 text-[15px] leading-7">
                  <ServiceDetails service={service} />
                </div>
                <PrimaryCta className="mt-8" href={siteConfig.phone.href} tone="blue">{service.ctaLabel}</PrimaryCta>
              </article>
            ))}
          </div>
        </ContentContainer>
      </section>

      <section aria-labelledby="lexington-system-guidance" className="bg-[#eef3f7] py-16 sm:py-20 lg:py-24">
        <ContentContainer size="wide">
          <div className="max-w-3xl">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-red">System guidance</p>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-brand-blue sm:text-4xl" id="lexington-system-guidance">
                Inspect with clarity. Replace with confidence.
              </h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {lexingtonServiceArea.hvacCards.map((card, index) => (
              <InformationCard card={card} index={index + 1} key={card.title} />
            ))}
          </div>
        </ContentContainer>
      </section>
    </>
  );
}

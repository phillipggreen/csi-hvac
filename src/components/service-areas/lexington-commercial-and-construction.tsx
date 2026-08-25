import Image from "next/image";

import { ContentContainer } from "@/components/shared/content-container";
import { PrimaryCta } from "@/components/shared/primary-cta";
import type { LocalizedServiceSection } from "@/data/service-areas";
import { lexingtonServiceArea } from "@/data/service-areas";
import { siteConfig } from "@/data/site-config";

function FeatureCopy({ service, inverted = false }: { service: LocalizedServiceSection; inverted?: boolean }) {
  return (
    <div className="text-[15px] leading-7">
      <p className={inverted ? "text-white/78" : "text-charcoal/80"}>{service.description}</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
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
    </div>
  );
}

export function LexingtonCommercialAndConstruction() {
  const { commercialHvac, newBuilds } = lexingtonServiceArea;

  return (
    <>
      <section className="scroll-mt-28 bg-brand-blue py-16 text-white sm:py-20 lg:py-28" id="commercial-hvac">
        <ContentContainer size="wide">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
            <div className="relative min-h-[340px] overflow-hidden sm:min-h-[440px] lg:min-h-[560px]">
              <Image alt={commercialHvac.imageAlt ?? ""} className="object-cover" fill sizes="(min-width: 1024px) 43vw, 100vw" src={commercialHvac.image ?? ""} />
              <div className="absolute inset-x-0 bottom-0 h-1.5 bg-brand-red" />
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/60">Business comfort systems</p>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl">{commercialHvac.title}</h2>
              <div className="mt-6">
                <FeatureCopy inverted service={commercialHvac} />
              </div>
              <PrimaryCta className="mt-8" href={siteConfig.phone.href}>{commercialHvac.ctaLabel}</PrimaryCta>
            </div>
          </div>
        </ContentContainer>
      </section>

      <section className="scroll-mt-28 overflow-hidden bg-white py-12 sm:py-16 lg:py-20" id="new-construction">
        <ContentContainer size="wide">
          <div className="grid overflow-hidden lg:grid-cols-[1.38fr_1fr]">
            <div className="relative min-h-[340px] sm:min-h-[460px] lg:min-h-[620px]">
              <Image alt={newBuilds.imageAlt ?? ""} className="object-cover" fill sizes="(min-width: 1024px) 56vw, 100vw" src={newBuilds.image ?? ""} />
            </div>
            <div className="relative flex flex-col justify-center border-t-4 border-brand-red bg-[#eef3f7] p-7 sm:p-10 lg:border-t-0 lg:border-l-4 lg:p-10 xl:p-14">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-red">New residential construction</p>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight tracking-[-0.025em] text-brand-blue sm:text-4xl">{newBuilds.title}</h2>
              <div className="mt-6">
                <FeatureCopy service={newBuilds} />
              </div>
              <PrimaryCta className="mt-8" href={siteConfig.phone.href}>{newBuilds.ctaLabel}</PrimaryCta>
            </div>
          </div>
        </ContentContainer>
      </section>
    </>
  );
}

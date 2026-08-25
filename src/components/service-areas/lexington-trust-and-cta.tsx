import Image from "next/image";

import { ContentContainer } from "@/components/shared/content-container";
import { PrimaryCta } from "@/components/shared/primary-cta";
import { lexingtonServiceArea } from "@/data/service-areas";
import { siteConfig } from "@/data/site-config";

export function LexingtonTrustAndCta() {
  const { finalCta, whyChoose } = lexingtonServiceArea;

  return (
    <>
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <ContentContainer size="wide">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-16">
            <div className="relative min-h-[440px] overflow-hidden sm:min-h-[560px] lg:min-h-[680px]">
              <Image alt={whyChoose.imageAlt ?? ""} className="object-cover" fill sizes="(min-width: 1024px) 37vw, 100vw" src={whyChoose.image ?? ""} />
              <div className="absolute inset-x-0 bottom-0 h-1.5 bg-brand-red" />
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-red">Local expertise. Responsive service.</p>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight tracking-[-0.025em] text-brand-blue sm:text-4xl lg:text-5xl">{whyChoose.title}</h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-charcoal/80">{whyChoose.description}</p>
              <ol className="mt-8 divide-y divide-brand-blue/15 border-y border-brand-blue/15">
                {whyChoose.bullets.map((bullet, index) => (
                  <li className="grid grid-cols-[2.5rem_1fr] gap-3 py-5" key={bullet}>
                    <span aria-hidden="true" className="text-sm font-black text-brand-red">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-[15px] leading-7 text-charcoal/82">{bullet}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-7 text-lg font-bold leading-8 text-brand-blue">{whyChoose.closing}</p>
              <PrimaryCta className="mt-8" href={siteConfig.phone.href}>{whyChoose.ctaLabel}</PrimaryCta>
            </div>
          </div>
        </ContentContainer>
      </section>

      <section className="bg-brand-red py-16 text-white sm:py-20 lg:py-24">
        <ContentContainer size="wide">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/70">Lexington service</p>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl">{finalCta.title}</h2>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryCta href={siteConfig.phone.href} tone="white">{finalCta.ctaLabel}</PrimaryCta>
                <PrimaryCta className="border border-white/55" href="/contact" tone="red">Contact Us</PrimaryCta>
              </div>
            </div>
            <div className="space-y-5 text-base leading-8 text-white/85">
              {finalCta.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </ContentContainer>
      </section>
    </>
  );
}

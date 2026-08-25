import { Check, Phone } from "lucide-react";
import Link from "next/link";

import { ContentContainer } from "@/components/shared/content-container";
import { hvacServicesContent } from "@/data/hvac-services-content";
import { siteConfig } from "@/data/site-config";

export function HvacTrustAndCta() {
  const { finalCta, whyChoose } = hvacServicesContent;

  return (
    <>
      <section className="bg-blue-gray py-20 sm:py-24 lg:py-32" aria-labelledby="why-choose-heading">
        <ContentContainer className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20" size="wide">
          <div className="lg:pt-2">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-red sm:text-sm">Why Comfort Specialist</p>
            <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.04em] text-brand-navy text-balance sm:text-5xl lg:text-6xl" id="why-choose-heading">{whyChoose.title}</h2>
            <p className="mt-7 max-w-lg text-lg leading-8 text-slate-700">
              Local experience, broad HVAC capability, and clear service for Richmond homes, businesses, and construction projects.
            </p>
            <Link
              className="mt-9 inline-flex min-h-13 items-center justify-center bg-brand-red px-7 py-3.5 text-sm font-black uppercase tracking-[0.08em] text-white hover:-translate-y-0.5 hover:bg-brand-red-dark focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
              href={siteConfig.phone.href}
            >
              Call {siteConfig.phone.display}
            </Link>
          </div>

          <ol className="border-t border-slate-300">
            {whyChoose.bullets.map((bullet, index) => (
              <li className="grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-slate-300 py-6 sm:gap-6 sm:py-7" key={bullet}>
                <span className="text-xs font-black tracking-[0.16em] text-brand-red" aria-hidden="true">0{index + 1}</span>
                <span className="text-lg font-black leading-7 text-brand-navy sm:text-xl">{bullet}</span>
                <span className="flex size-9 items-center justify-center bg-white text-brand-red shadow-sm" aria-hidden="true">
                  <Check className="size-4" strokeWidth={3} />
                </span>
              </li>
            ))}
          </ol>
        </ContentContainer>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <ContentContainer size="wide">
          <div className="relative isolate overflow-hidden bg-brand-red px-6 py-14 text-white sm:px-10 sm:py-16 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12 lg:px-16 lg:py-18">
            <div className="absolute -top-28 -right-24 -z-10 size-80 rounded-full border-[48px] border-white/7" aria-hidden="true" />
            <div className="max-w-4xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-white/72 sm:text-sm">Richmond HVAC service</p>
              <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">{finalCta.title}</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82">{finalCta.description}</p>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col">
              <Link
                className="inline-flex min-h-14 items-center justify-center gap-3 bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.08em] text-brand-red hover:-translate-y-0.5 hover:bg-blue-gray focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white"
                href={siteConfig.phone.href}
              >
                <Phone aria-hidden="true" className="size-5 fill-current" />
                {finalCta.ctaLabel}
              </Link>
              <Link
                className="inline-flex min-h-14 items-center justify-center border border-white/65 px-7 py-4 text-sm font-black uppercase tracking-[0.08em] text-white hover:-translate-y-0.5 hover:bg-white hover:text-brand-red focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white"
                href="/contact"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </ContentContainer>
      </section>
    </>
  );
}

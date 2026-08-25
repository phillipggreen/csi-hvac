import { Phone } from "lucide-react";
import Link from "next/link";

import { ContentContainer } from "@/components/shared/content-container";
import { homeRedesignContent } from "@/data/home-redesign-content";
import { siteConfig } from "@/data/site-config";

export function ModernHomeCta() {
  const content = homeRedesignContent.closingCta;

  return (
    <section className="bg-blue-gray py-16 sm:py-20 lg:py-24">
      <ContentContainer>
        <div className="relative isolate overflow-hidden bg-brand-red px-6 py-14 text-white sm:px-10 sm:py-16 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12 lg:px-16 lg:py-18">
          <div className="absolute -top-28 -right-24 -z-10 size-80 rounded-full border-[48px] border-white/7" aria-hidden="true" />
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/72 sm:text-sm">{content.eyebrow}</p>
            <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">{content.heading}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">{content.description}</p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col">
            <Link className="inline-flex min-h-14 items-center justify-center gap-3 bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.08em] text-brand-red hover:-translate-y-0.5 hover:bg-blue-gray focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white" href={siteConfig.phone.href}>
              <Phone aria-hidden="true" className="size-5 fill-current" />
              Call Now
            </Link>
            <Link className="inline-flex min-h-14 items-center justify-center border border-white/65 px-7 py-4 text-sm font-black uppercase tracking-[0.08em] text-white hover:-translate-y-0.5 hover:bg-white hover:text-brand-red focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white" href="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}

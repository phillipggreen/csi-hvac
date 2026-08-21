import { PrimaryCta } from "@/components/shared/primary-cta";
import { homeContent } from "@/data/home-content";
import { siteConfig } from "@/data/site-config";

export function HomeCta() {
  const { heading, paragraphs } = homeContent.bottomCta;
  return (
    <section className="wave-section relative isolate overflow-hidden bg-brand-blue-light py-16 text-center text-white sm:py-20 lg:py-24">
      <div className="wave wave-top" aria-hidden="true" />
      <div className="wave wave-bottom" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-balance text-3xl font-black uppercase sm:text-4xl">{heading}</h2>
        <div className="mx-auto mt-6 max-w-3xl space-y-5 leading-7 text-white/95">
          {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <PrimaryCta className="mt-8" href={siteConfig.phone.href}>Call Now</PrimaryCta>
      </div>
    </section>
  );
}

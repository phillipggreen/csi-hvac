import { Clock3, Phone } from "lucide-react";

import { ContentContainer } from "@/components/shared/content-container";
import { PrimaryCta } from "@/components/shared/primary-cta";
import { siteConfig } from "@/data/site-config";

export function ContactContent() {
  return (
    <section className="bg-[#eef3f7] py-14 sm:py-18 lg:py-24">
      <ContentContainer size="wide">
        <div className="grid overflow-hidden bg-white shadow-[0_22px_65px_rgba(8,37,68,0.1)] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14 xl:p-16">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-red">Call Comfort Specialist</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-black uppercase leading-tight tracking-[-0.025em] text-brand-blue sm:text-4xl lg:text-5xl">
              Reach Out Today
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-charcoal/80 sm:text-lg">
              Need HVAC or restaurant equipment service? Give Comfort Specialist Heating &amp; Cooling a call today and we&apos;ll be happy to discuss your service needs.
            </p>
            <a
              aria-label={`Call Comfort Specialist Heating & Cooling at ${siteConfig.phone.display}`}
              className="mt-9 inline-flex min-h-16 w-fit items-center justify-center gap-3 bg-brand-red px-7 py-4 text-lg font-black uppercase text-white transition-colors hover:bg-brand-red-dark focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-red sm:px-9 sm:text-xl"
              href={siteConfig.phone.href}
            >
              <Phone aria-hidden="true" className="size-6 fill-current" />
              {siteConfig.phone.display}
            </a>
          </div>

          <aside className="bg-brand-blue p-7 text-white sm:p-10 lg:p-12 xl:p-14" aria-labelledby="contact-business-hours">
            <div className="flex items-center gap-3 text-white/65">
              <Clock3 aria-hidden="true" className="size-5" />
              <p className="text-xs font-extrabold uppercase tracking-[0.22em]">When to call</p>
            </div>
            <h2 className="mt-4 text-2xl font-black uppercase sm:text-3xl" id="contact-business-hours">Business Hours</h2>
            <dl className="mt-7 divide-y divide-white/15 border-y border-white/15">
              {siteConfig.businessHours.map((item) => (
                <div className="flex min-h-12 items-center justify-between gap-4 py-3 text-sm sm:text-base" key={item.day}>
                  <dt className="font-bold">{item.day}</dt>
                  <dd className="text-right text-white/75">{item.hours}</dd>
                </div>
              ))}
            </dl>
            <PrimaryCta className="mt-8 w-full sm:w-auto" href={siteConfig.phone.href} tone="white">Call Now</PrimaryCta>
          </aside>
        </div>
      </ContentContainer>
    </section>
  );
}

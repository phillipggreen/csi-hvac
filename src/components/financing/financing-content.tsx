import { ArrowUpRight, Check, Clock3, Phone } from "lucide-react";

import { ContentContainer } from "@/components/shared/content-container";
import { PrimaryCta } from "@/components/shared/primary-cta";
import { siteConfig } from "@/data/site-config";

const financingUses = [
  "HVAC replacement",
  "New system installation",
  "Larger repair expenses",
  "Other eligible service or equipment costs",
] as const;

const financingSteps = [
  {
    title: "Request Service",
    description: "Contact Comfort Specialist to discuss your HVAC or equipment needs.",
  },
  {
    title: "Review Financing",
    description: `Eligible customers can review available financing options through ${siteConfig.financing.provider}.`,
  },
  {
    title: `Apply Through ${siteConfig.financing.provider}`,
    description: `Complete the financing application directly through ${siteConfig.financing.provider}’s secure application experience.`,
  },
] as const;

function FinancingApplicationActions() {
  const applicationUrl = siteConfig.financing.applicationUrl;

  return (
    <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      {applicationUrl ? (
        <a
          aria-label={`Apply for financing through ${siteConfig.financing.provider} (opens in a new tab)`}
          className="inline-flex min-h-14 items-center justify-center gap-2 bg-brand-red px-7 py-4 text-center text-sm font-extrabold uppercase text-white hover:bg-brand-red-dark focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white"
          href={applicationUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          Apply for Financing
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </a>
      ) : (
        <div
          className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/25 bg-white/8 px-6 py-4 text-center text-sm font-extrabold uppercase tracking-[0.025em] text-white/80"
          role="status"
        >
          <Clock3 aria-hidden="true" className="size-5 shrink-0 text-white/60" />
          Online Financing Application Coming Soon
        </div>
      )}
      <a
        aria-label={`Call Comfort Specialist Heating & Cooling at ${siteConfig.phone.display}`}
        className="inline-flex min-h-14 items-center justify-center gap-2 bg-white px-7 py-4 text-sm font-extrabold uppercase text-brand-navy hover:bg-blue-gray focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white"
        href={siteConfig.phone.href}
      >
        <Phone aria-hidden="true" className="size-4 fill-current" />
        Call {siteConfig.phone.display}
      </a>
      <PrimaryCta className="min-h-14 border border-white/35 bg-transparent hover:bg-white/10" href="/contact" tone="white">
        Contact Us
      </PrimaryCta>
    </div>
  );
}

export function FinancingContent() {
  return (
    <>
      <section className="bg-[#eef3f7] py-14 sm:py-18 lg:py-24">
        <ContentContainer size="wide">
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-24">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-red">Financing Overview</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-black uppercase leading-tight tracking-[-0.025em] text-brand-blue sm:text-4xl lg:text-5xl">
                A More Flexible Way to Handle HVAC Costs
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-charcoal/78 sm:text-lg">
                Financing may help eligible customers manage qualifying HVAC service and equipment costs over time. Available options depend on the purchase and are reviewed through {siteConfig.financing.provider}.
              </p>
            </div>

            <div className="border-t-4 border-brand-red bg-white px-6 py-3 shadow-[0_22px_60px_rgba(8,37,68,0.09)] sm:px-9 sm:py-5">
              <p className="py-4 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-blue/55">Financing may be considered for</p>
              <ul className="divide-y divide-brand-blue/12 border-t border-brand-blue/12">
                {financingUses.map((item) => (
                  <li className="flex min-h-16 items-center gap-4 py-4 text-base font-bold text-brand-blue sm:text-lg" key={item}>
                    <span className="inline-flex size-8 shrink-0 items-center justify-center bg-brand-blue text-white">
                      <Check aria-hidden="true" className="size-4" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ContentContainer>
      </section>

      <section className="relative isolate overflow-hidden bg-brand-navy py-16 text-white sm:py-20 lg:py-24">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(38,65,170,0.55),transparent_34%),linear-gradient(115deg,transparent_45%,rgba(255,255,255,0.04))]" />
        <ContentContainer className="relative z-10" size="wide">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 xl:gap-24">
            <div className="border border-white/18 bg-white/7 p-8 sm:p-10 lg:p-12">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/55">Financing Provider</p>
              <p className="mt-5 break-words text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                {siteConfig.financing.provider}
              </p>
              <div aria-hidden="true" className="mt-7 h-1 w-20 bg-brand-red" />
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/55">Provider Details</p>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl">
                Financing Through {siteConfig.financing.provider}
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
                {siteConfig.financing.provider} provides financing directly to eligible customers. Comfort Specialist can help identify your service or equipment needs, while {siteConfig.financing.provider} determines eligibility, credit decisions, terms, conditions, and any available promotional offers.
              </p>
              <p className="mt-7 border-l-2 border-brand-red pl-5 text-sm leading-7 text-white/60">
                Financing is provided by {siteConfig.financing.provider} and is subject to credit approval. Terms, conditions, and available promotions are determined by {siteConfig.financing.provider}.
              </p>
            </div>
          </div>
        </ContentContainer>
      </section>

      <section className="bg-white py-14 sm:py-18 lg:py-24">
        <ContentContainer size="wide">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-red">How It Works</p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-tight tracking-[-0.025em] text-brand-blue sm:text-4xl lg:text-5xl">
              A Clear Path Forward
            </h2>
          </div>

          <ol className="mt-10 grid border-y border-brand-blue/15 md:grid-cols-3">
            {financingSteps.map((step, index) => (
              <li className="relative py-8 md:px-8 md:first:pl-0 md:last:pr-0 md:not-first:border-l md:not-first:border-brand-blue/15 lg:py-10 lg:px-10" key={step.title}>
                <span className="text-sm font-black tracking-[0.18em] text-brand-red">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-black uppercase text-brand-blue sm:text-2xl">{step.title}</h3>
                <p className="mt-4 max-w-sm text-base leading-7 text-charcoal/72">{step.description}</p>
              </li>
            ))}
          </ol>
        </ContentContainer>
      </section>

      <section className="bg-[#eef3f7] py-14 sm:py-18 lg:py-24">
        <ContentContainer size="wide">
          <div className="overflow-hidden bg-brand-blue px-7 py-10 text-white shadow-[0_24px_70px_rgba(8,37,68,0.15)] sm:px-10 sm:py-12 lg:px-16 lg:py-16">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/60">Next Steps</p>
            <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl">
              Discuss Your Project and Financing Options
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
              Call Comfort Specialist Heating &amp; Cooling to discuss your service needs, or contact us for more information while online applications are being prepared.
            </p>
            <FinancingApplicationActions />
          </div>
        </ContentContainer>
      </section>
    </>
  );
}

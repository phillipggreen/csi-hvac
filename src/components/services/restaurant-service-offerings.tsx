import Link from "next/link";

import { ContentContainer } from "@/components/shared/content-container";
import { restaurantEquipmentContent } from "@/data/restaurant-equipment-content";
import { siteConfig } from "@/data/site-config";

export function RestaurantServiceOfferings() {
  const [repair, installation, replacement, refrigeration, ...equipmentCategories] = restaurantEquipmentContent.services;

  return (
    <>
      <section className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-32" id="primary-equipment-services">
        <ContentContainer size="wide">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-red sm:text-sm">Primary equipment services</p>
              <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.04em] text-brand-navy text-balance sm:text-5xl lg:text-6xl">
                Keep the kitchen ready for the workday.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-slate-700">
              Repair, installation, and replacement support the equipment restaurant teams rely on throughout daily service.
            </p>
          </div>

          <div className="mt-14 grid overflow-hidden border border-slate-200 lg:mt-18 lg:grid-cols-[1.12fr_0.88fr]">
            <article className="relative isolate flex flex-col justify-center overflow-hidden bg-brand-navy px-6 py-12 text-white sm:px-10 sm:py-16 lg:min-h-[720px] lg:px-14 xl:px-18">
              <span className="absolute -right-8 -bottom-20 -z-10 text-[17rem] font-black leading-none text-white/[0.035]" aria-hidden="true">01</span>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-300">Restore working equipment</p>
              <h3 className="mt-5 max-w-xl text-4xl font-black leading-none tracking-[-0.035em] sm:text-5xl lg:text-6xl">{repair.title}</h3>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">{repair.description}</p>
              <Link
                className="mt-9 inline-flex min-h-12 self-start items-center border-b-2 border-brand-red pb-2 text-sm font-black uppercase tracking-[0.08em] text-white hover:border-white focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white"
                href={siteConfig.phone.href}
              >
                Call About a Repair
              </Link>
            </article>

            <div className="grid bg-white">
              {[installation, replacement].map((service, index) => (
                <article className="flex flex-col justify-center border-t border-slate-200 px-6 py-10 first:border-t-0 sm:px-10 sm:py-12 lg:px-12 lg:py-14" key={service.title}>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-red">0{index + 2} / Equipment service</p>
                  <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] text-brand-navy sm:text-4xl">{service.title}</h3>
                  <p className="mt-6 leading-8 text-slate-700">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </ContentContainer>
      </section>

      <section className="bg-blue-gray py-20 sm:py-24 lg:py-32" aria-labelledby="equipment-categories-heading">
        <ContentContainer size="wide">
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-red sm:text-sm">Equipment categories</p>
            <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.04em] text-brand-navy text-balance sm:text-5xl lg:text-6xl" id="equipment-categories-heading">
              Service across the commercial kitchen line.
            </h2>
          </div>

          <article className="mt-14 grid overflow-hidden bg-brand-navy text-white lg:mt-18 lg:grid-cols-[0.68fr_1.32fr]">
            <div className="flex flex-col justify-between border-b border-white/15 px-6 py-10 sm:px-10 sm:py-12 lg:border-r lg:border-b-0 lg:px-12 lg:py-14">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-red-300">EQ-01 / Refrigeration</p>
                <p className="mt-6 max-w-sm text-2xl font-black leading-tight text-white/90 sm:text-3xl">Temperature-sensitive equipment deserves clear priority.</p>
              </div>
              <Link
                className="mt-9 inline-flex min-h-12 self-start items-center border-b-2 border-brand-red pb-2 text-sm font-black uppercase tracking-[0.08em] text-white hover:border-white focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white"
                href={siteConfig.phone.href}
              >
                Call for Equipment Service
              </Link>
            </div>
            <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16 xl:px-18">
              <h3 className="text-4xl font-black leading-none tracking-[-0.035em] sm:text-5xl">{refrigeration.title}</h3>
              <p className="mt-7 max-w-3xl text-base leading-8 text-white/76 sm:text-lg">{refrigeration.description}</p>
            </div>
          </article>

          <div className="grid gap-x-12 sm:grid-cols-2 lg:gap-x-18">
            {equipmentCategories.map((service, index) => (
              <article className="group border-t border-slate-300 py-9 transition-colors hover:border-brand-red sm:py-10" key={service.title}>
                <div className="grid grid-cols-[auto_1fr] gap-5 sm:gap-7">
                  <span className="pt-1 text-xs font-black tracking-[0.14em] text-brand-red" aria-hidden="true">EQ-0{index + 2}</span>
                  <div>
                    <h3 className="text-2xl font-black leading-tight tracking-[-0.025em] text-brand-navy sm:text-3xl">{service.title}</h3>
                    <p className="mt-5 leading-8 text-slate-700">{service.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </ContentContainer>
      </section>
    </>
  );
}

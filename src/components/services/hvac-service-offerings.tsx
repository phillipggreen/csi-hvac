import Image from "next/image";
import Link from "next/link";

import { ContentContainer } from "@/components/shared/content-container";
import { hvacServicesContent } from "@/data/hvac-services-content";
import { siteConfig } from "@/data/site-config";

export function HvacServiceOfferings() {
  const primaryServices = hvacServicesContent.services.slice(0, 3);
  const additionalServices = hvacServicesContent.services.slice(3);
  const [installation, repair, maintenance] = primaryServices;

  return (
    <>
      <section className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-32" id="core-hvac-services">
        <ContentContainer size="wide">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-red sm:text-sm">Core HVAC services</p>
              <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.04em] text-brand-navy text-balance sm:text-5xl lg:text-6xl">
                The work that keeps comfort moving.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-slate-700">
              Installation, repair, and maintenance form the foundation of our residential and commercial HVAC work in Richmond and the surrounding communities.
            </p>
          </div>

          <article className="mt-14 grid overflow-hidden bg-brand-navy text-white lg:mt-18 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative min-h-[460px] sm:min-h-[600px] lg:min-h-[680px]">
              <Image
                alt="Indoor HVAC system and ductwork installed during new construction"
                className="object-cover object-center transition-transform duration-500 hover:scale-[1.015]"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                src="/images/HVAC-1.jpg"
              />
              <span className="absolute top-5 left-5 bg-white px-4 py-2 text-xs font-black tracking-[0.18em] text-brand-navy" aria-hidden="true">01</span>
            </div>
            <div className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16 xl:px-18">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-300">Plan it right from the start</p>
              <h3 className="mt-4 text-4xl font-black leading-none tracking-[-0.035em] sm:text-5xl">{installation.title}</h3>
              <p className="mt-7 max-w-3xl text-base leading-8 text-white/78 sm:text-lg">{installation.description}</p>
              <Link
                className="mt-9 inline-flex min-h-12 self-start items-center border-b-2 border-brand-red pb-2 text-sm font-black uppercase tracking-[0.08em] text-white hover:border-white focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white"
                href={siteConfig.phone.href}
              >
                Discuss an Installation
              </Link>
            </div>
          </article>

          <div className="grid border-x border-b border-slate-200 lg:grid-cols-2">
            {[repair, maintenance].map((service, index) => (
              <article className="flex flex-col px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16 lg:[&:nth-child(2)]:border-l lg:[&:nth-child(2)]:border-slate-200" key={service.title}>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-red">0{index + 2} / Essential service</p>
                <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] text-brand-navy sm:text-4xl">{service.title}</h3>
                <p className="mt-6 flex-1 leading-8 text-slate-700">{service.description}</p>
              </article>
            ))}
          </div>
        </ContentContainer>
      </section>

      <section className="bg-blue-gray py-20 sm:py-24 lg:py-32" aria-labelledby="additional-hvac-heading">
        <ContentContainer size="wide">
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-red sm:text-sm">Additional HVAC capabilities</p>
            <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.04em] text-brand-navy text-balance sm:text-5xl lg:text-6xl" id="additional-hvac-heading">
              More ways to improve comfort, airflow, and control.
            </h2>
          </div>

          <div className="mt-14 grid gap-x-12 sm:grid-cols-2 lg:mt-18 lg:gap-x-18">
            {additionalServices.map((service, index) => (
              <article className="group border-t border-slate-300 py-9 transition-colors hover:border-brand-red sm:py-10" key={service.title}>
                <div className="grid grid-cols-[auto_1fr] gap-5 sm:gap-7">
                  <span className="pt-1 text-xs font-black tracking-[0.16em] text-brand-red" aria-hidden="true">0{index + 4}</span>
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

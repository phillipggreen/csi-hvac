import Image from "next/image";
import Link from "next/link";

import { ContentContainer } from "@/components/shared/content-container";
import { hvacServicesContent } from "@/data/hvac-services-content";
import { siteConfig } from "@/data/site-config";

export function HvacPerformanceAndConstruction() {
  const performanceServices = [
    ...hvacServicesContent.supportFeatures[0].items,
    ...hvacServicesContent.supportFeatures[1].items,
  ];
  const { newBuilds } = hvacServicesContent;

  return (
    <>
      <section className="bg-brand-navy py-20 text-white sm:py-24 lg:py-32" aria-labelledby="performance-heading">
        <ContentContainer size="wide">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-300 sm:text-sm">System performance</p>
              <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl" id="performance-heading">
                Better balance from equipment to airflow.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-white/72">
              Focused services help address cooling performance, uneven temperatures, operating efficiency, and the filters that support clean airflow.
            </p>
          </div>

          <div className="mt-14 grid overflow-hidden border border-white/14 lg:mt-18 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="relative min-h-[420px] sm:min-h-[560px] lg:min-h-[780px]">
              <Image
                alt={hvacServicesContent.supportFeatures[0].imageAlt}
                className="object-cover object-center transition-transform duration-500 hover:scale-[1.015]"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                src={hvacServicesContent.supportFeatures[0].image}
              />
            </div>
            <div className="grid content-center px-6 py-8 sm:px-10 sm:py-10 xl:grid-cols-2 xl:px-12">
              {performanceServices.map((service, index) => (
                <article className="border-t border-white/18 py-8 xl:px-7 xl:py-10 xl:[&:nth-child(odd)]:border-r" key={service.title}>
                  <p className="text-xs font-black tracking-[0.16em] text-red-300" aria-hidden="true">0{index + 1}</p>
                  <h3 className="mt-4 text-2xl font-black leading-tight tracking-[-0.025em] sm:text-3xl">{service.title}</h3>
                  <p className="mt-5 leading-8 text-white/72">{service.description}</p>
                </article>
              ))}
              <Link
                className="mt-3 inline-flex min-h-13 items-center justify-center bg-brand-red px-7 py-3.5 text-sm font-black uppercase tracking-[0.08em] text-white hover:-translate-y-0.5 hover:bg-brand-red-dark focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white xl:col-span-2 xl:mx-7 xl:justify-self-start"
                href={siteConfig.phone.href}
              >
                Call About System Performance
              </Link>
            </div>
          </div>
        </ContentContainer>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="new-builds-heading">
        <ContentContainer size="wide">
          <div className="grid overflow-hidden bg-brand-navy lg:min-h-[660px] lg:grid-cols-[1.3fr_0.9fr]">
            <div className="relative min-h-[380px] overflow-hidden sm:min-h-[520px] lg:min-h-full">
              <Image
                alt="HVAC ductwork installed in a new construction project"
                className="object-cover object-center transition-transform duration-500 hover:scale-[1.015]"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                src="/images/HVAC-6.jpg"
              />
              <span className="absolute top-5 left-5 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-brand-navy">New construction</span>
            </div>
            <div className="relative z-10 flex flex-col justify-center bg-brand-navy px-6 py-12 text-white sm:px-10 sm:py-14 lg:-ml-12 lg:px-14 lg:py-16 xl:-ml-16 xl:px-16">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-300 sm:text-sm">Built into the project</p>
              <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.04em] text-balance sm:text-5xl" id="new-builds-heading">{newBuilds.title}</h2>
              <p className="mt-7 leading-8 text-white/76 sm:text-lg">{newBuilds.description}</p>
              <Link
                className="mt-9 inline-flex min-h-12 items-center border-b-2 border-brand-red pb-2 text-sm font-black uppercase tracking-[0.08em] text-white hover:border-white focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white"
                href="/contact"
              >
                Discuss a Construction Project
              </Link>
            </div>
          </div>
        </ContentContainer>
      </section>
    </>
  );
}

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ContentContainer } from "@/components/shared/content-container";
import { homeRedesignContent } from "@/data/home-redesign-content";

export function PrimaryServiceCategories() {
  return (
    <section className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-32" id="services">
      <ContentContainer size="wide">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-red sm:text-sm">Two sides of the work</p>
          <h2 className="mt-5 text-4xl font-black leading-[1.03] tracking-[-0.04em] text-brand-navy text-balance sm:text-5xl lg:text-6xl">
            Focused service for home comfort and commercial kitchens.
          </h2>
        </div>

        <div className="mt-14 space-y-8 lg:mt-18 lg:space-y-12">
          {homeRedesignContent.services.map((service, index) => {
            const dark = index === 1;
            return (
              <article className={dark ? "grid overflow-hidden bg-brand-navy text-white lg:grid-cols-2" : "grid overflow-hidden bg-blue-gray text-charcoal lg:grid-cols-2"} key={service.title}>
                <div className={dark ? "relative min-h-[330px] lg:order-2 lg:min-h-[570px]" : "relative min-h-[420px] lg:min-h-[570px]"}>
                  <Image
                    alt={service.imageAlt}
                    className={dark ? "object-cover object-center transition-transform duration-500 hover:scale-[1.02]" : "object-cover object-center transition-transform duration-500 hover:scale-[1.02]"}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    src={service.image}
                  />
                  <span className="absolute top-5 left-5 bg-white px-4 py-2 text-xs font-black tracking-[0.18em] text-brand-navy" aria-hidden="true">
                    0{index + 1}
                  </span>
                </div>
                <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14 lg:py-16 xl:px-18">
                  <p className={dark ? "text-xs font-black uppercase tracking-[0.2em] text-red-300" : "text-xs font-black uppercase tracking-[0.2em] text-brand-red"}>{service.eyebrow}</p>
                  <h3 className={dark ? "mt-4 text-4xl font-black leading-none tracking-[-0.035em] text-white sm:text-5xl" : "mt-4 text-4xl font-black leading-none tracking-[-0.035em] text-brand-navy sm:text-5xl"}>{service.title}</h3>
                  <p className={dark ? "mt-6 leading-8 text-white/76" : "mt-6 leading-8 text-slate-600"}>{service.description}</p>
                  <ul className={dark ? "mt-8 grid grid-cols-2 gap-x-6 gap-y-3 border-y border-white/15 py-6 text-sm font-bold text-white/88" : "mt-8 grid grid-cols-2 gap-x-6 gap-y-3 border-y border-slate-300 py-6 text-sm font-bold text-charcoal/85"}>
                    {service.services.map((item) => (
                      <li className="flex items-center gap-2.5" key={item}>
                        <span className="size-1.5 shrink-0 bg-brand-red" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    className={dark ? "mt-9 inline-flex min-h-11 self-start items-center gap-3 border-b-2 border-brand-red pb-2 text-sm font-black uppercase tracking-[0.08em] text-white hover:gap-4 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white" : "mt-9 inline-flex min-h-11 self-start items-center gap-3 border-b-2 border-brand-red pb-2 text-sm font-black uppercase tracking-[0.08em] text-brand-navy hover:gap-4 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-red"}
                    href={service.href}
                  >
                    {service.ctaLabel}
                    <ArrowUpRight aria-hidden="true" className="size-5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}

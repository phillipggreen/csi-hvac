import { ArrowDownRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ContentContainer } from "@/components/shared/content-container";
import { restaurantEquipmentContent } from "@/data/restaurant-equipment-content";
import { siteConfig } from "@/data/site-config";

export function RestaurantServiceIntroduction() {
  const { comprehensive, hero } = restaurantEquipmentContent;

  return (
    <>
      <section className="relative isolate flex min-h-[560px] overflow-hidden bg-brand-navy text-white sm:min-h-[600px] lg:min-h-[640px]">
        <Image
          alt="Stainless steel equipment in a professional commercial kitchen"
          className="object-cover object-[58%_center]"
          fill
          preload
          sizes="100vw"
          src="/images/Kitchen.jpg"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,14,37,0.97)_0%,rgba(8,23,56,0.9)_48%,rgba(8,21,50,0.42)_82%,rgba(8,21,50,0.62)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-brand-navy/85 to-transparent" aria-hidden="true" />

        <ContentContainer className="relative z-10 flex flex-1 flex-col justify-center py-16 sm:py-20 lg:py-24" size="wide">
          <div className="max-w-5xl">
            <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-white/82 sm:text-sm">
              <span className="h-0.5 w-10 bg-brand-red" aria-hidden="true" />
              Commercial kitchen support
            </p>
            <h1 className="mt-7 max-w-5xl text-[2.65rem] font-black leading-[0.98] tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl">
              {hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
              Professional equipment repair, installation, replacement, and maintenance for Richmond restaurants and commercial kitchens.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                className="inline-flex min-h-14 items-center justify-center gap-3 bg-brand-red px-7 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-lg shadow-black/15 hover:-translate-y-0.5 hover:bg-brand-red-dark focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white"
                href={siteConfig.phone.href}
              >
                <Phone aria-hidden="true" className="size-5 fill-current" />
                Call {siteConfig.phone.display}
              </Link>
              <Link
                className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/60 bg-white/5 px-7 py-4 text-sm font-black uppercase tracking-[0.08em] text-white backdrop-blur-sm hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-brand-navy focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white"
                href="#primary-equipment-services"
              >
                Explore Equipment Services
                <ArrowDownRight aria-hidden="true" className="size-5" />
              </Link>
            </div>
          </div>

          <ul className="mt-14 grid max-w-4xl grid-cols-2 border-y border-white/20 py-4 text-[0.7rem] font-black uppercase tracking-[0.13em] text-white/72 sm:flex sm:flex-wrap sm:items-center sm:text-xs">
            {["Repair", "Installation", "Replacement", "Maintenance"].map((item, index) => (
              <li className="flex items-center gap-3 py-1.5 sm:py-0" key={item}>
                {index > 0 && <span className="mx-5 hidden size-1.5 rounded-full bg-brand-red sm:block" aria-hidden="true" />}
                {item}
              </li>
            ))}
          </ul>
        </ContentContainer>
      </section>

      <section className="bg-blue-gray py-20 sm:py-24 lg:py-32">
        <ContentContainer size="wide">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-red sm:text-sm">Commercial kitchen service</p>
              <h2 className="mt-5 max-w-xl text-4xl font-black leading-[1.02] tracking-[-0.04em] text-brand-navy text-balance sm:text-5xl lg:text-6xl">
                Support for the equipment behind every service.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9">{hero.description}</p>
          </div>

          <div className="mt-14 grid lg:mt-18 lg:grid-cols-12 lg:items-center">
            <div className="relative min-h-[400px] overflow-hidden sm:min-h-[540px] lg:col-[6/13] lg:row-start-1 lg:min-h-[680px]">
              <Image
                alt="Commercial cooking line and stainless steel restaurant equipment"
                className="object-cover object-center transition-transform duration-500 hover:scale-[1.015]"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                src="/images/Equipment.jpg"
              />
            </div>
            <div className="relative z-10 bg-white px-6 py-10 shadow-[0_24px_70px_rgba(12,26,63,0.14)] sm:px-10 sm:py-12 lg:col-[1/7] lg:row-start-1 lg:px-12 lg:py-14 xl:px-14">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-red">Equipment-wide capability</p>
              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] text-brand-navy sm:text-4xl">{comprehensive.title}</h3>
              <p className="mt-6 leading-8 text-slate-700">{comprehensive.description}</p>
              <Link
                className="mt-8 inline-flex min-h-12 items-center justify-center bg-brand-red px-7 py-3.5 text-sm font-black uppercase tracking-[0.08em] text-white hover:-translate-y-0.5 hover:bg-brand-red-dark focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
                href={siteConfig.phone.href}
              >
                Talk With Comfort Specialist
              </Link>
            </div>
          </div>
        </ContentContainer>
      </section>
    </>
  );
}

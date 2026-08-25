import { ArrowDownRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ContentContainer } from "@/components/shared/content-container";
import { homeRedesignContent } from "@/data/home-redesign-content";
import { siteConfig } from "@/data/site-config";

export function ModernHomeHero() {
  const content = homeRedesignContent.hero;

  return (
    <section className="relative isolate flex min-h-[680px] overflow-hidden bg-brand-navy text-white sm:min-h-[720px] lg:min-h-[760px]">
      <Image
        alt="HVAC ductwork installed in a Central Kentucky new construction project"
        className="object-cover object-[58%_center] sm:object-center"
        fill
        preload
        sizes="100vw"
        src="/images/HVAC-BG.jpg"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,14,37,0.96)_0%,rgba(8,23,56,0.83)_48%,rgba(8,21,50,0.38)_78%,rgba(8,21,50,0.6)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-brand-navy/80 to-transparent" aria-hidden="true" />

      <ContentContainer className="relative z-10 flex flex-1 flex-col justify-center py-20 sm:py-24 lg:py-28">
        <div className="max-w-5xl">
          <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-white/85 sm:text-sm">
            <span className="h-0.5 w-10 bg-brand-red" aria-hidden="true" />
            {content.eyebrow}
          </p>
          <h1 className="mt-7 max-w-5xl text-[2.7rem] font-black leading-[0.98] tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl xl:text-[5rem]">
            {content.heading.map((line) => <span className="block" key={line}>{line}{" "}</span>)}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
            {content.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              className="inline-flex min-h-14 items-center justify-center gap-3 bg-brand-red px-7 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-lg shadow-black/15 hover:-translate-y-0.5 hover:bg-brand-red-dark focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
              href={siteConfig.phone.href}
            >
              <Phone aria-hidden="true" className="size-5 fill-current" />
              Call {siteConfig.phone.display}
            </Link>
            <Link
              className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/65 bg-white/5 px-7 py-4 text-sm font-black uppercase tracking-[0.08em] text-white backdrop-blur-sm hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-brand-navy focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
              href="#services"
            >
              Explore Our Services
              <ArrowDownRight aria-hidden="true" className="size-5" />
            </Link>
          </div>
        </div>

        <ul className="mt-16 grid max-w-4xl grid-cols-2 border-y border-white/20 py-4 text-[0.7rem] font-black uppercase tracking-[0.13em] text-white/72 sm:flex sm:flex-wrap sm:items-center sm:gap-0 sm:text-xs">
          {content.serviceLine.map((item, index) => (
            <li className="flex items-center gap-3 py-1.5 sm:py-0" key={item}>
              {index > 0 && <span className="mx-5 hidden size-1.5 rounded-full bg-brand-red sm:block" aria-hidden="true" />}
              {item}
            </li>
          ))}
        </ul>
      </ContentContainer>
    </section>
  );
}

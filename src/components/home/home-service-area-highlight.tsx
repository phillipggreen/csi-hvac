import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ContentContainer } from "@/components/shared/content-container";
import { homeRedesignContent } from "@/data/home-redesign-content";
import { siteConfig } from "@/data/site-config";

export function HomeServiceAreaHighlight() {
  const content = homeRedesignContent.serviceArea;

  return (
    <section className="bg-brand-navy py-20 text-white sm:py-24 lg:py-32">
      <ContentContainer
        className="grid overflow-hidden border border-white/12 lg:grid-cols-[0.9fr_1.1fr]"
        size="wide"
      >
        <div className="relative min-h-[340px] lg:min-h-[620px]">
          <Image
            alt="HVAC ductwork and equipment installed in a Central Kentucky new construction project"
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            src="/images/HVAC-6.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/55 via-transparent to-transparent" aria-hidden="true" />
        </div>
        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14 lg:py-16 xl:px-18">
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-red-300 sm:text-sm">
            <MapPin aria-hidden="true" className="size-4" />
            {content.eyebrow}
          </p>
          <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">{content.heading}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{content.description}</p>
          <ul className="mt-9 grid grid-cols-2 border-y border-white/15 py-5 text-sm font-bold text-white/82 sm:grid-cols-3">
            {siteConfig.serviceAreas.map((area) => <li className="py-2" key={area}>{area}</li>)}
          </ul>
          <Link className="mt-9 inline-flex min-h-12 self-start items-center gap-3 border-b-2 border-brand-red pb-2 text-sm font-black uppercase tracking-[0.08em] text-white hover:gap-4 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white" href="/service-areas/lexington-ky">
            Lexington Service Area
            <ArrowUpRight aria-hidden="true" className="size-5" />
          </Link>
        </div>
      </ContentContainer>
    </section>
  );
}

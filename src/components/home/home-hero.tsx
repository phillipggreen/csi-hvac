import Image from "next/image";

import { PrimaryCta } from "@/components/shared/primary-cta";
import { siteConfig } from "@/data/site-config";

export function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[430px] items-center justify-center overflow-hidden sm:min-h-[520px] lg:min-h-[650px]">
      <Image alt="HVAC ductwork installed in a new construction project" className="object-cover object-center" fill priority sizes="100vw" src="/images/HVAC-BG.jpg" />
      <div className="absolute inset-0 bg-brand-blue/15" aria-hidden="true" />
      <div className="relative z-10 px-4 text-center text-white">
        <h1 className="text-balance text-3xl font-black uppercase leading-tight drop-shadow-lg sm:text-5xl lg:text-6xl">Your Comfort Is Our Business</h1>
        <PrimaryCta className="mt-8" href={siteConfig.phone.href}>Call Now</PrimaryCta>
      </div>
    </section>
  );
}

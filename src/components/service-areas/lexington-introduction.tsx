import Image from "next/image";
import Link from "next/link";

import { ContentContainer } from "@/components/shared/content-container";
import { PrimaryCta } from "@/components/shared/primary-cta";
import { lexingtonServiceArea } from "@/data/service-areas";
import { siteConfig } from "@/data/site-config";

const serviceLinks = [
  { label: "HVAC Installation", href: "#hvac-installation" },
  { label: "HVAC Repair", href: "#hvac-repair" },
  { label: "HVAC Maintenance", href: "#hvac-maintenance" },
  { label: "Commercial HVAC", href: "#commercial-hvac" },
  { label: "New Construction", href: "#new-construction" },
  { label: "Restaurant Equipment", href: "#restaurant-equipment" },
] as const;

export function LexingtonIntroduction() {
  const { hero, hvacIntro } = lexingtonServiceArea;

  return (
    <>
      <section className="relative isolate flex min-h-[560px] items-end overflow-hidden bg-brand-blue sm:min-h-[600px] lg:min-h-[640px]">
        <Image
          alt="HVAC installation in progress at a Central Kentucky construction project"
          className="object-cover object-center"
          fill
          preload
          sizes="100vw"
          src="/images/HVAC-BG.jpg"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,31,60,0.96)_0%,rgba(6,31,60,0.82)_48%,rgba(6,31,60,0.34)_100%)]" />
        <ContentContainer className="relative z-10 pb-16 pt-32 sm:pb-20 lg:pb-24" size="wide">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.24em] text-white/75 sm:text-sm">
              Lexington, Kentucky
            </p>
            <h1 className="max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.035em] text-white sm:text-5xl lg:text-7xl">
              {hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/82 sm:text-lg sm:leading-8">
              Heating, cooling, new-construction, and commercial kitchen support for homes and businesses across Lexington.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryCta href={siteConfig.phone.href}>{`Call ${siteConfig.phone.display}`}</PrimaryCta>
              <PrimaryCta href="#lexington-services" tone="white">
                Explore Lexington Services
              </PrimaryCta>
            </div>
          </div>
        </ContentContainer>
      </section>

      <section className="bg-[#eef3f7] py-16 sm:py-20 lg:py-24">
        <ContentContainer size="wide">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-red">Local service coverage</p>
              <h2 className="mt-4 max-w-xl text-3xl font-black uppercase leading-tight tracking-[-0.025em] text-brand-blue sm:text-4xl lg:text-5xl">
                {hvacIntro.title}
              </h2>
            </div>
            <div className="border-l-4 border-brand-red pl-6 sm:pl-8">
              <p className="text-base leading-8 text-charcoal sm:text-lg">{hero.description}</p>
              <p className="mt-6 text-base leading-8 text-charcoal/80">{hvacIntro.description}</p>
            </div>
          </div>

          <nav aria-label="Lexington services on this page" className="mt-12 border-t border-brand-blue/15 pt-8" id="lexington-services">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-blue/60">Services on this page</p>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
              {serviceLinks.map((link, index) => (
                <Link
                  className="group flex min-h-14 items-center gap-3 border border-brand-blue/15 bg-white px-4 py-3 text-sm font-extrabold uppercase leading-tight text-brand-blue transition-colors hover:border-brand-red hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                  href={link.href}
                  key={link.href}
                >
                  <span aria-hidden="true" className="text-xs text-brand-red">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </ContentContainer>
      </section>
    </>
  );
}

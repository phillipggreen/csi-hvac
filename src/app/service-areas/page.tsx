import { ArrowUpRight, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { ContentContainer } from "@/components/shared/content-container";
import { PrimaryCta } from "@/components/shared/primary-cta";
import { UtilityPageHero } from "@/components/shared/utility-page-hero";
import { siteConfig } from "@/data/site-config";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Service Areas",
  description: `Towns in Central Kentucky served by ${siteConfig.name}.`,
  path: "/service-areas",
});

const serviceAreaPages: Partial<Record<string, string>> = {
  "Lexington, KY": "/service-areas/lexington-ky",
};

export default function ServiceAreasPage() {
  return (
    <>
      <UtilityPageHero
        description={`${siteConfig.name} serves homes, businesses, and restaurants in these Central Kentucky communities.`}
        eyebrow="Service Areas"
        title="Where We Work"
      />
      <section className="bg-[#eef3f7] py-14 sm:py-18 lg:py-24">
        <ContentContainer size="wide">
          <div className="bg-white p-7 shadow-[0_22px_65px_rgba(8,37,68,0.1)] sm:p-10 lg:p-14">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-red">Communities We Serve</p>
            <ul className="mt-6 grid border-t border-brand-blue/12 sm:grid-cols-2 lg:grid-cols-3">
              {siteConfig.serviceAreas.map((area) => {
                const href = serviceAreaPages[area];

                return (
                  <li className="flex min-h-16 items-center gap-3 border-b border-brand-blue/12 py-4 text-base font-bold text-brand-blue sm:text-lg" key={area}>
                    <MapPin aria-hidden="true" className="size-5 shrink-0 text-brand-red" />
                    {href ? (
                      <Link className="inline-flex items-center gap-2 underline-offset-4 hover:text-brand-red hover:underline" href={href}>
                        {area}
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                      </Link>
                    ) : (
                      area
                    )}
                  </li>
                );
              })}
            </ul>
            <PrimaryCta className="mt-9" href={siteConfig.phone.href}>
              Call {siteConfig.phone.display}
            </PrimaryCta>
          </div>
        </ContentContainer>
      </section>
    </>
  );
}

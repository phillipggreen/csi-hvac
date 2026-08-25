import Image from "next/image";
import Link from "next/link";

import { ContentContainer } from "@/components/shared/content-container";
import { restaurantEquipmentContent } from "@/data/restaurant-equipment-content";

export function RestaurantMaintenanceAndProjects() {
  const [maintenance, projects] = restaurantEquipmentContent.supportFeatures;
  const maintenanceContent = maintenance.items[0];
  const projectContent = projects.items[0];

  return (
    <>
      <section className="bg-white py-20 sm:py-24 lg:py-32" aria-labelledby="maintenance-heading">
        <ContentContainer size="wide">
          <div className="grid overflow-hidden bg-brand-navy lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative min-h-[420px] overflow-hidden sm:min-h-[560px] lg:min-h-[700px]">
              <Image
                alt={maintenance.imageAlt}
                className="object-cover object-center transition-transform duration-500 hover:scale-[1.015]"
                fill
                sizes="(min-width: 1024px) 54vw, 100vw"
                src={maintenance.image}
              />
              <span className="absolute top-5 left-5 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-brand-navy">Planned upkeep</span>
            </div>
            <div className="flex flex-col justify-center px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-14 lg:py-16 xl:px-16">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-300 sm:text-sm">Preventative maintenance</p>
              <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.04em] text-balance sm:text-5xl" id="maintenance-heading">{maintenanceContent.title}</h2>
              <p className="mt-7 leading-8 text-white/76 sm:text-lg">{maintenanceContent.description}</p>
              <Link
                className="mt-9 inline-flex min-h-13 items-center justify-center bg-brand-red px-7 py-3.5 text-sm font-black uppercase tracking-[0.08em] text-white hover:-translate-y-0.5 hover:bg-brand-red-dark focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white sm:self-start"
                href="/contact"
              >
                {maintenance.ctaLabel}
              </Link>
            </div>
          </div>
        </ContentContainer>
      </section>

      <section className="bg-brand-navy py-20 sm:py-24 lg:py-28" aria-labelledby="restaurant-projects-heading">
        <ContentContainer size="wide">
          <div className="grid overflow-hidden bg-brand-red lg:min-h-[680px] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[400px] overflow-hidden sm:min-h-[540px] lg:order-2 lg:min-h-full">
              <Image
                alt={projects.imageAlt}
                className="object-cover object-center transition-transform duration-500 hover:scale-[1.015]"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                src={projects.image}
              />
              <span className="absolute top-5 right-5 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-brand-navy">Commercial projects</span>
            </div>
            <div className="flex flex-col justify-center px-6 py-12 text-white sm:px-10 sm:py-14 lg:order-1 lg:px-14 lg:py-16 xl:px-16">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-white/72 sm:text-sm">New builds + renovations</p>
              <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.04em] text-balance sm:text-5xl" id="restaurant-projects-heading">{projectContent.title}</h2>
              <p className="mt-7 leading-8 text-white/82 sm:text-lg">{projectContent.description}</p>
              <Link
                className="mt-9 inline-flex min-h-12 self-start items-center border-b-2 border-white/75 pb-2 text-sm font-black uppercase tracking-[0.08em] text-white hover:border-brand-navy focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white"
                href="/contact"
              >
                {projects.ctaLabel}
              </Link>
            </div>
          </div>
        </ContentContainer>
      </section>
    </>
  );
}

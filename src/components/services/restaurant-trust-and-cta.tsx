import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ContentContainer } from "@/components/shared/content-container";
import { restaurantEquipmentContent } from "@/data/restaurant-equipment-content";
import { siteConfig } from "@/data/site-config";

export function RestaurantTrustAndCta() {
  const { finalCta, whyTrust } = restaurantEquipmentContent;
  const trustPoints = whyTrust.description.match(/[^.!?]+[.!?]+/g)?.map((point) => point.trim()) ?? [whyTrust.description];

  return (
    <>
      <section className="bg-blue-gray py-20 sm:py-24 lg:py-32" aria-labelledby="restaurant-trust-heading">
        <ContentContainer size="wide">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_0.55fr_1.1fr] lg:items-stretch lg:gap-0">
            <div className="lg:pr-12 xl:pr-16">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-red sm:text-sm">Richmond restaurant service</p>
              <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.04em] text-brand-navy text-balance sm:text-5xl lg:text-6xl" id="restaurant-trust-heading">{whyTrust.title}</h2>
              <Link
                className="mt-9 inline-flex min-h-13 items-center justify-center bg-brand-red px-7 py-3.5 text-sm font-black uppercase tracking-[0.08em] text-white hover:-translate-y-0.5 hover:bg-brand-red-dark focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
                href={siteConfig.phone.href}
              >
                Call {siteConfig.phone.display}
              </Link>
            </div>

            <div className="relative min-h-[380px] overflow-hidden sm:min-h-[500px] lg:min-h-full">
              <Image
                alt={whyTrust.imageAlt}
                className="object-cover object-center transition-transform duration-500 hover:scale-[1.015]"
                fill
                sizes="(min-width: 1024px) 24vw, 100vw"
                src={whyTrust.image}
              />
            </div>

            <ol className="border-t border-slate-300 bg-white px-6 sm:px-10 lg:px-12 xl:px-14">
              {trustPoints.map((point, index) => (
                <li className="grid grid-cols-[auto_1fr] gap-5 border-b border-slate-300 py-7 sm:gap-7 sm:py-8" key={point}>
                  <span className="pt-1 text-xs font-black tracking-[0.16em] text-brand-red" aria-hidden="true">0{index + 1}</span>
                  <p className="text-lg font-black leading-8 text-brand-navy">{point}</p>
                </li>
              ))}
            </ol>
          </div>
        </ContentContainer>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <ContentContainer size="wide">
          <div className="relative isolate overflow-hidden bg-brand-red px-6 py-14 text-white sm:px-10 sm:py-16 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12 lg:px-16 lg:py-18">
            <div className="absolute -top-28 -right-24 -z-10 size-80 rounded-full border-[48px] border-white/7" aria-hidden="true" />
            <div className="max-w-4xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-white/72 sm:text-sm">Commercial kitchen support</p>
              <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">{finalCta.title}</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82">{finalCta.description}</p>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col">
              <Link
                className="inline-flex min-h-14 items-center justify-center gap-3 bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.08em] text-brand-red hover:-translate-y-0.5 hover:bg-blue-gray focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white"
                href={siteConfig.phone.href}
              >
                <Phone aria-hidden="true" className="size-5 fill-current" />
                {finalCta.ctaLabel}
              </Link>
              <Link
                className="inline-flex min-h-14 items-center justify-center border border-white/65 px-7 py-4 text-sm font-black uppercase tracking-[0.08em] text-white hover:-translate-y-0.5 hover:bg-white hover:text-brand-red focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white"
                href="/contact"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </ContentContainer>
      </section>
    </>
  );
}

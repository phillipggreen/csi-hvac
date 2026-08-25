import Image from "next/image";

import { ContentContainer } from "@/components/shared/content-container";
import type { LocalizedInfoCard } from "@/data/service-areas";
import { lexingtonServiceArea } from "@/data/service-areas";

function RestaurantDetails({ service, inverted = false }: { service: LocalizedInfoCard; inverted?: boolean }) {
  return (
    <div className="text-[15px] leading-7">
      <p className={inverted ? "text-white/78" : "text-charcoal/80"}>{service.description}</p>
      <ul className="mt-6 space-y-3">
        {service.bullets.map((bullet) => (
          <li className="flex gap-3" key={bullet}>
            <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-brand-red" />
            <span className={inverted ? "text-white/86" : "text-charcoal/82"}>{bullet}</span>
          </li>
        ))}
      </ul>
      {service.closing ? (
        <p className={`mt-6 font-semibold ${inverted ? "text-white" : "text-brand-blue"}`}>{service.closing}</p>
      ) : null}
    </div>
  );
}

export function LexingtonRestaurantServices() {
  const [repair, ...supportingServices] = lexingtonServiceArea.restaurantServices;
  const { restaurantIntro } = lexingtonServiceArea;

  return (
    <section className="scroll-mt-28 bg-[#eef3f7]" id="restaurant-equipment">
      <div className="relative isolate overflow-hidden bg-brand-blue py-20 text-white sm:py-24 lg:py-32">
        <Image alt="Stainless steel appliances in a commercial restaurant kitchen" className="object-cover object-center" fill sizes="100vw" src="/images/Kitchen.jpg" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,31,60,0.96)_0%,rgba(6,31,60,0.82)_55%,rgba(6,31,60,0.48)_100%)]" />
        <ContentContainer className="relative z-10" size="wide">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/65">Commercial kitchen support</p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-tight tracking-[-0.025em] sm:text-4xl lg:text-6xl">{restaurantIntro.title}</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">{restaurantIntro.description}</p>
          </div>
        </ContentContainer>
      </div>

      <ContentContainer className="py-16 sm:py-20 lg:py-24" size="wide">
        <article className="grid overflow-hidden bg-brand-blue text-white lg:grid-cols-[0.34fr_0.66fr]">
          <div className="flex min-h-48 items-end bg-brand-red p-7 sm:p-9 lg:min-h-full">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-white/70">Priority capability</p>
              <h3 className="mt-3 text-3xl font-black uppercase leading-tight sm:text-4xl">{repair.title}</h3>
            </div>
          </div>
          <div className="p-7 sm:p-10 lg:p-12">
            <RestaurantDetails inverted service={repair} />
          </div>
        </article>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {supportingServices.map((service, index) => (
            <article className="border-t-4 border-brand-red bg-white p-6 shadow-[0_16px_45px_rgba(8,37,68,0.08)] sm:p-8" key={service.title}>
              <p className="text-xs font-black tracking-[0.2em] text-brand-red">0{index + 2}</p>
              <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-brand-blue">{service.title}</h3>
              <div className="mt-5">
                <RestaurantDetails service={service} />
              </div>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}

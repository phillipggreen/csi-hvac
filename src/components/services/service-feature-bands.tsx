import Image from "next/image";

import { PrimaryCta } from "@/components/shared/primary-cta";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

export type ServiceFeature = {
  readonly ctaLabel: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly imagePosition: "left" | "right";
  readonly items: readonly {
    readonly description: string;
    readonly title: string;
  }[];
  readonly tone: "blue" | "red";
};

type ServiceFeatureBandsProps = {
  ariaLabel: string;
  features: readonly ServiceFeature[];
};

export function ServiceFeatureBands({ ariaLabel, features }: ServiceFeatureBandsProps) {
  return (
    <section aria-label={ariaLabel} className="mx-auto max-w-[1600px]">
      {features.map((feature) => {
        const imageFirst = feature.imagePosition === "left";

        return (
          <article className={cn("grid text-white lg:grid-cols-3", feature.tone === "blue" ? "bg-brand-blue" : "bg-brand-red")} key={feature.items[0].title}>
            <div className={cn("relative min-h-72 lg:min-h-[390px]", imageFirst ? "lg:order-1" : "lg:order-2")}>
              <Image alt={feature.imageAlt} className="object-cover" fill loading="eager" sizes="(min-width: 1024px) 34vw, 100vw" src={feature.image} unoptimized />
            </div>
            <div className={cn("flex flex-col justify-center px-5 py-12 sm:px-8 lg:col-span-2 lg:px-12 xl:px-16", imageFirst ? "lg:order-2" : "lg:order-1")}>
              <div className="space-y-7">
                {feature.items.map((item) => (
                  <div key={item.title}>
                    <h2 className="text-2xl font-black uppercase sm:text-3xl">{item.title}</h2>
                    <p className="mt-4 leading-7 text-white/95">{item.description}</p>
                  </div>
                ))}
              </div>
              <PrimaryCta className="mt-8 self-start" href={siteConfig.phone.href} tone={feature.tone === "red" ? "white" : "red"}>{feature.ctaLabel}</PrimaryCta>
            </div>
          </article>
        );
      })}
    </section>
  );
}

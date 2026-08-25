import { ChefHat, Wind } from "lucide-react";

import { ContentContainer } from "@/components/shared/content-container";
import { homeRedesignContent } from "@/data/home-redesign-content";

const specialtyIcons = [Wind, ChefHat] as const;

export function HomeIntroductionModern() {
  const content = homeRedesignContent.introduction;

  return (
    <section className="bg-blue-gray py-20 sm:py-24 lg:py-32">
      <ContentContainer className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-red sm:text-sm">{content.eyebrow}</p>
          <h2 className="mt-5 max-w-lg text-4xl font-black leading-[1.02] tracking-[-0.04em] text-brand-navy text-balance sm:text-5xl lg:text-6xl">
            {content.heading}
          </h2>
        </div>
        <div>
          <p className="max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9">{content.description}</p>
          <div className="mt-10 grid gap-8 border-t border-slate-300 pt-8 sm:grid-cols-2">
            {content.specialties.map((specialty, index) => {
              const Icon = specialtyIcons[index];
              return (
                <article className="grid grid-cols-[auto_1fr] gap-4" key={specialty.title}>
                  <div className="flex size-11 items-center justify-center bg-brand-navy text-white">
                    <Icon aria-hidden="true" className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-charcoal">{specialty.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{specialty.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}

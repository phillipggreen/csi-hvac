import type { ReactNode } from "react";

import { ContentContainer } from "@/components/shared/content-container";

type InteriorPageHeroProps = { title: string; description?: ReactNode };

export function InteriorPageHero({ description, title }: InteriorPageHeroProps) {
  return (
    <section className="wave-section relative isolate overflow-hidden bg-brand-blue py-16 text-center sm:py-20 lg:py-24">
      <div className="wave wave-top" aria-hidden="true" />
      <div className="wave wave-bottom" aria-hidden="true" />
      <ContentContainer className="relative z-10">
        <h1 className="text-3xl font-extrabold uppercase text-white sm:text-4xl">{title}</h1>
        {description && <div className="mx-auto mt-5 max-w-4xl space-y-5 text-sm leading-7 text-white/95 sm:text-base">{description}</div>}
      </ContentContainer>
    </section>
  );
}

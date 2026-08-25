import type { ReactNode } from "react";

import { ContentContainer } from "@/components/shared/content-container";

type UtilityPageHeroProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
};

export function UtilityPageHero({ description, eyebrow, title }: UtilityPageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-blue py-16 text-white sm:py-20 lg:py-24">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.09),transparent_34%),linear-gradient(120deg,rgba(4,25,50,0.42),transparent_55%)]" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 h-1 w-28 bg-brand-red sm:w-44" />
      <ContentContainer className="relative z-10" size="wide">
        <div className="max-w-4xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/65">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black uppercase leading-[0.98] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? <div className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">{description}</div> : null}
        </div>
      </ContentContainer>
    </section>
  );
}

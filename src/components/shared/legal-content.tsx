import type { ReactNode } from "react";

import { ContentContainer } from "@/components/shared/content-container";

export type LegalSection = {
  title: string;
  body: ReactNode;
};

type LegalContentProps = {
  lastUpdated: string;
  sections: LegalSection[];
};

export function LegalContent({ lastUpdated, sections }: LegalContentProps) {
  return (
    <section className="bg-[#eef3f7] py-14 sm:py-18 lg:py-24">
      <ContentContainer size="faq">
        <div className="bg-white p-7 shadow-[0_22px_65px_rgba(8,37,68,0.1)] sm:p-10 lg:p-14">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-red">Last updated {lastUpdated}</p>
          <div className="mt-8 space-y-9">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-black uppercase text-brand-blue sm:text-2xl">{section.title}</h2>
                <div className="mt-3 space-y-4 text-base leading-8 text-charcoal/80">{section.body}</div>
              </div>
            ))}
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}

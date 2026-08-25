import { Building2, ChefHat, HardHat, Home } from "lucide-react";
import Link from "next/link";

import { ContentContainer } from "@/components/shared/content-container";
import { homeRedesignContent } from "@/data/home-redesign-content";

const audienceIcons = [Home, Building2, ChefHat, HardHat] as const;

export function HomeTrustModern() {
  const content = homeRedesignContent.trust;

  return (
    <section className="bg-blue-gray py-20 sm:py-24 lg:py-32">
      <ContentContainer className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-24">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-red sm:text-sm">{content.eyebrow}</p>
          <h2 className="mt-5 max-w-2xl text-4xl font-black leading-[1.02] tracking-[-0.04em] text-brand-navy text-balance sm:text-5xl lg:text-6xl">
            {content.heading}
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700">{content.description}</p>
          <Link
            className="mt-9 inline-flex min-h-13 items-center justify-center bg-brand-red px-7 py-3.5 text-sm font-black uppercase tracking-[0.08em] text-white hover:-translate-y-0.5 hover:bg-brand-red-dark focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
            href="/contact"
          >
            Contact Us
          </Link>
        </div>
        <ul className="border-t border-slate-300">
          {content.audiences.map((audience, index) => {
            const Icon = audienceIcons[index];
            return (
              <li className="flex items-center gap-5 border-b border-slate-300 py-6 text-xl font-black text-brand-navy sm:text-2xl" key={audience}>
                <span className="flex size-11 shrink-0 items-center justify-center bg-white text-brand-red shadow-sm">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                {audience}
              </li>
            );
          })}
        </ul>
      </ContentContainer>
    </section>
  );
}

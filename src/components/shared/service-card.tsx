import { Cog, Hammer, Wrench } from "lucide-react";

import type { ServiceCardData } from "@/data/home-content";
import { siteConfig } from "@/data/site-config";

const icons = { installation: Hammer, repair: Cog, maintenance: Wrench };

export function ServiceCard({ ctaLabel, description, icon, title }: ServiceCardData) {
  const Icon = icons[icon];
  return (
    <article className="flex min-h-full flex-col bg-brand-blue text-center text-white">
      <div className="flex flex-1 flex-col items-center px-6 py-10 lg:px-9 lg:py-12">
        <Icon aria-hidden="true" className="size-16 stroke-[1.5]" />
        <h3 className="mt-6 text-2xl font-extrabold uppercase">{title}</h3>
        <p className="mt-5 text-sm leading-7 text-white/95">{description}</p>
      </div>
      <a className="bg-brand-red px-5 py-4 text-sm font-extrabold uppercase text-white hover:bg-brand-red-dark focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white" href={siteConfig.phone.href}>{ctaLabel}</a>
    </article>
  );
}

import {
  CircleHelp,
  Cog,
  Droplets,
  Flame,
  Gauge,
  Hammer,
  RefreshCw,
  Search,
  Sparkles,
  Snowflake,
  Utensils,
  Wind,
  Wrench,
} from "lucide-react";

import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

export type ServiceCardIcon =
  | "installation"
  | "repair"
  | "maintenance"
  | "replacement"
  | "inspection"
  | "cleaning"
  | "troubleshooting"
  | "ductwork"
  | "thermostat"
  | "refrigeration"
  | "oven"
  | "dishwasher"
  | "cooking";

export type ServiceCardProps = {
  ctaLabel?: string;
  density?: "default" | "detailed";
  description: string;
  icon: ServiceCardIcon;
  title: string;
  tone?: "blue" | "red" | "light";
};

const icons = {
  installation: Hammer,
  repair: Cog,
  maintenance: Wrench,
  replacement: RefreshCw,
  inspection: Search,
  cleaning: Sparkles,
  troubleshooting: CircleHelp,
  ductwork: Wind,
  thermostat: Gauge,
  refrigeration: Snowflake,
  oven: Flame,
  dishwasher: Droplets,
  cooking: Utensils,
};

export function ServiceCard({ ctaLabel, density = "default", description, icon, title, tone = "blue" }: ServiceCardProps) {
  const Icon = icons[icon];
  const isLight = tone === "light";

  return (
    <article
      className={cn(
        "flex min-h-full flex-col text-center",
        tone === "blue" && "bg-brand-blue text-white",
        tone === "red" && "bg-brand-red text-white",
        isLight && "bg-soft-gray text-charcoal",
      )}
    >
      <div className={cn("flex flex-1 flex-col items-center px-6 py-10 lg:px-8", density === "detailed" ? "lg:py-10" : "lg:py-12")}>
        <Icon aria-hidden="true" className="size-16 stroke-[1.5]" />
        <h3 className={cn("text-balance text-2xl font-extrabold uppercase", density === "detailed" ? "mt-5" : "mt-6")}>{title}</h3>
        <p className={cn(density === "detailed" ? "mt-4 text-[0.9375rem] leading-6" : "mt-5 text-sm leading-7", isLight ? "text-charcoal/85" : "text-white/95")}>{description}</p>
      </div>
      {ctaLabel && (
        <a className="bg-brand-red px-5 py-4 text-sm font-extrabold uppercase text-white hover:bg-brand-red-dark focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white" href={siteConfig.phone.href}>
          {ctaLabel}
        </a>
      )}
    </article>
  );
}

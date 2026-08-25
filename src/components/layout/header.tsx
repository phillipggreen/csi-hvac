import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site-config";

import { MobileNavigation } from "./mobile-navigation";
import { Navigation } from "./navigation";

export function Header() {
  return (
    <header className="site-header sticky top-0 z-50 border-b border-slate-200/85 bg-white/95 shadow-[0_8px_28px_rgba(15,31,69,0.06)] backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-3 px-4 sm:h-24 sm:px-6 lg:gap-5 lg:px-8 xl:h-[104px]">
        <Link aria-label={`${siteConfig.name} home`} className="shrink-0" href="/">
          <Image alt={siteConfig.name} className="h-auto w-[118px] sm:w-[145px] xl:w-[164px]" height={456} loading="eager" sizes="(min-width: 1280px) 164px, (min-width: 640px) 145px, 118px" src="/images/Logo.jpg" width={758} />
        </Link>
        <Navigation items={siteConfig.navigation} />
        <div className="flex items-center gap-1 sm:gap-3">
          <Link aria-label={`Call ${siteConfig.phone.display}`} className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 bg-brand-red px-3 text-xs font-black uppercase tracking-[0.04em] text-white shadow-sm hover:-translate-y-0.5 hover:bg-brand-red-dark focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-red sm:min-h-12 sm:px-5 lg:text-sm" href={siteConfig.phone.href}>
            <Phone aria-hidden="true" className="size-4 fill-current" />
            <span className="hidden sm:inline">{siteConfig.phone.display}</span>
          </Link>
          <MobileNavigation items={siteConfig.navigation} />
        </div>
      </div>
    </header>
  );
}

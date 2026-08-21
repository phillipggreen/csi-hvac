import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site-config";

import { MobileNavigation } from "./mobile-navigation";
import { Navigation } from "./navigation";

export function Header() {
  return (
    <header className="relative z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-3 px-4 sm:h-24 sm:px-6 lg:gap-6 lg:px-8 xl:h-[112px]">
        <Link aria-label={`${siteConfig.name} home`} className="shrink-0" href="/">
          <Image alt={siteConfig.name} className="h-auto w-[118px] sm:w-[145px] xl:w-44" height={456} priority src="/images/Logo.jpg" width={758} />
        </Link>
        <Navigation items={siteConfig.navigation} />
        <div className="flex items-center gap-1 sm:gap-3">
          <Link aria-label={`Call ${siteConfig.phone.display}`} className="inline-flex min-h-11 items-center gap-2 bg-brand-blue px-3 text-xs font-extrabold text-white hover:bg-brand-blue-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue sm:px-4 lg:text-sm" href={siteConfig.phone.href}>
            <Phone aria-hidden="true" className="size-4 fill-current" />
            <span className="hidden sm:inline">{siteConfig.phone.display}</span>
          </Link>
          <MobileNavigation items={siteConfig.navigation} />
        </div>
      </div>
    </header>
  );
}

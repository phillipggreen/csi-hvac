import Link from "next/link";

import { siteConfig } from "@/data/site-config";

import { MobileNavigation } from "./mobile-navigation";
import { Navigation } from "./navigation";

export function Header() {
  return (
    <header className="relative z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link className="max-w-64 text-base font-bold leading-tight text-slate-950 sm:text-lg" href="/">
          {siteConfig.name}
        </Link>
        <Navigation items={siteConfig.navigation} />
        <MobileNavigation items={siteConfig.navigation} />
      </div>
    </header>
  );
}

import Link from "next/link";

import { siteConfig } from "@/data/site-config";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-semibold text-white">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-slate-400">Company details will be added after verification.</p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link className="text-sm hover:text-white" href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

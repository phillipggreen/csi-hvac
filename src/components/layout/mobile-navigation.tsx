"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import type { NavigationItem } from "@/data/site-config";

type MobileNavigationProps = {
  items: NavigationItem[];
};

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="xl:hidden">
      <button
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        className="inline-flex size-11 items-center justify-center text-brand-blue hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      {isOpen && (
        <nav aria-label="Mobile navigation" className="absolute inset-x-0 top-full border-b-4 border-brand-red bg-white shadow-xl" id="mobile-navigation">
          <ul className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            {items.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <Link aria-current={(item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)) ? "page" : undefined} className={(item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)) ? "mobile-nav-link text-brand-red" : "mobile-nav-link text-charcoal"} href={item.href} onClick={() => setIsOpen(false)}>
                    {item.label}
                    {item.hasDropdown && <ChevronDown aria-hidden="true" className="size-4" />}
                  </Link>
                ) : (
                  <span className="mobile-nav-link cursor-default text-charcoal" title="Page coming in a future phase">
                    {item.label}
                    {item.hasDropdown && <ChevronDown aria-hidden="true" className="size-4" />}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

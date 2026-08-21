"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import type { NavigationItem } from "@/data/site-config";

type MobileNavigationProps = {
  items: NavigationItem[];
};

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        className="inline-flex size-11 items-center justify-center rounded-md text-slate-800 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      {isOpen && (
        <nav aria-label="Mobile navigation" className="absolute inset-x-0 top-full border-b border-slate-200 bg-white shadow-lg" id="mobile-navigation">
          <ul className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            {items.map((item) => (
              <li key={item.href}>
                <Link className="block rounded-md px-3 py-3 font-medium text-slate-800 hover:bg-slate-100" href={item.href} onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

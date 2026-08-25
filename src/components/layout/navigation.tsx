"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import type { NavigationItem } from "@/data/site-config";

type NavigationProps = {
  items: NavigationItem[];
};

export function Navigation({ items }: NavigationProps) {
  const pathname = usePathname();
  const [openItem, setOpenItem] = useState<string | null>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenItem(null);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function routeIsActive(href: string | null) {
    if (!href) return false;
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <nav aria-label="Primary navigation" className="hidden xl:block">
      <ul className="flex items-center gap-0.5 2xl:gap-1">
        {items.map((item) => {
          const hasChildren = Boolean(item.children?.length);
          const directlyActive = routeIsActive(item.href);
          const childActive = item.children?.some((child) => routeIsActive(child.href)) ?? false;
          const groupActive = directlyActive || childActive;
          const isOpen = openItem === item.label;
          const submenuId = `desktop-${item.label.toLowerCase().replaceAll(" ", "-")}-menu`;

          return (
          <li
            className="relative"
            key={item.label}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpenItem(null);
            }}
            onMouseEnter={() => hasChildren && setOpenItem(item.label)}
            onMouseLeave={() => hasChildren && setOpenItem(null)}
          >
            {item.href ? (
              <div className="flex items-center">
                <Link
                  aria-current={directlyActive ? "page" : undefined}
                  className={groupActive ? "nav-link nav-link-active text-brand-red" : "nav-link text-charcoal hover:text-brand-red"}
                  href={item.href}
                  onFocus={() => hasChildren && setOpenItem(item.label)}
                >
                  {item.label}
                  {!hasChildren && item.hasDropdown && <ChevronDown aria-hidden="true" className="size-3.5" />}
                </Link>
                {hasChildren && (
                  <button
                    aria-controls={submenuId}
                    aria-expanded={isOpen}
                    aria-label={`${isOpen ? "Close" : "Open"} ${item.label} menu`}
                    className={groupActive ? "-ml-2 inline-flex size-8 items-center justify-center text-brand-red focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-red" : "-ml-2 inline-flex size-8 items-center justify-center text-charcoal hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-blue"}
                    onClick={() => setOpenItem(isOpen ? null : item.label)}
                    onFocus={() => setOpenItem(item.label)}
                    type="button"
                  >
                    <ChevronDown aria-hidden="true" className={isOpen ? "size-3.5 rotate-180" : "size-3.5"} />
                  </button>
                )}
              </div>
            ) : (
              <span className="nav-link cursor-default text-charcoal" title="Page coming in a future phase">
                {item.label}
                {item.hasDropdown && <ChevronDown aria-hidden="true" className="size-3.5" />}
              </span>
            )}
            {hasChildren && isOpen && (
              <ul className="absolute top-full right-0 min-w-52 border border-slate-200 border-t-2 border-t-brand-red bg-white py-2 shadow-[0_18px_40px_rgba(15,31,69,0.16)]" id={submenuId}>
                {item.children?.map((child) => {
                  const active = routeIsActive(child.href);
                  return (
                    <li key={child.label}>
                      {child.href && (
                        <Link
                          aria-current={active ? "page" : undefined}
                          className={active ? "block min-h-11 bg-blue-gray px-5 py-3 text-sm font-black uppercase tracking-[0.04em] text-brand-red" : "block min-h-11 px-5 py-3 text-sm font-black uppercase tracking-[0.04em] text-charcoal hover:bg-blue-gray hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-brand-blue"}
                          href={child.href}
                          onClick={() => setOpenItem(null)}
                        >
                          {child.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
          );
        })}
      </ul>
    </nav>
  );
}

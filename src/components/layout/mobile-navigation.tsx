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
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenSubmenu(null);
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function routeIsActive(href: string | null) {
    if (!href) return false;
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

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
            {items.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              const directlyActive = routeIsActive(item.href);
              const childActive = item.children?.some((child) => routeIsActive(child.href)) ?? false;
              const groupActive = directlyActive || childActive;
              const submenuOpen = openSubmenu === item.label;
              const submenuId = `mobile-${item.label.toLowerCase().replaceAll(" ", "-")}-menu`;

              return (
              <li key={item.label}>
                {item.href ? (
                  <div className="flex items-center">
                    <Link
                      aria-current={directlyActive ? "page" : undefined}
                      className={groupActive ? "mobile-nav-link flex-1 text-brand-red" : "mobile-nav-link flex-1 text-charcoal"}
                      href={item.href}
                      onClick={() => {
                        setOpenSubmenu(null);
                        setIsOpen(false);
                      }}
                    >
                      {item.label}
                      {!hasChildren && item.hasDropdown && <ChevronDown aria-hidden="true" className="size-4" />}
                    </Link>
                    {hasChildren && (
                      <button
                        aria-controls={submenuId}
                        aria-expanded={submenuOpen}
                        aria-label={`${submenuOpen ? "Close" : "Open"} ${item.label} menu`}
                        className="inline-flex size-11 shrink-0 items-center justify-center text-brand-blue hover:bg-soft-gray hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-blue"
                        onClick={() => setOpenSubmenu(submenuOpen ? null : item.label)}
                        type="button"
                      >
                        <ChevronDown aria-hidden="true" className={submenuOpen ? "size-4 rotate-180" : "size-4"} />
                      </button>
                    )}
                  </div>
                ) : (
                  <span className="mobile-nav-link cursor-default text-charcoal" title="Page coming in a future phase">
                    {item.label}
                    {item.hasDropdown && <ChevronDown aria-hidden="true" className="size-4" />}
                  </span>
                )}
                {hasChildren && submenuOpen && (
                  <ul className="mb-2 ml-4 border-l-2 border-brand-red/30 pl-2" id={submenuId}>
                    {item.children?.map((child) => {
                      const active = routeIsActive(child.href);
                      return (
                        <li key={child.label}>
                          {child.href && (
                            <Link
                              aria-current={active ? "page" : undefined}
                              className={active ? "mobile-nav-link bg-soft-gray text-brand-red" : "mobile-nav-link text-charcoal"}
                              href={child.href}
                              onClick={() => {
                                setOpenSubmenu(null);
                                setIsOpen(false);
                              }}
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
      )}
    </div>
  );
}

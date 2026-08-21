import { ChevronDown } from "lucide-react";
import Link from "next/link";

import type { NavigationItem } from "@/data/site-config";

type NavigationProps = {
  items: NavigationItem[];
};

export function Navigation({ items }: NavigationProps) {
  return (
    <nav aria-label="Primary navigation" className="hidden xl:block">
      <ul className="flex items-center gap-2">
        {items.map((item) => (
          <li key={item.label}>
            {item.href ? (
              <Link aria-current={item.isActive ? "page" : undefined} className={item.isActive ? "nav-link text-brand-red" : "nav-link text-charcoal hover:text-brand-red"} href={item.href}>
                {item.label}
                {item.hasDropdown && <ChevronDown aria-hidden="true" className="size-3.5" />}
              </Link>
            ) : (
              <span className="nav-link cursor-default text-charcoal" title="Page coming in a future phase">
                {item.label}
                {item.hasDropdown && <ChevronDown aria-hidden="true" className="size-3.5" />}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

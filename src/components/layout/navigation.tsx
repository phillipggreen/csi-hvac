import Link from "next/link";

import type { NavigationItem } from "@/data/site-config";

type NavigationProps = {
  items: NavigationItem[];
};

export function Navigation({ items }: NavigationProps) {
  return (
    <nav aria-label="Primary navigation" className="hidden md:block">
      <ul className="flex items-center gap-6">
        {items.map((item) => (
          <li key={item.href}>
            <Link className="text-sm font-medium text-slate-700 hover:text-sky-800" href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

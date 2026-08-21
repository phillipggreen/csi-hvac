import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

type PrimaryCtaProps = {
  children: ReactNode;
  className?: string;
  href: string;
} & Omit<ComponentProps<typeof Link>, "children" | "className" | "href">;

export function PrimaryCta({ children, className, href, ...props }: PrimaryCtaProps) {
  return (
    <Link
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-md bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700",
        className,
      )}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}

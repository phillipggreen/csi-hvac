import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

type PrimaryCtaProps = {
  children: ReactNode;
  className?: string;
  href: string;
  tone?: "red" | "blue";
} & Omit<ComponentProps<typeof Link>, "children" | "className" | "href">;

export function PrimaryCta({ children, className, href, tone = "red", ...props }: PrimaryCtaProps) {
  return (
    <Link
      className={cn(
        "inline-flex min-h-11 items-center justify-center px-6 py-3 text-sm font-extrabold uppercase text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
        tone === "red"
          ? "bg-brand-red hover:bg-brand-red-dark focus-visible:outline-brand-red"
          : "bg-brand-blue hover:bg-brand-blue-light focus-visible:outline-brand-blue",
        className,
      )}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}

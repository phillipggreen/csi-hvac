import { cn } from "@/lib/utils";

type SectionHeadingProps = { children: React.ReactNode; className?: string; eyebrow?: string; centered?: boolean };

export function SectionHeading({ children, className, eyebrow, centered = false }: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {eyebrow && <p className="mb-4 text-sm font-extrabold uppercase italic tracking-wide text-brand-red sm:text-base">{eyebrow}</p>}
      <h2 className="text-balance text-3xl font-black uppercase leading-tight text-charcoal sm:text-4xl">{children}</h2>
    </div>
  );
}

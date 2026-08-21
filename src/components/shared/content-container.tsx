import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type ContentContainerProps = ComponentProps<"div"> & {
  size?: "default" | "faq";
};

export function ContentContainer({ className, size = "default", ...props }: ContentContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        size === "default" ? "max-w-7xl" : "max-w-5xl",
        className,
      )}
      {...props}
    />
  );
}

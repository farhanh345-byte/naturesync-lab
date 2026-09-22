import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  children,
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <header className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "text-sm font-medium uppercase tracking-eyebrow",
            tone === "dark" ? "text-mint" : "text-forest-mid",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-3 font-display text-title font-medium tracking-tight",
          tone === "dark" ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </h2>
      {children ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-cream/75" : "text-muted",
          )}
        >
          {children}
        </p>
      ) : null}
    </header>
  );
}

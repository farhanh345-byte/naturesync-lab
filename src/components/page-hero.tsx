import type { ReactNode } from "react";
import { CircuitField } from "@/components/circuit-field";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <CircuitField />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <p className="text-sm font-medium uppercase tracking-eyebrow text-mint">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-display font-medium text-cream">
          {title}
        </h1>
        {children ? (
          <div className="mt-5 max-w-2xl text-base leading-relaxed text-cream/75 sm:text-lg">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}

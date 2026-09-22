import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CircuitField } from "@/components/circuit-field";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <CircuitField />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-eyebrow text-mint">
            Next step
          </p>
          <h2 className="mt-3 font-display text-title font-medium">
            A 30–45 minute call. No pitch deck required.
          </h2>
          <p className="mt-4 text-cream/75">
            Describe the problem, the users, and any deadline that is real. We
            leave with a written proposal path — or a clear reason we are not
            the right fit.
          </p>
        </div>
        <Button asChild variant="primary" size="lg">
          <Link to="/contact">
            Start a conversation
            <ArrowUpRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

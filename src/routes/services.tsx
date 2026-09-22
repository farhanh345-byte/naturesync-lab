import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BrainCircuit,
  Cloud,
  Compass,
  Globe,
  Layers,
  LifeBuoy,
  PenTool,
  Smartphone,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site-content";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [{ title: "Services — NatureSync Lab" }],
  }),
});

const icons = {
  saas: Layers,
  mobile: Smartphone,
  web: Globe,
  design: PenTool,
  cloud: Cloud,
  ai: BrainCircuit,
  discovery: Compass,
  growth: LifeBuoy,
} as const;

function Services() {
  return (
    <main>
      <PageHero eyebrow="What we build" title="Services">
        End-to-end product engineering. You can engage us for a single layer —
        design, build, or cloud — or for the full path from brief to live
        product.
      </PageHero>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-6">
          {services.map((service) => {
            const Icon = icons[service.slug];
            return (
              <article
                key={service.slug}
                id={service.slug}
                className="scroll-mt-24 rounded-2xl bg-paper p-6 shadow-border sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-cream text-forest">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h2 className="font-display text-2xl font-medium text-ink">
                      {service.title}
                    </h2>
                    <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">
                      {service.summary}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild variant="forest">
            <Link to="/contact">Talk about a brief</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/process">See how we deliver</Link>
          </Button>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}

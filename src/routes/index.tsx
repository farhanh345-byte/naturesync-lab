import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Compass,
  Globe,
  Layers,
  LifeBuoy,
  PenTool,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CircuitField } from "@/components/circuit-field";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import {
  chips,
  company,
  glance,
  nameMeaning,
  reasons,
  services,
  steps,
} from "@/lib/site-content";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "NatureSync Lab — Product engineering" }],
  }),
});

const serviceIcons = [
  Layers,
  Smartphone,
  Globe,
  PenTool,
  Cloud,
  BrainCircuit,
  Compass,
  LifeBuoy,
];

function Home() {
  return (
    <main>
      <section className="relative isolate min-h-hero overflow-hidden bg-forest text-cream">
        <img
          src="/images/hero-canopy.jpg"
          alt="Forest canopy with faint circuit traces along the leaves"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-forest/72" />
        <CircuitField className="opacity-70" />
        <div className="relative mx-auto flex min-h-hero w-full max-w-6xl flex-col justify-end px-5 pb-16 pt-20 sm:px-8 sm:pb-20 lg:px-10">
          <p className="reveal text-sm font-medium uppercase tracking-eyebrow text-mint">
            {company.eyebrow}
          </p>
          <h1 className="reveal reveal-delay-1 mt-5 max-w-4xl font-display text-display font-medium">
            {company.tagline}
          </h1>
          <p className="reveal reveal-delay-2 mt-5 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            SaaS platforms, mobile applications, websites, and the cloud systems
            behind them — designed to be run, owned, and grown.
          </p>
          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contact">
                Start a conversation
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">What we build</Link>
            </Button>
          </div>
          <ul className="mt-12 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full bg-cream/10 px-3 py-1.5 text-xs font-medium text-cream/85"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-paper">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
          {glance.map((item) => (
            <div key={item.label}>
              <p className="text-xs font-medium uppercase tracking-eyebrow text-forest-mid">
                {item.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="Who we are" title="The name is the brief.">
          We combine product thinking with disciplined engineering. Clear
          scope, predictable delivery, clean architecture, and interfaces
          people want to use.
        </SectionHeading>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {nameMeaning.map((item) => (
            <article
              key={item.word}
              className="rounded-2xl bg-paper p-6 shadow-border transition-[box-shadow] duration-150 hover:shadow-border-hover"
            >
              <h3 className="font-display text-2xl font-medium text-forest">
                {item.word}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="What we build" title="End-to-end product engineering.">
              Engage us for a single layer — design, build, or cloud — or for
              the full path from brief to live product.
            </SectionHeading>
            <Button asChild variant="ghost" className="self-start sm:self-auto">
              <Link to="/services">
                All services
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <Link
                  key={service.slug}
                  to="/services"
                  hash={service.slug}
                  className="group rounded-2xl bg-cream p-6 shadow-border transition-[box-shadow,transform] duration-150 hover:shadow-border-hover"
                >
                  <Icon className="size-5 text-forest-mid" />
                  <h3 className="mt-4 font-display text-xl font-medium text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.summary}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="How we work" title="Discover, design, build, launch, grow.">
          Iterative sprints with visible progress. No surprise big-bang drops.
        </SectionHeading>
        <ol className="mt-12 grid gap-4 md:grid-cols-5">
          {steps.map((step) => (
            <li
              key={step.n}
              className="rounded-2xl bg-paper p-5 shadow-border"
            >
              <p className="font-display text-2xl text-mint">{step.n}</p>
              <h3 className="mt-3 font-medium text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
        <Button asChild variant="ghost" className="mt-8">
          <Link to="/process">
            The delivery approach
            <ArrowUpRight className="size-4" />
          </Link>
        </Button>
      </section>

      <section className="bg-forest text-cream">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
          <blockquote className="max-w-3xl">
            <p className="font-display text-title font-medium italic text-cream">
              {company.quote}
            </p>
          </blockquote>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src="/images/studio.jpg"
            alt="Quiet product studio with plants, warm wood, and a laptop"
            width={1600}
            height={900}
            className="framed aspect-video w-full rounded-2xl object-cover"
          />
          <div>
            <SectionHeading eyebrow="Why clients work with us" title="Product sense, not only tickets." />
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {reasons.map((reason) => (
                <li key={reason.title}>
                  <h3 className="text-sm font-medium text-ink">{reason.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {reason.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}

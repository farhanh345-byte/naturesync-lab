import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import {
  glance,
  industries,
  mission,
  nameMeaning,
  stack,
  values,
  vision,
  whoWeServe,
} from "@/lib/site-content";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [{ title: "About — NatureSync Lab" }],
  }),
});

function About() {
  return (
    <main>
      <PageHero eyebrow="Who we are" title="About NatureSync Lab">
        An information technology company that designs, builds, and scales
        digital products — software founders, growing businesses, and
        established organisations can actually run.
      </PageHero>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="max-w-xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              We work on SaaS platforms, mobile applications, websites, and the
              cloud systems behind them. Whether the assignment is a first MVP
              or a multi-tenant SaaS already in market, the standard is the
              same: software that is reliable, maintainable, and ready for the
              next stage of growth.
            </p>
            <p>
              We pick the stack that the product and the client’s team can live
              with — not the one that is fashionable this quarter.
            </p>
          </div>
          <img
            src="/images/studio.jpg"
            alt="NatureSync Lab studio interior"
            width={1600}
            height={900}
            className="framed w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="The name" title="Nature. Sync. Lab." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {nameMeaning.map((item) => (
              <article
                key={item.word}
                className="rounded-2xl bg-cream p-6 shadow-border"
              >
                <h3 className="font-display text-2xl font-medium text-forest">
                  {item.word}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="Direction" title="Vision, mission, and values." />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl bg-forest p-6 text-cream sm:p-8">
            <p className="text-xs font-medium uppercase tracking-eyebrow text-mint">
              Vision
            </p>
            <p className="mt-4 font-display text-xl font-medium leading-snug">
              {vision}
            </p>
          </article>
          <article className="rounded-2xl bg-paper p-6 shadow-border sm:p-8">
            <p className="text-xs font-medium uppercase tracking-eyebrow text-forest-mid">
              Mission
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink">{mission}</p>
          </article>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {values.map((value) => (
            <article key={value.title} className="rounded-2xl bg-paper p-6 shadow-border">
              <h3 className="font-display text-xl font-medium text-forest">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{value.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div>
            <SectionHeading eyebrow="Who we serve" title="Wherever a digital product has to earn its keep." />
            <ul className="mt-8 space-y-4">
              {whoWeServe.map((line) => (
                <li key={line} className="text-muted leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
            <ul className="mt-8 flex flex-wrap gap-2">
              {industries.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-cream px-3 py-1.5 text-xs font-medium text-forest shadow-border"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="At a glance" title="Islamabad base, international delivery." />
            <dl className="mt-8 divide-y divide-ink/10">
              {glance.map((item) => (
                <div key={item.label} className="grid gap-1 py-4 sm:grid-cols-3">
                  <dt className="text-sm font-medium text-forest">{item.label}</dt>
                  <dd className="text-sm text-muted sm:col-span-2">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Technology"
          title="The stack the product can live with."
        >
          Front end, mobile, back end, data, cloud, and the operational layer
          around it. Chosen for the team that will own it after we leave — or
          stay.
        </SectionHeading>
        <dl className="mt-10 grid gap-4 sm:grid-cols-2">
          {stack.map((row) => (
            <div key={row.label} className="rounded-2xl bg-paper p-5 shadow-border">
              <dt className="text-xs font-medium uppercase tracking-eyebrow text-forest-mid">
                {row.label}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink">{row.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      <CtaBand />
    </main>
  );
}

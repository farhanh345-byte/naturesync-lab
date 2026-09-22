import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { engagements, reasons, steps } from "@/lib/site-content";

export const Route = createFileRoute("/process")({
  component: Process,
  head: () => ({
    meta: [{ title: "Process — NatureSync Lab" }],
  }),
});

function Process() {
  return (
    <main>
      <PageHero eyebrow="How we work" title="Delivery approach">
        A short, honest path from idea to a product operations can run — then a
        retained rhythm so it does not freeze after go-live.
      </PageHero>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
        <ol className="space-y-4">
          {steps.map((step) => (
            <li
              key={step.n}
              className="grid gap-4 rounded-2xl bg-paper p-6 shadow-border sm:grid-cols-[5rem_1fr] sm:p-8"
            >
              <p className="font-display text-3xl text-mint">{step.n}</p>
              <div>
                <h2 className="font-display text-2xl font-medium text-ink">
                  {step.title}
                </h2>
                <p className="mt-2 max-w-2xl leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10">
          <img
            src="/images/desk.jpg"
            alt="Product design desk with monitor, notebook, and a small plant"
            width={1400}
            height={1050}
            className="framed w-full rounded-2xl object-cover"
          />
          <div>
            <SectionHeading
              eyebrow="Why clients work with us"
              title="Fewer handoffs. Design decisions survive implementation."
            />
            <ul className="mt-8 space-y-5">
              {reasons.map((reason) => (
                <li key={reason.title}>
                  <h3 className="font-medium text-ink">{reason.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {reason.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Ways to engage"
          title="Pick the shape that matches the work."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {engagements.map((item) => (
            <article key={item.id} className="rounded-2xl bg-paper p-6 shadow-border">
              <h3 className="font-display text-xl font-medium text-forest">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { products } from "@/lib/site-content";

export const Route = createFileRoute("/products")({
  component: Products,
  head: () => ({
    meta: [{ title: "Products — NatureSync Lab" }],
  }),
});

function Products() {
  return (
    <main>
      <PageHero eyebrow="What we ship" title="Products">
        Software NatureSync Lab designs, builds, and runs. Client work stays
        under Services. These are products we put in market ourselves.
      </PageHero>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-6">
          {products.map((product) => (
            <article
              key={product.slug}
              id={product.slug}
              className="scroll-mt-24 rounded-2xl bg-paper p-6 shadow-border sm:p-8"
            >
              <p className="text-xs font-medium uppercase tracking-eyebrow text-forest-mid">
                {product.status} · {product.category}
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium text-ink">
                {product.name}
              </h2>
              <p className="mt-2 font-display text-xl text-forest">
                {product.tagline}
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
                {product.summary}
              </p>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">
                {product.body}
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <li key={feature} className="text-sm text-ink">
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
                {product.note}
              </p>
              <a
                href={product.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-forest px-5 py-3 text-sm font-medium text-cream no-underline hover:bg-forest-mid"
              >
                Open LunaLoop Cycle
                <ArrowUpRight className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </main>
  );
}

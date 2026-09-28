import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/site-content";

export function ProductCard({
  slug = "lunaloop-cycle",
}: {
  slug?: (typeof products)[number]["slug"];
}) {
  const product = products.find((item) => item.slug === slug) ?? products[0];

  return (
    <article className="rounded-2xl bg-paper p-6 shadow-border sm:p-8">
      <p className="text-xs font-medium uppercase tracking-eyebrow text-forest-mid">
        {product.status} · {product.category}
      </p>
      <h3 className="mt-3 font-display text-2xl font-medium text-ink">
        {product.name}
      </h3>
      <p className="mt-2 text-base text-forest">{product.tagline}</p>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
        {product.summary}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          to="/products"
          hash={product.slug}
          className="inline-flex items-center gap-2 text-sm font-medium text-forest no-underline hover:text-forest-mid"
        >
          Product notes
          <ArrowUpRight className="size-4" />
        </Link>
        <a
          href={product.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-forest no-underline hover:text-forest-mid"
        >
          lunaloopcycle.com
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </article>
  );
}

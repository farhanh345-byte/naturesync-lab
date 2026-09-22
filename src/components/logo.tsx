import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 52"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        className="fill-mint"
        d="M20 1.6 31.2 14.2 26.4 19.4 36.2 27.2 20 50.4 3.8 27.2 13.6 19.4 8.8 14.2Z"
      />
      <path
        className="stroke-cream"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 8.4v34.2M20 22.2 10.2 29.4M20 16.6 29.4 11.2M20 27.6 30.2 33.4"
      />
      <circle cx="10.2" cy="29.4" r="1.7" className="fill-cream" />
      <circle cx="29.4" cy="11.2" r="1.7" className="fill-cream" />
      <circle cx="30.2" cy="33.4" r="1.7" className="fill-cream" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn(
        "group flex items-center gap-3 text-cream no-underline",
        className,
      )}
    >
      <LogoMark className="h-9 w-7 shrink-0" />
      <span className="leading-tight">
        <span className="block font-display text-lg font-medium tracking-tight">
          NatureSync
        </span>
        <span className="block text-xs font-medium uppercase tracking-mark text-mint">
          Lab
        </span>
      </span>
    </Link>
  );
}

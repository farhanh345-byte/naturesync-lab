import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <rect width="32" height="32" rx="7" className="fill-forest" />
      <path
        className="fill-mint"
        d="M16 4c7.2 5.2 10.2 11.4 0 24C8.8 15.4 8.8 9.2 16 4z"
      />
      <path
        className="stroke-cream"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 9.2v13.2M16 14.8h6.2M16 19.6H9.8"
      />
      <circle cx="22.2" cy="14.8" r="1.45" className="fill-cream" />
      <circle cx="9.8" cy="19.6" r="1.45" className="fill-cream" />
      <circle cx="16" cy="22.4" r="1.45" className="fill-cream" />
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
      <LogoMark className="size-9 shrink-0" />
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

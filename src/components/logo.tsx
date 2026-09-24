import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type LogoTone = "onDark" | "onLight";

export function LogoMark({
  className,
  tone = "onDark",
}: {
  className?: string;
  tone?: LogoTone;
}) {
  const onLight = tone === "onLight";
  return (
    <svg
      viewBox="0 0 36 48"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        className={onLight ? "fill-forest" : "fill-mint"}
        d="M10 21.2 10 16.4 18 2.2 26.4 14.8 22.6 20.2 30 22.8 30 27.6 18 46.2 6 27.6 6 22.8 13.4 20.2Z"
      />
      <path
        className={onLight ? "stroke-mint" : "stroke-forest-deep"}
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 7.2v32.4M18 20.6 8.6 27.2M18 15.2 25.8 10.4M18 25.4 27.2 31"
      />
      <circle
        cx="8.6"
        cy="27.2"
        r="1.85"
        className={onLight ? "fill-forest stroke-mint" : "fill-mint stroke-forest-deep"}
        strokeWidth="1.35"
      />
      <circle
        cx="25.8"
        cy="10.4"
        r="1.85"
        className={onLight ? "fill-forest stroke-mint" : "fill-mint stroke-forest-deep"}
        strokeWidth="1.35"
      />
      <circle
        cx="27.2"
        cy="31"
        r="1.85"
        className={onLight ? "fill-forest stroke-mint" : "fill-mint stroke-forest-deep"}
        strokeWidth="1.35"
      />
    </svg>
  );
}

export function Logo({
  className,
  tone = "onDark",
}: {
  className?: string;
  tone?: LogoTone;
}) {
  const onLight = tone === "onLight";
  return (
    <Link
      to="/"
      className={cn(
        "group flex items-center gap-2.5 no-underline",
        onLight ? "text-forest" : "text-cream",
        className,
      )}
    >
      <LogoMark tone={tone} className="h-10 w-8 shrink-0" />
      <span className="flex items-baseline gap-2">
        <span className="font-display text-xl font-medium tracking-tight">
          NatureSync
        </span>
        <span
          className={cn(
            "text-xs font-medium uppercase tracking-mark",
            onLight ? "text-forest-mid" : "text-mint",
          )}
        >
          Lab
        </span>
      </span>
    </Link>
  );
}

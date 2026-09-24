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
  const src =
    tone === "onLight" ? "/brand/mark-on-light.svg" : "/brand/mark-on-dark.svg";
  return (
    <img src={src} alt="" className={cn("h-9 w-auto shrink-0", className)} />
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
      <LogoMark tone={tone} className="h-9 w-auto" />
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

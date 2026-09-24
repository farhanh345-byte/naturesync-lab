import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type LogoTone = "onDark" | "onLight";

function Leaf({
  fill,
  trace,
}: {
  fill: string;
  trace: string;
}) {
  return (
    <svg viewBox="0 0 36 48" className="h-full w-auto" aria-hidden="true">
      <path
        fill={fill}
        d="M8 22.2 8 17.2 14.2 8.4 18 2.4 26.6 14.6 22.8 20.4 29.6 22.6 29.6 28.2 18 45.8 6.4 28.2 6.4 22.6 13.2 20.4Z"
      />
      <path
        fill="none"
        stroke={trace}
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 7.4v31.6M18 21 9.2 27.4M18 15.4 25.6 10.6M18 25.8 26.8 31.2"
      />
      <circle cx="9.2" cy="27.4" r="1.8" fill={fill} stroke={trace} strokeWidth="1.3" />
      <circle cx="25.6" cy="10.6" r="1.8" fill={fill} stroke={trace} strokeWidth="1.3" />
      <circle cx="26.8" cy="31.2" r="1.8" fill={fill} stroke={trace} strokeWidth="1.3" />
    </svg>
  );
}

export function LogoMark({
  className,
  tone = "onDark",
}: {
  className?: string;
  tone?: LogoTone;
}) {
  const onLight = tone === "onLight";
  return (
    <span className={cn("inline-flex h-10 w-8", className)}>
      <Leaf
        fill={onLight ? "#1B3A2F" : "#E9F3EC"}
        trace={onLight ? "#7DB8A0" : "#7DB8A0"}
      />
    </span>
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
      <LogoMark tone={tone} className="h-9 w-7 shrink-0" />
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

import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type LogoTone = "onDark" | "onLight";

function OfficialLeaf({ fill, trace }: { fill: string; trace: string }) {
  return (
    <svg viewBox="0 0 40 52" className="h-full w-auto" aria-hidden="true">
      <path
        fill={fill}
        d="M10.2 23.2 10.2 18.6 14.8 10.4 20 2.6 29.2 15.2 25.2 21.2 32.4 23.6 32.4 29.2 20 49.4 7.6 29.2 7.6 23.6 14.8 21.2Z"
      />
      <path
        fill="none"
        stroke={trace}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 8.2v33.6M20 23.2 10.4 30.2M20 16.6 28.2 11.2M20 28.2 29.6 34.4"
      />
      <circle cx="10.4" cy="30.2" r="2" fill={fill} stroke={trace} strokeWidth="1.4" />
      <circle cx="28.2" cy="11.2" r="2" fill={fill} stroke={trace} strokeWidth="1.4" />
      <circle cx="29.6" cy="34.4" r="2" fill={fill} stroke={trace} strokeWidth="1.4" />
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
    <span className={cn("inline-flex h-10 w-8 shrink-0", className)}>
      <OfficialLeaf
        fill={onLight ? "#1B3A2F" : "#E8F0EA"}
        trace="#7DB8A0"
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
      <LogoMark tone={tone} className="h-10 w-8" />
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

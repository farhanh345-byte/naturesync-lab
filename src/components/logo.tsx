import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type LogoTone = "onDark" | "onLight";

function OfficialLeaf({ fill, trace }: { fill: string; trace: string }) {
  return (
    <svg viewBox="0 0 36 48" className="h-full w-auto" aria-hidden="true">
      <path
        fill={fill}
        d="M7.2 22.2 11.2 16.6 18 22.6 24.8 16.6 28.8 22.2 28.8 27.2 18 46.2 7.2 27.2Z"
      />
      <path fill={fill} d="M11.2 16.6 18 2.4 24.8 16.6 18 22.6Z" />
      <path
        fill="none"
        stroke={trace}
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 7.2v32.2M18 22.2 9.4 28.6M18 15.4 25.6 10.2M18 26.6 26.8 32.2"
      />
      <circle cx="9.4" cy="28.6" r="1.85" fill={fill} stroke={trace} strokeWidth="1.3" />
      <circle cx="25.6" cy="10.2" r="1.85" fill={fill} stroke={trace} strokeWidth="1.3" />
      <circle cx="26.8" cy="32.2" r="1.85" fill={fill} stroke={trace} strokeWidth="1.3" />
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
      <OfficialLeaf fill={onLight ? "#1B3A2F" : "#E8F0EA"} trace="#7DB8A0" />
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

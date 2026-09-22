import { cn } from "@/lib/utils";

export function CircuitField({ className }: { className?: string }) {
  return (
    <svg
      className={cn("pointer-events-none absolute inset-0 size-full", className)}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-mint/20"
      >
        <path d="M80 120h220l40 40v180l-30 30h-90" />
        <path d="M1120 80v160l-50 50h-180l-40 40" />
        <path d="M200 680h280l60-60v-120" />
        <path d="M980 640h-200l-36 36v80" />
        <path d="M40 400h140l24 24" />
        <path d="M1160 420h-160l-20-20v-80" />
        <path d="M480 40v90l40 40h120" />
      </g>
      <g className="fill-mint/35">
        <circle cx="300" cy="160" r="3.5" />
        <circle cx="340" cy="340" r="3.5" />
        <circle cx="1070" cy="240" r="3.5" />
        <circle cx="890" cy="330" r="3.5" />
        <circle cx="480" cy="620" r="3.5" />
        <circle cx="744" cy="676" r="3.5" />
        <circle cx="180" cy="424" r="3.5" />
        <circle cx="640" cy="170" r="3.5" />
      </g>
    </svg>
  );
}

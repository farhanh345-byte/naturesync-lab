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
  return <img src={src} alt="" className={cn("h-10 w-auto", className)} />;
}

export function Logo({
  className,
  tone = "onDark",
}: {
  className?: string;
  tone?: LogoTone;
}) {
  const src =
    tone === "onLight" ? "/brand/logo-on-light.svg" : "/brand/logo-on-dark.svg";
  return (
    <Link to="/" className={cn("flex items-center no-underline", className)}>
      <img
        src={src}
        alt="NatureSync Lab"
        className="h-8 w-auto max-w-[220px] sm:h-9 sm:max-w-[260px]"
      />
    </Link>
  );
}

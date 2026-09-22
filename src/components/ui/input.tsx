import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-xl bg-paper px-4 text-base text-ink shadow-border",
        "placeholder:text-muted/80",
        "transition-[box-shadow] duration-150",
        "focus:shadow-border-hover focus:outline-none",
        className,
      )}
      {...props}
    />
  );
}

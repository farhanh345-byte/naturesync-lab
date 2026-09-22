import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-xl bg-paper px-4 py-3 text-base text-ink shadow-border",
        "placeholder:text-muted/80",
        "transition-[box-shadow] duration-150",
        "focus:shadow-border-hover focus:outline-none",
        className,
      )}
      {...props}
    />
  );
}

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-mint text-forest-deep hover:bg-mint-bright",
        inverse: "bg-cream text-forest hover:bg-cream-dark",
        forest: "bg-forest text-cream hover:bg-forest-mid",
        outline:
          "bg-transparent text-cream shadow-ring hover:bg-cream/10",
        ghost: "bg-transparent text-ink hover:bg-ink/5",
      },
      size: {
        sm: "h-10 rounded-lg px-4 text-sm",
        md: "h-11 rounded-xl px-5 text-sm",
        lg: "h-12 rounded-xl px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

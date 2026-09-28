import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const sizes = {
  sm: "h-10 rounded-lg px-4 text-sm",
  lg: "h-12 rounded-xl px-6 text-base",
} as const;

export function StartConversationButton({
  className,
  size = "sm",
  showIcon = true,
}: {
  className?: string;
  size?: keyof typeof sizes;
  showIcon?: boolean;
}) {
  return (
    <Link
      to="/contact"
      hash="conversation"
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap bg-mint font-medium text-forest-deep no-underline transition-colors duration-150 hover:bg-mint-bright",
        sizes[size],
        className,
      )}
    >
      Start a conversation
      {showIcon ? <ArrowUpRight className="size-4" /> : null}
    </Link>
  );
}

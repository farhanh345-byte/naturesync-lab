import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { StartConversationButton } from "@/components/start-conversation";
import { nav } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-forest text-cream">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-5 sm:px-8 lg:px-10">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "relative rounded-lg px-3 py-2 text-sm font-medium text-cream/70 transition-colors duration-150 hover:text-cream",
                pathname === item.to &&
                  "text-cream after:absolute after:inset-x-3 after:bottom-0 after:h-px after:bg-mint",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <StartConversationButton className="max-md:hidden" />
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className="inline-flex size-11 cursor-pointer items-center justify-center rounded-xl text-cream md:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-6" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-forest-deep/70" />
              <Dialog.Content className="fixed inset-x-3 top-3 z-50 rounded-2xl bg-forest p-5 text-cream shadow-border outline-none sm:inset-x-auto sm:right-3 sm:w-80">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="font-display text-lg font-medium">
                    Menu
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="inline-flex size-11 cursor-pointer items-center justify-center rounded-xl"
                      aria-label="Close menu"
                    >
                      <X className="size-5" />
                    </button>
                  </Dialog.Close>
                </div>
                <Dialog.Description className="sr-only">
                  Site navigation
                </Dialog.Description>
                <nav className="mt-4 flex flex-col gap-1" aria-label="Mobile">
                  {nav.map((item) => (
                    <Dialog.Close asChild key={item.to}>
                      <Link
                        to={item.to}
                        className="rounded-xl px-3 py-3 text-lg font-medium text-cream hover:bg-cream/10"
                      >
                        {item.label}
                      </Link>
                    </Dialog.Close>
                  ))}
                </nav>
                <Dialog.Close asChild>
                  <StartConversationButton className="mt-5 w-full" size="lg" />
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
      <div className="h-px bg-mint/40" />
    </header>
  );
}

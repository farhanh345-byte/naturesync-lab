import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/logo";

export function NotFound() {
  return (
    <main className="flex min-h-page flex-col items-center justify-center px-6 py-20 text-center">
      <LogoMark className="size-12" />
      <h1 className="mt-8 font-display text-title font-medium text-ink">
        This page is not on the map
      </h1>
      <p className="mt-3 max-w-md text-muted">
        The address does not match a page on the NatureSync Lab site. Head home
        or start a conversation instead.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild variant="forest">
          <Link to="/">Back home</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link to="/contact">Start a conversation</Link>
        </Button>
      </div>
    </main>
  );
}

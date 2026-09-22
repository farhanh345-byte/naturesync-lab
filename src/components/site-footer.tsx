import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";
import { company, nav } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
            {company.tagline} Islamabad-based product engineering for founders,
            growing companies, and established organisations.
          </p>
        </div>
        <div className="lg:col-span-3">
          <p className="text-xs font-medium uppercase tracking-eyebrow text-mint">
            Visit
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-cream/80 transition-colors duration-150 hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-4">
          <p className="text-xs font-medium uppercase tracking-eyebrow text-mint">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li>
              <a
                href={`mailto:${company.email}`}
                className="hover:text-cream"
              >
                {company.email}
              </a>
            </li>
            <li>{company.location}</li>
            <li>
              {company.hours}
              <span className="block text-cream/55">{company.hoursNote}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>NatureSync Lab · Company profile · 2026</p>
          <p>
            Introductory use. Commercials and team composition are confirmed in a
            formal proposal.
          </p>
        </div>
      </div>
    </footer>
  );
}

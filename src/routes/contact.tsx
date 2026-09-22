import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { company, engagements } from "@/lib/site-content";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [{ title: "Contact — NatureSync Lab" }],
  }),
});

function Contact() {
  return (
    <main>
      <PageHero eyebrow="Next step" title="Start a conversation">
        A 30–45 minute call. You describe the problem, the users, and any
        deadline that is real. No pitch deck required — a short brief or even a
        list of must-haves is enough to start.
      </PageHero>

      <section className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
        <aside className="space-y-8 lg:col-span-5">
          <div className="rounded-2xl bg-paper p-6 shadow-border">
            <h2 className="font-display text-xl font-medium text-ink">
              Direct
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-forest-mid" />
                <a
                  href={`mailto:${company.email}`}
                  className="text-ink hover:text-forest"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-forest-mid" />
                <span className="text-muted">{company.location}</span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-forest-mid" />
                <span className="text-muted">
                  {company.hours}
                  <span className="mt-1 block">{company.hoursNote}</span>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-medium text-ink">
              Ways to engage
            </h2>
            <ul className="mt-5 space-y-4">
              {engagements.map((item) => (
                <li key={item.id}>
                  <p className="text-sm font-medium text-ink">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}

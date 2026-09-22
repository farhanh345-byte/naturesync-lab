import { useState, type FormEvent, type ReactNode } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { company, engagements } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Please share your name."),
  email: z.email("A valid email helps us reply."),
  companyName: z.string().trim(),
  engagement: z.enum(["fixed", "mvp", "squad", "advisory"]),
  message: z
    .string()
    .trim()
    .min(20, "A short brief — even a list of must-haves — is enough to start."),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function draftMailto(data: {
  name: string;
  email: string;
  companyName: string;
  engagementTitle: string;
  message: string;
}) {
  const subject = encodeURIComponent(`NatureSync Lab — ${data.engagementTitle}`);
  const body = encodeURIComponent(
    [
      data.message,
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.companyName ? `Company: ${data.companyName}` : "",
      `Engagement: ${data.engagementTitle}`,
    ]
      .filter(Boolean)
      .join("\n"),
  );
  return `mailto:${company.email}?subject=${subject}&body=${body}`;
}

async function deliverBrief(payload: Record<string, string>) {
  const response = await fetch(`https://formsubmit.co/ajax/${company.email}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      ...payload,
      _captcha: "false",
      _template: "table",
    }),
    signal: AbortSignal.timeout(12000),
  });
  const json = (await response.json().catch(() => null)) as
    | { success?: string | boolean }
    | null;
  return response.ok && json?.success !== false;
}

export function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [engagement, setEngagement] = useState<(typeof engagements)[number]["id"]>(
    "fixed",
  );
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [delivered, setDelivered] = useState(false);
  const [mailto, setMailto] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      companyName: String(formData.get("companyName") ?? ""),
      engagement,
      message: String(formData.get("message") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !next[key as keyof FieldErrors]) {
          next[key as keyof FieldErrors] = issue.message;
        }
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSending(true);
    const chosen =
      engagements.find((item) => item.id === parsed.data.engagement)?.title ??
      parsed.data.engagement;
    const href = draftMailto({
      name: parsed.data.name,
      email: parsed.data.email,
      companyName: parsed.data.companyName,
      engagementTitle: chosen,
      message: parsed.data.message,
    });
    setMailto(href);

    let ok = false;
    try {
      ok = await deliverBrief({
        name: parsed.data.name,
        email: parsed.data.email,
        company: parsed.data.companyName || "(not given)",
        engagement: chosen,
        message: parsed.data.message,
        _subject: `NatureSync Lab — ${chosen}`,
        _replyto: parsed.data.email,
      });
    } catch {
      ok = false;
    }

    setDelivered(ok);
    setSent(true);
    setSending(false);

    if (!ok) {
      const link = document.createElement("a");
      link.href = href;
      link.click();
    }
  }

  if (sent) {
    return (
      <div className="rounded-2xl bg-paper p-6 shadow-border sm:p-8">
        <p className="text-sm font-medium uppercase tracking-eyebrow text-forest-mid">
          {delivered ? "Brief sent" : "Brief drafted"}
        </p>
        <h3 className="mt-3 font-display text-2xl font-medium text-ink">
          {delivered
            ? "Thank you. We’ll reply within one business day."
            : "Open your mail app so the brief reaches us."}
        </h3>
        <p className="mt-3 text-muted">
          {delivered
            ? "A copy is on its way to "
            : "If nothing opened, send it from your mail client to "}
          <a className="text-forest underline decoration-mint" href={`mailto:${company.email}`}>
            {company.email}
          </a>
          .
        </p>
        {mailto ? (
          <Button asChild variant="forest" className="mt-6">
            <a href={mailto}>Open drafted email</a>
          </Button>
        ) : null}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name}>
          <Input id="name" name="name" autoComplete="name" required />
        </Field>
        <Field label="Email" htmlFor="email" error={errors.email}>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </Field>
      </div>
      <Field label="Company (optional)" htmlFor="companyName">
        <Input id="companyName" name="companyName" autoComplete="organization" />
      </Field>
      <fieldset>
        <legend className="mb-3 text-sm font-medium text-ink">
          How would you like to work?
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {engagements.map((item) => (
            <label
              key={item.id}
              className={cn(
                "cursor-pointer rounded-xl px-4 py-3 shadow-border transition-[box-shadow,background-color] duration-150",
                engagement === item.id
                  ? "bg-forest text-cream shadow-none"
                  : "bg-paper text-ink hover:shadow-border-hover",
              )}
            >
              <input
                type="radio"
                name="engagement"
                value={item.id}
                checked={engagement === item.id}
                onChange={() => setEngagement(item.id)}
                className="sr-only"
              />
              <span className="block text-sm font-medium">{item.title}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <Field label="The brief" htmlFor="message" error={errors.message}>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="The problem, the users, and any deadline that is real."
        />
      </Field>
      <Button
        type="submit"
        variant="forest"
        size="lg"
        className="w-full sm:w-auto"
        disabled={sending}
      >
        {sending ? "Sending…" : "Send the brief"}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={htmlFor} className="mb-2">
        {label}
      </Label>
      {children}
      {error ? (
        <p className="mt-1.5 text-sm text-forest-mid" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

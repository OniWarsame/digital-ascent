import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

const emailSchema = z.string().trim().email({ message: "Enter a valid email address." }).max(255);

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Your name is required." }).max(100),
  email: emailSchema,
  subject: z.string().trim().max(150).optional(),
  message: z.string().trim().min(10, { message: "Please write at least 10 characters." }).max(2000),
});

const fieldClass =
  "w-full border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
const labelClass = "mb-2 block font-display text-[10px] font-bold uppercase text-muted-foreground";

type Status = { kind: "idle" | "sending" | "ok" | "error"; text?: string };

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      setStatus({ kind: "error", text: parsed.error.issues[0]?.message ?? "Enter a valid email address." });
      return;
    }
    setStatus({ kind: "sending" });
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: parsed.data.toLowerCase() });
    if (error) {
      const duplicate = error.code === "23505";
      setStatus({
        kind: duplicate ? "ok" : "error",
        text: duplicate
          ? "You are already on the list — see you Tuesday."
          : "Something went wrong. Please try again in a moment.",
      });
      return;
    }
    setEmail("");
    setStatus({ kind: "ok", text: "You are in. The next briefing lands Tuesday at 07:00." });
  }

  return (
    <form onSubmit={onSubmit} className="w-full" noValidate>
      <div className={compact ? "flex flex-col gap-3 sm:flex-row" : "grid gap-3 sm:grid-cols-[1fr_auto]"}>
        <label className="sr-only" htmlFor="newsletter-email">Email address</label>
        <input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          required
          maxLength={255}
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={fieldClass}
        />
        <Button type="submit" className="h-12 px-6" disabled={status.kind === "sending"}>
          {status.kind === "sending" ? "Joining…" : "Join the briefing"}
        </Button>
      </div>
      <FormStatus status={status} />
      <p className="mt-3 font-display text-[10px] uppercase text-muted-foreground">One email a week. Unsubscribe any time.</p>
    </form>
  );
}

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  function set<K extends keyof typeof values>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      setStatus({ kind: "error", text: parsed.error.issues[0]?.message ?? "Please check the form." });
      return;
    }
    setStatus({ kind: "sending" });
    const { error } = await supabase.from("contact_messages").insert({
      name: parsed.data.name,
      email: parsed.data.email.toLowerCase(),
      subject: parsed.data.subject || null,
      message: parsed.data.message,
    });
    if (error) {
      setStatus({ kind: "error", text: "Your message did not send. Please try again in a moment." });
      return;
    }
    setValues({ name: "", email: "", subject: "", message: "" });
    setStatus({ kind: "ok", text: "Message received. The editorial desk replies within two business days." });
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="contact-name">Name</label>
          <input id="contact-name" className={fieldClass} maxLength={100} required value={values.name} onChange={(e) => set("name", e.target.value)} />
        </div>
        <div>
          <label className={labelClass} htmlFor="contact-email">Email</label>
          <input id="contact-email" type="email" autoComplete="email" className={fieldClass} maxLength={255} required value={values.email} onChange={(e) => set("email", e.target.value)} />
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor="contact-subject">Subject (optional)</label>
        <input id="contact-subject" className={fieldClass} maxLength={150} value={values.subject} onChange={(e) => set("subject", e.target.value)} />
      </div>
      <div>
        <label className={labelClass} htmlFor="contact-message">Message</label>
        <textarea id="contact-message" rows={7} className={fieldClass} maxLength={2000} required value={values.message} onChange={(e) => set("message", e.target.value)} />
        <p className="mt-2 font-display text-[10px] uppercase text-muted-foreground">{values.message.length} / 2000</p>
      </div>
      <div>
        <Button type="submit" className="h-12 px-8" disabled={status.kind === "sending"}>
          {status.kind === "sending" ? "Sending…" : "Send message"}
        </Button>
        <FormStatus status={status} />
      </div>
    </form>
  );
}

function FormStatus({ status }: { status: Status }) {
  if (status.kind !== "ok" && status.kind !== "error") return null;
  return (
    <p
      role="status"
      aria-live="polite"
      className={`mt-4 border-l-2 pl-4 text-sm ${status.kind === "ok" ? "border-primary text-primary" : "border-destructive text-destructive"}`}
    >
      {status.text}
    </p>
  );
}

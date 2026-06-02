import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitContact } from "@/lib/contact.functions";
import { CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const submit = useServerFn(submitContact);
  const [state, setState] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setState("loading"); setError(null);
    try {
      const res = await submit({
        data: {
          name: String(fd.get("name") ?? "").trim(),
          email: String(fd.get("email") ?? "").trim(),
          phone: String(fd.get("phone") ?? "").trim(),
          message: String(fd.get("message") ?? "").trim(),
          consent: fd.get("consent") === "on",
        },
      });
      if (res.ok) { setState("ok"); e.currentTarget.reset(); }
      else { setState("error"); setError(res.error ?? "Something went wrong."); }
    } catch {
      setState("error"); setError("Please check your inputs and try again.");
    }
  }

  if (state === "ok") {
    return (
      <div className="rounded-sm border border-accent/40 bg-accent/5 p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent mx-auto" />
        <h3 className="mt-3 font-display text-2xl uppercase">Message sent</h3>
        <p className="mt-2 text-muted-foreground">We'll get back to you fast. For day-of help, call us directly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Field label="Full Name *" name="name" required maxLength={100} />
      <Field label="Email *" name="email" type="email" required maxLength={255} />
      <Field label="Phone *" name="phone" type="tel" required maxLength={30} />
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Message</label>
        <textarea name="message" rows={4} maxLength={2000} className="w-full rounded-sm border border-input bg-card px-3 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
      </div>
      <label className="flex items-start gap-3 text-xs text-muted-foreground">
        <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 accent-[oklch(0.72_0.18_50)]" />
        <span>I consent to receive SMS notifications, alerts and occasional marketing from Catch 22 Fishing Charters. Message frequency varies. Message &amp; data rates may apply. Reply STOP to unsubscribe.</span>
      </label>
      {state === "error" && (
        <div className="flex items-start gap-2 rounded-sm border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" /><span>{error}</span>
        </div>
      )}
      <button type="submit" disabled={state === "loading"} className="w-full inline-flex items-center justify-center rounded-sm bg-accent text-accent-foreground px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] hover:opacity-90 transition disabled:opacity-60">
        {state === "loading" ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", required, maxLength }: { label: string; name: string; type?: string; required?: boolean; maxLength?: number }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">{label}</label>
      <input name={name} type={type} required={required} maxLength={maxLength} className="w-full rounded-sm border border-input bg-card px-3 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
    </div>
  );
}
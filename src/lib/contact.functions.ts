import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(30),
  message: z.string().trim().max(2000).optional().default(""),
  consent: z.boolean(),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => schema.parse(input))
  .handler(async ({ data }) => {
    if (!data.consent) {
      return { ok: false, error: "Consent is required." };
    }
    const webhook = process.env.HIGHLEVEL_CONTACT_WEBHOOK_URL;
    if (!webhook) {
      console.error("Missing HIGHLEVEL_CONTACT_WEBHOOK_URL env var");
      return { ok: false, error: "Form is not configured. Please call us instead." };
    }
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          source: "catch22fishingcharters.com — contact form",
          submitted_at: new Date().toISOString(),
        }),
      });
      if (!res.ok) {
        console.error("HighLevel webhook failed:", res.status, await res.text().catch(() => ""));
        return { ok: false, error: "Something went wrong sending your message. Please call us." };
      }
      return { ok: true };
    } catch (e) {
      console.error("Contact submit failed:", e);
      return { ok: false, error: "Network error. Please try again or call us." };
    }
  });
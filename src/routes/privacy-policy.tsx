import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Catch 22 Fishing Charters" },
      { name: "description", content: "How Catch 22 Fishing Charters collects, uses, and protects your information." },
      { property: "og:url", content: SITE_URL + "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-slate">
        <h1 className="font-display text-4xl uppercase text-primary">Privacy Policy</h1>
        <p className="text-muted-foreground mt-4">Last updated: {new Date().getFullYear()}</p>

        <h2 className="font-display text-xl uppercase text-primary mt-8">Information We Collect</h2>
        <p className="text-muted-foreground mt-2">When you contact us or book a charter we collect your name, email, phone number, and any details you provide about your trip. We use this information to confirm reservations, communicate trip details, and respond to your questions.</p>

        <h2 className="font-display text-xl uppercase text-primary mt-8">SMS &amp; Marketing</h2>
        <p className="text-muted-foreground mt-2">If you opt in, you may receive SMS notifications, booking alerts, and occasional marketing messages from {SITE.name}. Message frequency varies. Message &amp; data rates may apply. Reply STOP to unsubscribe at any time. Reply HELP to {SITE.phone} for assistance.</p>

        <h2 className="font-display text-xl uppercase text-primary mt-8">How We Use Your Information</h2>
        <p className="text-muted-foreground mt-2">We use your information to fulfill bookings, communicate with you, and improve our service. We do not sell your personal information to third parties.</p>

        <h2 className="font-display text-xl uppercase text-primary mt-8">Contact</h2>
        <p className="text-muted-foreground mt-2">Questions about this policy? Call {SITE.phone} or email <a href={`mailto:${SITE.email}`} className="text-accent">{SITE.email}</a>.</p>
      </div>
    </section>
  );
}
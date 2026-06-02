import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Catch 22 Fishing Charters" },
      { name: "description", content: "Terms of service for Catch 22 Fishing Charters bookings and use of this website." },
      { property: "og:url", content: SITE_URL + "/terms-of-use" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/terms-of-use" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl uppercase text-primary">Terms of Service</h1>
        <p className="text-muted-foreground mt-4">Last updated: {new Date().getFullYear()}</p>

        <h2 className="font-display text-xl uppercase text-primary mt-8">Bookings &amp; Deposits</h2>
        <p className="text-muted-foreground mt-2">All bookings require a 20% deposit to confirm the trip. The remaining 80% can be paid in person at the dock to the Captain upon arrival.</p>

        <h2 className="font-display text-xl uppercase text-primary mt-8">Cancellations</h2>
        <p className="text-muted-foreground mt-2">Cancellations more than 1 day prior to the trip will be refunded in full. Cancellations less than 1 day prior to the confirmed trip date will forfeit the deposit at the discretion of {SITE.name}.</p>

        <h2 className="font-display text-xl uppercase text-primary mt-8">Weather</h2>
        <p className="text-muted-foreground mt-2">Trips may be rescheduled or refunded at the Captain's discretion in the event of unsafe weather. Safety is always the top priority.</p>

        <h2 className="font-display text-xl uppercase text-primary mt-8">Conduct</h2>
        <p className="text-muted-foreground mt-2">Guests are expected to follow Captain's instructions at all times. {SITE.name} reserves the right to refuse service to anyone whose behavior is unsafe or disruptive.</p>

        <h2 className="font-display text-xl uppercase text-primary mt-8">Contact</h2>
        <p className="text-muted-foreground mt-2">Questions? Call {SITE.phone}.</p>
      </div>
    </section>
  );
}
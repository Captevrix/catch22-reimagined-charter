import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Catch 22 Fishing Charters" },
      { name: "description", content: "Terms of service for Catch 22 Fishing Charters bookings and use of this website." },
      { property: "og:title", content: "Terms of Service | Catch 22 Fishing Charters" },
      { property: "og:description", content: "Terms of service for Catch 22 Fishing Charters bookings and use of this website." },
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

        <h2 className="font-display text-xl uppercase text-primary mt-8">Who We Are (SMS Sender Identity)</h2>
        <p className="text-muted-foreground mt-2">SMS messages sent under this program are sent by {SITE.name}, a fishing charter business operating out of Florida. Subscribers may receive booking confirmations, trip reminders, weather updates, operational notifications, and (if separately opted in) occasional marketing messages about special offers, discounts, and service updates.</p>

        <h2 className="font-display text-xl uppercase text-primary mt-8">SMS Opt-Out &amp; Support</h2>
        <p className="text-muted-foreground mt-2">You can cancel the SMS service at any time. Just text "STOP" to {SITE.phone}. After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again. If you are experiencing issues with the messaging program you can reply with the keyword HELP for more assistance, or you can get help directly at <a href={`mailto:${SITE.email}`} className="text-accent">{SITE.email}</a> or {SITE.phone}.</p>

        <h2 className="font-display text-xl uppercase text-primary mt-8">Message Frequency</h2>
        <p className="text-muted-foreground mt-2">As always, message and data rates may apply for any messages sent to you from us and to us from you. Message frequency varies based on your trip activity and opt-in preferences. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.</p>

        <h2 className="font-display text-xl uppercase text-primary mt-8">Carrier Liability</h2>
        <p className="text-muted-foreground mt-2">Carriers are not liable for delayed or undelivered messages.</p>

        <h2 className="font-display text-xl uppercase text-primary mt-8">Privacy</h2>
        <p className="text-muted-foreground mt-2">If you have any questions regarding privacy, please read our privacy policy: <a href="/privacy-policy" className="text-accent">/privacy-policy</a>.</p>

        <h2 className="font-display text-xl uppercase text-primary mt-8">Contact</h2>
        <p className="text-muted-foreground mt-2">Questions? Call {SITE.phone}.</p>
      </div>
    </section>
  );
}
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { BookButton } from "@/components/BookButton";
import { PHOTOS, SITE } from "@/lib/site";
import { SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/group-charter")({
  head: () => ({
    meta: [
      { title: "Shared Fishing Charter | Catch 22 - Destin, FL" },
      { name: "description", content: "No group? No problem. Join other anglers on a shared charter in Destin, FL - affordable fishing fun at a fraction of the cost of a private trip." },
      { property: "og:title", content: "Shared Fishing Charter | Catch 22" },
      { property: "og:url", content: SITE_URL + "/group-charter" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/group-charter" }],
  }),
  component: GroupPage,
});

function GroupPage() {
  return (
    <>
      <PageHero eyebrow="No group? No problem." title="Share The Boat. Share The Cost." subtitle="Join other anglers on a shared charter - perfect for couples, solo travelers, and families on a budget." image={PHOTOS.groupHero} />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Shared Charter</p>
            <h2 className="mt-3 font-display text-4xl uppercase text-primary">All The Adventure, A Fraction Of The Cost</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With a max of 6 anglers aboard, you'll get the full Catch 22 experience without booking the whole boat. Hands-on fishing, an attentive crew, and a chance to swap stories with fellow anglers from across the country.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              All gear, bait, ice, and Florida fishing licenses are covered. Bring sunscreen, a cooler, and your sense of adventure - we'll handle the rest.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <BookButton>Check Availability</BookButton>
              <a href={SITE.phoneHref} className="inline-flex items-center justify-center rounded-sm border border-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-primary hover:bg-primary hover:text-primary-foreground transition">
                Call {SITE.phone}
              </a>
            </div>
          </div>
          <img src={PHOTOS.inlineA} alt="Anglers on a shared Catch 22 charter" className="aspect-[4/5] object-cover rounded-sm shadow-[var(--shadow-deep)]" />
        </div>
      </section>

      <section className="py-20 bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Why Share</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl uppercase text-primary">A Great Fit For Smaller Groups</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-sm border border-border p-8">
              <p className="font-display text-sm uppercase tracking-[0.2em] text-accent">Solo Anglers</p>
              <h3 className="mt-2 font-display text-2xl uppercase text-primary">Find Your Seat</h3>
              <p className="mt-3 text-muted-foreground">Traveling alone? Hop aboard and meet a few new fishing buddies for the day.</p>
            </div>
            <div className="bg-card rounded-sm border border-border p-8">
              <p className="font-display text-sm uppercase tracking-[0.2em] text-accent">Couples</p>
              <h3 className="mt-2 font-display text-2xl uppercase text-primary">Date On The Water</h3>
              <p className="mt-3 text-muted-foreground">A relaxed half-day trip without the cost of chartering the entire boat.</p>
            </div>
            <div className="bg-card rounded-sm border border-border p-8">
              <p className="font-display text-sm uppercase tracking-[0.2em] text-accent">Small Families</p>
              <h3 className="mt-2 font-display text-2xl uppercase text-primary">Budget Friendly</h3>
              <p className="mt-3 text-muted-foreground">Get the kids on their first offshore trip without paying the full private rate.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">How It Works</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl uppercase text-primary">Reach Out For Open Seats</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Shared trips run subject to availability and demand. Call or message us with your dates and group size - we'll match you with the next open trip.
          </p>
          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <BookButton>Check Availability</BookButton>
            <a href={SITE.phoneHref} className="inline-flex items-center justify-center rounded-sm border border-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-primary hover:bg-primary hover:text-primary-foreground transition">
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
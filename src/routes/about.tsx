import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { BookButton } from "@/components/BookButton";
import { PHOTOS, SITE } from "@/lib/site";
import { SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Catch 22 Charters | Expert Fishing Guides in Destin, FL" },
      { name: "description", content: "Meet the Catch 22 crew. Local Destin captains delivering unforgettable private fishing charters out of Two Georges Marina." },
      { property: "og:title", content: "About Catch 22 Charters" },
      { property: "og:description", content: "Expert fishing guides in Destin, FL." },
      { property: "og:url", content: SITE_URL + "/about" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Catch 22" title="Don't Just Dream It — Fish It." subtitle="Spots fill fast — book your fishing charter now. Choose your adventure." image={PHOTOS.family1} />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Family Friendly</p>
            <h2 className="mt-3 font-display text-4xl uppercase text-primary">We Love Taking Your Family Out</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our captains and crew take the time with your loved ones to ensure they have fun. Patient guidance, calm waters, and plenty of action for everyone on board.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src={PHOTOS.family1} alt="Family fishing with Catch 22" className="aspect-square object-cover rounded-sm" />
            <img src={PHOTOS.family2} alt="Family on the dock with their catch" className="aspect-square object-cover rounded-sm" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Our Fleet</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl uppercase text-primary">Two Boats, Double the Options</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Catch 22 operates two fully rigged boats so you can pick the right vessel for your target species and trip length.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-sm border border-border p-8 text-center">
              <img src={PHOTOS.seaFoxIcon} alt="Sea Fox 248 Commander" className="h-32 w-auto mx-auto object-contain" />
              <h3 className="mt-6 font-display text-2xl uppercase text-primary">Sea Fox 248 Commander</h3>
              <span className="mt-2 inline-block rounded-sm border border-accent/60 bg-accent/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">State Waters</span>
              <p className="mt-4 text-muted-foreground">Runs inshore and state-water trips for up to 6 anglers. Perfect for 4–12 hour private charters and kids' trips.</p>
              <div className="mt-6"><BookButton boat="seafox">Book Sea Fox</BookButton></div>
            </div>
            <div className="bg-card rounded-sm border border-border p-8 text-center">
              <img src={PHOTOS.gradyIcon} alt="Grady-White Offshore" className="h-32 w-auto mx-auto object-contain" />
              <h3 className="mt-6 font-display text-2xl uppercase text-primary">Grady-White Offshore</h3>
              <span className="mt-2 inline-block rounded-sm border border-accent/60 bg-accent/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">Federal Permit</span>
              <p className="mt-4 text-muted-foreground">Federally permitted for long-range offshore. Up to 6 anglers on 6–16 hour deep-sea adventures.</p>
              <div className="mt-6"><BookButton boat="grady">Book Grady</BookButton></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img src={PHOTOS.family2} alt="Bottom fishing on Catch 22" className="aspect-[4/5] object-cover rounded-sm shadow-[var(--shadow-deep)]" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Specializing in Catching</p>
            <h2 className="mt-3 font-display text-4xl uppercase text-primary">Bottom Fishing. Trolling. Jigging.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Choose from bottom fishing for reef fish, trolling for pelagic fish, slow-pitch jigging — or depending on the trip you choose, we can do it all.
            </p>
            <div className="mt-8"><BookButton>Book Today</BookButton></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Choose Your Length</p>
            <h2 className="mt-3 font-display text-4xl uppercase text-primary">From a Short Day to All Day</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We'll make sure your trip is memorable. We offer 4, 5, 6, 8, 10, 12, 14, and 16-hour trips. Pick the length that fits your group and your goals.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">Call <a className="text-accent hover:underline" href={SITE.phoneHref}>{SITE.phone}</a> if you'd like help choosing.</p>
          </div>
          <img src={PHOTOS.family3} alt="Catch 22 trip" className="aspect-[4/5] object-cover rounded-sm shadow-[var(--shadow-deep)]" />
        </div>
      </section>
    </>
  );
}
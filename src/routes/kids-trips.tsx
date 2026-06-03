import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { BookButton } from "@/components/BookButton";
import { PHOTOS, SITE } from "@/lib/site";
import { SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/kids-trips")({
  head: () => ({
    meta: [
      { title: "Kids Fishing Trips | Catch 22 Charters - Destin, FL" },
      { name: "description", content: "A 3-hour kids' catch-and-release fishing trip in Destin, FL. Hands-on fun for young anglers with a patient, friendly crew." },
      { property: "og:title", content: "Kids Fishing Trips | Catch 22" },
      { property: "og:description", content: "A 3-hour kids' catch-and-release fishing trip in Destin, FL. Hands-on fun for young anglers with a patient, friendly crew." },
      { property: "og:url", content: SITE_URL + "/kids-trips" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/kids-trips" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Kids Fishing Trip (Catch & Release)",
          serviceType: "Fishing Charter",
          provider: { "@type": "LocalBusiness", name: SITE.name, telephone: "+1-850-660-3753" },
          areaServed: { "@type": "City", name: "Destin, FL" },
          description: "A 3-hour catch-and-release fishing trip in Destin, FL, built for kids and first-time anglers.",
          offers: { "@type": "Offer", price: "600", priceCurrency: "USD", availability: "https://schema.org/InStock", url: SITE_URL + "/kids-trips" },
        }),
      },
    ],
  }),
  component: KidsPage,
});

function KidsPage() {
  return (
    <>
      <PageHero eyebrow="The perfect trip for young anglers" title="Big Smiles & First Catches 🎣" subtitle="A 3-hour catch-and-release trip built for kids and first-timers. Spots fill fast - book today." image={PHOTOS.kidsHero} />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Built For Beginners</p>
            <h2 className="mt-3 font-display text-4xl uppercase text-primary">A First Catch They'll Never Forget</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Designed for kids and first-timers, our shorter trip keeps the excitement high and the boredom low. Our patient, friendly crew handles the gear so the kids can focus on the fun part - reeling in fish.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Catch-and-release fishing in calm water, with hands-on coaching every step of the way. Discounted family-friendly pricing means the whole crew gets to come along.
            </p>
            <div className="mt-8"><BookButton>Book the Kids Trip</BookButton></div>
          </div>
          <img src={PHOTOS.kids} alt="Kids fishing with Catch 22" className="aspect-[4/5] object-cover rounded-sm shadow-[var(--shadow-deep)]" />
        </div>
      </section>

      <section className="py-20 bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">What To Expect</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl uppercase text-primary">Short, Sweet & Action-Packed</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Three hours on the water - just the right length to hook some fish, create lasting memories, and inspire a love for fishing.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-sm border border-border p-8">
              <p className="font-display text-sm uppercase tracking-[0.2em] text-accent">Duration</p>
              <h3 className="mt-2 font-display text-2xl uppercase text-primary">3 Hours</h3>
              <p className="mt-3 text-muted-foreground">A perfectly paced morning or afternoon trip, designed around shorter attention spans.</p>
            </div>
            <div className="bg-card rounded-sm border border-border p-8">
              <p className="font-display text-sm uppercase tracking-[0.2em] text-accent">Boat</p>
              <h3 className="mt-2 font-display text-2xl uppercase text-primary">Sea Fox 248</h3>
              <p className="mt-3 text-muted-foreground">Stable, spacious, and family-friendly. Up to 6 guests aboard with our kid-friendly crew.</p>
            </div>
            <div className="bg-card rounded-sm border border-border p-8">
              <p className="font-display text-sm uppercase tracking-[0.2em] text-accent">Approach</p>
              <h3 className="mt-2 font-display text-2xl uppercase text-primary">Catch & Release</h3>
              <p className="mt-3 text-muted-foreground">Hands-on coaching, easy-to-catch species, and a safe, stress-free environment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Packing List</p>
            <h2 className="mt-3 font-display text-3xl uppercase text-primary">What To Bring</h2>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              <li className="flex gap-3"><span className="text-accent">—</span> Sunscreen (lotion only, no spray)</li>
              <li className="flex gap-3"><span className="text-accent">—</span> Hat and UV protective clothing</li>
              <li className="flex gap-3"><span className="text-accent">—</span> Deck shoes or non-marking flip-flops</li>
              <li className="flex gap-3"><span className="text-accent">—</span> Snacks, drinks, and lots of water</li>
              <li className="flex gap-3"><span className="text-accent">—</span> Fitted life vest for children under 7</li>
              <li className="flex gap-3"><span className="text-accent">—</span> Camera - tag us @Catch22Charters</li>
            </ul>
          </div>
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">On The House</p>
            <h2 className="mt-3 font-display text-3xl uppercase text-primary">What's Included</h2>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              <li className="flex gap-3"><span className="text-accent">—</span> All rods, reels, tackle, and bait</li>
              <li className="flex gap-3"><span className="text-accent">—</span> Florida fishing license for everyone aboard</li>
              <li className="flex gap-3"><span className="text-accent">—</span> On-board cooler and ice</li>
              <li className="flex gap-3"><span className="text-accent">—</span> Patient, kid-friendly crew</li>
              <li className="flex gap-3"><span className="text-accent">—</span> Catch-and-release coaching</li>
              <li className="flex gap-3"><span className="text-accent">—</span> Free parking and restrooms at the dock</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-sand">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Ready When You Are</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl uppercase text-primary">Make Their First Catch Count</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">Spots fill fast in season. Book today and give your kids a day on the water they'll be talking about for years.</p>
          <div className="mt-8 flex justify-center"><BookButton>Book the Kids Trip</BookButton></div>
        </div>
      </section>
    </>
  );
}
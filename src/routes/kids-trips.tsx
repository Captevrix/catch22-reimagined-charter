import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { BookButton } from "@/components/BookButton";
import { PHOTOS } from "@/lib/site";
import { SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/kids-trips")({
  head: () => ({
    meta: [
      { title: "Kids Fishing Trips | Catch 22 Charters — Destin, FL" },
      { name: "description", content: "A 3-hour kids' catch-and-release fishing trip in Destin, FL. Hands-on fun for young anglers with a patient, friendly crew." },
      { property: "og:title", content: "Kids Fishing Trips | Catch 22" },
      { property: "og:url", content: SITE_URL + "/kids-trips" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/kids-trips" }],
  }),
  component: KidsPage,
});

function KidsPage() {
  return (
    <>
      <PageHero eyebrow="The perfect fishing trip for kids" title="🎣 Big Smiles & First Catches 🐟" subtitle="Spots fill fast — book your kids' fishing trip now." image={PHOTOS.kids} />

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-5 text-muted-foreground text-lg leading-relaxed">
          <p>👦👧 <strong className="text-foreground">The perfect fishing trip for young anglers.</strong> Designed for kids and first-timers, our shorter trips keep the excitement high and the boredom low.</p>
          <p>🎣 <strong className="text-foreground">Hands-on fishing fun.</strong> Our patient, friendly crew loves teaching kids the basics of fishing in a safe, stress-free environment.</p>
          <p>💰 <strong className="text-foreground">Family-friendly pricing.</strong> Special discounted rates for kids so the whole family can enjoy a fun day on the water.</p>
          <p>🚤 <strong className="text-foreground">Short and sweet adventure.</strong> Just the right trip length to hook some fish, create lasting memories, and inspire a love for fishing.</p>
          <p>🐟 <strong className="text-foreground">Make their first catch a moment to remember.</strong> Book your kids' fishing trip today and give them an unforgettable day on the water.</p>
          <div className="pt-4"><BookButton>Book the Kids Trip</BookButton></div>
        </div>
      </section>

      <section className="py-16 bg-sand">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-display text-2xl uppercase text-primary">What To Bring</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>• Sunscreen (lotion only — no spray)</li>
              <li>• Hat, UV protective clothing</li>
              <li>• Deck shoes or non-marking flip-flops</li>
              <li>• Snacks, drinks, lots of water</li>
              <li>• Fitted life vest for children under 7</li>
              <li>• Camera — tag us @Catch22Charters!</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl uppercase text-primary">What's Included</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>• All rods, reels, tackle, and bait</li>
              <li>• Florida fishing license</li>
              <li>• On-board cooler and ice</li>
              <li>• Patient, kid-friendly crew</li>
              <li>• Catch-and-release coaching</li>
              <li>• Free parking and restrooms</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
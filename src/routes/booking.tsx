import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { TRIPS, PHOTOS, FAQS } from "@/lib/site";
import { SITE_URL } from "@/lib/seo";
import { Search, Clock, Anchor } from "lucide-react";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Your Fishing Charter | Catch 22 - Destin, FL" },
      { name: "description", content: "All trips accommodate 6 guests. Choose your boat and trip length - from a quick 4-hour bite to a 16-hour offshore expedition." },
      { property: "og:title", content: "Book Your Catch 22 Charter" },
      { property: "og:url", content: SITE_URL + "/booking" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/booking" }],
  }),
  component: BookingPage,
});

function BookingPage() {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<"all" | "seafox" | "grady">("all");

  const filtered = TRIPS.filter((t) => {
    if (filter !== "all" && t.boat !== filter) return false;
    if (q && !t.name.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  return (
    <>
      <PageHero eyebrow="Book Your Catch 22 Fishing Charter" title="Don't Just Dream It - Fish It." subtitle="All trips accommodate up to 6 guests. Choose your boat and trip length below." image={PHOTOS.trolling} />

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 justify-between border-b border-border pb-6">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search trips…" className="w-full rounded-sm border border-input bg-card pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>
            <div className="flex gap-2">
              {[
                { id: "all", label: "All Boats" },
                { id: "seafox", label: "Sea Fox 248 Commander" },
                { id: "grady", label: "Grady (Federal Permit)" },
              ].map((b) => (
                <button key={b.id} onClick={() => setFilter(b.id as typeof filter)} className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] rounded-sm border transition ${filter === b.id ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground"}`}>
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t) => (
              <article key={t.name} className="group flex flex-col rounded-sm border border-border bg-card overflow-hidden hover:shadow-[var(--shadow-deep)] transition-all">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={t.boat === "grady" ? PHOTOS.gradyIcon : PHOTOS.seaFoxIcon} alt={t.name} className="h-full w-full object-contain p-6 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    <Anchor className="h-3 w-3 text-accent" />
                    {t.boat === "grady" ? "Grady (Federal Permit)" : "Sea Fox 248 Commander"}
                  </div>
                  <h3 className="mt-2 font-display text-xl uppercase text-primary leading-tight">{t.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground flex-1">{t.desc}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" /> {t.duration}
                    </span>
                    <span className="font-display text-2xl text-primary">${t.price.toLocaleString()}</span>
                  </div>
                  <a href={t.directUrl} target="_blank" rel="noopener noreferrer" className="mt-4 w-full inline-flex items-center justify-center rounded-sm bg-accent text-accent-foreground px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] hover:opacity-90 transition">
                    Book
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-muted-foreground">No trips match that filter.</p>
          )}
        </div>
      </section>

      {/* INFO PANELS */}
      <section className="py-20 bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard title="What's Included" items={["All tackle, bait, fuel, and ice", "Florida fishing license for all anglers", "Dry box and storage", "On-board 50qt cooler", "Fish cleaning and bagging", "Free parking and restrooms"]} />
          <InfoCard title="What to Bring" items={["Lotion sunscreen (no spray)", "Hat, UV protective clothing", "Deck shoes / non-marking soles", "Dramamine (1 hr before)", "Food, drinks, lots of water", "Layers in cooler months"]} />
          <InfoCard title="What NOT to Bring" items={["Spray sunscreen", "Hard coolers", "Large bags", "Liquor (beer is OK)", "Pets", "Bananas"]} />
          <InfoCard title="Deposit & Cancellation" items={["20% deposit confirms your trip", "80% balance paid at the dock", "Full refund > 1 day prior", "< 1 day cancellations may forfeit deposit"]} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl uppercase text-primary text-center">FAQ</h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex justify-between items-center cursor-pointer font-display text-lg uppercase text-primary">
                  {f.q}
                  <span className="ml-4 text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-card rounded-sm border border-border p-6">
      <h3 className="font-display text-xl uppercase text-primary">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i} className="flex gap-2"><span className="text-accent mt-0.5">•</span>{i}</li>
        ))}
      </ul>
    </div>
  );
}
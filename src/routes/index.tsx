import { createFileRoute, Link } from "@tanstack/react-router";
import { Anchor, Fish, Users, Shield, Star, ChevronRight, BadgeCheck, Phone } from "lucide-react";
import { BookButton } from "@/components/BookButton";
import { SITE, PHOTOS, TESTIMONIALS, SPONSORS } from "@/lib/site";
import { OG, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Catch 22 Fishing Charters | Private Destin FL Charters" },
      { name: "description", content: "Destin's private fishing charters: bottom fishing, trolling, and kids' trips out of Two Georges Marina. Book direct and save." },
      { property: "og:title", content: "Catch 22 Fishing Charters | Destin, FL" },
      { property: "og:description", content: "Private fishing charters in Destin, FL - big catches, even bigger memories." },
      { property: "og:image", content: OG.home },
      { property: "og:url", content: SITE_URL + "/" },
      { name: "twitter:image", content: OG.home },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO with background video */}
      <section className="relative isolate min-h-[92vh] flex items-center text-white overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={PHOTOS.privateCharters}
          className="absolute inset-0 h-full w-full object-cover -z-10"
        >
          <source src={SITE.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-display text-sm uppercase tracking-[0.4em] text-accent">Destin, Florida</p>
            <span className="inline-flex items-center gap-1.5 rounded-sm border border-accent/60 bg-accent/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
              <BadgeCheck className="h-3.5 w-3.5" /> Federally Permitted
            </span>
          </div>
          <p className="mt-4 font-display text-lg uppercase tracking-[0.2em] text-white/85">Experience the thrill of deep-sea fishing</p>
          <h1 className="mt-3 max-w-4xl font-display text-5xl sm:text-7xl lg:text-8xl uppercase leading-[0.95]">
            Destin's Ultimate <span className="text-accent">Private Fishing Charters</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/85">
            Big catches, even bigger memories. Spots fill fast - book your charter today.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <BookButton>Book Direct & Save</BookButton>
            <Link to="/booking" className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] border border-white/40 hover:bg-white/10">
              See All Trips <ChevronRight className="h-4 w-4" />
            </Link>
            <a href={SITE.phoneHref} className="sm:hidden inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] border border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Phone className="h-4 w-4" /> Call
            </a>
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Our Fleet</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl uppercase text-primary">Two Boats, Endless Adventure</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Catch 22 runs a fully equipped two-boat fleet - choose the Sea Fox for inshore and state-water trips, or the federally-permitted Grady-White for long-range offshore runs.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-sm border border-border p-8 text-center">
              <img src={PHOTOS.seaFoxIcon} alt="Sea Fox 248 Commander" className="h-32 w-auto mx-auto object-contain" />
              <h3 className="mt-6 font-display text-2xl uppercase text-primary">Sea Fox 248 Commander</h3>
              <span className="mt-2 inline-block rounded-sm border border-accent/60 bg-accent/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">State Waters</span>
              <p className="mt-4 text-muted-foreground">Up to 6 anglers. Inshore and state-water trips from 4 to 12 hours - bottom fishing, trolling, and kids' trips.</p>
              <div className="mt-6"><BookButton boat="seafox">Book Sea Fox</BookButton></div>
            </div>
            <div className="bg-card rounded-sm border border-border p-8 text-center">
              <img src={PHOTOS.gradyIcon} alt="Grady-White Offshore" className="h-32 w-auto mx-auto object-contain" />
              <h3 className="mt-6 font-display text-2xl uppercase text-primary">Grady-White Offshore</h3>
              <span className="mt-2 inline-block rounded-sm border border-accent/60 bg-accent/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">Federal Permit</span>
              <p className="mt-4 text-muted-foreground">Up to 6 anglers. Federally permitted for long-range offshore trips from 6 to 16 hours - serious deep-sea fishing.</p>
              <div className="mt-6"><BookButton boat="grady">Book Grady</BookButton></div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Your Adventure Starts Here</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl uppercase text-primary">Welcome to Catch 22 Charters</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            We take you straight to the action in the world-famous waters of Destin, FL. Whether you're after an action-packed trolling trip, a relaxing private charter, or a fun-filled kids' fishing experience, our expert crew is here to deliver unforgettable moments on the water.
          </p>
        </div>
      </section>

      {/* TRIP TYPES */}
      <section className="py-20 bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: "🎣", title: "Private Fishing Charters", img: PHOTOS.privateCharters, desc: "Custom trips for you and your group with top-tier equipment and expert guidance.", to: "/booking" },
              { emoji: "🚤", title: "Trolling Trips", img: PHOTOS.trolling, desc: "Chase fast-moving fish like king mackerel, tuna, and wahoo for an adrenaline-pumping adventure.", to: "/booking" },
              { emoji: "👦", title: "Kids' Catch & Release", img: PHOTOS.kids, desc: "A fun, educational way for young anglers to experience fishing without the pressure.", to: "/kids-trips" },
            ].map((c) => (
              <Link key={c.title} to={c.to} className="group bg-card rounded-sm overflow-hidden shadow-sm hover:shadow-[var(--shadow-deep)] transition-all flex flex-col">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={c.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-2xl uppercase text-primary">{c.emoji} {c.title}</h3>
                  <p className="mt-3 text-muted-foreground flex-1">{c.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold uppercase tracking-[0.18em] text-accent group-hover:gap-2 transition-all">
                    Learn More <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">The Catch 22 Difference</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl uppercase text-primary">Why Choose Catch 22?</h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Anchor, t: "Expert Captain & Crew", d: "Local knowledge and years of experience to put you on the fish." },
              { Icon: Shield, t: "All-Inclusive Trips", d: "Rods, reels, bait, tackle, and licenses - just bring your excitement." },
              { Icon: Users, t: "Families, Groups & Pros", d: "Beginner or seasoned angler, we customize every trip." },
              { Icon: Fish, t: "World's Luckiest Village", d: "Destin, FL has some of the best fishing on the Gulf Coast." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="rounded-sm border border-border bg-card p-6">
                <span className="h-11 w-11 rounded-sm bg-accent/15 text-accent flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-xl uppercase text-primary">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <BookButton>Book Direct & Save</BookButton>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-24 text-white bg-deep overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Testimonials</p>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl uppercase">What Others Are Saying</h2>
          </div>
          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <article key={t.name} className="bg-white/5 backdrop-blur border border-white/10 p-6 rounded-sm flex flex-col">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <h3 className="mt-3 font-display text-lg uppercase tracking-wide text-accent">{t.title}</h3>
                <p className="mt-3 text-white/85 leading-relaxed flex-1 text-sm">{t.text}</p>
                <p className="mt-5 pt-4 border-t border-white/10 font-display text-sm uppercase tracking-wider"> -  {t.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TWO COLUMN BOOK */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl sm:text-5xl uppercase text-primary text-center">Reserve Your Spot Today</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-sm border border-border p-8">
              <h3 className="font-display text-2xl uppercase text-primary">Private Fishing Charter</h3>
              <p className="mt-3 text-muted-foreground">On a private charter, your group (up to 6 guests) are the only ones on the boat - plus a Captain and Mate.</p>
              <div className="mt-6"><Link to="/booking" className="inline-flex items-center justify-center rounded-sm bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] hover:opacity-90">Book Now</Link></div>
            </div>
            <div className="bg-card rounded-sm border border-border p-8">
              <h3 className="font-display text-2xl uppercase text-primary">Kids Fishing Trip</h3>
              <p className="mt-3 text-muted-foreground">A 3-hour saltwater catch-and-release experience for the little ones - multiple species, big smiles.</p>
              <div className="mt-6"><Link to="/kids-trips" className="inline-flex items-center justify-center rounded-sm bg-accent text-accent-foreground px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] hover:opacity-90">Book Now</Link></div>
            </div>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section className="py-16 bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary/70">Our Sponsors</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-10">
            {SPONSORS.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                <img src={s.img} alt={s.name} className="h-14 w-auto object-contain" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { BookButton } from "@/components/BookButton";
import { PHOTOS, SITE } from "@/lib/site";
import { SITE_URL } from "@/lib/seo";
import { Calendar, Waves, Fish } from "lucide-react";

type Report = {
  date: string; // ISO
  displayDate: string;
  title: string;
  conditions: string;
  biting: string[];
  notes: string;
};

// Update these entries regularly. Newest first.
const REPORTS: Report[] = [
  {
    date: "2026-06-28",
    displayDate: "June 28, 2026",
    title: "Summer bite is on — red snapper wide open",
    conditions: "Light SE winds, 1-2 ft seas, water temp holding around 82°F. Excellent visibility on the near-shore reefs.",
    biting: ["Red Snapper", "Vermilion Snapper", "Scamp Grouper", "King Mackerel"],
    notes:
      "Federal red snapper season is running strong on the Grady. Bottom fishing 90-120 ft is producing quick limits, and the trollers are picking up kings on the ride out. Book weekday mornings to beat the crowd at the pass.",
  },
  {
    date: "2026-05-15",
    displayDate: "May 15, 2026",
    title: "Cobia tail-end, kings and Spanish thick",
    conditions: "Warming water in the mid-70s, light chop on the Gulf, clean green water inside 10 miles.",
    biting: ["King Mackerel", "Spanish Mackerel", "Cobia", "Triggerfish"],
    notes:
      "A few late cobia still cruising the beach on calm mornings. Slow-troll live cigar minnows for kings, and cast Gotcha plugs off the wrecks for Spanish. Triggerfish season is open — expect a fun mixed bag on the 4- and 6-hour Sea Fox runs.",
  },
  {
    date: "2026-04-02",
    displayDate: "April 2, 2026",
    title: "Spring shake-off — mingo, mahi showing early",
    conditions: "Water temp 68-72°F, occasional 2-3 ft afternoon chop. Better trips have been AM launches.",
    biting: ["Vermilion Snapper (Mingo)", "White Snapper", "Early Mahi", "Amberjack"],
    notes:
      "Early mahi are starting to push in behind the weedlines on offshore Grady trips. Mingo bite has been steady all week 80-100 ft. AJs are open — bring a strong back for the deep drops.",
  },
];

const latest = REPORTS[0];
const archive = REPORTS.slice(1);

export const Route = createFileRoute("/fishing-report")({
  head: () => ({
    meta: [
      { title: "Destin Fishing Report | Catch 22 Charters" },
      { name: "description", content: "Fresh Destin, FL fishing report from Catch 22 Charters — recent catches, water conditions, and what's biting on the Gulf. Updated regularly by the crew." },
      { property: "og:title", content: "Destin Fishing Report | Catch 22 Charters" },
      { property: "og:description", content: "What's biting in Destin, FL right now — bottom fishing, trolling, and offshore reports from the Catch 22 crew." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: SITE_URL + "/fishing-report" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/fishing-report" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: latest.title,
          datePublished: latest.date,
          dateModified: latest.date,
          author: { "@type": "Organization", name: SITE.name },
          publisher: { "@type": "Organization", name: SITE.name, logo: { "@type": "ImageObject", url: SITE.logo } },
          articleSection: "Fishing Report",
          about: "Destin, FL fishing conditions",
        }),
      },
    ],
  }),
  component: FishingReportPage,
});

function FishingReportPage() {
  return (
    <>
      <PageHero
        eyebrow="Destin, Florida"
        title="Destin Fishing Report"
        subtitle="What's biting on the Gulf, water conditions, and what to expect on your next trip. Updated regularly by the Catch 22 crew."
        image={PHOTOS.trolling}
      />

      {/* LATEST */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-accent">
            <span className="h-px flex-1 bg-border" />
            <span>Latest Report</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <article className="mt-8 bg-card border border-border rounded-sm p-8 sm:p-10 shadow-[var(--shadow-deep)]">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
              <Calendar className="h-3.5 w-3.5 text-accent" /> {latest.displayDate}
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl uppercase text-primary leading-tight">
              {latest.title}
            </h2>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="flex items-center gap-2 font-display text-sm uppercase tracking-[0.18em] text-accent">
                  <Waves className="h-4 w-4" /> Conditions
                </h3>
                <p className="mt-2 text-foreground/85 leading-relaxed">{latest.conditions}</p>
              </div>
              <div>
                <h3 className="flex items-center gap-2 font-display text-sm uppercase tracking-[0.18em] text-accent">
                  <Fish className="h-4 w-4" /> What's Biting
                </h3>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {latest.biting.map((b) => (
                    <li key={b} className="rounded-sm border border-border bg-sand px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-8 text-foreground/85 leading-relaxed border-t border-border pt-6">{latest.notes}</p>
            <div className="mt-8">
              <BookButton>Book This Bite</BookButton>
            </div>
          </article>
        </div>
      </section>

      {/* ARCHIVE */}
      {archive.length > 0 && (
        <section className="py-20 bg-sand">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl uppercase text-primary text-center">Prior Reports</h2>
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              {archive.map((r) => (
                <article key={r.date} className="bg-card border border-border rounded-sm p-6 flex flex-col">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5 text-accent" /> {r.displayDate}
                  </div>
                  <h3 className="mt-2 font-display text-xl uppercase text-primary leading-tight">{r.title}</h3>
                  <p className="mt-3 text-sm text-foreground/80 leading-relaxed flex-1">{r.notes}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5 border-t border-border pt-4">
                    {r.biting.map((b) => (
                      <li key={b} className="text-[10px] font-semibold uppercase tracking-wider text-primary/80 border border-border rounded-sm px-2 py-0.5">
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-deep text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl uppercase">Ready to Get on the Fish?</h2>
          <p className="mt-4 text-white/90">Trips fill fast when the bite is on. Lock in your date with the Catch 22 crew.</p>
          <div className="mt-8 flex justify-center"><BookButton>Book Your Charter</BookButton></div>
        </div>
      </section>
    </>
  );
}
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { BookButton } from "@/components/BookButton";
import { PHOTOS, SITE } from "@/lib/site";
import { SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/group-charter")({
  head: () => ({
    meta: [
      { title: "Shared Fishing Charter | Catch 22 — Destin, FL" },
      { name: "description", content: "No group? No problem. Join other anglers on a shared charter in Destin, FL — affordable fishing fun at a fraction of the cost of a private trip." },
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
      <PageHero eyebrow="No group? No problem." title="Affordable Fishing Fun — Join a Group" subtitle="Share the boat (and the cost) with other anglers. A great fit for couples, solo anglers, and families on a budget." image={PHOTOS.family2} />

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-5 text-muted-foreground text-lg leading-relaxed">
          <p>🚤 <strong className="text-foreground">Shared trip, big adventure.</strong> With a max of 6 anglers, enjoy a hands-on fishing experience while connecting with fellow fishing enthusiasts.</p>
          <p>🎣 <strong className="text-foreground">All gear, bait, and licenses included.</strong> Just bring sunscreen, snacks, and your sense of adventure.</p>
          <p>💰 <strong className="text-foreground">A fraction of the cost of a private trip.</strong> Hit the water without booking the whole boat.</p>
          <div className="pt-4 flex flex-wrap gap-4">
            <BookButton>Check Availability</BookButton>
            <a href={SITE.phoneHref} className="inline-flex items-center justify-center rounded-sm border border-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-primary hover:bg-primary hover:text-primary-foreground transition">
              Call {SITE.phone}
            </a>
          </div>
          <p className="text-sm pt-4">Shared trips run subject to availability. Reach out and we'll find the next open seat for you.</p>
        </div>
      </section>
    </>
  );
}
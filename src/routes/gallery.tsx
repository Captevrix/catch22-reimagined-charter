import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { PageHero } from "@/components/PageHero";
import { GALLERY, PHOTOS, SITE } from "@/lib/site";
import { SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Fishing Photo Gallery | Catch 22 Charters Destin" },
      { name: "description", content: "Trophy catches, big smiles, and unforgettable adventures. See the action from our Destin fishing charters." },
      { property: "og:title", content: "Photo Gallery | Catch 22 Charters" },
      { property: "og:description", content: "Trophy catches, big smiles, and unforgettable adventures from Catch 22's private Destin fishing charters." },
      { property: "og:url", content: SITE_URL + "/gallery" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>('script[src="https://www.tiktok.com/embed.js"]');
    if (existing) {
      // Re-trigger embed rendering on client-side navigation
      existing.remove();
    }
    const s = document.createElement("script");
    s.src = "https://www.tiktok.com/embed.js";
    s.async = true;
    document.body.appendChild(s);
    return () => {
      s.remove();
    };
  }, []);

  useEffect(() => {
    if (document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) return;
    const s = document.createElement("script");
    s.src = "https://static.elfsight.com/platform/platform.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <>
      <PageHero eyebrow="Trophy Catches & Big Smiles" title="See the Action. Feel the Excitement." subtitle="Fishing stories worth a thousand pictures." image={PHOTOS.galleryHero} />
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Catch 22's TikTok</p>
            <a href={SITE.social.tiktok} target="_blank" rel="noreferrer" className="mt-2 inline-block font-display text-2xl uppercase text-primary hover:text-accent transition">@catch22.charters</a>
          </div>
          <div className="mb-16 flex justify-center">
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@catch22.charters"
              data-unique-id="catch22.charters"
              data-embed-type="creator"
              style={{ maxWidth: 780, minWidth: 288, width: "100%" }}
            >
              <section>
                <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@catch22.charters">
                  @catch22.charters on TikTok
                </a>
              </section>
            </blockquote>
          </div>
          <div className="text-center mb-12">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Catch 22 on Instagram</p>
            <a href={SITE.social.instagram} target="_blank" rel="noreferrer" className="mt-2 inline-block font-display text-2xl uppercase text-primary hover:text-accent transition">@catch22charters_</a>
          </div>
          <div className="mb-16 flex justify-center">
            <div
              className="elfsight-app-01d3fec7-fb61-49d9-9089-5918166fe2f9"
              data-elfsight-app-lazy
            />
          </div>
          <div className="text-center mb-8">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Photo Highlights</p>
          </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {GALLERY.map((src, i) => {
              const captions = [
                "Family holding a trophy red snapper on the deck of Catch 22 in Destin, FL",
                "Anglers with a stringer of vermilion snapper caught bottom fishing offshore Destin",
                "Young angler smiling with a first catch on a Catch 22 kids fishing trip",
                "Group of friends showing off amberjack caught on a Destin deep-sea charter",
                "Captain and mate netting a mahi mahi at the boat side in the Gulf of Mexico",
                "Couple posing with a red grouper caught offshore Destin, Florida",
                "Angler fighting a fish on a Shimano reel aboard the Sea Fox 248 Commander",
                "Fresh catch of the day laid out on the dock at Two Georges Marina in Shalimar",
                "Kids holding small reef fish on a Catch 22 catch-and-release trip",
                "Grady-White offshore boat running out of Destin East Pass at sunrise",
                "Trophy king mackerel caught trolling out of Destin on a Catch 22 charter",
                "Family fishing photo with multiple snapper on the deck",
                "Angler with a large scamp grouper caught bottom fishing offshore Destin",
                "Group celebrating a successful offshore fishing trip on Catch 22",
                "Sunset view from the deck of a Catch 22 charter on the Gulf of Mexico",
                "Captain gaffing a fish boatside during a Destin deep-sea trip",
                "Anglers holding red snapper during Florida Gulf snapper season",
                "Two guests smiling with a cooler full of Gulf reef fish",
                "Young angler with a keeper snapper on a Catch 22 family charter",
                "Gulf of Mexico fish cleaning at Two Georges Marina after a Catch 22 trip",
              ];
              const alt = captions[i] ?? `Catch 22 Destin fishing charter photo ${i + 1}`;
              return (
                <div key={i} className="break-inside-avoid overflow-hidden rounded-sm bg-muted">
                  <img src={src} alt={alt} loading="lazy" className="w-full h-auto block hover:scale-105 transition-transform duration-700" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
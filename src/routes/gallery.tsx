import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { PageHero } from "@/components/PageHero";
import { GALLERY, PHOTOS, SITE } from "@/lib/site";
import { SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Fishing Charter Photo Gallery | Catch 22 Charters in Destin, FL" },
      { name: "description", content: "Trophy catches, big smiles, and unforgettable adventures. See the action from our Destin fishing charters." },
      { property: "og:title", content: "Photo Gallery | Catch 22 Charters" },
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

  return (
    <>
      <PageHero eyebrow="Trophy Catches & Big Smiles" title="See the Action. Feel the Excitement." subtitle="Fishing stories worth a thousand pictures." image={PHOTOS.family1} />
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
          <div className="text-center mb-8">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-accent">Photo Highlights</p>
          </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {GALLERY.map((src, i) => (
              <div key={i} className="break-inside-avoid overflow-hidden rounded-sm bg-muted">
                <img src={src} alt={`Catch 22 gallery photo ${i + 1}`} loading="lazy" className="w-full h-auto block hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
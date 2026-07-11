## Goal
Close the three remaining SEO findings:
1. **Semrush** — add a Destin fishing report page.
2. **Lighthouse performance** — speed up the homepage LCP.
3. **Lighthouse accessibility** — fix low-contrast text.

---

## 1. New route: `/fishing-report`

Create `src/routes/fishing-report.tsx` styled like the rest of the site (PageHero + section cards, no emoji spam).

Content model — a small typed array at the top of the file so the user can update entries by editing one place:

```ts
type Report = { date: string; title: string; conditions: string; biting: string[]; notes: string };
const REPORTS: Report[] = [ /* 3 seed entries covering recent weeks */ ];
```

Page sections:
- Hero: "Destin Fishing Report" with `PHOTOS.trolling` background.
- Intro paragraph explaining what the report is and cadence ("updated regularly by Capt. Ben").
- Latest report card (first entry) — larger, featured.
- Archive grid of prior entries.
- CTA strip: "Ready to fish? Book your charter" → BookButton.

SEO:
- `head()` with unique title "Destin Fishing Report | Catch 22 Charters", meta description referencing water conditions and what's biting in Destin, og:title / og:description / og:url / canonical.
- JSON-LD `Article` for the latest report (headline, datePublished, author = SITE.name, publisher).
- Add `/fishing-report` to `ROUTES` in `src/routes/sitemap[.]xml.ts`.

Nav:
- Add "Fishing Report" link to `SiteHeader` desktop + mobile nav and to `SiteFooter` link column (wherever the other page links live). Keep ordering natural — after "Gallery".

Seed entries: 3 short, plausible Destin reports (recent month, prior month, one older) written generically — species/conditions typical for the season. Clearly presented as sample entries the owner will replace.

## 2. Lighthouse performance (homepage LCP)

The hero is a `<video>` with poster `PHOTOS.privateCharters`; the poster/H1 is the LCP. Changes in `src/routes/index.tsx` and `src/routes/__root.tsx`:

- In `src/routes/index.tsx` `head().links`, preload the hero poster: `{ rel: "preload", as: "image", href: PHOTOS.privateCharters, fetchpriority: "high" }`.
- On the `<video>` tag: keep `preload="metadata"`, but add `fetchpriority="high"` on the video and ensure poster is set (already is).
- In `src/routes/__root.tsx`, add `&display=swap` is already there — verify. It is. No change needed for fonts.
- Add `width` / `height` attributes on the fleet `<img>` icons and hero-adjacent images that render above the fold on mobile so layout is stable.

Note in the closing message: this only shows up in Lighthouse after the user republishes.

## 3. Lighthouse accessibility (contrast)

Audit for low-contrast tokens on light backgrounds. Two known offenders:
- `text-white/85` and `text-white/40` inside the hero over the gradient — bump to `text-white` / `text-white/90` where used for body copy.
- `text-muted-foreground` is token-based and fine, but the trip card meta line `text-[10px] uppercase ... text-muted-foreground` at 10px falls below AA — bump to `text-foreground/80` (still muted-looking, higher contrast) or increase size to 11px. Go with darker color, keep size.
- Footer / MobileStickyCTA: check any `text-white/60` or `/50` classes and bump to `/80` minimum.

Do a targeted `rg` sweep for `text-white/[0-6]0`, `text-white/40`, `text-muted-foreground/`, and `text-foreground/[0-5]0` and raise each to meet 4.5:1.

## Out of scope
- No CMS — reports are hardcoded in the route file for now. Can move to Lovable Cloud later if the user wants an editor UI.
- No changes to booking / Vrixplay flow.
- No new images generated.

## Verification
- Typecheck clean, `/fishing-report` renders, nav link works, sitemap includes it.
- Grep confirms no remaining `text-white/[1-5]0` or `text-*-foreground/[1-4]0` on visible copy.
- Homepage `<head>` includes the hero preload link.

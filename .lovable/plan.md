## Goal
On the `/booking` page only, make each trip card's "Book" button open that trip's specific Vrixplay direct link in a new tab — instead of opening the generic boat-picker modal.

Scope is strictly limited to the trip cards on `/booking`. No other "Book Now" / generic CTAs anywhere on the site will change.

## Changes

### 1. `src/lib/site.ts` — add `directUrl` to each trip
Extend the `Trip` type with `directUrl: string` and populate it on all 14 entries in `TRIPS` using the exact URLs you provided. Mapping is by exact trip name:

- Kids Trip (Catch & Release) → kids 3h link
- Private 4/5/6/8/10 Hour, 8 Hour Pelagic Trolling, 12 Hour Trolling Charter → Sea Fox links
- Grady - Private 6/8/10/12/14/16 Hour Fishing Charter → Grady links

### 2. `src/routes/booking.tsx` — render the per-trip link
Replace the existing `<button onClick={() => booking.openWithBoat(t.boat)}>Book</button>` with an `<a href={t.directUrl} target="_blank" rel="noopener noreferrer">` styled identically (same classes), so the card visually unchanged but it now goes straight to that trip's Vrixplay checkout. Drop the now-unused `useBooking` import on this page.

## Out of scope (intentionally NOT touched)
- `BookButton` component, `BookingModal`, the boat-picker flow
- All hero CTAs, sticky mobile CTA, footer CTAs, home/about/contact/kids/group/gallery CTAs
- `src/lib/boats.ts` boat-level embed URLs (still used by modal for generic "Book Now")

## Verification
- TypeScript builds clean (new required `directUrl` field on every trip).
- Visit `/booking`, click a Sea Fox card and a Grady card — each opens its specific URL in a new tab.
- Other "Book Your Charter" buttons elsewhere still open the modal.

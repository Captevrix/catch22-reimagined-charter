## Goal
On `/booking`, each trip card's "Book" button opens the existing booking modal — but loads that trip's specific Vrixplay URL instead of the generic boat-level embed. All other "Book Your Charter" CTAs still open the modal in boat-picker mode (unchanged).

## Changes

### 1. `src/components/BookingModal.tsx`
- Extend the context with a new method: `openWithTrip(trip: { name: string; boat: BoatId; directUrl: string })`.
- Add internal state `tripOverride: { name; boat; embedUrl } | null`. When set, the modal renders the iframe pointed at `directUrl` (with `?embed=true` appended) and uses `trip.name` as the dialog title instead of `Book {boat.name}`.
- The "Choose different boat" back button is hidden in trip mode (since the user picked a specific trip, not a boat) — replaced with a back arrow that closes trip mode and returns to the boat picker, OR simply omitted. Go with: show a back arrow that clears `tripOverride` and `boat`, returning to the boat picker grid (consistent UX).
- Reset `tripOverride` on close.
- The "Open in new tab" fallback link uses the trip's standalone URL (strip `embed` param).
- Existing `open()` and `openWithBoat(boat)` behavior is preserved exactly.

### 2. `src/routes/booking.tsx`
- Re-import `useBooking`.
- Replace the `<a href={t.directUrl} target="_blank" ...>` with a `<button onClick={() => booking.openWithTrip(t)}>` using the same classes. Trip cards stay visually identical, but click opens the modal with that trip's specific checkout.

## Out of scope (unchanged)
- `BookButton`, hero CTAs, sticky mobile CTA, footer/home/about/contact/kids/group CTAs — all still call `open()` / `openWithBoat()`.
- `src/lib/boats.ts` and per-boat embed URLs.
- Trip data shape from the prior step (`directUrl` already exists on every `Trip`).

## Verification
- TypeScript clean.
- `/booking`: clicking a Sea Fox card opens modal with that trip's checkout; clicking a Grady card does the same with the Grady URL; back arrow returns to boat picker; close fully resets.
- Other pages: clicking "Book Your Charter" still shows the boat picker first.

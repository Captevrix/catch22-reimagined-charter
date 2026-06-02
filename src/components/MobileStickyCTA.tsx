import { Phone, Calendar } from "lucide-react";
import { SITE } from "@/lib/site";
import { useBooking } from "@/components/BookingModal";

export function MobileStickyCTA() {
  const booking = useBooking();
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-white/10 bg-primary text-primary-foreground shadow-[0_-6px_20px_rgba(0,0,0,0.25)]">
      <div className="grid grid-cols-2">
        <a href={SITE.phoneHref} className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] border-r border-white/10 hover:bg-white/5">
          <Phone className="h-4 w-4" /> Call
        </a>
        <button onClick={() => booking.open()} className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] bg-accent text-accent-foreground hover:opacity-95">
          <Calendar className="h-4 w-4" /> Book
        </button>
      </div>
    </div>
  );
}
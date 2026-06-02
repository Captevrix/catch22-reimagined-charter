import { useBooking } from "@/components/BookingModal";
import type { BoatId } from "@/lib/boats";
import type { ReactNode } from "react";

export function BookButton({ children = "Book Your Charter", variant = "accent", className = "", boat }: { children?: ReactNode; variant?: "accent" | "outline"; className?: string; boat?: BoatId }) {
  const booking = useBooking();
  const base = "inline-flex items-center justify-center rounded-sm px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] transition";
  const styles = variant === "accent"
    ? "bg-accent text-accent-foreground hover:opacity-90 shadow-[var(--shadow-glow)]"
    : "border border-white/40 text-white hover:bg-white/10";
  return (
    <button onClick={() => boat ? booking.openWithBoat(boat) : booking.open()} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}
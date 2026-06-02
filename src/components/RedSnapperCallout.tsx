import { useEffect, useState } from "react";
import { Fish, X, ChevronLeft, BadgeCheck } from "lucide-react";
import { useBooking } from "@/components/BookingModal";
import {
  FL_STATE_WINDOWS,
  FL_FEDERAL_WINDOW,
  isStateOpen,
  isFederalOpen,
  isAnyOpen,
  fmtRange,
} from "@/lib/snapper-season";

const DISMISS_KEY = "snapper-callout-dismissed";

function isDismissed() {
  if (typeof window === "undefined") return false;
  try {
    return window.sessionStorage.getItem(DISMISS_KEY) === "1";
  } catch {
    return false;
  }
}

export function RedSnapperCallout() {
  const booking = useBooking();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setMounted(true);
    if (isDismissed()) return;
    if (!isAnyOpen()) return;
    setHidden(false);
  }, []);

  function dismiss() {
    setHidden(true);
    try {
      window.sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  if (!mounted || hidden) return null;

  const stateOpen = isStateOpen();
  const fedOpen = isFederalOpen();
  // Show the active state window range (the one we're currently in, or the first upcoming)
  const now = new Date();
  const activeState =
    FL_STATE_WINDOWS.find((w) => {
      const s = new Date(w.start);
      const e = new Date(w.end);
      e.setHours(23, 59, 59, 999);
      return now >= s && now <= e;
    }) ?? FL_STATE_WINDOWS[0];

  return (
    <>
      {/* Desktop / tablet: right-side rail */}
      <div className="hidden md:block fixed right-0 top-1/2 -translate-y-1/2 z-40 animate-fade-in">
        {!open ? (
          <button
            onClick={() => setOpen(true)}
            aria-label="Red Snapper season info"
            className="group relative flex items-center gap-2 px-3 py-5 rounded-l-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] text-white font-display uppercase tracking-[0.22em] text-xs hover:pr-5 transition-all"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.22 25) 0%, oklch(0.65 0.21 35) 60%, oklch(0.72 0.18 55) 100%)",
            }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
            </span>
            <span
              className="[writing-mode:vertical-rl] rotate-180 py-1 font-semibold"
              style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
            >
              Red Snapper Season Open
            </span>
            <ChevronLeft className="h-3.5 w-3.5 opacity-80 group-hover:-translate-x-0.5 transition-transform" />
          </button>
        ) : (
          <div
            className="w-[340px] rounded-l-sm overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] border-l-4 animate-fade-in"
            style={{
              borderColor: "oklch(0.6 0.22 28)",
              background:
                "linear-gradient(160deg, oklch(0.18 0.04 240) 0%, oklch(0.22 0.06 250) 100%)",
            }}
          >
            <CardContents
              activeStateRange={fmtRange(activeState)}
              federalRange={fmtRange(FL_FEDERAL_WINDOW)}
              stateOpen={stateOpen}
              fedOpen={fedOpen}
              onBook={() => {
                setOpen(false);
                // State season - both boats eligible.
                // Federal-only window - Grady only (federally permitted).
                if (stateOpen) booking.open();
                else booking.openWithBoat("grady");
              }}
              onClose={() => setOpen(false)}
              onDismiss={dismiss}
            />
          </div>
        )}
      </div>

      {/* Mobile: bottom bar - stacked above the Call/Book sticky CTA (~48px tall) */}
      <div className="md:hidden fixed bottom-[48px] inset-x-0 z-40 animate-fade-in">
        {!open ? (
          <button
            onClick={() => setOpen(true)}
            className="w-full flex items-center justify-between gap-2 px-4 py-3 text-white text-xs font-display uppercase tracking-[0.18em] shadow-[0_-8px_24px_-8px_rgba(0,0,0,0.5)]"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.55 0.22 25) 0%, oklch(0.65 0.21 35) 60%, oklch(0.72 0.18 55) 100%)",
            }}
          >
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              Red Snapper Season Open
            </span>
            <span className="opacity-90">Tap for dates -</span>
          </button>
        ) : (
          <div
            className="border-t-4 shadow-[0_-25px_60px_-15px_rgba(0,0,0,0.6)] animate-fade-in"
            style={{
              borderColor: "oklch(0.6 0.22 28)",
              background:
                "linear-gradient(160deg, oklch(0.18 0.04 240) 0%, oklch(0.22 0.06 250) 100%)",
            }}
          >
            <CardContents
              activeStateRange={fmtRange(activeState)}
              federalRange={fmtRange(FL_FEDERAL_WINDOW)}
              stateOpen={stateOpen}
              fedOpen={fedOpen}
              onBook={() => {
                setOpen(false);
                if (stateOpen) booking.open();
                else booking.openWithBoat("grady");
              }}
              onClose={() => setOpen(false)}
              onDismiss={dismiss}
            />
          </div>
        )}
      </div>
    </>
  );
}

function CardContents({
  activeStateRange,
  federalRange,
  stateOpen,
  fedOpen,
  onBook,
  onClose,
  onDismiss,
}: {
  activeStateRange: string;
  federalRange: string;
  stateOpen: boolean;
  fedOpen: boolean;
  onBook: () => void;
  onClose: () => void;
  onDismiss: () => void;
}) {
  return (
    <div className="p-5 text-white">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <div
            className="flex items-center gap-1.5 px-2 py-1 rounded-sm text-[10px] font-bold uppercase tracking-[0.18em]"
            style={{ background: "oklch(0.6 0.22 28)" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
            </span>
            Open Now
          </div>
          <Fish className="h-4 w-4 opacity-80" />
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={onClose}
            aria-label="Collapse"
            className="rounded-sm p-1 text-white/70 hover:text-white hover:bg-white/10"
          >
            <ChevronLeft className="h-4 w-4 rotate-180" />
          </button>
          <button
            onClick={onDismiss}
            aria-label="Dismiss"
            className="rounded-sm p-1 text-white/70 hover:text-white hover:bg-white/10"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <h3 className="mt-3 font-display text-2xl uppercase leading-tight">
        Florida Gulf
        <br />
        <span style={{ color: "oklch(0.78 0.18 55)" }}>Red Snapper</span> 2026
      </h3>

      <div className="mt-4 space-y-3">
        <div className="rounded-sm border border-white/10 bg-white/5 p-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-display uppercase tracking-[0.2em] text-white/60">
              State Waters
            </span>
            <span
              className="text-[9px] font-bold uppercase tracking-[0.18em] px-1.5 py-0.5 rounded-sm"
              style={{
                background: stateOpen ? "oklch(0.55 0.18 150 / 0.25)" : "oklch(0.5 0.05 250 / 0.3)",
                color: stateOpen ? "oklch(0.85 0.18 150)" : "oklch(0.75 0.05 250)",
              }}
            >
              {stateOpen ? "Open" : "Upcoming"}
            </span>
          </div>
          <div className="mt-1 font-display text-base">{activeStateRange}</div>
          <div className="text-[11px] text-white/60 mt-0.5">Sea Fox + Grady-White</div>
        </div>

        <div
          className="rounded-sm p-3 border"
          style={{
            borderColor: "oklch(0.6 0.22 28 / 0.4)",
            background: "oklch(0.6 0.22 28 / 0.1)",
          }}
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-display uppercase tracking-[0.2em] text-white/70">
              Federal Waters
            </span>
            <span
              className="text-[9px] font-bold uppercase tracking-[0.18em] px-1.5 py-0.5 rounded-sm"
              style={{
                background: fedOpen ? "oklch(0.55 0.18 150 / 0.25)" : "oklch(0.5 0.05 250 / 0.3)",
                color: fedOpen ? "oklch(0.85 0.18 150)" : "oklch(0.75 0.05 250)",
              }}
            >
              {fedOpen ? "Open" : "Jun 1"}
            </span>
          </div>
          <div className="mt-1 font-display text-base">{federalRange}</div>
          <div className="text-[11px] mt-0.5 flex items-center gap-1" style={{ color: "oklch(0.85 0.15 55)" }}>
            <BadgeCheck className="h-3 w-3" />
            Grady-White - federally permitted
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-4 text-[11px] text-white/60">
        <span>
          <span className="text-white font-bold">2</span> fish/person
        </span>
        <span className="h-3 w-px bg-white/20" />
        <span>
          <span className="text-white font-bold">16&quot;</span> minimum
        </span>
      </div>

      <button
        onClick={onBook}
        className="mt-4 w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white rounded-sm transition hover:opacity-95"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.55 0.22 25) 0%, oklch(0.65 0.21 35) 50%, oklch(0.72 0.18 55) 100%)",
          boxShadow: "0 10px 30px -10px oklch(0.6 0.22 28 / 0.6)",
        }}
      >
        Book Snapper Trip
      </button>
    </div>
  );
}

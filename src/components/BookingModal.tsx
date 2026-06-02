import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { SITE } from "@/lib/site";
import { BOATS, BOAT_LIST, type BoatId } from "@/lib/boats";
import { Phone, ArrowLeft, ChevronRight, Anchor, ExternalLink, AlertTriangle } from "lucide-react";

function standaloneUrl(embedUrl: string) {
  try {
    const u = new URL(embedUrl);
    u.searchParams.delete("embed");
    return u.toString();
  } catch {
    return embedUrl;
  }
}

const VRIXPLAY_ORIGIN = "https://app.vrixplay.com";
const IFRAME_LOAD_TIMEOUT_MS = 8000;

type Ctx = {
  open: () => void;
  openWithBoat: (boat: BoatId) => void;
  close: () => void;
};
const BookingCtx = createContext<Ctx>({ open: () => {}, openWithBoat: () => {}, close: () => {} });

export function useBooking() {
  return useContext(BookingCtx);
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [boat, setBoat] = useState<BoatId | null>(null);
  const [iframeStatus, setIframeStatus] = useState<"loading" | "ok" | "failed">("loading");
  const loadTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin === VRIXPLAY_ORIGIN) {
        setIframeStatus("ok");
        if (loadTimerRef.current) {
          clearTimeout(loadTimerRef.current);
          loadTimerRef.current = null;
        }
      }
      if (e?.data && (e.data as { type?: string }).type === "booking_confirmed") {
        setOpen(false);
        setBoat(null);
      }
    }
    function onCSP(e: SecurityPolicyViolationEvent) {
      if (e.blockedURI && e.blockedURI.includes("vrixplay.com")) setIframeStatus("failed");
    }
    window.addEventListener("message", onMessage);
    window.addEventListener("securitypolicyviolation", onCSP);
    return () => {
      window.removeEventListener("message", onMessage);
      window.removeEventListener("securitypolicyviolation", onCSP);
    };
  }, []);

  useEffect(() => {
    if (!boat) return;
    setIframeStatus("loading");
    if (loadTimerRef.current) clearTimeout(loadTimerRef.current);
    loadTimerRef.current = setTimeout(() => {
      setIframeStatus((s) => (s === "ok" ? s : "failed"));
    }, IFRAME_LOAD_TIMEOUT_MS);
    return () => {
      if (loadTimerRef.current) {
        clearTimeout(loadTimerRef.current);
        loadTimerRef.current = null;
      }
    };
  }, [boat]);

  const ctx: Ctx = {
    open: () => { setBoat(null); setOpen(true); },
    openWithBoat: (b) => { setBoat(b); setOpen(true); },
    close: () => { setOpen(false); setBoat(null); },
  };

  const active = boat ? BOATS[boat] : null;

  return (
    <BookingCtx.Provider value={ctx}>
      {children}
      <Dialog open={isOpen} onOpenChange={(o) => { setOpen(o); if (!o) setBoat(null); }}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          <div className="bg-primary text-primary-foreground px-6 py-5">
            <DialogHeader>
              <DialogTitle className="font-display text-2xl tracking-wide text-primary-foreground uppercase">
                {active ? `Book ${active.name}` : "Choose Your Boat"}
              </DialogTitle>
              <DialogDescription className="text-primary-foreground/80">
                {active
                  ? "Pick a date and trip — confirmation arrives instantly."
                  : "Two boats, two experiences. Select one to see live availability."}
              </DialogDescription>
            </DialogHeader>
          </div>

          {active ? (
            <div className="bg-background">
              <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/40">
                <button onClick={() => setBoat(null)} className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition">
                  <ArrowLeft className="h-3.5 w-3.5" /> Choose different boat
                </button>
                <a href={SITE.phoneHref} className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-accent transition">
                  <Phone className="h-3.5 w-3.5" /> {SITE.phone}
                </a>
              </div>
              {iframeStatus === "failed" ? (
                <div className="p-8 flex flex-col items-center text-center gap-4">
                  <AlertTriangle className="h-10 w-10 text-accent" />
                  <h3 className="font-display text-xl uppercase tracking-wide">Booking window didn't load</h3>
                  <p className="text-sm text-muted-foreground max-w-md">
                    Some browsers block our partner's checkout inside this window. Open it in a new tab to finish booking.
                  </p>
                  <a href={standaloneUrl(active.embedUrl)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm bg-accent text-accent-foreground font-bold uppercase tracking-[0.18em] text-sm px-5 py-3 hover:opacity-90 transition">
                    Open booking in new tab <ExternalLink className="h-4 w-4" />
                  </a>
                  <a href={SITE.phoneHref} className="text-xs font-semibold text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5" /> Or call {SITE.phone}
                  </a>
                </div>
              ) : (
                <>
                  <iframe
                    key={active.id}
                    src={active.embedUrl}
                    title={`${active.name} booking`}
                    className="w-full h-[70vh] block border-0 bg-background"
                    allow="payment *; clipboard-write"
                    referrerPolicy="strict-origin-when-cross-origin"
                    onLoad={() => {
                      setIframeStatus("ok");
                      if (loadTimerRef.current) { clearTimeout(loadTimerRef.current); loadTimerRef.current = null; }
                    }}
                  />
                  <div className="px-4 py-2 border-t border-border bg-muted/40 text-center">
                    <a href={standaloneUrl(active.embedUrl)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition">
                      Having trouble? Open in new tab <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="p-6 bg-background">
              <div className="grid sm:grid-cols-2 gap-4">
                {BOAT_LIST.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setBoat(b.id)}
                    className="group text-left rounded-sm border border-border bg-card hover:border-accent hover:shadow-[var(--shadow-glow)] transition-all p-5 flex flex-col gap-3"
                  >
                    <div className="flex items-center gap-2">
                      <Anchor className="h-4 w-4 text-accent" />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{b.badge}</span>
                    </div>
                    <h3 className="font-display text-2xl uppercase leading-tight text-foreground">{b.name}</h3>
                    <p className="text-sm text-muted-foreground flex-1">{b.tagline}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.18em] text-accent group-hover:gap-2 transition-all">
                      Check Availability <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </button>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-center">
                <a href={SITE.phoneHref} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
                  <Phone className="h-4 w-4" /> Prefer to call? {SITE.phone}
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </BookingCtx.Provider>
  );
}
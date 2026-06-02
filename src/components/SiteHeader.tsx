import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useBooking } from "@/components/BookingModal";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

const BOOK_GROUP = [
  { to: "/booking", label: "Private Charter" },
  { to: "/kids-trips", label: "Kids Trip" },
  { to: "/group-charter", label: "Shared Trip" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);
  const booking = useBooking();

  return (
    <header className="sticky top-0 z-40 bg-primary/95 backdrop-blur border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center text-primary-foreground" aria-label={SITE.name}>
            <img src={SITE.logo} alt={SITE.name} className="h-12 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="text-sm font-medium uppercase tracking-wider text-primary-foreground/80 hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>
                {n.label}
              </Link>
            ))}
            <div className="relative" onMouseEnter={() => setBookOpen(true)} onMouseLeave={() => setBookOpen(false)}>
              <button type="button" onClick={() => setBookOpen((o) => !o)} className="flex items-center gap-1 text-sm font-medium uppercase tracking-wider text-primary-foreground/80 hover:text-accent transition-colors">
                Book <ChevronDown className={`h-3.5 w-3.5 transition-transform ${bookOpen ? "rotate-180" : ""}`} />
              </button>
              {bookOpen && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                  <div className="min-w-[200px] rounded-sm border border-white/10 bg-primary shadow-xl overflow-hidden">
                    {BOOK_GROUP.map((n) => (
                      <Link key={n.to} to={n.to} onClick={() => setBookOpen(false)} className="block px-4 py-2.5 text-sm font-medium uppercase tracking-wider text-primary-foreground/80 hover:bg-white/5 hover:text-accent transition-colors">
                        {n.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href={SITE.phoneHref} className="text-sm text-primary-foreground/80 hover:text-accent flex items-center gap-2">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
            <button onClick={booking.open} className="rounded-sm bg-accent px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-accent-foreground hover:opacity-90 transition">
              Book Now
            </button>
          </div>

          <button className="lg:hidden text-primary-foreground" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-6 space-y-1">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block px-3 py-2 rounded text-base text-primary-foreground/90 hover:bg-white/5">
                {n.label}
              </Link>
            ))}
            <div className="pt-2 mt-2 border-t border-white/10">
              {BOOK_GROUP.map((n) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block px-3 py-2 rounded text-base text-primary-foreground/90 hover:bg-white/5">
                  {n.label}
                </Link>
              ))}
            </div>
            <button onClick={() => { setOpen(false); booking.open(); }} className="mt-3 w-full rounded-sm bg-accent px-5 py-3 text-sm font-semibold uppercase tracking-wider text-accent-foreground">
              Book Now
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { SITE } from "@/lib/site";
import { DESIGNER } from "@/lib/designers";

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-2.9h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5v1.8h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12Z"/></svg>
);
const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
);
const TikTok = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M16.5 3a5.5 5.5 0 0 0 4.5 4.5v3a8.5 8.5 0 0 1-4.5-1.4v6.4a5.5 5.5 0 1 1-5.5-5.5c.3 0 .7 0 1 .1v3.1a2.5 2.5 0 1 0 1.5 2.3V3h3Z"/></svg>
);

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground pb-28 md:pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={SITE.logo} alt={SITE.name} className="h-16 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-primary-foreground/70">
            Private fishing charters out of Two Georges Marina in Shalimar, FL - running the world-famous waters of Destin in the "World's Luckiest Fishing Village."
          </p>
          <div className="mt-5 flex gap-3">
            <a href={SITE.social.facebook} aria-label="Facebook" target="_blank" rel="noreferrer" className="h-9 w-9 rounded-sm border border-white/15 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={SITE.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer" className="h-9 w-9 rounded-sm border border-white/15 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={SITE.social.tiktok} aria-label="TikTok" target="_blank" rel="noreferrer" className="h-9 w-9 rounded-sm border border-white/15 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition">
              <TikTok className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.2em] text-accent mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/gallery" className="hover:text-accent">Gallery</Link></li>
            <li><Link to="/booking" className="hover:text-accent">Book Private Charter</Link></li>
            <li><Link to="/kids-trips" className="hover:text-accent">Kids Trips</Link></li>
            <li><Link to="/group-charter" className="hover:text-accent">Shared Trip</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.2em] text-accent mb-4">Get In Touch</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" /><span>{SITE.marina}<br />{SITE.address}</span></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" /><a href={SITE.phoneHref} className="hover:text-accent">{SITE.phone}</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" /><a href={`mailto:${SITE.email}`} className="hover:text-accent break-all">{SITE.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-xs text-primary-foreground/60 flex flex-wrap items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={DESIGNER.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-accent transition"
              aria-label={`Website designed by ${DESIGNER.name}`}
            >
              <span>Designed by</span>
              <img src={DESIGNER.logo} alt={DESIGNER.name} className="h-4 w-auto" />
            </a>
            <Link to="/privacy-policy" className="hover:text-accent">Privacy Policy</Link>
            <Link to="/terms-of-use" className="hover:text-accent">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
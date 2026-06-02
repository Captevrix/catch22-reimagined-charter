import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SITE, PHOTOS } from "@/lib/site";
import { SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Catch 22 Charters | Book Your Fishing Trip in Destin, FL" },
      { name: "description", content: "Call, email, or message us to book your fishing charter or ask any questions. Two Georges Marina, Shalimar, FL." },
      { property: "og:title", content: "Contact Catch 22 Charters" },
      { property: "og:url", content: SITE_URL + "/contact" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Let's get you on the water" title="Have Questions or Ready to Book?" subtitle="Call, email, or message us today to book your fishing charter or ask any questions." image={PHOTOS.privateCharters} />
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="font-display text-3xl uppercase text-primary">Get In Touch</h2>
            <p className="mt-4 text-muted-foreground">Ready to book or have a question? Call or email us directly — we reply fast.</p>
            <ul className="mt-8 space-y-5">
              <Item Icon={Phone} label="Phone" value={SITE.phone} href={SITE.phoneHref} />
              <Item Icon={Mail} label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
              <Item Icon={MapPin} label="Dock" value={`${SITE.marina}, ${SITE.address}`} />
            </ul>
            <div className="mt-10 rounded-sm overflow-hidden shadow-[var(--shadow-deep)] aspect-video">
              <iframe
                title="Catch 22 location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Item({ Icon, label, value, href }: { Icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const inner = (
    <>
      <span className="h-11 w-11 rounded-sm bg-accent/15 text-accent flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-foreground font-medium">{value}</div>
      </div>
    </>
  );
  return <li>{href ? <a href={href} className="flex items-start gap-4 hover:text-accent transition-colors">{inner}</a> : <div className="flex items-start gap-4">{inner}</div>}</li>;
}
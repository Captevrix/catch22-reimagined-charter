import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { BookingProvider } from "@/components/BookingModal";
import { RedSnapperCallout } from "@/components/RedSnapperCallout";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { SITE } from "@/lib/site";
import { SITE_URL } from "@/lib/seo";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TouristAttraction"],
  "@id": `${SITE_URL}/#business`,
  name: SITE.name,
  description: "Catch 22 Fishing Charters",
  url: SITE_URL,
  telephone: "+1-850-660-3753",
  image: SITE.logo,
  priceRange: "$$",
  address: { "@type": "PostalAddress", streetAddress: "100 Old Ferry Rd", addressLocality: "Shalimar", addressRegion: "FL", postalCode: "32579", addressCountry: "US" },
  areaServed: [{ "@type": "City", name: "Destin, FL" }, { "@type": "City", name: "Shalimar, FL" }, { "@type": "Place", name: "Gulf of Mexico" }],
  sameAs: [SITE.social.facebook, SITE.social.instagram, SITE.social.tiktok],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0c2340" },
      { name: "geo.region", content: "US-FL" },
      { name: "geo.placename", content: "Destin" },
      { name: "google-site-verification", content: "fpe4dxFbDqszbHroMl2TcZ1qai9MKG5LBVB32iOlW80" },
      { title: "Catch 22 Fishing Charters" },
      { property: "og:title", content: "Catch 22 Fishing Charters" },
      { name: "twitter:title", content: "Catch 22 Fishing Charters" },
      { name: "description", content: "Catch 22 Fishing Charters runs private Destin, FL trips from Two Georges Marina - bottom fishing, trolling, and kids' charters on a two-boat federally-permitted fleet." },
      { property: "og:description", content: "Private Destin, FL fishing charters from Two Georges Marina - bottom fishing, trolling, and kids' trips with a federally permitted crew." },
      { name: "twitter:description", content: "Private Destin, FL fishing charters from Two Georges Marina - bottom fishing, trolling, and kids' trips with a federally permitted crew." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/3893b4d1-e658-4bfb-89be-3439d62391be" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/3893b4d1-e658-4bfb-89be-3439d62391be" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <BookingProvider>
        <div className="min-h-screen flex flex-col bg-background">
          <SiteHeader />
          <main className="flex-1"><Outlet /></main>
          <SiteFooter />
          <MobileStickyCTA />
          <RedSnapperCallout />
        </div>
      </BookingProvider>
    </QueryClientProvider>
  );
}

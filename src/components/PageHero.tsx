import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, subtitle, image, children }: { eyebrow?: string; title: string; subtitle?: string; image: string; children?: ReactNode }) {
  return (
    <section className="relative isolate min-h-[55vh] flex items-end text-white">
      <img src={image} alt="" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover -z-10" />
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
        {eyebrow && <p className="font-display text-sm uppercase tracking-[0.4em] text-accent">{eyebrow}</p>}
        <h1 className="mt-3 font-display text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95]">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-white/95">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { BRAND_DATA } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";

function BrandCard({
  name,
  tagline,
  description,
  url,
  accentColour,
  delay,
}: {
  name: string;
  tagline: string;
  description: string;
  url: string | null;
  accentColour: string;
  delay: number;
}) {
  return (
    <AnimatedSection delay={delay}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="group relative overflow-hidden rounded-xl bg-white p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] md:p-12"
      >
        {/* Accent top bar */}
        <div
          className="absolute left-0 top-0 h-1 w-full"
          style={{ backgroundColor: accentColour }}
        />

        <h3 className="font-heading text-2xl font-bold text-charcoal md:text-3xl">
          {name}
        </h3>
        <p className="mt-2 font-body text-sm font-medium uppercase tracking-widest text-stone">
          {tagline}
        </p>
        <p className="mt-6 font-body leading-relaxed text-stone">
          {description}
        </p>

        <div className="mt-8">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold transition-colors duration-300"
              style={{ color: accentColour }}
            >
              Visit {name}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          ) : (
            <span className="inline-block rounded-full bg-forest/10 px-4 py-1.5 font-body text-xs font-medium text-forest">
              Coming Soon
            </span>
          )}
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

export default function BrandCards() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">
              Our Brands
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-gold/40" />
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <BrandCard
            name={BRAND_DATA.runway.name}
            tagline={BRAND_DATA.runway.tagline}
            description={BRAND_DATA.runway.description}
            url={BRAND_DATA.runway.url}
            accentColour="#c17849"
            delay={0.1}
          />
          <BrandCard
            name={BRAND_DATA.bananaCo.name}
            tagline={BRAND_DATA.bananaCo.tagline}
            description={BRAND_DATA.bananaCo.description}
            url={BRAND_DATA.bananaCo.url}
            accentColour="#2d4a3e"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}

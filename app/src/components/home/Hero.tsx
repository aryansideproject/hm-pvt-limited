"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-charcoal">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(193,120,73,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(45,74,62,0.1),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-6 font-body text-sm font-medium uppercase tracking-[0.3em] text-gold">
            H&M Pvt Limited
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Preserving Heritage.
          <br />
          <span className="text-terracotta">Empowering Artisans.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-white/60 md:text-xl"
        >
          The parent company behind Runway Nagaland and Banana Co — bridging
          traditional craftsmanship with contemporary markets since 2011.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="/brands"
            className="inline-block rounded-lg bg-terracotta px-8 py-3.5 font-body text-sm font-semibold text-white transition-colors duration-300 hover:bg-terracotta-dark"
          >
            Our Brands
          </Link>
          <Link
            href="/about"
            className="inline-block rounded-lg border border-white/20 px-8 py-3.5 font-body text-sm font-semibold text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/5"
          >
            Our Story
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-6 rounded-full border-2 border-white/20"
        >
          <div className="mx-auto mt-2 h-2 w-0.5 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

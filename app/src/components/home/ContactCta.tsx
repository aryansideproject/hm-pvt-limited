import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ContactCta() {
  return (
    <section className="bg-forest py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <AnimatedSection>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-lg leading-relaxed text-white/60">
            Whether you&apos;re interested in our brands, partnership
            opportunities, or want to learn more about our artisan communities
            — we&apos;d love to hear from you.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-terracotta px-8 py-3.5 font-body text-sm font-semibold text-white transition-colors duration-300 hover:bg-terracotta-dark"
            >
              Get in Touch
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

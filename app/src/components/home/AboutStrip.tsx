import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AboutStrip() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <AnimatedSection>
          <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">
            Who We Are
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gold/40" />
          <p className="mt-8 font-body text-lg leading-relaxed text-stone">
            Since 2011, H&M Pvt Limited has been bridging traditional
            craftsmanship with contemporary markets. As the parent company of
            Runway Nagaland and Banana Co, we champion the extraordinary
            artisans of Northeast India — bringing their heritage to the world
            whilst creating sustainable livelihoods.
          </p>
          <p className="mt-4 font-body text-lg leading-relaxed text-stone">
            From handwoven Naga shawls to eco-friendly banana fibre products,
            every piece tells a story of culture, skill, and purpose.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

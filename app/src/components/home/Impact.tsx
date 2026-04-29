import { IMPACT_STATS } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Impact() {
  return (
    <section className="bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-center font-heading text-3xl font-bold text-white md:text-4xl">
            Our Impact
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gold/40" />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {IMPACT_STATS.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-terracotta md:text-5xl">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="mt-3 font-body text-sm font-medium uppercase tracking-widest text-white/50">
                  {stat.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

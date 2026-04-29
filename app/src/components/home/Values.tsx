import { VALUES } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";

const ICONS: Record<string, React.ReactNode> = {
  Heritage: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="h-8 w-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21"
      />
    </svg>
  ),
  Sustainability: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="h-8 w-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.75 3.03v.568c0 2.849.88 5.632 2.524 7.962a17.22 17.22 0 002.126 2.49M7.5 21h9M12 18v-6m0 0c-2.485 0-4.876-.765-6.878-2.19A11.15 11.15 0 013.75 8.25m8.25 3.75c2.485 0 4.876-.765 6.878-2.19A11.15 11.15 0 0020.25 8.25"
      />
    </svg>
  ),
  Empowerment: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="h-8 w-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    </svg>
  ),
};

export default function Values() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">
              What We Stand For
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-gold/40" />
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {VALUES.map((value, i) => (
            <AnimatedSection key={value.title} delay={i * 0.1}>
              <div className="rounded-xl bg-white p-10 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                  {ICONS[value.title]}
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-charcoal">
                  {value.title}
                </h3>
                <p className="mt-4 font-body leading-relaxed text-stone">
                  {value.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

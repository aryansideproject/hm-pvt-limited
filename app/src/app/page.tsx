import Hero from "@/components/home/Hero";
import AboutStrip from "@/components/home/AboutStrip";
import BrandCards from "@/components/home/BrandCards";
import Impact from "@/components/home/Impact";
import Values from "@/components/home/Values";
import ContactCta from "@/components/home/ContactCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutStrip />
      <BrandCards />
      <Impact />
      <Values />
      <ContactCta />
    </>
  );
}

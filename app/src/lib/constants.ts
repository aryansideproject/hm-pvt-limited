export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Brands", href: "/brands" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Contact", href: "/contact" },
] as const;

export const BRAND_DATA = {
  runway: {
    name: "Runway Nagaland",
    tagline: "Handcrafted Tribal Artistry",
    description:
      "An e-commerce platform celebrating handcrafted tribal artwork from Northeast India. Since 2011, Runway Nagaland has been empowering women artisans and bringing Naga heritage to the world — from Goulu necklaces to handloom shawls.",
    url: "https://runwaynagaland.com/",
    founded: "2011",
  },
  bananaCo: {
    name: "Banana Co",
    tagline: "Sustainable Banana Fibre Products",
    description:
      "Crafting eco-friendly bags, baskets, and accessories from banana fibre. Banana Co transforms agricultural waste into beautiful, sustainable products — merging traditional weaving techniques with contemporary design.",
    url: null,
    founded: "2024",
  },
} as const;

export const IMPACT_STATS = [
  { value: 500, suffix: "+", label: "Artisans Empowered" },
  { value: 2011, suffix: "", label: "Founded" },
  { value: 15, suffix: "+", label: "Countries Reached" },
  { value: 100, suffix: "%", label: "Handcrafted" },
] as const;

export const VALUES = [
  {
    title: "Heritage",
    description:
      "Preserving centuries-old tribal craftsmanship and weaving traditions of Northeast India, ensuring these art forms thrive for generations to come.",
  },
  {
    title: "Sustainability",
    description:
      "From handloom textiles to banana fibre products, every material is ethically sourced and every process designed to minimise environmental impact.",
  },
  {
    title: "Empowerment",
    description:
      "Creating sustainable livelihoods for women artisans across Nagaland, providing fair wages and market access for their extraordinary craftsmanship.",
  },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/runway_nagaland_official/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/runwaynagaland9/",
  },
] as const;

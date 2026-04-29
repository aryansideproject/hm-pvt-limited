# H&M Pvt Limited — Parent Company Website
**Project**: H&M Pvt Limited — Corporate holding company website
**Type**: Corporate parent company site — showcasing two brands
**Stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion
**Status**: Design ready, build next
**Created**: 29 April 2026
**GitHub**: https://github.com/aryansideproject/hm-pvt-limited
**Git account**: aryansideproject (side project token)
**Push command**: `source ~/.claude/env/side-project.env && git push origin main`

---

## 🎯 What This Is

Corporate website for H&M Pvt Limited — a parent/holding company that owns two brands:

### 1. Runway Nagaland (https://runwaynagaland.com/)
- **What**: E-commerce platform for handcrafted tribal artwork from Northeast India
- **Founded**: 2011
- **Products**: Tribal jewellery (Goulu necklaces, bangles, earrings), handloom textiles, Naga shawls, home decor, coffee, spices
- **USP**: Empowering women artisans, ethical/sustainable fashion
- **Location**: Nagaland, Northeast India
- **Audience**: Conscious consumers, international buyers (USA, Singapore, Canada)
- **Social**: @runway_nagaland_official (Instagram), /runwaynagaland9 (Facebook)

### 2. Banana Co
- **What**: Banana fibre products — bags, baskets, sustainable accessories
- **No domain yet** — currently sold through Runway Nagaland
- **USP**: Eco-friendly banana fibre products, sustainable materials
- **Relation**: Sub-brand within the Runway Nagaland ecosystem

---

## 🎨 Design System

### Design Direction
- **Style**: Premium corporate holding company — clean, spacious, editorial
- **Inspiration**: LVMH, Kering, Temper Group — parent companies that present brands elegantly
- **Tone**: Sophisticated but warm (not cold corporate — these are artisan brands)
- **No e-commerce on this site** — this is the corporate umbrella, not a shop

### Colour Palette

| Token | Hex | Usage |
|---|---|---|
| Charcoal | `#1a1a2e` | Primary dark — headers, hero backgrounds |
| Warm Ivory | `#faf8f5` | Page background — warm, not pure white |
| Terracotta | `#c17849` | Accent — CTAs, highlights, brand warmth |
| Deep Forest | `#2d4a3e` | Secondary — sustainability/nature reference |
| Gold | `#b8963e` | Premium accent — borders, subtle highlights |
| Muted Stone | `#8c8578` | Body text, captions |
| Pure White | `#ffffff` | Cards, overlays |

**Rationale**: Charcoal + warm ivory avoids cold corporate feel. Terracotta and forest green reference the artisan/nature roots. Gold adds premium holding company gravitas.

### Typography

| Role | Font | Weight | Why |
|---|---|---|---|
| Headings | **Playfair Display** | 600, 700 | Elegant serif — editorial, premium, authoritative |
| Body | **Inter** | 400, 500 | Clean sans-serif — modern readability |
| Accent/Nav | **Inter** | 500, 600 | Consistent with body but bolder for navigation |

**Size scale:**
- H1: 64px (desktop) / 36px (mobile)
- H2: 40px / 28px
- H3: 28px / 22px
- Body: 16px / 15px
- Caption: 14px / 13px
- Line height: 1.6 (body), 1.2 (headings)

### Spacing
- Section padding: 120px vertical (desktop), 64px (mobile)
- Container max-width: 1200px
- Grid gap: 32px
- Card padding: 40px

### Components
- **Buttons**: Rounded corners (8px), terracotta fill for primary, outlined for secondary
- **Cards**: White background, subtle shadow (`0 4px 24px rgba(0,0,0,0.06)`), 12px border-radius
- **Dividers**: Gold thin line (`1px solid #b8963e33`)
- **Animations**: Subtle fade-up on scroll (Framer Motion), smooth hover transitions (300ms)

---

## 🗺 Site Map

```
/                    ← Homepage — hero, about H&M, two brand showcases, values, contact
/about               ← About H&M Pvt Limited — story, mission, vision, leadership
/brands              ← Brand portfolio — Runway Nagaland + Banana Co cards
/brands/runway       ← Runway Nagaland detail — story, products, impact, link to site
/brands/banana-co    ← Banana Co detail — story, products, sustainability
/sustainability      ← Sustainability & impact — artisan empowerment, eco materials
/contact             ← Contact form + locations
```

---

## 📄 Homepage Sections (Top → Bottom)

### 1. Hero
- Full-width, charcoal background
- Large heading: "Preserving Heritage. Empowering Artisans."
- Subtitle: "H&M Pvt Limited — the parent company behind Runway Nagaland and Banana Co"
- Subtle background texture or artisan imagery (blurred, dark overlay)
- Two CTAs: "Our Brands" + "Our Story"

### 2. About Strip
- Warm ivory background
- Short paragraph: who H&M Pvt Limited is, founded when, what they stand for
- "Since 2011, we've been bridging traditional craftsmanship with contemporary markets..."
- Small gold divider

### 3. Our Brands (Two Cards)
- Side-by-side brand cards (stacked on mobile)
- **Runway Nagaland card**: Image, logo, short description, "Visit Runway Nagaland →" link
- **Banana Co card**: Image, logo/text, short description, "Coming Soon" or link
- Hover: subtle lift + shadow increase

### 4. Impact / Numbers
- Dark section (charcoal)
- Key stats: "500+ Artisans Empowered" / "Since 2011" / "Shipping to 15+ Countries" / "100% Handcrafted"
- Animated count-up on scroll

### 5. Values
- Three columns: "Heritage", "Sustainability", "Empowerment"
- Each with an icon, heading, short description
- Warm ivory background

### 6. Featured Products (Optional)
- Curated grid of hero products from both brands
- Links to respective brand sites

### 7. Contact / Footer
- Contact form (name, email, message)
- Office address
- Social links (Instagram, Facebook, YouTube)
- Copyright: "© 2026 H&M Pvt Limited. All rights reserved."

---

## 📁 Project Structure

```
hm-pvt-limited/
├── CLAUDE.md                          ← This file
├── app/                               ← Next.js application
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx               ← Homepage
│   │   │   ├── layout.tsx             ← Root layout (fonts, meta, nav, footer)
│   │   │   ├── about/page.tsx
│   │   │   ├── brands/
│   │   │   │   ├── page.tsx           ← Brand portfolio
│   │   │   │   ├── runway/page.tsx
│   │   │   │   └── banana-co/page.tsx
│   │   │   ├── sustainability/page.tsx
│   │   │   └── contact/page.tsx
│   │   ├── components/
│   │   │   ├── layout/               ← Navbar, Footer, MobileMenu
│   │   │   ├── home/                 ← Hero, AboutStrip, BrandCards, Impact, Values
│   │   │   ├── brands/              ← BrandDetail, ProductGrid
│   │   │   └── ui/                  ← Button, Card, Input, AnimatedCounter
│   │   ├── lib/
│   │   │   ├── constants.ts          ← Brand data, stats, nav links
│   │   │   └── utils.ts
│   │   └── styles/
│   │       └── globals.css
│   ├── public/
│   │   ├── images/
│   │   │   ├── runway/              ← Runway Nagaland hero images
│   │   │   ├── banana-co/           ← Banana Co images
│   │   │   └── corporate/           ← H&M corporate imagery
│   │   └── fonts/
│   ├── tailwind.config.ts
│   └── package.json
└── .gitignore
```

---

## 🚫 Rules
- This is NOT an e-commerce site — no cart, no checkout, no product listings
- Premium holding company feel — spacious, editorial, not cluttered
- UK English in code/docs
- Mobile-first design
- No generic stock photos — use artisan/craft imagery
- Warm colour palette — never cold corporate blue
- Framer Motion for scroll animations — subtle, not flashy
- Links to brand sites open in new tab
- Side project — push to aryansideproject only

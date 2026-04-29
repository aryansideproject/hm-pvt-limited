import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "H&M Pvt Limited — Preserving Heritage, Empowering Artisans",
    template: "%s | H&M Pvt Limited",
  },
  description:
    "Parent company of Runway Nagaland and Banana Co. Bridging traditional craftsmanship from Northeast India with contemporary markets since 2011.",
  keywords: [
    "H&M Pvt Limited",
    "Runway Nagaland",
    "Banana Co",
    "tribal artistry",
    "Naga handloom",
    "sustainable fashion",
    "Northeast India",
    "artisan empowerment",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

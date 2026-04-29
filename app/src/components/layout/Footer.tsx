import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-heading text-xl font-bold text-white"
            >
              H&M <span className="text-gold">Pvt Limited</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Preserving heritage and empowering artisans through Runway
              Nagaland and Banana Co. Since 2011.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-gold">
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-gold">
              Connect
            </h4>
            <ul className="space-y-2">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gold/20 pt-8">
          <p className="text-center text-xs">
            &copy; {new Date().getFullYear()} H&M Pvt Limited. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

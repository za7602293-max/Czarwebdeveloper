import React from 'react';
import { Logo } from './Logo.tsx';
import { STUDIO_INFO } from '../data/detailingData.ts';
import { Instagram, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Packages & Pricing', href: '#packages' },
    { label: 'Before & After Gallery', href: '#gallery' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Customer Reviews', href: '#reviews' },
    { label: 'Book Appointment', href: '#booking' },
    { label: 'Location & Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#080809] border-t border-neutral-900 text-neutral-400 text-xs sm:text-sm pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-neutral-800/80">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="lg" />
            <p className="text-base text-neutral-300 font-medium italic mt-3">
              "{STUDIO_INFO.tagline}"
            </p>
            <p className="text-neutral-400 font-light text-xs sm:text-sm max-w-sm leading-relaxed">
              Bespoke automotive detailing atelier specializing in 9H/10H ceramic coatings, self-healing paint protection films, and multi-stage paint correction.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={STUDIO_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 hover:bg-[#D4AF37] hover:text-black border border-neutral-800 flex items-center justify-center transition-colors text-neutral-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`tel:${STUDIO_INFO.phoneRaw}`}
                className="w-9 h-9 rounded-lg bg-neutral-900 hover:bg-[#D4AF37] hover:text-black border border-neutral-800 flex items-center justify-center transition-colors text-neutral-300"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${STUDIO_INFO.email}`}
                className="w-9 h-9 rounded-lg bg-neutral-900 hover:bg-[#D4AF37] hover:text-black border border-neutral-800 flex items-center justify-center transition-colors text-neutral-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-heading">
              Studio Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#D4AF37] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Detailing Services */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-heading">
              Studio Inquiries & Hours
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{STUDIO_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="font-mono text-neutral-300">{STUDIO_INFO.phone}</span>
              </div>
              <div className="pt-2 text-[11px] text-neutral-400 leading-relaxed">
                <span className="text-white font-semibold">Hours:</span> {STUDIO_INFO.hours}
              </div>
              <div className="text-[11px] text-[#D4AF37] font-mono">
                Complimentary loaner car & valet pickup upon request
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} {STUDIO_INFO.name} - {STUDIO_INFO.subtitle}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-neutral-400">Showroom Shine, Every Time.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-neutral-900 hover:bg-[#D4AF37] hover:text-black border border-neutral-800 transition-colors text-neutral-400"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

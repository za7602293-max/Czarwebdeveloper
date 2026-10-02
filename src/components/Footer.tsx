import React from 'react';
import { STUDIO_INFO } from '../data/detailingData.ts';
import { Instagram, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Capabilities', href: '#services' },
    { label: 'Comparison Slider', href: '#gallery' },
    { label: 'Tiers & Pricing', href: '#packages' },
    { label: 'Atelier Standards', href: '#why-us' },
    { label: 'Endorsements', href: '#reviews' },
    { label: 'Studio Reservation', href: '#booking' },
    { label: 'Direct Concierge', href: '#contact' },
  ];

  return (
    <footer className="bg-[#050506] border-t border-white/[0.08] text-neutral-400 text-xs pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/[0.06]">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#16181D] border border-[#E5B54F]/40 flex items-center justify-center">
                <span className="font-display font-bold text-xs text-[#E5B54F] tracking-tighter">AG</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base tracking-wider text-white uppercase">
                  Apex Gloss
                </span>
                <span className="text-[9px] font-mono-num tracking-[0.25em] text-neutral-400 uppercase -mt-0.5">
                  Automotive Atelier
                </span>
              </div>
            </div>

            <p className="text-neutral-400 font-light text-xs sm:text-sm max-w-sm leading-relaxed mt-2">
              Bespoke automotive detailing atelier specializing in 10H ceramic coatings, self-healing paint protection films, and multi-stage optical paint correction.
            </p>
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={STUDIO_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-[#101114] hover:bg-[#E5B54F] hover:text-black border border-white/[0.08] flex items-center justify-center transition-colors text-neutral-300"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={`tel:${STUDIO_INFO.phoneRaw}`}
                className="w-8 h-8 rounded-sm bg-[#101114] hover:bg-[#E5B54F] hover:text-black border border-white/[0.08] flex items-center justify-center transition-colors text-neutral-300"
                aria-label="Phone"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
              <a
                href={`mailto:${STUDIO_INFO.email}`}
                className="w-8 h-8 rounded-sm bg-[#101114] hover:bg-[#E5B54F] hover:text-black border border-white/[0.08] flex items-center justify-center transition-colors text-neutral-300"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono-num uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#E5B54F] transition-colors inline-block text-neutral-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Detailing Services */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono-num uppercase tracking-wider text-white">
              Studio Facility
            </h4>
            <div className="space-y-2 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E5B54F] shrink-0 mt-0.5" />
                <span>{STUDIO_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E5B54F] shrink-0" />
                <span className="font-mono-num text-neutral-300">{STUDIO_INFO.phone}</span>
              </div>
              <div className="pt-1 text-[11px] text-neutral-400">
                <span className="text-white">Hours:</span> {STUDIO_INFO.hours}
              </div>
              <div className="text-[11px] text-[#E5B54F] font-mono-num">
                Climate-controlled cleanroom & enclosed valet transport
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} {STUDIO_INFO.name} Atelier. All rights reserved.
          </div>

          <div className="flex items-center gap-5">
            <span className="font-mono-num text-neutral-400">Automotive Surface Mastercraft</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-sm bg-[#101114] hover:bg-[#E5B54F] hover:text-black border border-white/[0.08] transition-colors text-neutral-400 cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

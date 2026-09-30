import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { STUDIO_INFO } from '../data/detailingData.ts';

interface NavbarProps {
  onBookNowClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookNowClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0C]/95 backdrop-blur-md border-b border-neutral-800/80 shadow-[0_4px_25px_rgba(0,0,0,0.8)] py-3'
          : 'bg-gradient-to-b from-[#0B0B0C]/90 via-[#0B0B0C]/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark & Shield Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-md"
            aria-label="Apex Gloss Car Detailing Studio Home"
          >
            <Logo size="md" />
          </a>

          {/* Zone 2: Clean Text Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-neutral-300 hover:text-[#F3C954] transition-colors duration-200 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Quick Phone */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={`tel:${STUDIO_INFO.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-2 text-xs text-neutral-300 hover:text-[#D4AF37] transition-colors px-2.5 py-1.5 rounded"
              title="Call studio"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-mono text-xs">{STUDIO_INFO.phone}</span>
            </a>

            <button
              onClick={onBookNowClick}
              className="relative group overflow-hidden px-4 sm:px-5 py-2 rounded-md font-semibold text-xs sm:text-sm tracking-wider uppercase bg-gradient-to-r from-[#D4AF37] via-[#F3C954] to-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Now</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-800/60 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F0F12] border-b border-neutral-800 px-4 pt-4 pb-6 mt-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-neutral-200 hover:text-[#D4AF37] text-base font-medium py-2 px-3 rounded-md hover:bg-neutral-800/40 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-neutral-800 flex flex-col gap-3">
              <a
                href={`tel:${STUDIO_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 text-sm text-neutral-300 py-1 px-3"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-mono">{STUDIO_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookNowClick();
                }}
                className="w-full py-2.5 rounded-md font-semibold text-xs tracking-wider uppercase bg-[#D4AF37] text-black text-center flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Slot</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

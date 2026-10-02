import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Bot } from 'lucide-react';
import { STUDIO_INFO } from '../data/detailingData.ts';

interface NavbarProps {
  onBookNowClick: () => void;
  onOpenChatbot?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookNowClick, onOpenChatbot }) => {
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
    { label: 'Capabilities', href: '#services' },
    { label: 'Comparison', href: '#gallery' },
    { label: 'Tiers & Pricing', href: '#packages' },
    { label: 'Atelier Standards', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Studio Concierge', href: '#contact' },
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
          ? 'bg-[#070708]/95 backdrop-blur-md border-b border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.8)] py-3.5'
          : 'bg-gradient-to-b from-[#070708]/90 via-[#070708]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single Brand Element */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E5B54F]"
            aria-label="Apex Gloss Detailing Studio Home"
          >
            <div className="w-8 h-8 rounded-sm bg-[#16181D] border border-[#E5B54F]/40 flex items-center justify-center transition-transform group-hover:scale-105 duration-200">
              <span className="font-display font-bold text-xs text-[#E5B54F] tracking-tighter">AG</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg tracking-wider text-white uppercase group-hover:text-[#F6D686] transition-colors">
                Apex Gloss
              </span>
              <span className="text-[9px] font-mono tracking-[0.25em] text-neutral-400 uppercase -mt-0.5">
                Automotive Atelier
              </span>
            </div>
          </a>

          {/* Zone 2: 4-6 Clean Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-neutral-400 hover:text-white transition-colors duration-200 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E5B54F] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & AI Concierge */}
          <div className="flex items-center gap-3">
            {onOpenChatbot && (
              <button
                onClick={onOpenChatbot}
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white bg-[#12141A] hover:bg-[#181B24] border border-white/[0.08] hover:border-[#E5B54F]/50 transition-colors cursor-pointer"
                title="Chat with AI Concierge"
              >
                <Bot className="w-3.5 h-3.5 text-[#E5B54F]" />
                <span>AI Chat</span>
              </button>
            )}

            <a
              href={`tel:${STUDIO_INFO.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-2 text-xs text-neutral-300 hover:text-[#E5B54F] transition-colors py-1.5"
              title="Studio Concierge Direct"
            >
              <Phone className="w-3.5 h-3.5 text-[#E5B54F]" />
              <span className="font-mono-num text-xs">{STUDIO_INFO.phone}</span>
            </a>

            <button
              onClick={onBookNowClick}
              className="relative px-4 sm:px-5 py-2 rounded-sm font-semibold text-xs tracking-wider uppercase bg-[#E5B54F] hover:bg-[#F6D686] text-black shadow-[0_0_20px_rgba(229,181,79,0.25)] hover:shadow-[0_0_30px_rgba(229,181,79,0.4)] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded text-neutral-300 hover:text-white hover:bg-neutral-800/60 focus:outline-none focus:ring-1 focus:ring-[#E5B54F]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0B0E] border-b border-white/[0.08] px-5 pt-4 pb-6 mt-3 shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-neutral-300 hover:text-[#E5B54F] text-sm font-medium py-2.5 px-3 rounded hover:bg-white/[0.03] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-white/[0.08] flex flex-col gap-3">
              <a
                href={`tel:${STUDIO_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 text-xs text-neutral-300 py-1.5 px-3"
              >
                <Phone className="w-3.5 h-3.5 text-[#E5B54F]" />
                <span className="font-mono-num">{STUDIO_INFO.phone}</span>
              </a>
              {onOpenChatbot && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenChatbot();
                  }}
                  className="w-full py-2.5 rounded-sm font-semibold text-xs tracking-wider uppercase bg-[#14161C] hover:bg-[#1E2028] text-white border border-white/[0.1] text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Bot className="w-4 h-4 text-[#E5B54F]" />
                  <span>Chat With Studio AI</span>
                </button>
              )}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookNowClick();
                }}
                className="w-full py-3 rounded-sm font-semibold text-xs tracking-wider uppercase bg-[#E5B54F] text-black text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve Appointment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

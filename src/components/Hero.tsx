import React from 'react';
import { Calendar, MessageCircle, Sparkles, ChevronDown, CheckCircle2 } from 'lucide-react';
import { STUDIO_INFO } from '../data/detailingData.ts';
import heroImg from '../assets/images/hero_car_detailing_1790775140292.jpg';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hi Apex Gloss Team, I am interested in booking a car detailing appointment. Could you share available slots?'
  )}`;

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0B0B0C]">
      {/* Background Car Image with measured dark contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Exotic black sports car with flawless ceramic coating gloss in Apex Gloss Studio"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110"
          referrerPolicy="no-referrer"
        />
        {/* Multilayer gradient scrims for text legibility and deep dark aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C]/95 via-[#0B0B0C]/80 to-[#0B0B0C]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Subtle trust kicker (unboxed, clean typography) */}
        <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Premier Automotive Detailing & Paint Protection Studio</span>
        </div>

        {/* Big Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading tracking-tight text-white leading-[1.08] max-w-4xl text-balance drop-shadow-lg">
          Showroom Shine,{' '}
          <span className="bg-gradient-to-r from-[#F9E282] via-[#D4AF37] to-[#A3841D] bg-clip-text text-transparent">
            Every Time.
          </span>
        </h1>

        {/* Short Subtext */}
        <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed text-balance">
          Master-grade paint correction, certified 9H ceramic coatings, and self-healing PPF designed for automotive purists who demand surgical perfection.
        </p>

        {/* Two Primary CTAs: Book a Slot & WhatsApp Us */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onBookClick}
            className="group px-8 py-3.5 rounded-lg font-semibold text-sm tracking-wider uppercase bg-gradient-to-r from-[#D4AF37] via-[#F3C954] to-[#D4AF37] text-black shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>Book a Slot</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3.5 rounded-lg font-semibold text-sm tracking-wider uppercase bg-[#18181B] text-neutral-100 hover:text-white border border-neutral-700/80 hover:border-[#D4AF37] hover:bg-neutral-900 shadow-md transition-all duration-200 flex items-center justify-center gap-2.5"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 transition-transform group-hover:scale-110" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Quick Highlights / Trust Markers */}
        <div className="mt-12 pt-8 border-t border-neutral-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left w-full max-w-4xl">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span className="text-xs sm:text-sm text-neutral-300 font-medium">9H Nano Ceramic</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span className="text-xs sm:text-sm text-neutral-300 font-medium">Self-Healing PPF</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span className="text-xs sm:text-sm text-neutral-300 font-medium">Insured Valet Concierge</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span className="text-xs sm:text-sm text-neutral-300 font-medium">Up to 7-Yr Warranty</span>
          </div>
        </div>

        {/* Smooth scroll indicator */}
        <a
          href="#services"
          onClick={scrollToServices}
          className="mt-8 inline-flex items-center justify-center p-2 text-neutral-400 hover:text-[#D4AF37] transition-colors focus:outline-none"
          aria-label="Scroll down to services"
        >
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

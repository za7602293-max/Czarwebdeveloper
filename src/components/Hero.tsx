import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, Sparkles, ChevronDown } from 'lucide-react';
import heroImg from '../assets/images/hero_supercar_reflection_1790962730005.jpg';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex items-center justify-center pt-28 pb-10 sm:pt-32 sm:pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#070708]">
      {/* Background Car Image with measured dark contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Exotic Porsche 911 GT3 in obsidian black under geometric hexagonal ceiling LED lighting grid in Apex Gloss Studio"
          className="w-full h-full object-cover object-center scale-[1.02] filter brightness-70 contrast-110"
          referrerPolicy="no-referrer"
        />
        {/* Multilayer gradient scrims for text legibility and deep dark aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070708]/95 via-[#070708]/85 to-[#070708]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-[#070708]/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,181,79,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-start pt-2">
        {/* Subtle trust kicker (unboxed, clean typography) */}
        <div className="inline-flex items-center gap-2 mb-4 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#E5B54F] font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Automotive Preservation & Surface Mastercraft</span>
        </div>

        {/* Big Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-display font-bold tracking-tight text-white leading-[1.04] max-w-4xl text-balance">
          Flawless Clarity.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F6D686] to-[#E5B54F]">
            Uncompromising
          </span>{' '}
          Defense.
        </h1>

        {/* Short Subtext */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed text-balance">
          Multi-stage optical paint correction, certified 10H ceramic nanotechnology, and self-healing thermoplastic film for exotic, collector, and high-performance marques.
        </p>

        {/* Primary CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onBookClick}
            className="group px-7 py-3.5 rounded-sm font-semibold text-xs tracking-wider uppercase bg-[#E5B54F] hover:bg-[#F6D686] text-black shadow-[0_0_25px_rgba(229,181,79,0.3)] hover:shadow-[0_0_35px_rgba(229,181,79,0.5)] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>Book Studio Consultation</span>
          </button>

          <a
            href="#services"
            onClick={scrollToServices}
            className="group px-7 py-3.5 rounded-sm font-medium text-xs tracking-wider uppercase bg-[#121316]/90 hover:bg-[#1A1C22] text-white border border-white/[0.1] hover:border-[#E5B54F]/50 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Explore Capabilities</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E5B54F] transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Quantitative Proof Grid in Monospace Tabular Figures */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 text-left w-full">
          <div>
            <div className="font-mono-num text-2xl sm:text-3xl font-bold text-white tracking-tight">
              9H<span className="text-[#E5B54F]">+</span>
            </div>
            <div className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">
              Nanotech Matrix Hardness
            </div>
          </div>

          <div>
            <div className="font-mono-num text-2xl sm:text-3xl font-bold text-white tracking-tight">
              95<span className="text-[#E5B54F]">%+</span>
            </div>
            <div className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">
              Swirl & Defect Correction
            </div>
          </div>

          <div>
            <div className="font-mono-num text-2xl sm:text-3xl font-bold text-white tracking-tight">
              1,200<span className="text-[#E5B54F]">+</span>
            </div>
            <div className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">
              Exotics Preserved
            </div>
          </div>

          <div>
            <div className="font-mono-num text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-1.5">
              <span>10</span><span className="text-xs text-neutral-400 font-normal">YR</span>
              <ShieldCheck className="w-5 h-5 text-[#E5B54F]" />
            </div>
            <div className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">
              Written Warranty Shield
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

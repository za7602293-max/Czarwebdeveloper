import React from 'react';
import { WHY_CHOOSE_US } from '../data/detailingData.ts';
import { ShieldCheck, Truck, Award, Users } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />;
      case 'Truck':
        return <Truck className="w-8 h-8 text-[#D4AF37]" />;
      case 'Award':
        return <Award className="w-8 h-8 text-[#D4AF37]" />;
      case 'Users':
        return <Users className="w-8 h-8 text-[#D4AF37]" />;
      default:
        return <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0F0F12] relative border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
            The Apex Standard
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white">
            Why Discerning Drivers Choose Us
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            We don't do quick car washes. We engineer long-lasting optical depth and surface protection through strict laboratory-grade detailing protocols.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="group p-7 sm:p-8 rounded-2xl bg-[#131317] border border-neutral-800/90 hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-[0_10px_25px_rgba(0,0,0,0.6),0_0_20px_rgba(212,175,55,0.1)] flex flex-col justify-between"
            >
              <div>
                {/* Icon in gold container */}
                <div className="w-14 h-14 rounded-xl bg-[#1A1A22] border border-neutral-800 group-hover:border-[#D4AF37]/40 flex items-center justify-center mb-6 transition-colors shadow-inner">
                  {getIcon(item.icon)}
                </div>

                {/* Clean unboxed tag */}
                <div className="text-[11px] font-mono tracking-wider text-[#D4AF37] uppercase mb-2">
                  {item.badge}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-[#F3C954] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom hairline accent */}
              <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span>Standard Protocol</span>
                <span className="text-[#D4AF37]">✓ Guaranteed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

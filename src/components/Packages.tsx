import React from 'react';
import { PACKAGES, PackageItem } from '../data/detailingData.ts';
import { Check, Star, Zap } from 'lucide-react';

interface PackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0F0F12] relative border-t border-b border-neutral-800/80">
      {/* Subtle radial ambient behind the most popular card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
            Curated Studio Packages
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white">
            Transparent Detailing Tiers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            From essential concourse maintenance washes to complete multi-year ceramic shields. Custom bespoke quotes also available for exotic fleets.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PACKAGES.map((pkg: PackageItem) => {
            const isPopular = pkg.isPopular;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#15151A] border-2 border-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.2)] lg:-translate-y-2 lg:scale-105 z-20'
                    : 'bg-[#121215] border border-neutral-800 hover:border-neutral-700 shadow-xl z-10'
                }`}
              >
                {/* Highlight Label for Most Popular */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F3C954] text-black font-extrabold text-[11px] uppercase tracking-wider shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Star className="w-3 h-3 fill-black" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div className="p-7 sm:p-8 flex-1 flex flex-col">
                  {/* Top info */}
                  <div className="border-b border-neutral-800/80 pb-6 mb-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                        {pkg.name}
                      </h3>
                      {isPopular && (
                        <Zap className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]/20" />
                      )}
                    </div>

                    <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-light min-h-[40px]">
                      {pkg.tagline}
                    </p>

                    {/* Price block */}
                    <div className="mt-5 flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black font-heading text-white tracking-tight">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-neutral-400 font-mono">/ starting est.</span>
                    </div>

                    <div className="mt-2 text-xs text-[#D4AF37] font-mono flex items-center gap-1.5">
                      <span>Service Duration:</span>
                      <span className="text-white font-medium">{pkg.duration}</span>
                    </div>
                  </div>

                  {/* Feature list */}
                  <div className="space-y-3.5 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Package Inclusions:
                    </p>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                        <div
                          className={`mt-0.5 rounded-full p-0.5 shrink-0 ${
                            isPopular
                              ? 'bg-[#D4AF37] text-black'
                              : 'bg-neutral-800 text-[#D4AF37]'
                          }`}
                        >
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <div className="mt-8 pt-4">
                    <button
                      onClick={() => onSelectPackage(pkg.name)}
                      className={`w-full py-3 px-6 rounded-lg text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                        isPopular
                          ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3C954] to-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-[1.02] active:scale-[0.98]'
                          : 'bg-[#1C1C22] text-white hover:bg-[#D4AF37] hover:text-black border border-neutral-700/70 hover:border-[#D4AF37]'
                      }`}
                    >
                      Select {pkg.name}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Quote Note */}
        <div className="mt-12 text-center text-xs sm:text-sm text-neutral-400">
          Need custom paint protection for multi-car collections, exotics, or commercial fleets?{' '}
          <a
            href="#contact"
            className="text-[#D4AF37] hover:underline font-medium ml-1"
          >
            Request a Bespoke Studio Consultation →
          </a>
        </div>
      </div>
    </section>
  );
};

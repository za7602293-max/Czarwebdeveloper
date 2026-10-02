import React, { useState } from 'react';
import { PACKAGES, PackageItem } from '../data/detailingData.ts';
import { Check, ArrowRight } from 'lucide-react';

interface PackagesProps {
  onSelectPackage: (packageName: string) => void;
}

type VehicleClass = 'coupe' | 'sedan' | 'suv' | 'exotic';

interface VehicleOption {
  id: VehicleClass;
  label: string;
  sub: string;
  multiplier: number;
}

const VEHICLE_OPTIONS: VehicleOption[] = [
  { id: 'coupe', label: 'Sports Coupe', sub: '2-Door (e.g. 911, M2)', multiplier: 1.0 },
  { id: 'sedan', label: 'Executive Sedan', sub: '4-Door (e.g. M3, S-Class)', multiplier: 1.15 },
  { id: 'suv', label: 'Performance SUV', sub: 'Large / 7-Seat (e.g. G63, Urus)', multiplier: 1.3 },
  { id: 'exotic', label: 'Exotic Supercar', sub: 'Carbon Tub (e.g. P1, SF90)', multiplier: 1.45 },
];

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleClass>('coupe');

  const activeVehicle = VEHICLE_OPTIONS.find((v) => v.id === selectedVehicle) || VEHICLE_OPTIONS[0];

  const calculatePrice = (basePriceStr: string) => {
    const num = parseInt(basePriceStr.replace(/[^0-9]/g, ''), 10);
    if (isNaN(num)) return basePriceStr;
    const adjusted = Math.round(num * activeVehicle.multiplier);
    return `₹${adjusted.toLocaleString('en-IN')}`;
  };

  return (
    <section id="packages" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#070708] relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#E5B54F] font-semibold mb-2">
            Preservation Programs
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white">
            Transparent Atelier Packages
          </h2>
          <p className="mt-4 text-base text-neutral-400 font-light leading-relaxed">
            Every package is backed by our single-stage guarantee, digital paint inspection report, and climate-controlled curing protocols.
          </p>
        </div>

        {/* Interactive Vehicle Segmented Selector */}
        <div className="mb-14 max-w-3xl mx-auto">
          <div className="text-center text-xs font-mono-num text-neutral-400 uppercase tracking-wider mb-3">
            Select Vehicle Platform:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 bg-[#101114] border border-white/[0.08] rounded-md">
            {VEHICLE_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedVehicle(opt.id)}
                className={`py-2 px-3 rounded text-left transition-all duration-150 cursor-pointer ${
                  selectedVehicle === opt.id
                    ? 'bg-[#181A20] border border-[#E5B54F]/50 shadow-sm'
                    : 'hover:bg-white/[0.03] border border-transparent'
                }`}
              >
                <div className={`text-xs font-semibold ${selectedVehicle === opt.id ? 'text-[#E5B54F]' : 'text-neutral-300'}`}>
                  {opt.label}
                </div>
                <div className="text-[10px] text-neutral-400 truncate mt-0.5">
                  {opt.sub}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
          {PACKAGES.map((pkg: PackageItem) => {
            const isPopular = pkg.isPopular;
            const dynamicPrice = calculatePrice(pkg.price);

            return (
              <div
                key={pkg.id}
                className={`relative rounded-sm flex flex-col justify-between transition-all duration-200 ${
                  isPopular
                    ? 'bg-[#12141A] border-2 border-[#E5B54F] shadow-[0_0_30px_rgba(229,181,79,0.15)] z-20'
                    : 'bg-[#101114] border border-white/[0.08] hover:border-white/[0.15] z-10'
                }`}
              >
                {/* Quiet Header highlight (Anti-pill) */}
                {isPopular && (
                  <div className="border-b border-[#E5B54F]/30 bg-[#E5B54F]/10 px-6 py-1.5 flex items-center justify-between">
                    <span className="text-[10px] font-mono-num uppercase tracking-[0.2em] text-[#E5B54F] font-semibold">
                      Curator Recommendation
                    </span>
                    <span className="text-[10px] text-neutral-400 font-mono-num">
                      Multi-Stage
                    </span>
                  </div>
                )}

                <div className="p-7 sm:p-8 flex-1 flex flex-col">
                  {/* Top info */}
                  <div className="border-b border-white/[0.06] pb-6 mb-6">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                      {pkg.name}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-light min-h-[36px]">
                      {pkg.tagline}
                    </p>

                    {/* Price block */}
                    <div className="mt-5 flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-mono-num font-bold text-white tracking-tight">
                        {dynamicPrice}
                      </span>
                      <span className="text-xs text-neutral-400 font-mono-num">/ {activeVehicle.label}</span>
                    </div>

                    <div className="mt-2 text-xs text-[#E5B54F] font-mono-num flex items-center gap-1.5">
                      <span className="text-neutral-400">Estimated Duration:</span>
                      <span className="text-white font-medium">{pkg.duration}</span>
                    </div>
                  </div>

                  {/* Feature list */}
                  <div className="space-y-3 flex-1">
                    <div className="text-[11px] font-mono-num uppercase tracking-wider text-neutral-400">
                      Technical Scope:
                    </div>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-[#E5B54F] mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <div className="mt-8 pt-4">
                    <button
                      onClick={() => onSelectPackage(pkg.name)}
                      className={`w-full py-3 px-6 rounded-sm text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                        isPopular
                          ? 'bg-[#E5B54F] hover:bg-[#F6D686] text-black shadow-[0_0_20px_rgba(229,181,79,0.3)]'
                          : 'bg-[#181A20] text-white hover:bg-[#E5B54F] hover:text-black border border-white/[0.08] hover:border-[#E5B54F]'
                      }`}
                    >
                      <span>Reserve {pkg.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Quote Note */}
        <div className="mt-14 text-center text-xs text-neutral-400">
          Have an exotic collection, race car livery, or bespoke project?{' '}
          <a
            href="#contact"
            className="text-[#E5B54F] hover:underline font-medium ml-1"
          >
            Direct Studio Consultation →
          </a>
        </div>
      </div>
    </section>
  );
};

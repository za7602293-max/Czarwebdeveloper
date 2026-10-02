import React from 'react';
import { Gauge, Sparkles, Award, Shield } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const standards = [
    {
      num: '01',
      title: 'Ultrasonic Paint Profiling',
      metric: '0.1 µm Precision',
      desc: 'Multi-point digital paint depth mapping across all panels before any rotary pad touches your vehicle to verify factory clear-coat safety.',
      icon: <Gauge className="w-5 h-5 text-[#E5B54F]" />,
    },
    {
      num: '02',
      title: 'High-CRI Inspection Bay',
      metric: '4000K · CRI 98+',
      desc: 'Equipped with shadow-free dual-spectrum inspection lights that expose hidden holograms, buffer trails, and micro-scratches invisible in standard lighting.',
      icon: <Sparkles className="w-5 h-5 text-[#E5B54F]" />,
    },
    {
      num: '03',
      title: 'Certified Master Artisans',
      metric: 'IDA & XPEL Certified',
      desc: 'Our senior craftsmen have preserved over 1,200 exotic hypercars, vintage Ferrari classics, and limited-edition homologation specials.',
      icon: <Award className="w-5 h-5 text-[#E5B54F]" />,
    },
    {
      num: '04',
      title: 'Enclosed Valet Transport',
      metric: 'Fully Insured $2M+',
      desc: 'White-glove collection and return in fully enclosed climate-controlled transporters, shielding your vehicle from highway gravel and debris.',
      icon: <Shield className="w-5 h-5 text-[#E5B54F]" />,
    },
  ];

  return (
    <section id="why-us" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#090A0D] relative border-t border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#E5B54F] font-semibold mb-3">
              The Apex Standard
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white">
              Institutional-Grade Surface Protocols
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-neutral-400 font-light max-w-md leading-relaxed">
            We reject high-volume assembly lines. Every vehicle is treated as an irreplaceable collector asset with full photographic documentation.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((item) => (
            <div
              key={item.num}
              className="p-7 rounded-sm bg-[#101114] border border-white/[0.08] hover:border-[#E5B54F]/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-sm bg-[#16181E] border border-white/[0.08] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-mono-num text-xs font-semibold text-[#E5B54F]">
                    {item.num}.
                  </span>
                </div>

                <div className="text-[11px] font-mono-num text-[#E5B54F] uppercase tracking-wider mb-1">
                  {item.metric}
                </div>

                <h3 className="text-lg font-display font-bold text-white tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-neutral-400 font-mono-num">
                <span>Atelier Rigor</span>
                <span className="text-[#E5B54F]">100% Certified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

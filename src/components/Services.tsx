import React from 'react';
import { SERVICES, ServiceItem } from '../data/detailingData.ts';
import { ArrowRight, Check } from 'lucide-react';
import ceramicBeadingImg from '../assets/images/ceramic_water_beading_1790962760687.jpg';
import paintCorrectionImg from '../assets/images/paint_correction_macro_1790962745005.jpg';
import interiorCockpitImg from '../assets/images/interior_cockpit_luxury_1790962771004.jpg';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getServiceImage = (id: string) => {
    if (id === 'ceramic-coating') return ceramicBeadingImg;
    if (id === 'exterior-polishing') return paintCorrectionImg;
    if (id === 'interior-deep-cleaning') return interiorCockpitImg;
    return null;
  };

  const getEditorialIndex = (index: number) => {
    return String(index + 1).padStart(2, '0');
  };

  return (
    <section id="services" className="pt-8 pb-20 sm:pt-12 sm:pb-28 px-4 sm:px-6 lg:px-8 bg-[#070708] relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#E5B54F] font-semibold mb-3">
              Studio Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white">
              Surgical Precision & Surface Science
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-neutral-400 font-light max-w-md leading-relaxed">
            Every vehicle is handled in a climate-controlled inspection bay using digital ultrasound paint gauges and certified European chemistry.
          </p>
        </div>

        {/* 6 Services Grid with Editorial Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service: ServiceItem, idx: number) => {
            const previewImg = getServiceImage(service.id);

            return (
              <div
                key={service.id}
                className="group relative bg-[#101114] border border-white/[0.08] hover:border-[#E5B54F]/40 rounded-sm overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Thumbnail for key capabilities */}
                {previewImg && (
                  <div className="relative h-48 w-full overflow-hidden bg-neutral-950 border-b border-white/[0.08]">
                    <img
                      src={previewImg}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-85 group-hover:brightness-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101114] via-transparent to-black/30" />
                  </div>
                )}

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header Row: Editorial Index + Metadata */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="font-mono-num text-xs font-semibold text-[#E5B54F] tracking-widest">
                        {getEditorialIndex(idx)}.
                      </span>
                      <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono-num">
                        <span>{service.duration}</span>
                        <span aria-hidden="true" className="text-neutral-600">·</span>
                        <span className="text-[#E5B54F]">{service.protection}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-[#F6D686] transition-colors tracking-tight">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-3 text-sm text-neutral-400 leading-relaxed font-light">
                      {service.shortDesc}
                    </p>

                    {/* Feature Highlights */}
                    <div className="mt-6 pt-5 border-t border-white/[0.06] space-y-2.5">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                          <Check className="w-3.5 h-3.5 text-[#E5B54F] mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="mt-8 pt-4">
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="w-full py-2.5 px-4 rounded-sm text-xs font-semibold tracking-wider uppercase text-neutral-300 bg-[#16181D] hover:bg-[#E5B54F] hover:text-black border border-white/[0.08] hover:border-[#E5B54F] transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer"
                    >
                      <span>Inquire About {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

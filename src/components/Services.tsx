import React from 'react';
import { SERVICES, ServiceItem } from '../data/detailingData.ts';
import { Sparkles, Shield, Sofa, Disc, Lightbulb, Wrench, ArrowRight, Check } from 'lucide-react';
import ceramicImg from '../assets/images/ceramic_coating_detail_1790775156132.jpg';
import interiorImg from '../assets/images/luxury_interior_detail_1790775187208.jpg';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'ceramic-coating':
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      case 'ppf':
        return <Shield className="w-5 h-5 text-[#D4AF37]" />;
      case 'interior-deep-cleaning':
        return <Sofa className="w-5 h-5 text-[#D4AF37]" />;
      case 'exterior-polishing':
        return <Disc className="w-5 h-5 text-[#D4AF37]" />;
      case 'headlight-restoration':
        return <Lightbulb className="w-5 h-5 text-[#D4AF37]" />;
      case 'engine-bay-cleaning':
        return <Wrench className="w-5 h-5 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  const getServicePreviewImage = (id: string) => {
    if (id === 'ceramic-coating') return ceramicImg;
    if (id === 'interior-deep-cleaning') return interiorImg;
    return null;
  };

  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0C] relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
            Tailored Detailing Programs
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white">
            Precision Craftsmanship Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            Every vehicle undergoes an exacting multi-point inspection before treatment with certified European formulas and hospital-clean processes.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service: ServiceItem) => {
            const previewImg = getServicePreviewImage(service.id);

            return (
              <div
                key={service.id}
                className="group relative bg-[#121215] border border-neutral-800/90 hover:border-[#D4AF37]/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.1)] flex flex-col justify-between"
              >
                {/* Visual Thumbnail for marquee services */}
                {previewImg && (
                  <div className="relative h-44 w-full overflow-hidden bg-neutral-900 border-b border-neutral-800">
                    <img
                      src={previewImg}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-black/30" />
                  </div>
                )}

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header Row: Icon + Unboxed Metadata */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-[#18181D] border border-neutral-800 text-[#D4AF37] group-hover:border-[#D4AF37]/40 transition-colors">
                        {getServiceIcon(service.id)}
                      </div>
                      {/* Clean Unboxed Metadata */}
                      <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                        <span>{service.duration}</span>
                        <span aria-hidden="true" className="text-neutral-600">·</span>
                        <span className="text-[#D4AF37]/90">{service.protection}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-[#F3C954] transition-colors">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-3 text-sm text-neutral-300/90 leading-relaxed font-light">
                      {service.shortDesc}
                    </p>

                    {/* Feature Highlights */}
                    <div className="mt-6 pt-5 border-t border-neutral-800/80 space-y-2.5">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                          <Check className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="mt-8 pt-4">
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="w-full py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-200 bg-[#1A1A20] hover:bg-[#D4AF37] hover:text-black border border-neutral-700/60 hover:border-[#D4AF37] transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer"
                    >
                      <span>Book {service.title}</span>
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

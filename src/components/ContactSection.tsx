import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, ExternalLink, Navigation, MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/detailingData.ts';

export const ContactSection: React.FC = () => {
  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(STUDIO_INFO.address)}`;
  const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hi Apex Gloss Concierge, I would like to schedule a private studio inspection for my vehicle.'
  )}`;

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#070708] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#E5B54F] font-semibold mb-3">
              Studio Location & Consultation
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white">
              Connect With The Atelier
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-neutral-400 font-light max-w-md leading-relaxed">
            Private vehicle dropoffs, enclosed trailer reception, and multi-point paint thickness appraisals by appointment.
          </p>
        </div>

        {/* 2-Column Layout: Studio Details & Google Maps Embed Simulation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {/* Address Card */}
            <div className="p-6 rounded-sm bg-[#101114] border border-white/[0.08] hover:border-[#E5B54F]/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-sm bg-[#16181E] border border-white/[0.08] text-[#E5B54F] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono-num text-neutral-400 uppercase tracking-wider">
                    Studio Facility
                  </h3>
                  <p className="mt-1 text-sm text-neutral-200 font-light leading-relaxed">
                    {STUDIO_INFO.address}
                  </p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs text-[#E5B54F] hover:text-[#F6D686] font-medium"
                  >
                    <span>Turn-by-Turn Navigation</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="p-6 rounded-sm bg-[#101114] border border-white/[0.08] hover:border-[#E5B54F]/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-sm bg-[#16181E] border border-white/[0.08] text-[#E5B54F] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-mono-num text-neutral-400 uppercase tracking-wider">
                    Direct Concierge Line
                  </h3>
                  <div className="mt-1 flex flex-col gap-0.5">
                    <a
                      href={`tel:${STUDIO_INFO.phoneRaw}`}
                      className="text-base sm:text-lg font-mono-num text-white hover:text-[#E5B54F] transition-colors"
                    >
                      {STUDIO_INFO.phone}
                    </a>
                    <a
                      href={`mailto:${STUDIO_INFO.email}`}
                      className="text-xs text-neutral-400 hover:text-neutral-200 transition-colors"
                    >
                      {STUDIO_INFO.email}
                    </a>
                  </div>
                  <div className="mt-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-sm bg-[#18201A] text-emerald-400 hover:bg-emerald-950/60 border border-emerald-800/40 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Direct Channel</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-6 rounded-sm bg-[#101114] border border-white/[0.08]">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-sm bg-[#16181E] border border-white/[0.08] text-[#E5B54F] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono-num text-neutral-400 uppercase tracking-wider">
                    Operating Schedule
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {STUDIO_INFO.hours}
                  </p>
                  <p className="mt-2 text-xs text-[#E5B54F] font-mono-num">
                    High-security facility · Gated client parking
                  </p>
                </div>
              </div>
            </div>

            {/* Instagram Link Banner */}
            <div className="p-6 rounded-sm bg-[#101114] border border-white/[0.08] hover:border-[#E5B54F]/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-2 rounded-sm bg-[#16181E] border border-white/[0.08] text-[#E5B54F]">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono-num text-neutral-400 uppercase">Studio Showcase</h4>
                    <p className="text-xs text-white font-mono-num">{STUDIO_INFO.instagramHandle}</p>
                  </div>
                </div>
                <a
                  href={STUDIO_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-sm text-xs font-semibold bg-[#16181E] hover:bg-[#E5B54F] hover:text-black text-white flex items-center gap-1.5 border border-white/[0.08] transition-colors"
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Simulation */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex-1 min-h-[380px] sm:min-h-[480px] rounded-sm overflow-hidden border border-white/[0.08] bg-[#101114] shadow-2xl flex flex-col justify-between">
              {/* Dark Map Graphic Simulation */}
              <div className="absolute inset-0 bg-[#0B0C0E] overflow-hidden">
                <svg
                  className="w-full h-full opacity-20"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                >
                  <defs>
                    <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                      <path
                        d="M 80 0 L 0 0 0 80"
                        fill="none"
                        stroke="#26262B"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M 0 40 L 80 40 M 40 0 L 40 80"
                        fill="none"
                        stroke="#1C1C20"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  <line x1="0" y1="120" x2="100%" y2="400" stroke="#3F3F46" strokeWidth="6" />
                  <line x1="120" y1="0" x2="350" y2="100%" stroke="#3F3F46" strokeWidth="4" />
                </svg>

                {/* Studio Center Location Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full border border-[#E5B54F]/20 animate-ping absolute -top-8 pointer-events-none" />

                  <div className="relative z-10 p-3 rounded-full bg-[#070708] border-2 border-[#E5B54F] shadow-[0_0_25px_rgba(229,181,79,0.5)] flex items-center justify-center">
                    <Navigation className="w-5 h-5 text-[#E5B54F] fill-[#E5B54F]" />
                  </div>

                  <div className="mt-3 px-4 py-2 rounded-sm bg-[#070708]/90 backdrop-blur-md border border-[#E5B54F]/40 text-center shadow-2xl">
                    <div className="text-xs font-bold text-white tracking-wider font-display">
                      APEX GLOSS ATELIER
                    </div>
                    <div className="text-[10px] text-[#E5B54F] font-mono-num mt-0.5">
                      4800 Apex Motorsports Way
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Header Floating Overlay */}
              <div className="relative z-10 p-4 sm:p-6 bg-gradient-to-b from-[#070708]/90 to-transparent flex items-center justify-between">
                <div className="text-xs text-neutral-300 font-mono-num flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Facility Active · Inspection Bay Open</span>
                </div>
                <div className="text-xs text-[#E5B54F] font-mono-num hidden sm:block">
                  {STUDIO_INFO.mapCoordinates}
                </div>
              </div>

              {/* Map Bottom Action Bar */}
              <div className="relative z-10 p-4 sm:p-6 bg-gradient-to-t from-[#070708]/95 via-[#070708]/80 to-transparent flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-white">Direct GPS Coordinates</div>
                  <div className="text-[11px] text-neutral-400">
                    Accessible via Apple Maps, Google Maps & Waze
                  </div>
                </div>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider bg-[#E5B54F] hover:bg-[#F6D686] text-black shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Navigation className="w-3.5 h-3.5 fill-black" />
                  <span>Open in Navigation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

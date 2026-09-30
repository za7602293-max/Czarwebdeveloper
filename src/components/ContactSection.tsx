import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, ExternalLink, Navigation, MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/detailingData.ts';

export const ContactSection: React.FC = () => {
  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(STUDIO_INFO.address)}`;
  const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hi Apex Gloss Team, I am looking for your studio location and would like to stop by for a vehicle assessment.'
  )}`;

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0C] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
            Visit Our Facility
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white">
            Connect With Our Atelier
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            Drop by our climate-controlled detailing bay or schedule a private vehicle inspection under our high-CRI defect illumination array.
          </p>
        </div>

        {/* 2-Column Layout: Studio Details & Google Maps Embed Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#131317] border border-neutral-800/90 hover:border-[#D4AF37]/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#1A1A22] border border-neutral-800 text-[#D4AF37] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                    Studio Location
                  </h3>
                  <p className="mt-1 text-sm text-neutral-300 font-light leading-relaxed">
                    {STUDIO_INFO.address}
                  </p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs text-[#D4AF37] hover:text-[#F3C954] font-medium"
                  >
                    <span>Get Turn-by-Turn Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="p-6 rounded-2xl bg-[#131317] border border-neutral-800/90 hover:border-[#D4AF37]/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#1A1A22] border border-neutral-800 text-[#D4AF37] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                    Direct Line & Concierge
                  </h3>
                  <div className="mt-1 flex flex-col gap-1">
                    <a
                      href={`tel:${STUDIO_INFO.phoneRaw}`}
                      className="text-base sm:text-lg font-mono text-white hover:text-[#D4AF37] transition-colors"
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
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-md bg-[#1F2320] text-emerald-400 hover:bg-emerald-950/60 border border-emerald-800/60 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-6 rounded-2xl bg-[#131317] border border-neutral-800/90">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#1A1A22] border border-neutral-800 text-[#D4AF37] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                    Studio Working Hours
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {STUDIO_INFO.hours}
                  </p>
                  <p className="mt-2 text-xs text-[#D4AF37] font-mono">
                    Vehicle dropoffs by prior appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Instagram Link Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#17141E] to-[#121216] border border-neutral-800 hover:border-pink-500/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 text-white">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Follow On Instagram</h4>
                    <p className="text-xs text-neutral-400 font-mono">{STUDIO_INFO.instagramHandle}</p>
                  </div>
                </div>
                <a
                  href={STUDIO_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>Follow</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Placeholder & Visual Studio Bay */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex-1 min-h-[380px] sm:min-h-[480px] rounded-2xl overflow-hidden border border-neutral-800 bg-[#121216] shadow-2xl flex flex-col justify-between">
              {/* Dark Map Graphic Simulation */}
              <div className="absolute inset-0 bg-[#0E0F12] overflow-hidden">
                {/* Abstract road grid lines */}
                <svg
                  className="w-full h-full opacity-25"
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
                  {/* Diagonal boulevard */}
                  <line x1="0" y1="120" x2="100%" y2="400" stroke="#3F3F46" strokeWidth="6" />
                  <line x1="120" y1="0" x2="350" y2="100%" stroke="#3F3F46" strokeWidth="4" />
                </svg>

                {/* Studio Center Location Pin Radar */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  {/* Radar pulse rings */}
                  <div className="w-32 h-32 rounded-full border border-[#D4AF37]/30 animate-ping absolute -top-8 pointer-events-none" />
                  <div className="w-48 h-48 rounded-full border border-[#D4AF37]/10 absolute -top-16 pointer-events-none" />

                  {/* Marker Pin */}
                  <div className="relative z-10 p-3 rounded-full bg-[#0B0B0C] border-2 border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.7)] flex items-center justify-center">
                    <Navigation className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37]" />
                  </div>

                  {/* Marker Label */}
                  <div className="mt-3 px-4 py-2 rounded-xl bg-[#0B0B0C]/90 backdrop-blur-md border border-[#D4AF37]/60 text-center shadow-2xl">
                    <div className="text-xs font-bold text-white tracking-wider font-heading">
                      APEX GLOSS STUDIO
                    </div>
                    <div className="text-[10px] text-[#D4AF37] font-mono mt-0.5">
                      4800 Apex Motorsports Way
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Header Floating Overlay */}
              <div className="relative z-10 p-4 sm:p-6 bg-gradient-to-b from-[#0B0B0C]/90 to-transparent flex items-center justify-between">
                <div className="text-xs text-neutral-300 font-mono flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span>Studio Open Today · Walk-in Assessments Available</span>
                </div>
                <div className="text-xs text-[#D4AF37] font-mono hidden sm:block">
                  {STUDIO_INFO.mapCoordinates}
                </div>
              </div>

              {/* Map Bottom Action Bar */}
              <div className="relative z-10 p-4 sm:p-6 bg-gradient-to-t from-[#0B0B0C]/95 via-[#0B0B0C]/80 to-transparent flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-white">Interactive Navigation</div>
                  <div className="text-[11px] text-neutral-400">
                    Direct route via Apple Maps, Google Maps, or Waze
                  </div>
                </div>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-[#D4AF37] hover:bg-[#F3C954] text-black shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Navigation className="w-3.5 h-3.5 fill-black" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

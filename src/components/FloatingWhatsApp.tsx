import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { STUDIO_INFO } from '../data/detailingData.ts';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    'Hi Apex Gloss Team! I would like to inquire about car detailing options for my vehicle.'
  );
  const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip bubble (can be dismissed or fades) */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#121215] border border-[#D4AF37]/40 text-neutral-200 text-xs py-2 px-3.5 rounded-xl shadow-2xl animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-medium text-white">Need a quick detailing estimate?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-white ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Apex Gloss Studio on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-[0_4px_25px_rgba(16,185,129,0.45)] hover:shadow-[0_4px_35px_rgba(212,175,55,0.6)] border-2 border-[#D4AF37] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <MessageCircle className="w-7 h-7 transition-transform group-hover:scale-110" />

        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full border border-[#D4AF37] opacity-60 animate-ping pointer-events-none" />
      </a>
    </div>
  );
};

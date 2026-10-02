import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { STUDIO_INFO } from '../data/detailingData.ts';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    'Hi Apex Gloss Concierge! I would like to inquire about car detailing options for my vehicle.'
  );
  const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#101114] border border-white/[0.08] text-neutral-200 text-xs py-2 px-3.5 rounded-sm shadow-2xl">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="font-medium text-white font-mono-num">Concierge online · Quick estimate</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-white ml-1 p-0.5 cursor-pointer"
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
        aria-label="Chat with Apex Gloss Concierge on WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#101114] hover:bg-[#16181E] text-emerald-400 border border-[#E5B54F]/60 shadow-[0_4px_25px_rgba(0,0,0,0.8),0_0_15px_rgba(229,181,79,0.25)] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
      >
        <MessageCircle className="w-6 h-6 transition-transform group-hover:scale-110" />
      </a>
    </div>
  );
};

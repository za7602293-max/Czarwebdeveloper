import React from 'react';
import { MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/detailingData.ts';

export const FloatingWhatsApp: React.FC = () => {
  const defaultMessage = encodeURIComponent(
    'Hi Apex Gloss Concierge! I would like to inquire about car detailing options for my vehicle.'
  );
  const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Direct WhatsApp Concierge"
      title="Direct WhatsApp Concierge"
      className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-[#101114] hover:bg-[#16181E] text-emerald-400 border border-emerald-500/50 shadow-[0_4px_25px_rgba(0,0,0,0.8)] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
    >
      <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
      <span className="sr-only">WhatsApp Direct</span>
    </a>
  );
};

import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  const sizeMap = {
    sm: { shield: 'w-8 h-8', font: 'text-base', sub: 'text-[9px]' },
    md: { shield: 'w-10 h-10', font: 'text-lg', sub: 'text-[10px]' },
    lg: { shield: 'w-14 h-14', font: 'text-2xl', sub: 'text-xs' },
    xl: { shield: 'w-20 h-20', font: 'text-3xl', sub: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Circular Shield with bold 'A' and water droplet inside, gold outline on black */}
      <div className={`relative ${currentSize.shield} flex-shrink-0 group`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_2px_10px_rgba(212,175,55,0.25)] transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle outer glow filter */}
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9E282" />
              <stop offset="45%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#997715" />
            </linearGradient>
            <linearGradient id="shieldShine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E1E22" />
              <stop offset="100%" stopColor="#0B0B0C" />
            </linearGradient>
          </defs>

          {/* Outer circle frame */}
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="url(#shieldShine)"
            stroke="url(#goldGradient)"
            strokeWidth="3.5"
          />

          {/* Inner Shield contour */}
          <path
            d="M50 14 C58 22 76 28 76 54 C76 72 62 82 50 87 C38 82 24 72 24 54 C24 28 42 22 50 14 Z"
            fill="#0E0E10"
            stroke="url(#goldGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Bold 'A' Letterform */}
          <path
            d="M50 25 L34 68 H42 L46 56 H54 L58 68 H66 L50 25 Z M47.8 50 L50 42 L52.2 50 H47.8 Z"
            fill="url(#goldGradient)"
          />

          {/* Water droplet inside the shield beneath 'A' */}
          <path
            d="M50 63 C46.5 68 44 71.5 44 74.5 C44 78 46.7 80.5 50 80.5 C53.3 80.5 56 78 56 74.5 C56 71.5 53.5 68 50 63 Z"
            fill="url(#goldGradient)"
          />
          {/* Hydrophobic droplet gloss shine highlight */}
          <ellipse
            cx="48.2"
            cy="72.5"
            rx="1.2"
            ry="2.4"
            transform="rotate(-25 48.2 72.5)"
            fill="#FFFFFF"
            opacity="0.8"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col tracking-wider">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-black font-heading text-white tracking-widest ${currentSize.font}`}
            >
              APEX
            </span>
            <span
              className={`font-black font-heading bg-gradient-to-r from-[#F9E282] via-[#D4AF37] to-[#A3841D] bg-clip-text text-transparent tracking-widest ${currentSize.font}`}
            >
              GLOSS
            </span>
          </div>
          <span
            className={`font-medium tracking-[0.25em] text-neutral-400 uppercase ${currentSize.sub}`}
          >
            Car Detailing Studio
          </span>
        </div>
      )}
    </div>
  );
};

import React, { useState, useRef, useCallback } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/detailingData.ts';
import { Sparkles, ArrowLeftRight } from 'lucide-react';
import splitImg from '../assets/images/paint_correction_split_1790775174802.jpg';

export const BeforeAfterGallery: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem: GalleryItem = GALLERY_ITEMS[activeItemIndex];

  // Handle Drag / Move
  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      updatePosition(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      updatePosition(e.touches[0].clientX);
    }
  };

  const handleClickContainer = (e: React.MouseEvent) => {
    updatePosition(e.clientX);
  };

  // Render Visual Simulation for the 6 Detailing Transformations
  const renderVisualSide = (item: GalleryItem, isAfter: boolean) => {
    if (item.id === 'paint-swirls') {
      return (
        <div className="relative w-full h-full bg-[#070708] overflow-hidden flex items-center justify-center">
          <img
            src={splitImg}
            alt={isAfter ? 'Paint corrected reflection' : 'Swirled oxidized paint'}
            className={`w-full h-full object-cover filter ${
              isAfter
                ? 'brightness-110 contrast-125 saturate-110'
                : 'brightness-60 contrast-90 blur-[1px]'
            }`}
          />
          {!isAfter && (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.25)_0%,transparent_35%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.2)_0%,transparent_30%)] opacity-80 mix-blend-screen pointer-events-none" />
          )}
          {isAfter && (
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#E5B54F]/15 to-white/20 pointer-events-none" />
          )}
        </div>
      );
    }

    if (item.id === 'ceramic-hydrophobic') {
      return (
        <div
          className={`relative w-full h-full flex flex-col items-center justify-center p-8 transition-colors ${
            isAfter
              ? 'bg-gradient-to-b from-[#10141C] to-[#070709]'
              : 'bg-gradient-to-b from-[#16161A] to-[#0C0C0E]'
          }`}
        >
          {isAfter ? (
            <div className="relative w-full max-w-sm h-48 sm:h-64 rounded-sm bg-gradient-to-br from-[#181F2B] to-[#0B0D12] border border-[#E5B54F]/40 p-4 flex flex-col justify-center items-center shadow-inner overflow-hidden">
              <div className="absolute top-3 right-3 text-[10px] font-mono-num text-[#E5B54F] uppercase tracking-wider">
                115° Contact Angle
              </div>
              <div className="flex flex-wrap gap-4 items-center justify-center p-4">
                {[28, 20, 36, 18, 24, 32, 16, 26].map((sz, i) => (
                  <div
                    key={i}
                    style={{ width: `${sz}px`, height: `${sz}px` }}
                    className="rounded-full bg-gradient-to-br from-cyan-100 via-sky-400 to-blue-600 shadow-[0_4px_12px_rgba(56,189,248,0.5),inset_0_-2px_4px_rgba(0,0,0,0.4)] border border-white/60 relative"
                  >
                    <div className="absolute top-1 left-1.5 w-1.5 h-1.5 bg-white rounded-full opacity-90" />
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-sky-200 font-mono-num">
                Hydrophobic Nanosphere Matrix
              </p>
            </div>
          ) : (
            <div className="relative w-full max-w-sm h-48 sm:h-64 rounded-sm bg-[#101012] border border-white/[0.08] p-4 flex flex-col justify-center items-center overflow-hidden">
              <div className="absolute top-3 right-3 text-[10px] font-mono-num text-neutral-400 uppercase tracking-wider">
                Flat Sheet Grime
              </div>
              <div className="w-full h-24 bg-neutral-900 rounded border border-dashed border-neutral-700 flex items-center justify-center text-center p-3">
                <span className="text-xs text-neutral-400">
                  Surface tension broken, road tar, water spots baked into pores
                </span>
              </div>
            </div>
          )}
        </div>
      );
    }

    if (item.id === 'headlight-clarity') {
      return (
        <div className="relative w-full h-full bg-[#070709] flex items-center justify-center p-6">
          <div
            className={`w-full max-w-md h-52 sm:h-64 rounded-2xl border transition-all duration-300 flex items-center justify-center relative overflow-hidden ${
              isAfter
                ? 'bg-gradient-to-r from-[#0C1523] to-[#101C2E] border-cyan-400/40 shadow-[0_0_35px_rgba(34,211,238,0.15)]'
                : 'bg-gradient-to-r from-[#211A0E] to-[#1A1308] border-amber-800/40'
            }`}
          >
            <div
              className={`w-32 h-32 rounded-full border-4 flex items-center justify-center relative ${
                isAfter
                  ? 'border-cyan-300 bg-gradient-to-tr from-cyan-500/20 to-white/40 shadow-[0_0_30px_rgba(6,182,212,0.8)]'
                  : 'border-amber-700/60 bg-amber-900/30'
              }`}
            >
              <div
                className={`w-16 h-16 rounded-full ${
                  isAfter ? 'bg-white shadow-[0_0_20px_white]' : 'bg-amber-700/50 blur-[2px]'
                }`}
              />
              {!isAfter && (
                <div className="absolute inset-0 bg-yellow-950/70 backdrop-blur-[3px] rounded-full flex items-center justify-center">
                  <span className="text-[10px] text-amber-300 font-mono-num uppercase tracking-wider">
                    UV Oxidized
                  </span>
                </div>
              )}
            </div>
            {isAfter && (
              <div className="absolute bottom-4 text-xs font-mono-num text-cyan-200">
                100% Lumens Output Restored
              </div>
            )}
          </div>
        </div>
      );
    }

    // Default leather and wheels
    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center p-6 ${
          isAfter ? 'bg-[#0E0F12]' : 'bg-[#141518]'
        }`}
      >
        <div
          className={`w-full max-w-sm h-52 sm:h-64 rounded-sm border p-5 flex flex-col justify-center ${
            isAfter
              ? 'bg-[#14161C] border-[#E5B54F]/40 shadow-lg'
              : 'bg-[#18191E] border-white/[0.08]'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono-num text-neutral-400">Surface Pore Inspection</span>
            <span
              className={`text-xs font-mono-num font-medium ${
                isAfter ? 'text-[#E5B54F]' : 'text-neutral-400'
              }`}
            >
              {isAfter ? 'Matte Conditioned' : 'Greasy & Soiled'}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 h-28">
            <div
              className={`rounded border p-3 flex flex-col justify-between ${
                isAfter
                  ? 'border-[#E5B54F]/30 bg-[#1A1D24]'
                  : 'border-white/[0.06] bg-[#1E2027] brightness-75'
              }`}
            >
              <span className="text-[11px] text-neutral-400">Pore Cleanliness</span>
              <span className={`text-sm font-bold ${isAfter ? 'text-white' : 'text-neutral-400'}`}>
                {isAfter ? 'Sterile Matte' : 'Oil Clogged'}
              </span>
            </div>
            <div
              className={`rounded border p-3 flex flex-col justify-between ${
                isAfter
                  ? 'border-[#E5B54F]/30 bg-[#1A1D24]'
                  : 'border-white/[0.06] bg-[#1E2027] brightness-75'
              }`}
            >
              <span className="text-[11px] text-neutral-400">Suppleness</span>
              <span
                className={`text-sm font-bold ${isAfter ? 'text-[#E5B54F]' : 'text-neutral-400'}`}
              >
                {isAfter ? 'Lanolin Fed' : 'Stiff & Brittle'}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#090A0D] relative border-t border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#E5B54F] font-semibold mb-2">
            Surface Diagnostics & Evidence
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white">
            Before & After Optical Comparison
          </h2>
          <p className="mt-4 text-base text-neutral-400 font-light leading-relaxed">
            Drag the cursor divider horizontally to inspect clear-coat restoration under high CRI inspection lighting.
          </p>
        </div>

        {/* 6 Selector Tabs (Functional Segmented Buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-[#121317] border border-white/[0.08] rounded-md mb-8 max-w-3xl mx-auto">
          {GALLERY_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItemIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-3.5 py-1.5 rounded text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeItemIndex === idx
                  ? 'bg-[#E5B54F] text-black font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Main Interactive Comparison Slider Frame */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-sm overflow-hidden border border-white/[0.1] bg-[#101114] shadow-2xl">
            {/* Slider Container */}
            <div
              ref={containerRef}
              onClick={handleClickContainer}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full h-[360px] sm:h-[460px] cursor-ew-resize select-none overflow-hidden touch-none"
            >
              {/* "AFTER" Layer (Full background) */}
              <div className="absolute inset-0 w-full h-full">
                {renderVisualSide(activeItem, true)}
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-sm bg-[#070708]/85 backdrop-blur-md border border-[#E5B54F]/40 text-[#F6D686] text-xs font-mono-num uppercase tracking-wider font-semibold">
                  After Atelier Correction
                </div>
              </div>

              {/* "BEFORE" Layer (Clipped by slider position) */}
              <div
                className="absolute inset-0 h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div
                  className="relative h-full"
                  style={{ width: containerRef.current?.clientWidth || '100%' }}
                >
                  {renderVisualSide(activeItem, false)}
                </div>
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-sm bg-[#070708]/85 backdrop-blur-md border border-white/[0.1] text-neutral-300 text-xs font-mono-num uppercase tracking-wider font-semibold">
                  Before Correction
                </div>
              </div>

              {/* Divider Line & Interactive Handle */}
              <div
                className="absolute top-0 bottom-0 z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-0 bottom-0 -left-[1px] w-[2px] bg-[#E5B54F] shadow-[0_0_12px_#E5B54F]" />

                <div
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-auto cursor-ew-resize w-10 h-10 rounded-full bg-[#070708] border-2 border-[#E5B54F] shadow-[0_0_20px_rgba(229,181,79,0.5)] flex items-center justify-center group hover:scale-110 active:scale-95 transition-transform"
                >
                  <ArrowLeftRight className="w-4 h-4 text-[#E5B54F]" />
                </div>
              </div>
            </div>

            {/* Information Footer */}
            <div className="p-6 bg-[#121316] border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-display font-bold text-white">
                    {activeItem.title}
                  </h3>
                  <span className="text-xs text-neutral-400 font-mono-num">
                    [{activeItemIndex + 1}/6]
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
                  {activeItem.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono-num text-[#E5B54F] bg-[#1A1C22] border border-[#E5B54F]/30 px-3 py-2 rounded-sm shrink-0">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{activeItem.stats}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Thumbnail Navigation Row */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
          {GALLERY_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItemIndex(idx);
                setSliderPosition(50);
              }}
              className={`p-3 rounded-sm border text-left transition-all duration-200 cursor-pointer ${
                activeItemIndex === idx
                  ? 'bg-[#16181E] border-[#E5B54F] shadow-sm'
                  : 'bg-[#101114] border-white/[0.06] hover:border-white/[0.15]'
              }`}
            >
              <div className="text-[10px] font-mono-num text-[#E5B54F] uppercase">0{idx + 1}.</div>
              <div className="text-xs font-semibold text-white mt-1 line-clamp-1">
                {item.title}
              </div>
              <div className="text-[11px] text-neutral-400 mt-0.5 line-clamp-1">
                {item.category}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

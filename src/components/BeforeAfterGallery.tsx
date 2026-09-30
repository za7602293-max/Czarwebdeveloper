import React, { useState, useRef, useCallback } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/detailingData.ts';
import { Sparkles, SlidersHorizontal, ArrowLeftRight, CheckCircle2 } from 'lucide-react';
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
    // When item is paint correction, we can also blend the generated split photo!
    if (item.id === 'paint-swirls') {
      return (
        <div className="relative w-full h-full bg-[#0E0E10] overflow-hidden flex items-center justify-center">
          <img
            src={splitImg}
            alt={isAfter ? 'Paint corrected reflection' : 'Swirled oxidized paint'}
            className={`w-full h-full object-cover filter ${
              isAfter
                ? 'brightness-110 contrast-125 saturate-120'
                : 'brightness-60 contrast-90 blur-[1px]'
            }`}
          />
          {/* Swirl overlay simulation on before */}
          {!isAfter && (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.25)_0%,transparent_35%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.2)_0%,transparent_30%)] opacity-80 mix-blend-screen pointer-events-none" />
          )}
          {isAfter && (
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#D4AF37]/15 to-white/20 pointer-events-none" />
          )}
        </div>
      );
    }

    if (item.id === 'ceramic-hydrophobic') {
      return (
        <div
          className={`relative w-full h-full flex flex-col items-center justify-center p-8 transition-colors ${
            isAfter
              ? 'bg-gradient-to-b from-[#141820] to-[#0A0D12]'
              : 'bg-gradient-to-b from-[#1A1A1E] to-[#121214]'
          }`}
        >
          {isAfter ? (
            /* After: Ultra-slick hydrophobic water beading */
            <div className="relative w-full max-w-sm h-48 sm:h-64 rounded-xl bg-gradient-to-br from-[#1E2530] to-[#0B0D12] border border-[#D4AF37]/40 p-4 flex flex-col justify-center items-center shadow-inner overflow-hidden">
              <div className="absolute top-3 right-3 text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider">
                115° Contact Angle
              </div>
              {/* Hydrophobic droplet particles */}
              <div className="flex flex-wrap gap-4 items-center justify-center p-4">
                {[28, 20, 36, 18, 24, 32, 16, 26].map((sz, i) => (
                  <div
                    key={i}
                    style={{ width: `${sz}px`, height: `${sz}px` }}
                    className="rounded-full bg-gradient-to-br from-cyan-200 via-sky-400 to-blue-600 shadow-[0_4px_12px_rgba(56,189,248,0.5),inset_0_-2px_4px_rgba(0,0,0,0.4)] border border-white/60 relative"
                  >
                    <div className="absolute top-1 left-1.5 w-1.5 h-1.5 bg-white rounded-full opacity-90" />
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-sky-200 font-mono">
                Water & grime roll off effortlessly
              </p>
            </div>
          ) : (
            /* Before: Flat pooling water and mineral deposits */
            <div className="relative w-full max-w-sm h-48 sm:h-64 rounded-xl bg-[#141416] border border-neutral-700/60 p-4 flex flex-col justify-center items-center overflow-hidden">
              <div className="absolute top-3 right-3 text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                Flat Sheet Grime
              </div>
              <div className="w-full h-24 bg-neutral-800/80 rounded-lg border border-dashed border-neutral-600/60 flex items-center justify-center text-center p-3">
                <span className="text-xs text-neutral-400">
                  Dead surface tension, road tar, water spots baked into pores
                </span>
              </div>
            </div>
          )}
        </div>
      );
    }

    if (item.id === 'headlight-clarity') {
      return (
        <div className="relative w-full h-full bg-[#0D0D10] flex items-center justify-center p-6">
          <div
            className={`w-full max-w-md h-52 sm:h-64 rounded-3xl border transition-all duration-300 flex items-center justify-center relative overflow-hidden ${
              isAfter
                ? 'bg-gradient-to-r from-[#0E1A2B] to-[#122238] border-cyan-400/40 shadow-[0_0_35px_rgba(34,211,238,0.2)]'
                : 'bg-gradient-to-r from-[#2B2312] to-[#241A0A] border-amber-800/50'
            }`}
          >
            {/* Projector Lens graphic */}
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
                  <span className="text-[10px] text-amber-300 font-mono uppercase tracking-wider">
                    UV Fogged
                  </span>
                </div>
              )}
            </div>
            {isAfter && (
              <div className="absolute bottom-4 text-xs font-mono text-cyan-200">
                100% Lumens Output Restored
              </div>
            )}
          </div>
        </div>
      );
    }

    if (item.id === 'leather-interior') {
      return (
        <div
          className={`w-full h-full flex flex-col items-center justify-center p-6 ${
            isAfter ? 'bg-[#121215]' : 'bg-[#18181A]'
          }`}
        >
          <div
            className={`w-full max-w-sm h-52 sm:h-64 rounded-xl border p-5 flex flex-col justify-center ${
              isAfter
                ? 'bg-[#17171C] border-[#D4AF37]/50 shadow-lg'
                : 'bg-[#1D1D22] border-neutral-700'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-neutral-400">Pore Inspection</span>
              <span
                className={`text-xs font-mono font-medium ${
                  isAfter ? 'text-[#D4AF37]' : 'text-neutral-400'
                }`}
              >
                {isAfter ? 'Matte Conditioned' : 'Greasy & Soiled'}
              </span>
            </div>
            {/* Leather texture visual blocks */}
            <div className="grid grid-cols-2 gap-3 h-28">
              <div
                className={`rounded-lg border p-3 flex flex-col justify-between ${
                  isAfter
                    ? 'border-[#D4AF37]/30 bg-[#1F1F26]'
                    : 'border-neutral-700 bg-[#25252D] brightness-75'
                }`}
              >
                <span className="text-[11px] text-neutral-400">Pore Cleanliness</span>
                <span className={`text-sm font-bold ${isAfter ? 'text-white' : 'text-neutral-400'}`}>
                  {isAfter ? 'Sterile Matte' : 'Oil Clogged'}
                </span>
              </div>
              <div
                className={`rounded-lg border p-3 flex flex-col justify-between ${
                  isAfter
                    ? 'border-[#D4AF37]/30 bg-[#1F1F26]'
                    : 'border-neutral-700 bg-[#25252D] brightness-75'
                }`}
              >
                <span className="text-[11px] text-neutral-400">Suppleness</span>
                <span
                  className={`text-sm font-bold ${isAfter ? 'text-[#D4AF37]' : 'text-neutral-400'}`}
                >
                  {isAfter ? 'Lanolin Fed' : 'Stiff & Brittle'}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (item.id === 'brake-dust-wheels') {
      return (
        <div className="relative w-full h-full bg-[#0F0F12] flex items-center justify-center p-6">
          <div
            className={`w-48 sm:w-60 h-48 sm:h-60 rounded-full border-4 flex items-center justify-center relative ${
              isAfter
                ? 'border-[#D4AF37] bg-gradient-to-tr from-neutral-800 to-neutral-700 shadow-[0_0_30px_rgba(212,175,55,0.3)]'
                : 'border-neutral-800 bg-[#16120E]'
            }`}
          >
            {/* Brake Rotor and Caliper */}
            <div
              className={`w-32 sm:w-40 h-32 sm:h-40 rounded-full border-2 border-dashed flex items-center justify-center ${
                isAfter ? 'border-neutral-400 bg-neutral-900' : 'border-amber-900/60 bg-amber-950/40'
              }`}
            >
              <div
                className={`px-3 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-wider ${
                  isAfter ? 'bg-red-600 text-white shadow-md' : 'bg-amber-900/60 text-amber-400'
                }`}
              >
                Brembo Caliper
              </div>
            </div>
            {!isAfter && (
              <div className="absolute inset-0 bg-stone-900/70 rounded-full flex items-center justify-center backdrop-blur-[1px]">
                <span className="text-xs text-amber-200/90 font-mono">Baked Iron Fallout</span>
              </div>
            )}
            {isAfter && (
              <div className="absolute top-2 right-4 text-[10px] font-mono text-[#D4AF37]">
                Ceramic Coated Face
              </div>
            )}
          </div>
        </div>
      );
    }

    // Engine bay default
    return (
      <div className="relative w-full h-full bg-[#0E0E12] flex flex-col items-center justify-center p-6 text-center">
        <div
          className={`w-full max-w-sm h-52 sm:h-64 rounded-xl border p-5 flex flex-col justify-center items-center ${
            isAfter ? 'border-[#D4AF37]/50 bg-[#15151B]' : 'border-neutral-800 bg-[#121214]'
          }`}
        >
          <div
            className={`w-20 h-20 rounded-xl mb-3 flex items-center justify-center text-xl font-bold font-heading ${
              isAfter ? 'bg-[#D4AF37] text-black shadow-lg' : 'bg-neutral-800 text-neutral-500'
            }`}
          >
            V8 BITURBO
          </div>
          <p className={`text-xs font-mono ${isAfter ? 'text-emerald-400' : 'text-neutral-400'}`}>
            {isAfter
              ? 'Deep steam decontaminated, anti-static dressed'
              : 'Dust accumulation, oil mist, unconditioned hoses'}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0C] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
            Proof of Precision
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white">
            Before & After Showcase
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            Drag the slider horizontally to reveal the transformative power of master paint correction, ceramic coatings, and concourse deep cleaning.
          </p>
        </div>

        {/* 6 Selector Tabs (Functional Segmented Buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 max-w-4xl mx-auto">
          {GALLERY_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItemIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeItemIndex === idx
                  ? 'bg-[#D4AF37] text-black font-semibold shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                  : 'bg-[#141418] text-neutral-300 hover:text-white hover:bg-[#1E1E24] border border-neutral-800'
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Main Interactive Comparison Slider Frame */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-[#121215] shadow-2xl">
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
                {/* After badge */}
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded bg-[#0B0B0C]/80 backdrop-blur-md border border-[#D4AF37]/50 text-[#F3C954] text-xs font-mono uppercase tracking-wider font-semibold">
                  After Detailing
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
                {/* Before badge */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded bg-[#0B0B0C]/80 backdrop-blur-md border border-neutral-700 text-neutral-300 text-xs font-mono uppercase tracking-wider font-semibold">
                  Before Detailing
                </div>
              </div>

              {/* Divider Line & Interactive Handle */}
              <div
                className="absolute top-0 bottom-0 z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Vertical gold hairline line */}
                <div className="absolute top-0 bottom-0 -left-[1px] w-[2px] bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent shadow-[0_0_10px_#D4AF37]" />

                {/* Draggable Center Button Handle */}
                <div
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-auto cursor-ew-resize w-10 h-10 rounded-full bg-[#0B0B0C] border-2 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.6)] flex items-center justify-center group hover:scale-110 active:scale-95 transition-transform"
                >
                  <ArrowLeftRight className="w-4 h-4 text-[#D4AF37]" />
                </div>
              </div>
            </div>

            {/* Information Footer for the active showcase */}
            <div className="p-6 bg-[#121216] border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                    {activeItem.title}
                  </h3>
                  <span className="text-xs text-neutral-400 font-mono">
                    ({activeItemIndex + 1}/6)
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                  {activeItem.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] bg-[#1A1A22] border border-[#D4AF37]/30 px-3 py-2 rounded-lg shrink-0">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{activeItem.stats}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Thumbnail Slots Grid Below */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-6xl mx-auto">
          {GALLERY_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItemIndex(idx);
                setSliderPosition(50);
              }}
              className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                activeItemIndex === idx
                  ? 'bg-[#181820] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                  : 'bg-[#121215] border-neutral-800/80 hover:border-neutral-700'
              }`}
            >
              <div className="text-[10px] font-mono text-[#D4AF37] uppercase">Slot 0{idx + 1}</div>
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

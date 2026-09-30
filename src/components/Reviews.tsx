import React from 'react';
import { REVIEWS } from '../data/detailingData.ts';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0C] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
            Client Testimonials
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white">
            Endorsed by Passionate Drivers
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-neutral-300">
            <div className="flex items-center text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
              ))}
            </div>
            <span className="font-semibold text-white font-mono">4.98 / 5.0</span>
            <span className="text-neutral-500">·</span>
            <span className="text-neutral-400">280+ Verified Google & Yelp Reviews</span>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="relative p-7 sm:p-8 rounded-2xl bg-[#131317] border border-neutral-800/90 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Top: 5 Stars + Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#D4AF37]/30" />
                </div>

                {/* Comment Body */}
                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Bottom: Client info & vehicle */}
              <div className="mt-8 pt-5 border-t border-neutral-800/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white text-base font-heading">
                      {review.name}
                    </h4>
                    <div className="text-xs font-mono text-[#D4AF37] mt-0.5">
                      {review.vehicle}
                    </div>
                  </div>

                  {review.verified && (
                    <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified Client</span>
                    </div>
                  )}
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                  <span>{review.service}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

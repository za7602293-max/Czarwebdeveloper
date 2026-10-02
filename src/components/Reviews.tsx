import React from 'react';
import { REVIEWS } from '../data/detailingData.ts';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#070708] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#E5B54F] font-semibold mb-2">
            Marque Endorsements
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white">
            Trusted by Collector Drivers
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-neutral-300">
            <div className="flex items-center text-[#E5B54F]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#E5B54F]" />
              ))}
            </div>
            <span className="font-semibold text-white font-mono-num">4.98 / 5.0</span>
            <span className="text-neutral-600">·</span>
            <span className="text-neutral-400">280+ Documented Exotic Commits</span>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="relative p-7 sm:p-8 rounded-sm bg-[#101114] border border-white/[0.08] hover:border-[#E5B54F]/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-[#E5B54F]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#E5B54F]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#E5B54F]/25" />
                </div>

                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  "{review.comment}"
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/[0.06]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white text-sm font-display tracking-tight">
                      {review.name}
                    </h4>
                    <div className="text-xs font-mono-num text-[#E5B54F] mt-0.5">
                      {review.vehicle}
                    </div>
                  </div>

                  {review.verified && (
                    <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono-num">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified Owner</span>
                    </div>
                  )}
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-400 font-mono-num">
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

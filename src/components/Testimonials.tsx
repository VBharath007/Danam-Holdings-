import { useState, useEffect, useCallback } from "react";
import { Star, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { testimonials } from "../data/company";

export default function Testimonials({ tint = false }: { tint?: boolean }) {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = testimonials.length;
  const itemsCount = 3;

  const nextSlide = useCallback(() => {
    setStartIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Automatic rotation every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Get 3 visible items for desktop circular view
  const visibleReviews = Array.from({ length: Math.min(itemsCount, total) }).map((_, i) => {
    const idx = (startIndex + i) % total;
    return { ...testimonials[idx], displayIndex: idx };
  });

  return (
    <section
      className={`section relative overflow-hidden ${tint ? "bg-[#f8fafd]" : "bg-white"}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Ambient background soft glow */}
      <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-blue-50/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-12 h-72 w-72 rounded-full bg-emerald-50/60 blur-3xl" />

      <div className="container-x relative z-10">
        <SectionHeading
          eyebrow="Google Reviews"
          title="What our clients say"
          sub={`"Hear from the people who trust us to bring their vision to life"`}
          center
        />

        {/* Google Reviews Trust Summary Pill */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200/90 bg-white px-4 py-1.5 shadow-xs">
            {/* Google G Logo */}
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span className="text-xs text-gray-500">Verified Reviews</span>
          </div>
        </div>

        {/* Authentic Google Dots Indicator Line */}
        <div className="relative mx-auto my-6 sm:my-7 flex w-full max-w-xs flex-col items-center justify-center">
          <div className="relative flex w-full items-center justify-center">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gray-200" />
            <div className={`relative z-10 flex items-center gap-2.5 px-4 ${tint ? "bg-[#f8fafd]" : "bg-white"}`}>
              <span className="h-2 w-2 rounded-full bg-[#4285F4]" />
              <span className="h-2 w-2 rounded-full bg-[#EA4335]" />
              <span className="h-2 w-2 rounded-full bg-[#FBBC05]" />
              <span className="h-2 w-2 rounded-full bg-[#34A853]" />
              <span className="h-2 w-2 rounded-full bg-[#EA4335]" />
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative mt-6 sm:mt-8">
          {/* Desktop Left Chevron Button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous reviews"
            className="absolute -left-3 sm:-left-5 top-1/2 z-20 hidden md:flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200/90 bg-white text-gray-700 shadow-md transition-all duration-200 hover:scale-105 hover:border-gray-300 hover:bg-gray-50 hover:text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand/30 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Desktop Right Chevron Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next reviews"
            className="absolute -right-3 sm:-right-5 top-1/2 z-20 hidden md:flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200/90 bg-white text-gray-700 shadow-md transition-all duration-200 hover:scale-105 hover:border-gray-300 hover:bg-gray-50 hover:text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand/30 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Mobile View: EXACTLY 1 REVIEW AT A TIME */}
          <div className="block md:hidden">
            {(() => {
              const t = testimonials[startIndex];
              const ratingVal = typeof t.rating === "number" && !isNaN(t.rating) ? t.rating : 5;
              const starCount = Math.max(1, Math.min(5, Math.round(ratingVal)));
              const initialLetter = t.name.trim().charAt(0).toUpperCase() || "C";
              const avatarColor = t.avatarBg || "#E65100";

              return (
                <div
                  key={`mobile-${t.name}-${startIndex}`}
                  className="group relative flex flex-col justify-between rounded-2xl border border-gray-200/90 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] min-h-[220px] transition-all duration-500 animate-in fade-in"
                >
                  <div>
                    {/* Header: Avatar + Reviewer Name + Google G Icon */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-bold text-white shadow-xs"
                          style={{ backgroundColor: avatarColor }}
                        >
                          {initialLetter}
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-[15px] font-bold text-[#1a73e8]">
                            {t.name}
                          </h4>
                          <span className="text-[11px] text-gray-500 font-normal">
                            {t.timeAgo || "3 days ago"}
                          </span>
                        </div>
                      </div>

                      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                      </svg>
                    </div>

                    {/* Rating Stars */}
                    <div className="mt-3 flex items-center gap-1.5">
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <Star
                            key={num}
                            className={`h-4 w-4 ${num <= starCount ? "fill-[#fbbc04] text-[#fbbc04]" : "fill-[#dadce0] text-[#dadce0]"}`}
                          />
                        ))}
                      </div>
                      {t.isNew && (
                        <span className="rounded border border-gray-300 px-1.5 py-0.5 text-[10px] font-bold text-gray-600 uppercase tracking-wide">NEW</span>
                      )}
                    </div>

                    {/* Review text */}
                    <p className="mt-3 text-[14px] leading-relaxed text-[#3c4043] font-normal">
                      {t.quote}
                    </p>
                  </div>

                  {/* Project Tag */}
                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-500">
                    <div className="flex items-center gap-1.5 truncate">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate font-medium text-gray-700">{t.project || "Completed Construction"}</span>
                      {t.location && <span>• {t.location}</span>}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Desktop Review Cards Grid (3 cards visible at a time) */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 px-4">
            {visibleReviews.map((t) => {
              const ratingVal = typeof t.rating === "number" && !isNaN(t.rating) ? t.rating : 5;
              const starCount = Math.max(1, Math.min(5, Math.round(ratingVal)));
              const initialLetter = t.name.trim().charAt(0).toUpperCase() || "C";
              const avatarColor = t.avatarBg || "#E65100";

              return (
                <div
                  key={`${t.name}-${t.displayIndex}`}
                  className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-gray-200/90 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.09)]"
                >
                  <div>
                    {/* Top Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-bold text-white shadow-xs"
                          style={{ backgroundColor: avatarColor }}
                        >
                          {initialLetter}
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-[15px] font-bold text-[#1a73e8] transition-colors group-hover:text-[#1557b0]">
                            {t.name}
                          </h4>
                        </div>
                      </div>

                      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                      </svg>
                    </div>

                    {/* Rating Stars & Time */}
                    <div className="mt-3.5 flex items-center gap-2 flex-wrap">
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <Star
                            key={num}
                            className={`h-4 w-4 ${num <= starCount ? "fill-[#fbbc04] text-[#fbbc04]" : "fill-[#dadce0] text-[#dadce0]"}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 font-normal">{t.timeAgo || "3 days ago"}</span>
                      {t.isNew && (
                        <span className="rounded border border-gray-300 px-1.5 py-0.5 text-[10px] font-bold text-gray-600 uppercase tracking-wide">NEW</span>
                      )}
                    </div>

                    <p className="mt-3 text-[14px] leading-relaxed text-[#3c4043] font-normal">
                      {t.quote}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-500">
                    <div className="flex items-center gap-1.5 truncate">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate font-medium text-gray-700">{t.project || "Completed Construction"}</span>
                      {t.location && <span>• {t.location}</span>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls: Chevrons + Dots (For Both Mobile and Desktop) */}
          <div className="mt-7 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous review"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm hover:border-gray-300 hover:bg-gray-50 hover:text-brand-dark transition-all active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {testimonials.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setStartIndex(dotIdx)}
                  aria-label={`Go to review ${dotIdx + 1}`}
                  className={`transition-all duration-300 cursor-pointer ${
                    dotIdx === startIndex
                      ? "h-2 w-6 rounded-full bg-[#1a73e8]"
                      : "h-2 w-2 rounded-full bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next review"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm hover:border-gray-300 hover:bg-gray-50 hover:text-brand-dark transition-all active:scale-95 cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

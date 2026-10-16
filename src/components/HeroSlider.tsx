import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Eyebrow from "./Eyebrow";

export interface SlideData {
  image: string;
  eyebrow: string;
  title: string;
  text: string;
}

const slides: SlideData[] = [
  {
    image: "/homehero/hh1.webp?v=2",
    eyebrow: "Construction • Interior • Project Management • Renovation",
    title: "Your Trusted Partner in Construction & Civil Engineering",
    text: "From planning and design to construction and handover, we deliver quality work with transparent costing and timely completion.",
  },
  {
    image: "/homehero/hh2.webp",
    eyebrow: "Residential & Commercial Landmark Projects",
    title: "Crafting Architectural Excellence with Precision",
    text: "Engineered for endurance and styled for sophistication. Every detail executed with uncompromising quality and safety.",
  },
  {
    image: "/homehero/hh3.webp",
    eyebrow: "Comprehensive Turnkey Solutions in Madurai",
    title: "End-to-End Civil Engineering & Infrastructure",
    text: "From soil testing and structural design to final handover, our expert engineers ensure seamless timelines and peace of mind.",
  },
  {
    image: "/homehero/hh4.webp",
    eyebrow: "Modern Interiors & Structural Remodeling",
    title: "Transforming Spaces into Inspiring Environments",
    text: "Bespoke interior design and structural renovation tailored to your vision, built with premium materials that stand the test of time.",
  },
  {
    image: "/homehero/hh5.webp",
    eyebrow: "Engineering Trust & Enduring Value",
    title: "Transparent Costing, Honest Workmanship, On-Time Delivery",
    text: "Proud members of BAI, FACCE, MBCC, and Consuma. Experience proven construction excellence you can always count on.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Automatic slide rotation every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    setTouchStart(null);
  };

  return (
    <div
      className="relative flex min-h-[500px] sm:min-h-[560px] lg:min-h-[640px] items-center overflow-hidden pb-16 pt-[95px] sm:pb-24 sm:pt-[120px] lg:pt-[130px] text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images with Smooth Crossfade */}
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 scale-100" : "opacity-0 pointer-events-none scale-105"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            transition: "opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1), transform 6000ms ease-out",
          }}
        />
      ))}

      {/* Gentle gradient: Architectural image is fully visible while maintaining high text readability */}
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-black/25 sm:bg-transparent"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(16,34,8,0.85) 0%, rgba(16,34,8,0.55) 45%, rgba(16,34,8,0.15) 70%, transparent 88%)",
        }}
      />

      {/* Content */}
      <div className="container-x relative z-20 w-full">
        <div className="max-w-md lg:max-w-[500px]">
          <div className="transition-all duration-500 ease-out">
            <Eyebrow light>{slides[current].eyebrow}</Eyebrow>
            <h1 className="mb-2.5 mt-2 font-sans text-xl min-[360px]:text-2xl sm:text-3xl lg:text-[2rem] font-bold tracking-tight sm:tracking-normal leading-snug sm:leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              {slides[current].title}
            </h1>
            <p className="font-sans text-xs sm:text-sm text-white/95 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {slides[current].text}
            </p>
          </div>

          <div className="mt-5 sm:mt-8 flex flex-row flex-wrap items-center gap-2.5 sm:gap-3.5">
            <Link to="/contact" className="btn btn-bright group inline-flex w-auto px-5 py-2.5 sm:px-6 sm:py-3.5">
              <span>Request a Quote</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link to="/services" className="btn btn-ghost inline-flex w-auto px-5 py-2.5 sm:px-6 sm:py-3.5">
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Chevrons (Hidden on mobile so they never overlap or block text) */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="group absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 hidden sm:flex h-11 w-11 lg:h-12 lg:w-12 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-brand hover:bg-brand hover:text-deep active:scale-95 focus:outline-none cursor-pointer shadow-lg"
      >
        <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-0.5" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="group absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 hidden sm:flex h-11 w-11 lg:h-12 lg:w-12 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-brand hover:bg-brand hover:text-deep active:scale-95 focus:outline-none cursor-pointer shadow-lg"
      >
        <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* Slide Indicators / Dots + Mobile Touch Arrows */}
      <div className="absolute bottom-5 sm:bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 sm:gap-3">
        {/* Mobile Prev Arrow */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="sm:hidden flex h-8 w-8 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-md border border-white/25 active:scale-90 cursor-pointer shadow-md"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Indicators */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                current === idx ? "w-6 sm:w-7 bg-brand shadow-sm shadow-brand/40" : "w-2 bg-white/45 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* Mobile Next Arrow */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="sm:hidden flex h-8 w-8 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-md border border-white/25 active:scale-90 cursor-pointer shadow-md"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

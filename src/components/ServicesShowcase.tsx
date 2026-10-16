import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import type { Service } from "../data/company";

interface Props {
  services: Service[];
}

const CYCLE_TIME = 2000; // 2 seconds per card

export default function ServicesShowcase({ services }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically cycle through cards continuously without stopping
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, CYCLE_TIME);

    return () => clearInterval(timer);
  }, [services.length]);

  return (
    <div className="mt-10">
      {/* 6 Cards Grid with Continuous Automatic Hover Flow */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Link
            key={s.title}
            to="/services"
            className="block focus:outline-none"
            onClick={() => setActiveIndex(i)}
          >
            <ServiceCard
              index={i}
              title={s.title}
              desc={s.desc}
              isActive={i === activeIndex}
            />
          </Link>
        ))}
      </div>

      {/* Subtle indicator dots */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            title={`Service ${i + 1}`}
            aria-label={`Service ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              i === activeIndex
                ? "w-8 bg-brand shadow-sm shadow-brand/40"
                : "w-2.5 bg-line hover:bg-brand/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

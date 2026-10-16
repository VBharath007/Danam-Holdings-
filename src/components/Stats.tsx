import { useState, useEffect, useRef } from "react";
import { Award, Building2, ShieldCheck } from "lucide-react";

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);

  // Trigger dynamic count every time section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
          setYears(0);
          setProjects(0);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Smooth count-up animation on enter
  useEffect(() => {
    if (!isInView) return;

    let step = 0;
    const totalSteps = 30;
    const intervalTime = 30;

    const timer = setInterval(() => {
      step++;
      const progress = step / totalSteps;
      setYears(Math.min(10, Math.round(progress * 10)));
      setProjects(Math.min(350, Math.round(progress * 350)));

      if (step >= totalSteps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isInView]);

  const stats = [
    {
      icon: Award,
      value: `${years}+`,
      title: "Years Experience",
    },
    {
      icon: Building2,
      value: `${projects}+`,
      title: "Projects Completed",
    },
    {
      icon: ShieldCheck,
      value: "Turnkey",
      title: "Engineering Experts",
    },
  ];

  return (
    <div ref={containerRef} className="relative z-20 mt-4 sm:-mt-10 lg:-mt-12">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-5">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative flex items-center gap-3.5 sm:gap-5 rounded-2xl border border-line/80 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10 sm:p-6"
              >
                {/* Top border highlight on hover */}
                <span className="pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-brand to-brand-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Vibrant premium icon badge */}
                <div className="relative flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand via-leaf to-brand-dark text-white shadow-md shadow-brand/25 ring-4 ring-brand/15 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-brand/35 group-hover:ring-brand/30 sm:h-16 sm:w-16">
                  {/* Subtle gloss overlay */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 via-transparent to-black/10" />
                  <Icon
                    className="relative z-10 h-6.5 w-6.5 transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8"
                    strokeWidth={2.25}
                  />
                </div>

                <div>
                  <div className="font-sans text-xl font-extrabold tracking-tight text-deep sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-0.5 text-[11px] font-bold uppercase tracking-wider text-mut sm:text-xs">
                    {s.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

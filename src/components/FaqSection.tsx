import { useState } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { faqs } from "../data/company";

export default function FaqSection({ limit, tint = false, showButton = true }: { limit?: number; tint?: boolean; showButton?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  const list = limit ? faqs.slice(0, limit) : faqs;
  return (
    <section className={`section ${tint ? "bg-tint" : ""}`}>
      <div className="container-x grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" sub="Quick answers to common questions. Need more help? Call or WhatsApp us." />
          {showButton && (
            <div className="mt-6 sm:mt-7 flex justify-center sm:justify-start">
              <Link to="/contact" className="btn btn-line">Ask Us Directly</Link>
            </div>
          )}
        </div>
        <div className="space-y-3">
          {/* Helpful UX affordance badge so users instantly know questions are interactive */}
          <div className="flex items-center justify-between pb-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-900 border border-emerald-200/70 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
              </span>
              <span>Click any question to view answer</span>
            </span>
            <span className="text-xs text-gray-400 font-medium hidden sm:inline">
              Tap / Click to expand
            </span>
          </div>

          {list.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`group rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-brand-dark/40 bg-white shadow-md ring-1 ring-brand/10"
                    : "border-line bg-white/80 hover:bg-white hover:border-brand-dark/50 hover:shadow-md hover:-translate-y-0.5"
                }`}
              >
                <h3 className="font-sans text-base font-semibold tracking-normal">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    title={isOpen ? "Click to collapse answer" : "Click to view answer"}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 p-4 sm:p-5 text-left transition-colors"
                  >
                    <span className={`text-sm sm:text-base font-bold transition-colors duration-200 ${isOpen ? "text-brand-dark" : "text-deep group-hover:text-brand-dark"}`}>
                      {f.q}
                    </span>
                    <span
                      className={`flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isOpen
                          ? "bg-brand-dark text-white shadow-sm"
                          : "border border-emerald-200 bg-emerald-50 text-brand-dark group-hover:bg-brand-dark group-hover:text-white group-hover:scale-110 group-hover:rotate-90 group-hover:shadow-md"
                      }`}
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} className="transition-transform duration-300" />}
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div className="border-t border-line/60 px-4 sm:px-5 pt-3 pb-5 bg-tint/20 rounded-b-2xl">
                    <p className="text-sm sm:text-[15px] leading-relaxed text-mut">
                      {f.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

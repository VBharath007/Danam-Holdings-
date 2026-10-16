import type { ReactNode } from "react";

export default function Eyebrow({ children, center = false, light = false }: { children: ReactNode; center?: boolean; light?: boolean }) {
  const c = light ? "text-[#8fdc55]" : "text-leaf";
  return (
    <div className={`flex items-start sm:items-center gap-2.5 sm:gap-3 text-[11px] font-bold uppercase tracking-wider sm:tracking-[0.2em] sm:text-xs ${c} ${center ? "justify-center" : ""}`}>
      <span className={`mt-1.5 sm:mt-0 h-px w-6 sm:w-8 shrink-0 ${light ? "bg-[#8fdc55]" : "bg-brand"}`} />
      <span className="leading-snug">{children}</span>
    </div>
  );
}

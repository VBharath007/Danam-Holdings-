import Eyebrow from "./Eyebrow";

interface Props { eyebrow: string; title: string; sub?: string; light?: boolean; center?: boolean }

export default function SectionHeading({ eyebrow, title, sub, light = false, center = false }: Props) {
  return (
    <div className={center ? "mx-auto text-center" : ""}>
      <Eyebrow center={center} light={light}>{eyebrow}</Eyebrow>
      <h2 className={`mt-2.5 sm:mt-3 text-2xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight ${light ? "text-white" : "text-deep"}`}>{title}</h2>
      {sub && <p className={`mt-2 sm:mt-3 max-w-xl text-xs sm:text-base leading-relaxed ${center ? "mx-auto" : ""} ${light ? "text-white/70" : "text-mut"}`}>{sub}</p>}
    </div>
  );
}

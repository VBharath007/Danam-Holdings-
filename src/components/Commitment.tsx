import SectionHeading from "./SectionHeading";
import { commitments } from "../data/company";

export default function Commitment() {
  return (
    <section className="relative bg-deep bg-cover bg-center text-white" style={{ backgroundImage: "url(/homehero/hh1.webp)" }}>
      <div className="absolute inset-0 bg-deep/90" />
      <div className="container-x section relative">
        <SectionHeading eyebrow="Our Commitment" title="The standards we work by" light />
        <div className="mt-10 grid border border-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((c, i) => (
            <div key={c.title} className="border-b border-white/15 p-7 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0">
              <span className="text-xs font-bold tracking-[0.2em] text-brand">0{i + 1}</span>
              <b className="mb-1.5 mt-2.5 block font-serif text-xl">{c.title}</b>
              <p className="text-sm text-white/70">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

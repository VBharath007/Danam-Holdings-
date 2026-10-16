import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import CtaBand from "../components/CtaBand";
import usePageTitle from "../components/usePageTitle";
import { forums, team } from "../data/company";
import {
  Compass,
  Target,
  HardHat,
  FileCheck2,
  Layers,
  KeyRound,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Boxes
} from "lucide-react";

const initials = (n: string) =>
  n
    .replace("R. ", "R ")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

export default function AboutUs() {
  usePageTitle("About Us");

  const workflowSteps = [
    {
      step: "01",
      icon: Layers,
      title: "Soil & Structural Feasibility",
      desc: "Topographical surveys, soil bearing capacity (SBC) tests, and architectural feasibility before breaking ground."
    },
    {
      step: "02",
      icon: FileCheck2,
      title: "3D Visualization & Itemized BOQ",
      desc: "Detailed structural drawings, 3D elevation renders, and transparent line-item quantity billing with zero hidden costs."
    },
    {
      step: "03",
      icon: HardHat,
      title: "IS-Code Standard Construction",
      desc: "Certified Fe550D TMT steel, lab-tested concrete cube testing, and daily site supervision by senior civil engineers."
    },
    {
      step: "04",
      icon: KeyRound,
      title: "Turnkey Finishing & Handover",
      desc: "Snag-free final inspection, MEP certification, exterior landscape completion, and official keys handover."
    }
  ];

  return (
    <>
      {/* 01. Page Hero Banner */}
      <PageHero
        crumb="About Us"
        title="About Danam Holdings"
        text="A premier civil engineering & turnkey EPC construction company built on structural integrity, cost transparency, and on-time delivery across South India."
        image="/homehero/hh5.webp"
      />

      {/* 02. Our Background & Engineering Heritage (Company Story) */}
      <section className="section relative overflow-hidden bg-gradient-to-b from-stone-50/70 via-white to-stone-50/30">
        {/* Decorative architectural background ambient accents */}
        <div className="absolute top-1/4 right-0 -mr-24 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 -ml-24 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

        <div className="container-x relative z-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column (7 cols): Narrative, Stats, Feature cards & CTA */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Our Background"
              title="Building Better Spaces. Creating Lasting Value."
            />

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-mut">
              <strong className="text-deep font-bold">DANAM HOLDINGS</strong> provides complete construction and project management solutions, bringing together design, construction, renovation and professional consultancy under one roof.
            </p>

            {/* Quick Metrics Strip */}
            <div className="mt-5 grid grid-cols-3 gap-1.5 sm:gap-3 border-y border-line/80 py-3.5">
              <div className="text-center sm:text-left">
                <div className="text-lg sm:text-2xl font-extrabold text-deep tracking-tight">10+</div>
                <div className="text-[9.5px] sm:text-xs font-semibold text-mut uppercase tracking-wider leading-tight">Years Exp</div>
              </div>
              <div className="border-x border-line/80 px-1 sm:px-4 text-center sm:text-left">
                <div className="text-lg sm:text-2xl font-extrabold text-brand-dark tracking-tight">350+</div>
                <div className="text-[9.5px] sm:text-xs font-semibold text-mut uppercase tracking-wider leading-tight">Completed</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-lg sm:text-2xl font-extrabold text-deep tracking-tight">Turnkey</div>
                <div className="text-[9.5px] sm:text-xs font-semibold text-mut uppercase tracking-wider leading-tight">Engineering</div>
              </div>
            </div>

            {/* 5 Core Pillars / Solutions */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="group rounded-2xl border border-line/80 bg-white p-3.5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-sm">
                <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-xl bg-tint text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-colors">
                  <Building2 className="h-4 w-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-deep">Complete Construction Solutions</h4>
                <p className="mt-1 text-xs text-mut leading-relaxed">
                  From initial planning to final handover.
                </p>
              </div>

              <div className="group rounded-2xl border border-line/80 bg-white p-3.5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:shadow-sm">
                <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <HardHat className="h-4 w-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-deep">Expert Project Management</h4>
                <p className="mt-1 text-xs text-mut leading-relaxed">
                  Coordinating every stage with care and precision.
                </p>
              </div>

              <div className="group rounded-2xl border border-line/80 bg-white p-3.5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-sm">
                <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-xl bg-tint text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-colors">
                  <Compass className="h-4 w-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-deep">Design &amp; Interior Solutions</h4>
                <p className="mt-1 text-xs text-mut leading-relaxed">
                  Creating functional, thoughtfully designed spaces.
                </p>
              </div>

              <div className="group rounded-2xl border border-line/80 bg-white p-3.5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:shadow-sm">
                <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <Boxes className="h-4 w-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-deep">Reliable Material Supply</h4>
                <p className="mt-1 text-xs text-mut leading-relaxed">
                  Supporting projects with dependable construction materials.
                </p>
              </div>

              {/* 5th Pillar - Highlights Quality & Transparency across 2 cols */}
              <div className="group sm:col-span-2 flex items-start gap-3.5 rounded-2xl border border-brand/20 bg-tint/40 p-3.5 shadow-xs transition-all duration-300 hover:border-brand/50 hover:bg-tint/70">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white shadow-xs">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-deep">Transparent &amp; Quality-Focused Execution</h4>
                  <p className="mt-0.5 text-xs text-mut leading-relaxed">
                    Clear communication, responsible planning and attention to detail.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Overlapping Architectural Collage with Badges */}
          <div className="relative pb-6 pt-6 sm:pb-8 sm:pt-4 lg:col-span-5">
            {/* Architectural Grid / Frame Accent */}
            <div className="absolute -top-2 -right-2 -bottom-2 -left-2 rounded-[2.5rem] border border-dashed border-stone-200/90 pointer-events-none hidden sm:block" />

            {/* Main Primary Image */}
            <div className="relative overflow-hidden rounded-3xl border border-line/80 bg-stone-100 shadow-xl transition-all duration-500 hover:shadow-2xl">
              <img
                src="/homehero/hh2.webp"
                alt="Danam Holdings Landmark Construction"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105 lg:aspect-[4/5]"
              />
            </div>

            {/* Overlapping Secondary Image Card (Bottom Left) */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-44 sm:w-52 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-2xl transition-transform duration-300 hover:scale-105 hidden sm:block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/homehero/hh4.webp"
                  alt="On-site Engineering Precision"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2.5 text-[10px] font-bold text-white tracking-wide uppercase">
                  Precision Engineering
                </span>
              </div>
            </div>

            {/* Quality Guarantee Mini Pill (Bottom Right) */}
            <div className="absolute -bottom-3 right-3 sm:-bottom-4 sm:right-4 flex items-center gap-1.5 rounded-full border border-emerald-600/20 bg-white px-3 py-1.5 shadow-lg backdrop-blur-sm">
              <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
              <span className="text-[11px] font-bold text-deep">IS 456 Structural Standard</span>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Board of Directors & Management (Executive Dark Contrast) */}
      <section className="section bg-[#0e1d16] relative overflow-hidden">
        {/* Subtle radial ambient warmth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="container-x relative z-10">
          <SectionHeading
            eyebrow="Our Leadership"
            title="Board of Directors & Management"
            light
            center
          />

          <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((p) => (
              <div
                key={p.name}
                className="group relative flex flex-col items-center rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.05] p-5 sm:p-7 text-center backdrop-blur-sm shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400/50 hover:bg-white/[0.09] hover:shadow-2xl"
              >
                {/* Modern Avatar with initials */}
                <div className="mb-4 sm:mb-5 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-amber-400/15 text-lg sm:text-xl font-bold tracking-wider text-amber-300 border border-amber-400/30 shadow-inner transition-all duration-300 group-hover:scale-105 group-hover:bg-amber-500 group-hover:text-deep group-hover:border-amber-400">
                  {initials(p.name)}
                </div>

                {/* Name */}
                <h4 className="text-base sm:text-lg font-bold text-white transition-colors group-hover:text-amber-300">
                  {p.name}
                </h4>

                {/* Role Title */}
                <p className="mt-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-400">
                  {p.role}
                </p>

                {/* Focus / Leadership Area */}
                {p.focus && (
                  <p className="mt-2.5 sm:mt-3 text-xs leading-relaxed text-emerald-100/70">
                    {p.focus}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. Our Vision & Mission Cards */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Purpose"
            title="Vision & Mission"
            sub="Guiding every blueprint, foundation, and milestone we deliver."
            center
          />

          <div className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {/* Vision Card */}
            <div className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-line bg-tint/40 p-5 sm:p-9 shadow-xs transition-all duration-300 hover:shadow-md hover:border-brand/40">
              <div>
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand-dark">
                    <Compass className="h-5 w-5 sm:h-6 sm:w-6 text-brand" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-deep">Our Vision</h3>
                </div>
                <p className="text-xs sm:text-base leading-relaxed text-mut">
                  To emerge as a leading construction company known for its exceptional quality, pioneering innovation, and sustainable practices, consistently surpassing client expectations.
                </p>
              </div>

              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-line/60 space-y-2.5 sm:space-y-3">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-deep">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Exceptional Quality:</strong> Uncompromising structural integrity and premium finishes.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-deep">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Pioneering Innovation:</strong> Modern architectural and civil engineering techniques.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-deep">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Sustainable Practices:</strong> Eco-conscious sourcing and durable green building methods.</span>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-line bg-tint/40 p-5 sm:p-9 shadow-xs transition-all duration-300 hover:shadow-md hover:border-brand/40">
              <div>
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand-dark">
                    <Target className="h-5 w-5 sm:h-6 sm:w-6 text-brand" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-deep">Our Mission</h3>
                </div>
                <p className="text-xs sm:text-base leading-relaxed text-mut">
                  To provide top-tier construction and design services with an unwavering commitment to client value:
                </p>
              </div>

              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-line/60 space-y-2.5 sm:space-y-3">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-deep">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Top-Tier Services:</strong> Provide excellence across turnkey construction and design.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-deep">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Timely &amp; Budgetary Discipline:</strong> Ensure project completion adhering to strict budgets and stringent standards.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-deep">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Transparency &amp; Reliability:</strong> Cultivate enduring relationships with clients built on trust.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-deep">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Continuous Innovation:</strong> Integrate cutting-edge technologies for enhanced construction methodologies.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. Our Engineering Workflow (Feasibility → Design & BOQ → Construction → Handover) */}
      <section className="section bg-tint">
        <div className="container-x">
          <SectionHeading
            eyebrow="How We Deliver"
            title="Our 4-Step Engineering Workflow"
            sub="A systematic, milestone-driven construction process that ensures zero guesswork."
            center
          />

          <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workflowSteps.map((w) => {
              const StepIcon = w.icon;
              return (
                <div
                  key={w.step}
                  className="group relative rounded-2xl sm:rounded-3xl border border-line bg-white p-5 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black tracking-widest text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                      STEP {w.step}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-tint text-brand-dark transition-colors group-hover:bg-brand group-hover:text-white">
                      <StepIcon className="h-5 w-5" />
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-deep mb-2">{w.title}</h4>
                  <p className="text-xs sm:text-[13px] text-mut leading-relaxed">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 06. Industry & Business Forum Memberships (JCI, BNI, YI, Rotary) */}
      <section className="section bg-tint/40">
        <div className="container-x text-center">
          <SectionHeading
            eyebrow="Affiliations"
            title="Industry & Business Forum Memberships"
            sub="Active members of prestigious business, youth, and engineering associations."
            center
          />
          <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-6 max-w-5xl mx-auto">
            {forums.map((f) => (
              <div
                key={f.name}
                className="group relative flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl border border-line bg-white p-3.5 sm:p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
              >
                <div className="flex h-14 sm:h-20 w-full items-center justify-center p-1 sm:p-2 mb-2 sm:mb-3">
                  <img
                    src={f.logo}
                    alt={f.fullName || f.name}
                    loading="lazy"
                    className="max-h-10 sm:max-h-14 max-w-[80%] sm:max-w-[130px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h4 className="text-xs sm:text-base font-bold text-deep transition-colors group-hover:text-brand-dark">
                  {f.name}
                </h4>
                <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-mut font-medium text-center leading-tight line-clamp-2">
                  {f.fullName}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. Final CTA – Start Your Project */}
      <CtaBand />
    </>
  );
}

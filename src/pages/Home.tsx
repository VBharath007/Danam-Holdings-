import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Stats from "../components/Stats";
import ServicesShowcase from "../components/ServicesShowcase";
import Commitment from "../components/Commitment";
import ProjectList from "../components/ProjectList";
import Testimonials from "../components/Testimonials";
import ClientGrid from "../components/ClientGrid";
import FaqSection from "../components/FaqSection";
import CtaBand from "../components/CtaBand";
import HeroSlider from "../components/HeroSlider";
import usePageTitle from "../components/usePageTitle";
import { services, workTypes } from "../data/company";

export default function Home() {
  usePageTitle();
  return (
    <>
      <HeroSlider />

      <Stats />

      <section className="section">
        <div className="container-x grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative lg:pb-4 lg:pr-4">
            <img src="/about-villa.webp" alt="Residential villa exterior" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-md lg:aspect-[4/5]" />
            <span className="pointer-events-none absolute bottom-0 right-0 -z-10 hidden h-3/5 w-3/5 border-[1.5px] border-brand lg:block" />
          </div>
          <div>
            <SectionHeading eyebrow="Who We Are" title="Building with quality, honesty and care" />
            <p className="mt-4 text-xs sm:text-base leading-relaxed text-mut">Danam Holdings is a construction and civil engineering company based in Madurai, handling residential, commercial and industrial projects. From design and estimation to construction, interiors and site supervision, we take care of the complete journey.</p>
            <p className="mt-3 text-xs sm:text-sm text-mut"><b className="text-deep font-semibold">What we offer:</b> {workTypes.join(" • ")}.</p>
            <div className="mt-6 flex justify-center sm:justify-start">
              <Link to="/about-us" className="btn btn-line">About Us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-tint">
        <div className="container-x">
          <SectionHeading eyebrow="What We Do" title="Our Services" sub="Everything your project needs, handled by one dedicated team." />
          <ServicesShowcase services={services.slice(0, 6)} />
          <div className="mt-8 flex justify-center sm:justify-start">
            <Link to="/services" className="btn btn-green">View All {services.length} Services</Link>
          </div>
        </div>
      </section>

      <Commitment />

      <section className="section relative overflow-hidden bg-gradient-to-b from-[#f7faf4] via-white to-[#edf5e7]/50">
        {/* Ambient Glassmorphism Glow Orbs */}
        <div className="pointer-events-none absolute -left-20 top-24 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-1/2 h-96 w-96 rounded-full bg-leaf/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 left-1/3 h-80 w-80 rounded-full bg-brand-dark/5 blur-3xl" />

        <div className="container-x relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <SectionHeading
              eyebrow="Completed Projects"
              title="Work we have delivered"
              sub="A selection of landmark commercial, residential, and institutional projects completed by our team."
            />
            <div className="flex justify-center sm:justify-end w-full md:w-auto">
              <Link
                to="/our-projects"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/80 bg-white/70 backdrop-blur-md px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-dark transition-all duration-300 hover:bg-brand-dark hover:text-white shadow-sm hover:shadow-md"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <ProjectList limit={6} showFilters={false} />

          {/* Bottom frosted consultation ribbon with defined border */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-5 sm:gap-6 rounded-3xl border-[1.5px] border-line bg-white/95 p-5 sm:p-8 shadow-[0_10px_30px_rgba(16,34,8,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-brand/40 hover:shadow-lg">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5 sm:gap-4 text-center sm:text-left">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-brand text-white shadow-md shadow-brand/25">
                <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h4 className="text-sm sm:text-lg font-bold text-deep">Planning a new building or renovation?</h4>
                <p className="mt-0.5 text-xs sm:text-sm text-mut">Speak directly with our senior civil engineers for transparent quotes and project timelines.</p>
              </div>
            </div>
            <div className="flex justify-center sm:justify-end w-full sm:w-auto">
              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-brand-dark px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-deep hover:shadow-lg"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Our Brand Clients (Immediately validates Completed Projects) */}
      <section className="section bg-white overflow-hidden">
        <div className="container-x">
          <SectionHeading eyebrow="Our Brand Clients" title="Trusted by respected names" sub="Reputed corporations, educational institutions, and businesses that partner with Danam Holdings." />
          <ClientGrid />
        </div>
      </section>

      {/* Section 8: Testimonials & Google Reviews (Personal client ratings) */}
      <Testimonials tint />

      {/* Section 9: Frequently Asked Questions (Clean White) */}
      <FaqSection limit={6} />
      
      {/* Section 10: Final CTA Conversion Band */}
      <CtaBand />
    </>
  );
}

import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ProjectList from "../components/ProjectList";
import ClientGrid from "../components/ClientGrid";
import Testimonials from "../components/Testimonials";
import CtaBand from "../components/CtaBand";
import usePageTitle from "../components/usePageTitle";

export default function OurProjects() {
  usePageTitle("Our Projects");
  return (
    <>
      <PageHero crumb="Our Projects" title="Completed Projects" text="Projects successfully delivered by our team." image="/homehero/hh3.webp" />
      <section className="section relative overflow-hidden bg-gradient-to-b from-[#f7faf4] via-white to-[#edf5e7]/50">
        <div className="pointer-events-none absolute -left-20 top-24 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
        <div className="container-x relative z-10">
          <SectionHeading
            eyebrow="Featured Portfolio"
            title="350+ Projects Completed Across South India"
            sub="A curated showcase of our landmark residential, commercial &amp; turnkey deliveries."
          />
          <div className="mt-8">
            <ProjectList showFilters={false} />
          </div>
        </div>
      </section>
      <section className="section bg-tint">
        <div className="container-x"><SectionHeading eyebrow="Our Brand Clients" title="Trusted by respected names" /><ClientGrid /></div>
      </section>
      <Testimonials />
      <CtaBand />
    </>
  );
}

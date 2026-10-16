import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import FaqSection from "../components/FaqSection";
import CtaBand from "../components/CtaBand";
import usePageTitle from "../components/usePageTitle";
import { services } from "../data/company";

export default function Services() {
  usePageTitle("Our Services");
  return (
    <>
      <PageHero crumb="Our Services" title="Our Services" text="Design, Construction, Interiors, Renovation &amp; Project Management — All Under One Roof." image="/homehero/hh1.webp" />
      <section className="section bg-tint">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard
              key={s.title}
              index={i}
              title={s.title}
              desc={s.desc}
              items={s.items}
            />
          ))}
        </div>
      </section>
      <FaqSection limit={5} />
      <CtaBand />
    </>
  );
}

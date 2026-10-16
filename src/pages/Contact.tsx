import type { ReactNode } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";
import FaqSection from "../components/FaqSection";
import usePageTitle from "../components/usePageTitle";
import { company } from "../data/company";

function Row({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="flex gap-4 border-b border-line py-5">
      <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center bg-tint text-brand-dark">{icon}</span>
      <div className="min-w-0"><small className="block text-[11px] font-bold uppercase tracking-[0.2em] text-leaf">{label}</small>{children}</div>
    </div>
  );
}

export default function Contact() {
  usePageTitle("Contact Us");
  return (
    <>
      <PageHero crumb="Contact Us" title="Let's discuss your project" text="Tell us what you plan to build or renovate. We will get back to you with the next steps." image="/homehero/hh2.webp" />
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Get In Touch" title="We would love to hear from you" />
            <div className="mt-6">
              <Row icon={<MapPin size={20} />} label="Office Address">
                <address className="not-italic text-base text-deep sm:text-lg">{company.address.lines.map((l) => <span key={l} className="block">{l}</span>)}</address>
                <a href={company.address.mapLink} target="_blank" rel="noreferrer" className="mt-1 inline-block text-sm font-semibold text-brand-dark underline">Get Directions</a>
              </Row>
              <Row icon={<Phone size={20} />} label="Phone">
                <div className="flex flex-col gap-1">
                  <a href={company.phoneHref} className="font-serif text-xl text-deep sm:text-2xl hover:text-brand-dark transition-colors">{company.phone}</a>
                  <a href={company.phoneHref2} className="font-serif text-xl text-deep sm:text-2xl hover:text-brand-dark transition-colors">{company.phone2}</a>
                </div>
              </Row>
              <Row icon={<Mail size={20} />} label="Email"><a href={`mailto:${company.email}`} className="break-all font-serif text-lg text-deep sm:text-xl">{company.email}</a></Row>
              <Row icon={<Clock size={20} />} label="Working Hours"><b className="font-serif text-lg font-semibold text-deep sm:text-xl">{company.hours}</b></Row>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <div className="h-[320px] w-full border-y border-line sm:h-[400px]">
        <iframe title="Danam Holdings office location" src={company.address.mapEmbed} className="h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <FaqSection limit={5} tint showButton={false} />
    </>
  );
}

import { Link } from "react-router-dom";
import Eyebrow from "./Eyebrow";

export default function CtaBand() {
  return (
    <div className="bg-cover bg-center py-10 text-center text-white sm:py-12" style={{ backgroundImage: "linear-gradient(rgba(16,34,8,.88),rgba(16,34,8,.88)),url(/homehero/hh5.webp)" }}>
      <div className="container-x">
        <Eyebrow center light>Start Your Project</Eyebrow>
        <h2 className="mt-3 text-2xl sm:text-4xl font-bold">Planning to build or renovate?</h2>
        <p className="mx-auto mb-6 sm:mb-7 mt-2.5 sm:mt-3 max-w-lg text-xs sm:text-base text-white/75">Tell us what you need and our team will guide you on the next steps.</p>
        <Link to="/contact" className="btn btn-bright inline-flex w-auto">Request a Quote</Link>
      </div>
    </div>
  );
}

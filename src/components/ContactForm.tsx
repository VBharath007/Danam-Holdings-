import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { company } from "../data/company";

const options = [
  "Turnkey Civil Construction",
  "Residential Villa Construction",
  "Commercial Showrooms & Offices",
  "Industrial Warehouses & Sheds",
  "Building Renovation & Structural Repairs",
  "Interior & Architectural 3D Estimation",
  "Project Management Consultancy (PMC)",
  "Other Construction Inquiries"
];

const WhatsAppIcon = () => (
  <svg className="h-4 w-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const inputBase =
  "w-full rounded-lg border border-line bg-tint/25 px-4 py-3 text-sm text-ink placeholder-gray-400 transition-colors focus:border-brand-dark focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-dark";

export default function ContactForm() {
  const [f, setF] = useState({
    name: "",
    phone: "",
    service: options[0],
    message: ""
  });
  const [phoneError, setPhoneError] = useState("");

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Only accept numeric digits, up to 10 characters
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    setF((prev) => ({ ...prev, phone: digits }));

    if (phoneError && (digits.length === 10 || digits.length === 0)) {
      setPhoneError("");
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setF((prev) => ({ ...prev, name: e.target.value }));
  };

  const handleServiceChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setF((prev) => ({ ...prev, service: e.target.value }));
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setF((prev) => ({ ...prev, message: e.target.value }));
  };

  const send = (e: FormEvent) => {
    e.preventDefault();

    if (f.phone.length < 10) {
      setPhoneError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setPhoneError("");
    const text = `Hello Danam Holdings,\n\nI would like to request a quote / project consultation:\n• Name: ${f.name.trim()}\n• Mobile: +91 ${f.phone}\n• Service: ${f.service}\n• Message: ${f.message.trim() || "No additional message"}`;
    window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <form
      onSubmit={send}
      className="rounded-2xl border border-line bg-white p-5 sm:p-8 shadow-lift"
    >
      <div className="border-b border-line pb-4 mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-deep">Request a Quote</h3>
        <p className="mt-1 text-xs sm:text-sm text-mut">
          Get in touch with our civil engineering team for a project consultation.
        </p>
      </div>

      <div className="space-y-4">
        {/* Field 1: Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-deep mb-1.5">
            Your Name <span className="text-brand-dark">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={f.name}
            onChange={handleNameChange}
            placeholder="e.g. R. Saravanan"
            className={inputBase}
          />
        </div>

        {/* Field 2: Mobile Number */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-deep mb-1.5">
            Mobile Number <span className="text-brand-dark">*</span>
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-semibold text-mut">
              +91
            </span>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              maxLength={10}
              required
              autoComplete="tel"
              value={f.phone}
              onChange={handlePhoneChange}
              placeholder="98765 43210"
              className={`${inputBase} pl-13 font-medium tracking-wide`}
            />
          </div>
          {phoneError && (
            <p className="mt-1.5 text-xs font-medium text-red-600">
              {phoneError}
            </p>
          )}
        </div>

        {/* Field 3: Service */}
        <div>
          <label htmlFor="service" className="block text-xs font-semibold text-deep mb-1.5">
            Service Needed <span className="text-brand-dark">*</span>
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              value={f.service}
              onChange={handleServiceChange}
              className={`${inputBase} appearance-none pr-10`}
            >
              {options.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-gray-500">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Field 4: Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-deep mb-1.5">
            Project Details / Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={f.message}
            onChange={handleMessageChange}
            placeholder="Tell us about your project location, approximate built-up area (sq.ft), budget, or requirements..."
            className={`${inputBase} resize-y`}
          />
        </div>

        {/* Submit */}
        <div className="pt-2 flex justify-center sm:justify-start">
          <button
            type="submit"
            className="btn btn-green inline-flex w-auto items-center justify-center gap-2.5 px-6 py-3 text-xs tracking-wider shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <WhatsAppIcon />
            <span>Send via WhatsApp</span>
          </button>
        </div>
      </div>
    </form>
  );
}

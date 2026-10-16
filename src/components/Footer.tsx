import { Link } from "react-router-dom";
import {
  MapPin,
  Mail,
  Phone,
  ChevronRight,
  ExternalLink,
  Map
} from "lucide-react";
import { company } from "../data/company";
import Logo from "./Logo";

// Realistic Official Social Media Brand SVGs
const FacebookIcon = () => (
  <svg className="h-4 w-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="h-4 w-4 fill-none stroke-white stroke-[2.2]" viewBox="0 0 24 24" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="h-4 w-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default function Footer() {
  const exploreLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about-us" },
    { label: "Services", to: "/services" },
    { label: "Our Projects", to: "/our-projects" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-white border-t border-gray-300 text-sm text-gray-900">
      {/* Upper Main Footer Area with Architectural Background Sketch */}
      <div className="relative overflow-hidden">
        {/* Background Architectural Sketch artwork - high-vibe, vibrant on desktop & soft watermark on mobile */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-full sm:w-[52%] md:w-[46%] lg:w-[40%] overflow-hidden select-none z-0">
          <img
            src="/fbg.webp"
            alt="Danam Holdings Architectural Sketch"
            className="h-full w-full object-cover object-right opacity-20 sm:opacity-90 md:opacity-95 contrast-[1.05] saturate-[1.12] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_28%,black_100%)] [mask-image:linear-gradient(to_right,transparent_0%,black_28%,black_100%)]"
          />
          {/* Subtle soft gradient fade at the very top and bottom to ensure pure white integration */}
          <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Main Content Grid - starting comfortably from left so right side image remains 100% visible */}
        <div className="w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 relative z-10 pt-8 pb-8 sm:pt-10 sm:pb-9">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 xl:gap-10 items-start">

            {/* Column 1: Brand Info & Realistic Social Media Brand Icons */}
            <div className="sm:col-span-2 lg:col-span-4 xl:col-span-3 space-y-4 text-center sm:text-left">
              <div className="flex justify-center sm:justify-start">
                <Logo light={false} />
              </div>

              <p className="text-sm leading-relaxed text-gray-700 max-w-sm font-medium mx-auto sm:mx-0 text-center sm:text-left">
                Your trusted partner in civil engineering &amp; turnkey EPC construction. Delivering structural integrity, transparent costing, and on-time project execution across South India.
              </p>

              {/* Realistic Official Social Media Brand Icons */}
              <div className="pt-1 flex flex-col items-center sm:items-start">
                <div className="h-1 w-7 bg-amber-500 rounded-full mb-3 mx-auto sm:mx-0" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3 text-center sm:text-left">
                  Connect With Us
                </h4>
                <div className="flex items-center justify-center sm:justify-start gap-2.5 flex-wrap">
                  {/* Facebook */}
                  <a
                    href={company.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    title="Facebook"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:scale-105 active:scale-95"
                  >
                    <FacebookIcon />
                  </a>

                  {/* Instagram (Official Sunset Gradient) */}
                  <a
                    href={company.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    title="Instagram"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:scale-105 active:scale-95"
                  >
                    <InstagramIcon />
                  </a>

                  {/* YouTube */}
                  <a
                    href={company.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    title="YouTube"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:scale-105 active:scale-95"
                  >
                    <YoutubeIcon />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: EXPLORE LINKS */}
            <div className="lg:col-span-2 text-center sm:text-left">
              <div className="h-1 w-7 bg-amber-500 rounded-full mb-3 mx-auto sm:mx-0" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4 text-center sm:text-left">
                Explore Links
              </h4>
              <ul className="space-y-2.5 flex flex-col items-center sm:items-start">
                {exploreLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="group inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition-all hover:text-amber-700 hover:translate-x-1"
                    >
                      <ChevronRight className="h-3.5 w-3.5 text-amber-500 stroke-[2.5] shrink-0 transition-transform group-hover:scale-110" />
                      <span>{l.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: HEAD OFFICE & CONTACT */}
            <div className="lg:col-span-3 xl:col-span-3 text-center sm:text-left">
              <div className="h-1 w-7 bg-amber-500 rounded-full mb-3 mx-auto sm:mx-0" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4 text-center sm:text-left">
                Contact Us
              </h4>

              <div className="space-y-3.5 flex flex-col items-center sm:items-start">
                {/* Row 1: Address */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2.5 sm:gap-3 text-center sm:text-left">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-amber-400/90 bg-amber-50 text-amber-600 shadow-xs sm:mt-0.5">
                    <MapPin className="h-4 w-4 stroke-[2]" />
                  </div>
                  <div className="text-sm font-medium text-gray-700 leading-snug">
                    <p className="font-semibold text-gray-900">Plot No. 1, Gokulam Avenue,</p>
                    <p>Renganayaki Ammal Street,</p>
                    <p>Kamarajar Salai, Madurai – 625009,</p>
                    <p>Tamil Nadu, India</p>
                  </div>
                </div>

                {/* Row 2: Phone */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2.5 sm:gap-3 text-center sm:text-left">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-amber-400/90 bg-amber-50 text-amber-600 shadow-xs sm:mt-0.5">
                    <Phone className="h-4 w-4 stroke-[2]" />
                  </div>
                  <div className="flex flex-col text-sm font-semibold text-gray-800 leading-snug">
                    <a
                      href={company.phoneHref}
                      className="hover:text-amber-700 transition-colors"
                    >
                      {company.phone}
                    </a>
                    <a
                      href={company.phoneHref2}
                      className="hover:text-amber-700 transition-colors"
                    >
                      {company.phone2}
                    </a>
                  </div>
                </div>

                {/* Row 3: Email */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2.5 sm:gap-3 text-center sm:text-left">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-amber-400/90 bg-amber-50 text-amber-600 shadow-xs">
                    <Mail className="h-4 w-4 stroke-[2]" />
                  </div>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-sm font-semibold text-gray-800 hover:text-amber-700 transition-colors leading-snug"
                  >
                    {company.email}
                  </a>
                </div>

                {/* Row 4: Get Directions Link */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2.5 sm:gap-3 text-center sm:text-left">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-amber-400/90 bg-amber-50 text-amber-600 shadow-xs">
                    <Map className="h-4 w-4 stroke-[2]" />
                  </div>
                  <a
                    href={company.address.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 hover:text-amber-800 hover:underline transition-colors leading-snug"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="h-3.5 w-3.5 stroke-[2]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 4: Dedicated 3 to 4 column open space for the architectural sketch */}
            <div className="hidden lg:block lg:col-span-3 xl:col-span-4 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Bottom Bar - strictly isolated with z-20 so sketch never bleeds into it */}
      <div className="relative z-20 border-t border-gray-300 bg-white py-3.5 sm:py-4">
        <div className="w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 flex flex-col items-center justify-between gap-3 sm:flex-row text-xs">
          {/* Copyright & Subtext */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-center sm:text-left text-gray-900">
            <span className="font-extrabold text-gray-900">
              © {new Date().getFullYear()} Danam Holdings. All Rights Reserved.
            </span>
            <span className="hidden sm:inline text-gray-400">|</span>
            <span className="font-semibold text-gray-800">
              Towards Fortune Unfoldings
            </span>
            <span className="hidden sm:inline text-gray-400">•</span>
            <span className="font-semibold text-gray-800">
              EPC Construction
            </span>
            <span className="hidden sm:inline text-gray-400">•</span>
            <span className="font-semibold text-gray-800">
              South India
            </span>
          </div>

          {/* Right: Designed by Hexavision Technologies */}
          <div className="flex items-center gap-1 text-[11px] sm:text-xs text-gray-700 shrink-0">
            <span>Designed by</span>
            <a
              href="https://hexavisiontech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-amber-700 hover:text-amber-800 hover:underline transition-colors inline-flex items-center gap-1"
            >
              <span>Hexavision Technologies</span>
              <ExternalLink className="h-3.5 w-3.5 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

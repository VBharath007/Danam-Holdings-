import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { navLinks } from "../data/company";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header className="fixed top-2.5 sm:top-3.5 left-0 right-0 z-50 px-2.5 sm:px-6 transition-all duration-300">
        <div className="mx-auto max-w-6xl rounded-full bg-white border border-line/80 shadow-[0_8px_30px_rgba(16,34,8,0.08)] px-3.5 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1.5 lg:flex" aria-label="Main">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-[13px] font-semibold tracking-wider transition-all duration-200 ${isActive
                    ? "bg-brand text-white shadow-sm font-bold"
                    : "text-ink hover:text-brand-dark hover:bg-tint/80"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full bg-brand-dark px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.13em] text-white shadow-sm transition-all hover:bg-deep hover:shadow hover:gap-3 lg:flex"
          >
            Contact Us <ArrowRight size={13} />
          </Link>

          {/* Mobile Hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:bg-tint lg:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span className={`absolute left-0 h-0.5 w-5 bg-deep transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-deep ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-0.5 w-5 bg-deep transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {open && (
          <div className="mx-auto mt-2 max-w-6xl px-1 lg:hidden">
            <nav
              className="rounded-3xl border border-line/90 bg-white p-4 shadow-2xl"
              aria-label="Mobile"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    end={l.to === "/"}
                    className={({ isActive }) =>
                      `group flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 ${
                        isActive
                          ? "bg-tint font-bold text-brand-dark shadow-xs"
                          : "text-ink/80 hover:bg-tint/50 hover:text-brand-dark"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <span className="flex items-center gap-2.5">
                        <span
                          className={`h-2 w-2 rounded-full transition-all duration-200 ${
                            isActive
                              ? "bg-brand scale-110 shadow-[0_0_8px_rgba(85,170,34,0.8)]"
                              : "bg-transparent group-hover:bg-brand/30"
                          }`}
                        />
                        <span>{l.label}</span>
                      </span>
                    )}
                  </NavLink>
                ))}

                {/* Catchy Text-Based CTA Button */}
                <div className="mt-2.5 pt-3 border-t border-line/70 flex justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex w-auto items-center justify-center gap-2.5 rounded-full bg-brand-dark hover:bg-deep text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider shadow-md shadow-brand-dark/20 transition-all duration-200 hover:scale-105 active:scale-95 border border-brand/30"
                  >
                    <span>Contact Us</span>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand text-deep">
                      <ArrowRight size={12} className="stroke-[3]" />
                    </span>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

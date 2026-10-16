import { useState, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  MapPin,
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
  LayoutGrid,
  List,
  X,
  Camera,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { projects, company, type Project } from "../data/company";

interface Props {
  limit?: number;
  showFilters?: boolean;
}

export default function ProjectList({ limit, showFilters = true }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [activeImgIdx, setActiveImgIdx] = useState<number>(0);

  // When opening a project modal, reset active image to 0 and lock background scroll
  const handleOpenProject = (p: Project) => {
    setActiveImgIdx(0);
    setActiveModalProject(p);
  };

  // Close modal on Escape key and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalProject(null);
      }
    };
    if (activeModalProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalProject]);

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => {
      if (p.category) {
        if (p.category.includes("&")) {
          p.category.split("&").forEach((c) => set.add(c.trim()));
        } else {
          set.add(p.category);
        }
      }
    });
    return ["All", ...Array.from(set)];
  }, []);

  // Filtered list
  const filteredProjects = useMemo(() => {
    let result = projects;
    if (selectedCategory !== "All") {
      result = result.filter((p) =>
        p.category?.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }
    return limit ? result.slice(0, limit) : result;
  }, [selectedCategory, limit]);

  // Current active modal images array
  const currentImages = useMemo(() => {
    if (!activeModalProject) return [];
    if (activeModalProject.images && activeModalProject.images.length > 0) {
      return activeModalProject.images;
    }
    return [activeModalProject.image || "/homehero/hh1.webp"];
  }, [activeModalProject]);

  return (
    <div className="w-full">
      {/* Category Pills & View Mode Bar (Only shown if showFilters is true) */}
      {showFilters && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-line/60 pb-5">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold tracking-wide backdrop-blur-md transition-all duration-300 border ${isSelected
                      ? "border-brand-dark bg-brand-dark text-white shadow-lg shadow-brand/20 scale-[1.02]"
                      : "border-white/80 bg-white/60 text-ink/75 hover:bg-white/90 hover:text-ink shadow-sm"
                    }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${isSelected ? "bg-white/20 text-white" : "bg-white/80 text-mut"
                      }`}
                  >
                    {cat === "All"
                      ? projects.length
                      : projects.filter((p) =>
                        p.category?.toLowerCase().includes(cat.toLowerCase())
                      ).length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* View Toggle Buttons */}
          <div className="flex items-center gap-1 self-end sm:self-auto rounded-xl border border-white/80 bg-white/60 p-1 backdrop-blur-md shadow-sm">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${viewMode === "grid"
                  ? "bg-white text-brand-dark shadow-sm"
                  : "text-mut hover:text-ink"
                }`}
              title="Grid View"
              aria-label="Grid View"
            >
              <LayoutGrid className="h-3.5 w-3.5" />
              <span className="hidden xs:inline">Cards</span>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${viewMode === "list"
                  ? "bg-white text-brand-dark shadow-sm"
                  : "text-mut hover:text-ink"
                }`}
              title="List View"
              aria-label="List View"
            >
              <List className="h-3.5 w-3.5" />
              <span className="hidden xs:inline">List</span>
            </button>
          </div>
        </div>
      )}

      {/* Grid View Matching Exact Architectural Luxury Design */}
      {viewMode === "grid" ? (
        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p) => (
            <article
              key={p.name}
              onClick={() => handleOpenProject(p)}
              className="group relative flex cursor-pointer flex-col overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-b from-[#0e1d10] via-[#09150b] to-[#050c07] shadow-[0_15px_40px_-5px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-2 hover:border-brand/50 hover:shadow-[0_25px_50px_rgba(45,89,17,0.35)]"
            >
              {/* Top Image Container - Taller & Fully Visible */}
              <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-neutral-900">
                <img
                  src={p.image || "/homehero/hh1.webp"}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Multiple Photos Badge - lets user know more photos exist */}
                {p.images && p.images.length > 1 && (
                  <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10 flex items-center gap-1.5 rounded-full border border-white/25 bg-black/60 px-2.5 py-1 sm:px-3 text-[11px] sm:text-xs font-semibold text-white shadow-md backdrop-blur-md transition-transform group-hover:scale-105">
                    <Camera className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-brand" />
                    <span>{p.images.length} Photos</span>
                  </div>
                )}

                {/* Floating Top Right Frosted Dark Glass Arrow Button */}
                <div className="absolute right-3.5 top-3.5 sm:right-4 sm:top-4 z-10 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-brand group-hover:bg-brand group-hover:text-deep group-hover:shadow-lg">
                  <ArrowUpRight className="h-4 w-4 sm:h-4.5 sm:w-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                {/* Minimal Seam Gradient - Thin 36px so it never darkens or blocks the building photo */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-9 bg-gradient-to-t from-[#0e1d10] to-transparent opacity-85" />
              </div>

              {/* Card Body */}
              <div className="relative z-10 flex flex-1 flex-col justify-between p-4 sm:p-5">
                <div>
                  {/* Clean Location Eyebrow */}
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium backdrop-blur-md">
                    <MapPin className="h-3.5 w-3.5 text-brand shrink-0" />
                    <span className="text-white/90">{p.location}</span>
                  </div>

                  {/* Title in Elegant Serif White */}
                  <h3 className="mt-2.5 sm:mt-3 font-serif text-xl sm:text-[1.65rem] font-bold leading-tight text-white transition-colors duration-300 group-hover:text-brand">
                    {p.name}
                  </h3>
                </div>

                {/* Bottom View Details Pill Button */}
                <div className="mt-5 pt-1 flex items-center justify-between">
                  <div className="inline-flex items-center gap-3 rounded-full border border-brand/40 bg-white/5 py-1.5 pl-4 pr-1.5 backdrop-blur-md shadow-sm transition-all duration-300 group-hover:border-brand group-hover:bg-brand/10 group-hover:shadow-[0_0_20px_rgba(85,170,34,0.3)]">
                    <span className="text-xs font-bold text-white">View Details</span>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-deep transition-transform duration-300 group-hover:translate-x-0.5">
                      <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                    </div>
                  </div>
                </div>

                {/* Architectural Topographic Contour Lines SVG (Bottom Right) */}
                <svg
                  className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 opacity-20 transition-opacity duration-500 group-hover:opacity-35"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M40 200C50 170 80 150 120 160C160 170 180 140 200 130" stroke="#55aa22" strokeWidth="1" />
                  <path d="M20 200C35 155 75 130 125 145C175 160 190 125 200 110" stroke="#55aa22" strokeWidth="1" />
                  <path d="M0 200C20 140 70 110 130 130C190 150 195 105 200 90" stroke="#55aa22" strokeWidth="1" />
                  <path d="M-20 200C5 125 65 90 135 115C205 140 200 85 200 70" stroke="#55aa22" strokeWidth="1" />
                  <path d="M-40 200C-10 110 60 70 140 100C220 130 205 65 200 50" stroke="#55aa22" strokeWidth="1" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Modern Interactive List View with Glassmorphism */
        <div className="mt-8 divide-y divide-line/60 rounded-3xl border border-white/85 bg-white/65 shadow-[0_8px_30px_rgb(0,0,0,0.05)] backdrop-blur-2xl overflow-hidden">
          {filteredProjects.map((p, idx) => (
            <div
              key={p.name}
              onClick={() => handleOpenProject(p)}
              className="group flex cursor-pointer flex-col sm:flex-row sm:items-center justify-between gap-4 p-4.5 sm:px-6 sm:py-5 transition-all duration-300 hover:bg-white/70"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="font-serif text-lg sm:text-xl font-bold text-leaf/80 group-hover:text-brand">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-line bg-gray-100">
                  <img
                    src={p.image || "/homehero/hh1.webp"}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  />
                  {p.images && p.images.length > 1 && (
                    <span className="absolute bottom-0.5 right-0.5 rounded-md bg-black/70 px-1 text-[9px] font-bold text-white">
                      +{p.images.length}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-deep transition-colors group-hover:text-leaf">
                    {p.name}
                  </h3>

                  <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-mut">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-leaf" />
                      {p.location}
                    </span>
                    {p.scope && (
                      <span className="hidden md:inline-block text-ink/60">
                        • {p.scope}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="flex items-center justify-between sm:justify-end gap-3 self-end sm:self-center border-t sm:border-0 border-line/40 pt-2 sm:pt-0 w-full sm:w-auto">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50/80 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 border border-emerald-200/80 backdrop-blur-sm">
                  <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                  Completed
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/80 bg-white/80 text-leaf transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:border-brand">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* DEDICATED FULL-PAGE PROJECT SHOWCASE OVERLAY with GALLERY & NEAT CLOSE BUTTON */}
      {activeModalProject &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[99999] flex flex-col h-[100dvh] bg-gradient-to-b from-[#0e1711] via-[#09100c] to-[#060a08] overflow-hidden text-white animate-in fade-in duration-300"
          >
            {/* Project Background Image (pb.webp) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
              <img
                src="/pb.webp"
                alt="Project Background"
                className="w-full h-full object-cover object-center opacity-30 sm:opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 pointer-events-none" />
              {/* Center Dark Spotlight so the main project photo pops out distinctly */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.75)_0%,_transparent_72%)] pointer-events-none" />
            </div>

            {/* Top Sticky Bar with Clean Title, Location, and ONLY Close Button */}
            <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-[#0e1711]/95 px-3.5 py-2 sm:px-8 sm:py-2.5 backdrop-blur-xl shadow-md shrink-0">
              <div className="flex items-center gap-2.5 sm:gap-3 overflow-hidden">
                <h2 className="text-base sm:text-2xl font-bold font-serif text-white truncate">
                  {activeModalProject.name}
                </h2>
                <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 shrink-0">
                  <MapPin className="h-3.5 w-3.5 text-brand" />
                  <span>{activeModalProject.location}</span>
                </div>
              </div>

              {/* Only Neat Close Button on Top Right */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/20 bg-white/10 hover:bg-white text-white hover:text-black px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md shadow-sm transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                aria-label="Close project view"
                title="Close (Esc)"
              >
                <span>Close</span>
                <X className="h-4 w-4 stroke-[2.5]" />
              </button>
            </header>

            {/* Main Full Page Gallery Content - Perfectly fits screen without overlap */}
            <main className="relative z-10 w-full max-w-6xl mx-auto px-3 sm:px-6 py-2 sm:py-3.5 flex-1 flex flex-col justify-between gap-2.5 sm:gap-3 min-h-0 overflow-hidden">
              {/* 1. Large Architectural Photo Viewer - Guaranteed to fit cleanly between header & thumbnails */}
              <div className="relative w-full flex-1 min-h-0 flex items-center justify-center my-auto overflow-hidden">
                <div className="relative max-h-full max-w-full flex items-center justify-center p-1">
                  {/* Deep Shadow Glow Aura behind the photo */}
                  <div className="absolute -inset-2 bg-black/85 rounded-3xl blur-xl pointer-events-none" />

                  <img
                    src={currentImages[activeImgIdx] || activeModalProject.image || "/homehero/hh1.webp"}
                    alt={`${activeModalProject.name} photo ${activeImgIdx + 1}`}
                    className="relative z-10 max-h-[42vh] sm:max-h-[53vh] w-auto max-w-full object-contain select-none transition-all duration-300 rounded-xl sm:rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.95)] border-2 border-white/80 ring-2 ring-black/60"
                  />
                </div>

                {/* Prev / Next Slide Controls (Only if multiple photos) */}
                {currentImages.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveImgIdx((prev) => (prev > 0 ? prev - 1 : currentImages.length - 1))}
                      className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-black/75 hover:bg-brand text-white hover:text-deep border border-white/30 backdrop-blur-md transition-all duration-200 shadow-xl hover:scale-110 active:scale-95 cursor-pointer"
                      aria-label="Previous photo"
                      title="Previous"
                    >
                      <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>

                    <button
                      onClick={() => setActiveImgIdx((prev) => (prev < currentImages.length - 1 ? prev + 1 : 0))}
                      className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-black/75 hover:bg-brand text-white hover:text-deep border border-white/30 backdrop-blur-md transition-all duration-200 shadow-xl hover:scale-110 active:scale-95 cursor-pointer"
                      aria-label="Next photo"
                      title="Next"
                    >
                      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>

                    {/* Clean Minimal Photo Counter */}
                    <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-5 z-20 flex items-center gap-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/30 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-semibold text-white shadow-lg">
                      <Camera className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-brand" />
                      <span>{activeImgIdx + 1} / {currentImages.length}</span>
                    </div>
                  </>
                )}
              </div>

              {/* 2. Photo Gallery Thumbnail Strip (Click to switch) */}
              {currentImages.length > 1 && (
                <div className="w-full shrink-0 rounded-2xl bg-black/60 backdrop-blur-md p-1.5 sm:p-2 border border-white/15 shadow-xl">
                  <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto py-0.5 scrollbar-thin">
                    {currentImages.map((imgUrl, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImgIdx(i)}
                        className={`group relative h-12 w-16 sm:h-16 sm:w-24 shrink-0 overflow-hidden rounded-lg sm:rounded-xl border-2 transition-all duration-200 cursor-pointer ${i === activeImgIdx
                            ? "border-brand ring-2 ring-brand/50 scale-105 shadow-md shadow-brand/20"
                            : "border-white/20 opacity-60 hover:opacity-100 hover:border-white/50"
                          }`}
                      >
                        <img
                          src={imgUrl}
                          alt={`Thumbnail ${i + 1}`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. Centered WhatsApp Badge Button matching exact uploaded reference */}
              <div className="flex items-center justify-center pt-1 pb-1 shrink-0">
                <a
                  href={`https://wa.me/${company.whatsapp}?text=Hello%20Danam%20Holdings,%20I%20am%20interested%20in%20a%20project%20similar%20to%20${encodeURIComponent(
                    activeModalProject.name
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative overflow-hidden inline-flex items-center rounded-full bg-black/90 hover:bg-black pl-1.5 pr-5 py-1.5 sm:pl-2 sm:pr-6 sm:py-2 shadow-2xl shadow-black/80 border border-white/20 hover:border-[#25D366]/50 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer select-none backdrop-blur-xl"
                  aria-label="Enquire on WhatsApp"
                >
                  {/* Luxury Continuous Shimmer Beam Sweep */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-[160%] bg-gradient-to-r from-transparent via-white/25 to-transparent animate-btn-shimmer" />

                  {/* Left Layered Circular Green WhatsApp Badge */}
                  <div className="relative z-10 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] p-[2px] shadow-md shadow-[#25D366]/40 transition-transform duration-300 group-hover:scale-110">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#25D366] border border-white/40 shadow-inner">
                      <svg
                        className="h-4 w-4 sm:h-4.5 sm:w-4.5 fill-white shrink-0"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.085-1.782-.39-1.464-.606-2.42-2.107-2.493-2.205-.074-.098-.593-.787-.593-1.503 0-.715.375-1.066.508-1.21.134-.144.293-.18.391-.18.098 0 .196 0 .282.005.09.006.21.037.324.305.12.282.41 1.004.446 1.077.036.074.06.16.012.257-.048.098-.073.16-.145.244-.074.086-.155.191-.222.257-.074.074-.15.154-.065.3.086.146.381.629.816 1.016.56.498 1.034.652 1.18.725.145.074.23.062.316-.037.086-.098.367-.428.465-.574.098-.146.196-.122.329-.074.133.048.847.399.992.472.146.074.243.11.279.171.037.061.037.355-.107.76zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.05 22l4.978-1.306A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.603 0-3.09-.462-4.348-1.258l-.312-.197-2.955.775.789-2.88-.216-.343A8.134 8.134 0 013.833 12c0-4.503 3.664-8.167 8.167-8.167 4.503 0 8.167 3.664 8.167 8.167 0 4.503-3.664 8.167-8.167 8.167z" />
                      </svg>
                    </div>
                  </div>

                  {/* Vibrant Green WhatsApp Text */}
                  <span className="relative z-10 ml-2.5 sm:ml-3 text-xs sm:text-sm font-bold text-[#25D366] group-hover:text-emerald-300 transition-colors tracking-wide">
                    Enquire on WhatsApp
                  </span>
                </a>
              </div>
            </main>
          </div>,
          document.body
        )}
    </div>
  );
}

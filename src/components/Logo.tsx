import { Link } from "react-router-dom";

/** Logo icon = /dhlogo.webp. Wordmark colours match the brand logo (light green + dark green). */
export default function Logo({ onClick, light = false }: { onClick?: () => void; light?: boolean }) {
  return (
    <Link to="/" onClick={onClick} className="flex items-center gap-2 sm:gap-2.5 shrink-0" aria-label="Danam Holdings – Home">
      <img src="/dhlogo.webp" alt="Danam Holdings Logo" className="h-8.5 sm:h-10 w-auto lg:h-12 shrink-0" />
      <span className="leading-none">
        <b className="block text-[0.95rem] min-[360px]:text-[1.05rem] font-extrabold uppercase tracking-[0.04em] sm:tracking-[0.06em] sm:text-xl">
          <span className="text-brand">Danam</span> <span className={light ? "text-white" : "text-brand-dark"}>Holdings</span>
        </b>
        <small className={`mt-0.5 hidden text-[10px] font-medium tracking-[0.08em] min-[380px]:block ${light ? "text-white/70" : "text-mut"}`}>Towards Fortune Unfoldings</small>
      </span>
    </Link>
  );
}

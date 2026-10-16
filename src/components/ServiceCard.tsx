import type { Service } from "../data/company";

interface Props extends Partial<Pick<Service, "items">> {
  index: number;
  title: string;
  desc: string;
  isActive?: boolean;
}

export default function ServiceCard({
  index,
  title,
  desc,
  items,
  isActive = false,
}: Props) {
  return (
    <article
      className={`group relative flex h-full flex-col justify-between rounded-xl border bg-white p-7 sm:p-8 transition-all duration-500 ease-out border-b-[4px] cursor-pointer ${
        isActive
          ? "-translate-y-3 border-brand border-b-brand shadow-2xl shadow-brand/20 ring-1 ring-brand/30"
          : "border-line border-b-transparent shadow-sm hover:-translate-y-3 hover:border-brand hover:border-b-brand hover:shadow-2xl hover:shadow-brand/20"
      }`}
    >
      {/* Top subtle gradient accent on active/hover */}
      <span
        className={`pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-xl bg-gradient-to-r from-brand via-leaf to-brand-dark transition-opacity duration-500 ${
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      />

      <div>
        <div className="flex items-center justify-between">
          <div
            className={`font-serif text-4xl sm:text-5xl font-black leading-none transition-all duration-500 ${
              isActive
                ? "text-brand scale-105 drop-shadow-sm"
                : "text-brand"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Active pulse dot indicator */}
          <div
            className={`transition-opacity duration-500 ${
              isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-brand"></span>
            </span>
          </div>
        </div>

        <h3 className="mb-2.5 mt-5 text-xl font-bold tracking-tight text-deep">
          {title}
        </h3>

        <p className="text-[15px] font-normal leading-relaxed text-ink/85">
          {desc}
        </p>

        {items && (
          <ul className="mt-4 border-t border-line text-sm text-ink/85">
            {items.map((x) => (
              <li
                key={x}
                className="relative border-b border-line py-2 pl-5 font-medium before:absolute before:left-0 before:top-[1.1rem] before:h-1.5 before:w-1.5 before:rotate-45 before:bg-brand before:content-['']"
              >
                {x}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

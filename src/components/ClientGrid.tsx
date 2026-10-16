interface Client {
  name: string;
  logo: string;
  imgClass?: string;
}

const clientsList: Client[] = [
  {
    name: "Thangamayil Jewellery",
    logo: "/our brand clients/thanga mail.webp",
    imgClass: "max-h-14 sm:max-h-16 max-w-[170px]",
  },
  {
    name: "Theni Anantham",
    logo: "/our brand clients/theni anantham.webp",
    imgClass: "max-h-15 sm:max-h-18 max-w-[150px]",
  },
  {
    name: "OYO Rooms",
    logo: "/our brand clients/oyo.webp",
    imgClass: "max-h-13 sm:max-h-15 max-w-[145px]",
  },
  {
    name: "Rajmahal Silks",
    logo: "/our brand clients/Rajmahal.jpeg",
    imgClass: "max-h-14 sm:max-h-16 max-w-[165px]",
  },
  {
    name: "SACS MAVMM",
    logo: "/our brand clients/sacs.png",
    imgClass: "max-h-12 sm:max-h-14 max-w-[140px]",
  },
  {
    name: "Seetharam Jewellers",
    logo: "/our brand clients/sita ram jewellers.webp",
    imgClass: "max-h-13 sm:max-h-15 max-w-[155px]",
  },
  {
    name: "MSD",
    logo: "/our brand clients/msd.webp",
    imgClass: "max-h-13 sm:max-h-15 max-w-[150px]",
  },
];

export default function ClientGrid() {
  return (
    <div className="relative mt-8 overflow-hidden">
      {/* Ambient background light orbs for frosted glass refraction */}
      <div className="pointer-events-none absolute -top-10 -left-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-amber-400/15 blur-3xl opacity-70" />

      {/* Glassmorphic Grid */}
      <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 items-stretch">
        {clientsList.map((client, index) => (
          <div
            key={client.name}
            className="group relative flex flex-col items-center justify-between overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-line/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-3.5 sm:p-5 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_15px_35px_rgba(45,89,17,0.12)] last:col-span-2 sm:last:col-span-1"
          >
            {/* Top specular glass rim reflection */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent" />

            {/* Continuous Ambient Staggered Shimmer Beam */}
            <div
              className="pointer-events-none absolute inset-0 -translate-x-[200%] bg-gradient-to-r from-transparent via-white/80 to-transparent animate-client-shimmer"
              style={{ animationDelay: `${index * 0.75}s` }}
            />

            {/* Interactive Hover Shine Sweep */}
            <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/90 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

            {/* Crisp Pure White Logo Pedestal for perfect contrast */}
            <div className="relative z-10 flex h-20 sm:h-24 w-full items-center justify-center rounded-xl sm:rounded-2xl bg-white p-2 sm:p-3 shadow-xs border border-gray-100 transition-all duration-300 group-hover:border-brand/30">
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-14 sm:max-h-16 w-auto max-w-[92%] object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Client Name with Divider */}
            <div className="relative z-10 mt-2.5 sm:mt-3.5 w-full border-t border-gray-100 pt-2 sm:pt-3 flex items-center justify-center">
              <h4 className="text-[13px] sm:text-base font-bold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-brand-dark">
                {client.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

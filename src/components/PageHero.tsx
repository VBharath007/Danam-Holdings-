import { Link } from "react-router-dom";
import Eyebrow from "./Eyebrow";

interface Props { crumb: string; title: string; text: string; image: string }

export default function PageHero({ crumb, title, text, image }: Props) {
  return (
    <div className="bg-cover bg-center pb-16 pt-24 text-white sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-36"
      style={{ backgroundImage: `linear-gradient(rgba(16,34,8,.84),rgba(16,34,8,.7)),url(${image})` }}>
      <div className="container-x">
        <Eyebrow light>{crumb}</Eyebrow>
        <h1 className="mt-3.5 sm:mt-4 text-2xl min-[360px]:text-3xl sm:text-5xl lg:text-[3.2rem] font-bold">{title}</h1>
        <p className="mt-2 sm:mt-3 max-w-xl text-xs sm:text-lg text-white/85 leading-relaxed">{text}</p>
        <div className="mt-4 sm:mt-5 text-[11px] sm:text-xs uppercase tracking-[0.14em] text-white/60">
          <Link to="/" className="hover:text-white">Home</Link> &nbsp;/&nbsp; {crumb}
        </div>
      </div>
    </div>
  );
}

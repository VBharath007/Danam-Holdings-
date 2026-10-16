import { MessageCircle } from "lucide-react";
import { company } from "../data/company";

export default function WhatsAppButton() {
  return (
    <a href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent("Hello Danam Holdings, I would like to discuss a project.")}`}
      target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-lift hover:bg-[#1ebe5b] transition-transform active:scale-95">
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
    </a>
  );
}

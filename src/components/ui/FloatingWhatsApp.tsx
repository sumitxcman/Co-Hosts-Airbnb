"use client";

import { FaWhatsapp } from "react-icons/fa";
import { BUSINESS_INFO } from "@/lib/constants";

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/91${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gold text-forest rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-forest/20 group cursor-pointer"
    >
      <FaWhatsapp className="w-8 h-8 group-hover:rotate-12 transition-transform" />
    </a>
  );
}

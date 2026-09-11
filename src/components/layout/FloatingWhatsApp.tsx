"use client";

import React from "react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_CONFIG } from "@/data/company";

export function FloatingWhatsApp() {
  const encodedMessage = encodeURIComponent(WHATSAPP_CONFIG.defaultMessage);
  const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.phone}?text=${encodedMessage}`;

  return (
    <aside
      aria-label="Contact WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 pointer-events-auto"
    >
      <div className="relative flex items-center justify-center">
        {/* Bouton WhatsApp officiel net et élégant */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Discuter sur WhatsApp (+221 77 197 81 81)"
          aria-label="Contacter la direction commerciale sur WhatsApp"
          className="relative z-10 flex items-center justify-center w-12 h-12 sm:w-[50px] sm:h-[50px] rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg shadow-[#25D366]/40 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        >
          <WhatsAppIcon className="w-6 h-6 sm:w-6.5 sm:h-6.5 fill-white" />
        </a>
      </div>
    </aside>
  );
}

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../data/content';

export default function FloatingWhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      
      {/* Tooltip Label on Hover */}
      <span className="mr-3 px-3.5 py-1.5 rounded-xl bg-[#16191D] text-white font-montserrat text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block whitespace-nowrap border border-white/10">
        Chat on WhatsApp
      </span>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with YUPURE on WhatsApp"
        className="relative flex items-center justify-center p-3.5 sm:p-4 rounded-full bg-[#00cad4] hover:bg-[#00b5be] text-black shadow-[0_10px_30px_rgba(0,202,212,0.4)] hover:shadow-[0_15px_40px_rgba(0,202,212,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white cursor-pointer"
      >
        {/* Pulsing Outer Brand Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#00cad4] opacity-40 animate-ping pointer-events-none" />

        {/* WhatsApp Icon in Brand Theme */}
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 text-black fill-black stroke-none" />
      </a>

    </div>
  );
}

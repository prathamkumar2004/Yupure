import React from 'react';
import { MessageCircle, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { WHATSAPP_LINK } from '../data/content';

export default function SimpleFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="footer" className="bg-[#FAF8F5] border-t border-[#16191D]/10 pt-16 sm:pt-24 pb-8 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00cad4]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* LEFT SIDE FLANKING BOTTLE (Real High-Res Transparent Cutout) */}
      <div className="absolute left-1 sm:left-6 lg:left-16 bottom-16 sm:bottom-20 z-20 pointer-events-none select-none transition-transform duration-700 hover:-rotate-6">
        <img
          src="/yupure_bottle_nobg.png"
          alt="YUPURE Custom Water Bottle"
          className="w-28 sm:w-40 md:w-52 lg:w-60 h-auto object-contain -rotate-12 filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.18)] opacity-95 hover:opacity-100 transition-all duration-500"
        />
      </div>

      {/* RIGHT SIDE FLANKING BOTTLE (Real High-Res Transparent Cutout) */}
      <div className="absolute right-1 sm:right-6 lg:right-16 bottom-16 sm:bottom-20 z-20 pointer-events-none select-none transition-transform duration-700 hover:rotate-6">
        <img
          src="/yupure_bottle_nobg.png"
          alt="YUPURE Custom Water Bottle"
          className="w-28 sm:w-40 md:w-52 lg:w-60 h-auto object-contain rotate-12 filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.18)] opacity-95 hover:opacity-100 transition-all duration-500"
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-30 space-y-8 sm:space-y-12">
        
        {/* Center Official Logo Visual (/logo_clean.png) */}
        <div className="flex justify-center items-center pt-2">
          <a href="#hero" className="inline-block group cursor-pointer" aria-label="YUPURE Home">
            <img
              src="/logo_clean.png"
              alt="YUPURE Clean Official Logo"
              className="h-20 sm:h-28 md:h-36 w-auto object-contain filter drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
          </a>
        </div>

        {/* Bottom Hero Brand Text (Huge YUPURE written across bottom) */}
        <div className="text-center select-none relative z-30">
          <h1 className="text-6xl sm:text-[9rem] md:text-[13rem] lg:text-[16rem] font-bold font-serif-editorial tracking-tight text-[#16191D] leading-none uppercase transition-all duration-500 hover:text-[#00cad4]">
            YUPURE
          </h1>
        </div>

        {/* Sub-Footer Bottom Bar */}
        <div className="pt-6 border-t border-[#16191D]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-montserrat text-[#16191D]/60 relative z-30">
          <p>© {new Date().getFullYear()} YUPURE Ltd. All rights reserved. Your Brand. Your Bottle.</p>

          {/* Social Icons + Scroll to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-[#00cad4] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#00cad4] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-[#00cad4] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#16191D]/80 hover:text-[#00cad4] font-bold transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#00cad4]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_LINK } from '../data/content';

export default function EditorialHero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-[#FAF8F5]">
      
      {/* 1. Full-Bleed Hero Background Image: bane.png */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bane.png"
          alt="YUPURE Custom Branded Bottled Water Hero Background"
          className="w-full h-full object-cover object-[88%_center] sm:object-[85%_18%] md:object-[80%_15%] filter brightness-[1.02] contrast-[1.05] opacity-95 transition-all duration-700"
        />
        
        {/* Softened Cream Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/65 sm:via-[#FAF8F5]/25 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/30 via-transparent to-[#FAF8F5]/30 pointer-events-none" />
      </div>

      {/* 2. Top Spacer for Fixed Navbar */}
      <div className="h-24 sm:h-36" />

      {/* 3. Left-Aligned Editorial Content Overlay */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 w-full flex-grow flex flex-col justify-center my-auto py-6 sm:py-0">
        
        <div className="max-w-xl text-left space-y-4 sm:space-y-6">
          
          {/* Eyebrow Badge: Luxury Glass Pill */}
          <div className="animate-in fade-in slide-in-from-left-6 duration-700 fill-mode-backwards">
            <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/90 hover:bg-white backdrop-blur-xl border border-white/80 shadow-sm transition-all duration-300 group cursor-default max-w-full">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00cad4] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#00cad4]"></span>
              </span>
              
              <span className="text-[9px] sm:text-[11px] font-montserrat font-bold uppercase tracking-[0.18em] sm:tracking-[0.28em] text-[#16191D] truncate">
                PERSONALISED BOTTLES FOR YOUR BRAND
              </span>

              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00cad4] flex-shrink-0 group-hover:rotate-45 transition-transform duration-500 ml-0.5" />
            </div>
          </div>

          {/* Main Headline: 2 Lines (Line 1 = YOUR BRAND. | Line 2 = YOUR BOTTLE.) */}
          <div className="space-y-1 sm:space-y-2 animate-in fade-in slide-in-from-left-8 duration-800 delay-150 fill-mode-backwards">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#16191D] leading-[1.05] font-serif-editorial whitespace-nowrap">
              YOUR BRAND.
            </h1>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal italic tracking-tight text-[#00cad4] leading-[1.05] font-serif-editorial whitespace-nowrap">
              YOUR BOTTLE.
            </h1>
          </div>

          {/* Subheadline Copy */}
          <div className="animate-in fade-in slide-in-from-left-6 duration-800 delay-300 fill-mode-backwards">
            <p className="text-sm sm:text-lg md:text-xl text-[#16191D]/90 font-montserrat font-medium max-w-lg leading-relaxed pt-0.5">
              Custom-branded bottled water designed for businesses, hospitality & events.
            </p>
          </div>

          {/* Clean Dual CTAs: GET IN TOUCH (#00cad4) + Direct Call Icon */}
          <div className="pt-2 sm:pt-3 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-900 delay-450 fill-mode-backwards">
            
            {/* Primary Solid Button: GET IN TOUCH */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group px-7 py-3.5 rounded-lg bg-[#00cad4] hover:bg-[#00b5be] text-black font-montserrat text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 shadow-md hover:shadow-xl active:scale-95 flex items-center justify-center gap-2.5"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              <span className="relative z-10">GET IN TOUCH</span>
              <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform group-hover:translate-x-1.5 duration-300 text-black" />
            </a>

            {/* Direct Call Icon Button */}
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
              className="p-3.5 rounded-lg bg-white/80 hover:bg-white text-[#16191D] border border-[#16191D]/30 backdrop-blur-md transition-all duration-300 shadow-sm hover:shadow-lg active:scale-95 flex items-center justify-center"
              title={`Direct Call: ${PHONE_NUMBER}`}
              aria-label="Direct Call"
            >
              <Phone className="w-4 h-4 text-[#16191D]" />
            </a>

          </div>

        </div>

      </div>

      {/* 4. Bottom Scroll Indicator Arrow */}
      <div className="pb-4 sm:pb-8 relative z-10 flex justify-center items-center">
        <a
          href="#about"
          className="p-2 sm:p-2.5 rounded-full bg-white/60 hover:bg-white text-[#16191D]/80 hover:text-[#00cad4] backdrop-blur-md border border-white/40 transition-all duration-300 animate-bounce shadow-sm hover:scale-110"
          aria-label="Scroll Down"
        >
          <span className="sr-only">Scroll Down</span>
        </a>
      </div>

    </section>
  );
}

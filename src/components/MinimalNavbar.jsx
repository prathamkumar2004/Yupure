import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { NAV_LINKS, PHONE_NUMBER, WHATSAPP_LINK } from '../data/content';

export default function MinimalNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-navbar py-2.5 sm:py-3 shadow-md'
          : 'bg-transparent py-3.5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Left: Clean Logo */}
          <a href="#hero" className="flex items-center group cursor-pointer" aria-label="YUPURE Home">
            <div className="relative overflow-hidden transition-all duration-300 group-hover:scale-105">
              <img
                src="/logo_clean.png"
                alt="YUPURE Official Logo"
                className="h-9 sm:h-13 w-auto object-contain filter drop-shadow-sm transition-transform duration-300"
              />
            </div>
          </a>

          {/* Center Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center space-x-9">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-montserrat text-[11px] font-bold uppercase tracking-[0.2em] text-[#16191D]/80 hover:text-[#00cad4] transition-colors nav-link-hover py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons: Desktop */}
          <div className="hidden sm:flex items-center space-x-3">
            
            {/* Direct Phone Call Icon Button */}
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
              title={`Direct Call: ${PHONE_NUMBER}`}
              className="relative group p-3 rounded-lg bg-white/80 hover:bg-white text-[#16191D] border border-[#16191D]/30 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-4 h-4 text-[#16191D]" />
              
              <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#16191D] text-white text-[10px] font-bold px-2.5 py-1 rounded-md whitespace-nowrap pointer-events-none shadow-xl font-montserrat border border-white/10">
                Call {PHONE_NUMBER}
              </span>
            </a>

            {/* Primary GET IN TOUCH Button (#00cad4) */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group px-6 py-3 rounded-lg bg-[#00cad4] hover:bg-[#00b5be] text-black font-montserrat text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              <span className="relative z-10">GET IN TOUCH</span>
              <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform group-hover:translate-x-1.5 duration-300 text-black" />
            </a>

          </div>

          {/* Mobile Actions & Menu */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
              className="p-2 rounded-lg bg-white/80 text-[#16191D] border border-[#16191D]/30 shadow-sm active:scale-95 transition-transform"
              aria-label="Direct Call"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg bg-[#00cad4] text-black font-montserrat text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5"
              aria-label="Get in Touch"
            >
              <span>TOUCH</span>
              <ArrowRight className="w-3 h-3" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/80 text-[#16191D] border border-[#16191D]/30 shadow-sm active:scale-95 transition-transform"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5]/95 backdrop-blur-xl border-b border-[#16191D]/10 px-6 pt-4 pb-8 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3 pt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-montserrat text-xs font-bold text-[#16191D] hover:text-[#00cad4] py-2.5 border-b border-[#16191D]/5 uppercase tracking-[0.15em] flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-40" />
              </a>
            ))}
          </div>

          <div className="pt-3 flex flex-col gap-2.5">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#00cad4] text-black font-montserrat text-xs font-bold uppercase tracking-wider shadow-md"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-white/80 text-[#16191D] font-montserrat text-xs font-bold uppercase tracking-wider border border-[#16191D]/30"
            >
              <Phone className="w-4 h-4 text-[#16191D]" />
              <span>DIRECT CALL: {PHONE_NUMBER}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

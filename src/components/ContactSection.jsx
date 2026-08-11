import React from 'react';
import { MessageCircle, Phone, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_LINK } from '../data/content';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#16191D]/10 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00cad4]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Standardized Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/60 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#00cad4]" />
            <span className="text-[11px] font-montserrat font-bold uppercase tracking-[0.25em] text-[#16191D]">
              GET IN TOUCH
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#16191D] leading-[1.08] font-serif-editorial tracking-tight">
            Ready to elevate your brand water?
          </h2>

          <p className="text-base sm:text-lg text-[#16191D]/75 font-montserrat max-w-xl mx-auto leading-relaxed">
            Speak directly with our branding concierge for instant 3D digital mockups, quantity quotes, and turnkey doorstep logistics.
          </p>
        </div>

        {/* 2 High-Impact Direct B2B Concierge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: WhatsApp Concierge (#00cad4 Cyan) */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl p-8 sm:p-10 bg-[#00cad4] text-black shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between space-y-8 overflow-hidden cursor-pointer"
          >
            {/* Ambient Inner Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-black/10 text-black flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] font-montserrat font-bold uppercase tracking-[0.2em] text-black/70 block">
                  INSTANT CONSULTATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif-editorial text-black mt-1">
                  Chat on WhatsApp
                </h3>
              </div>

              <p className="text-xs sm:text-sm font-montserrat text-black/80 leading-relaxed max-w-sm">
                Get instant B2B quotes, share your logo artwork, and receive free 3D digital label proofs within minutes.
              </p>
            </div>

            <div className="pt-4 border-t border-black/10 flex items-center justify-between relative z-10">
              <span className="text-sm sm:text-base font-bold font-mono text-black">
                +91 {PHONE_NUMBER}
              </span>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-xs font-montserrat font-bold uppercase tracking-wider group-hover:scale-105 transition-transform">
                <span>START CHAT</span>
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>

          {/* Card 2: Direct Phone B2B Hotline (#16191D Dark Luxury) */}
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
            className="group relative rounded-3xl p-8 sm:p-10 bg-[#16191D] text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between space-y-8 overflow-hidden cursor-pointer border border-white/10"
          >
            {/* Ambient Inner Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#00cad4]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#00cad4]/15 text-[#00cad4] flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] font-montserrat font-bold uppercase tracking-[0.2em] text-[#00cad4] block">
                  DIRECT B2B HOTLINE
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif-editorial text-white mt-1">
                  Call Brand Concierge
                </h3>
              </div>

              <p className="text-xs sm:text-sm font-montserrat text-white/70 leading-relaxed max-w-sm">
                Discuss custom volume orders, hotel turn-down specs, corporate event logistics, and B2B pricing over the phone.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between relative z-10">
              <span className="text-sm sm:text-base font-bold font-mono text-white">
                +91 {PHONE_NUMBER}
              </span>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00cad4] text-black text-xs font-montserrat font-bold uppercase tracking-wider group-hover:scale-105 transition-transform">
                <span>CALL NOW</span>
                <ArrowRight className="w-3.5 h-3.5 text-black group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>

        </div>

        {/* Bottom Trust Strip */}
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-4 text-xs font-montserrat font-semibold text-[#16191D]/80">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00cad4]" />
            <span>Fast 24-Hour Mockup Approval</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00cad4]" />
            <span>Low MOQ 50 Units</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00cad4]" />
            <span>Nationwide Doorstep Delivery</span>
          </div>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { ShieldCheck, Leaf, Truck, Palette, ArrowRight, Sparkles } from 'lucide-react';
import { WHATSAPP_LINK } from '../data/content';

export default function EditorialAbout() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#16191D]/10 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#00cad4]/10 rounded-full blur-[140px] pointer-events-none animate-pulse duration-7000" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#00cad4]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Split Layout: Content (Left) + Image 2 Bottles Showcase (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Copy & Interactive CTA */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow Badge - Standardized UPPERCASE */}
            <div className="animate-in fade-in slide-in-from-top-4 duration-700 fill-mode-backwards">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/60 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#00cad4]" />
                <span className="text-[11px] font-montserrat font-bold uppercase tracking-[0.25em] text-[#16191D]">
                  ABOUT US
                </span>
              </div>
            </div>

            {/* Headline - Standardized Title Case */}
            <div className="animate-in fade-in slide-in-from-left-6 duration-800 delay-100 fill-mode-backwards">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#16191D] leading-[1.08] font-serif-editorial tracking-tight">
                Your Trusted Partner For Custom-Branded Water
              </h2>
            </div>

            {/* Paragraph */}
            <div className="animate-in fade-in slide-in-from-left-6 duration-800 delay-200 fill-mode-backwards">
              <p className="text-base sm:text-lg text-[#16191D]/80 font-montserrat font-normal leading-relaxed max-w-xl">
                With decades of experience, we deliver premium quality, bespoke branded bottled water designed to elevate businesses, hospitality venues, corporate headquarters & luxury events.
              </p>
            </div>

            {/* Interactive CTA Link */}
            <div className="pt-2 animate-in fade-in slide-in-from-left-6 duration-800 delay-300 fill-mode-backwards">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm font-montserrat font-bold text-[#00cad4] hover:text-[#00b5be] transition-colors group py-1"
              >
                <span>Get In Touch With Us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2 duration-300 text-[#00cad4]" />
              </a>
            </div>

          </div>

          {/* Right Column: User's Image 2 (/about_bottles.jpg) Showcase Card */}
          <div className="lg:col-span-6 animate-in fade-in zoom-in-95 duration-900 delay-200 fill-mode-backwards">
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-[#16191D]/10 bg-white">
              <img
                src="/about_bottles.jpg"
                alt="YUPURE Custom Branded Water Bottles Showcase"
                className="w-full h-[320px] sm:h-[410px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating Glass Badge */}
              <div className="absolute bottom-5 left-5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-lg flex items-center gap-2 group-hover:scale-105 transition-transform">
                <Sparkles className="w-3.5 h-3.5 text-[#00cad4]" />
                <span className="text-[11px] font-montserrat font-bold uppercase tracking-wider text-[#16191D]">
                  CUSTOM BOTTLE COLLECTION
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom 2x2 Feature Grid */}
        <div className="mt-16 pt-12 border-t border-[#16191D]/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            
            {/* Feature 1 */}
            <div className="group p-4 -m-4 rounded-2xl hover:bg-white/80 hover:shadow-md border border-transparent hover:border-white/60 transition-all duration-300 flex items-start gap-4 animate-in fade-in slide-in-from-bottom-4 duration-800 delay-300 fill-mode-backwards">
              <div className="w-11 h-11 rounded-xl bg-[#00cad4]/15 text-[#16191D] group-hover:bg-[#00cad4] group-hover:text-black flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 shadow-sm">
                <ShieldCheck className="w-5 h-5 transition-transform group-hover:scale-110" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-montserrat font-bold text-[#16191D] group-hover:text-[#00cad4] transition-colors">
                  Quality and Precision
                </h3>
                <p className="text-xs sm:text-sm font-montserrat text-[#16191D]/70 leading-relaxed max-w-md">
                  Expert craftsmanship and Pantone-matched label printing ensuring top-quality, detailed brand representations on every bottle.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group p-4 -m-4 rounded-2xl hover:bg-white/80 hover:shadow-md border border-transparent hover:border-white/60 transition-all duration-300 flex items-start gap-4 animate-in fade-in slide-in-from-bottom-4 duration-800 delay-400 fill-mode-backwards">
              <div className="w-11 h-11 rounded-xl bg-[#00cad4]/15 text-[#16191D] group-hover:bg-[#00cad4] group-hover:text-black flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 shadow-sm">
                <Leaf className="w-5 h-5 transition-transform group-hover:scale-110" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-montserrat font-bold text-[#16191D] group-hover:text-[#00cad4] transition-colors">
                  Sustainability and Environmental Care
                </h3>
                <p className="text-xs sm:text-sm font-montserrat text-[#16191D]/70 leading-relaxed max-w-md">
                  100% recyclable, eco-friendly bottle materials and responsible bottling practices for sustainable environmental care.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group p-4 -m-4 rounded-2xl hover:bg-white/80 hover:shadow-md border border-transparent hover:border-white/60 transition-all duration-300 flex items-start gap-4 animate-in fade-in slide-in-from-bottom-4 duration-800 delay-500 fill-mode-backwards">
              <div className="w-11 h-11 rounded-xl bg-[#00cad4]/15 text-[#16191D] group-hover:bg-[#00cad4] group-hover:text-black flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 shadow-sm">
                <Truck className="w-5 h-5 transition-transform group-hover:scale-110" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-montserrat font-bold text-[#16191D] group-hover:text-[#00cad4] transition-colors">
                  Turnkey Logistics & Delivery
                </h3>
                <p className="text-xs sm:text-sm font-montserrat text-[#16191D]/70 leading-relaxed max-w-md">
                  Low minimum order quantities and fast doorstep delivery directly to your hotel, café, corporate office, or event venue.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group p-4 -m-4 rounded-2xl hover:bg-white/80 hover:shadow-md border border-transparent hover:border-white/60 transition-all duration-300 flex items-start gap-4 animate-in fade-in slide-in-from-bottom-4 duration-800 delay-600 fill-mode-backwards">
              <div className="w-11 h-11 rounded-xl bg-[#00cad4]/15 text-[#16191D] group-hover:bg-[#00cad4] group-hover:text-black flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 shadow-sm">
                <Palette className="w-5 h-5 transition-transform group-hover:scale-110" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-montserrat font-bold text-[#16191D] group-hover:text-[#00cad4] transition-colors">
                  Innovation and Design
                </h3>
                <p className="text-xs sm:text-sm font-montserrat text-[#16191D]/70 leading-relaxed max-w-md">
                  Cutting-edge foil stamping, custom textured labels, and tailored finishes incorporating the latest brand presentation technology.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../data/content';

// Customized Bottle Showcase Image Assets
const ROW_1_IMAGES = [
  { id: 1, image: '/about_bottles.jpg' },
  { id: 2, image: '/cafe_lifestyle.png' },
  { id: 3, image: '/corporate_boardroom.png' },
  { id: 4, image: '/about_hospitality.png' }
];

const ROW_2_IMAGES = [
  { id: 5, image: '/about_hospitality.png' },
  { id: 6, image: '/about_bottles.jpg' },
  { id: 7, image: '/cafe_lifestyle.png' },
  { id: 8, image: '/corporate_boardroom.png' }
];

export default function DualMarqueeGallery() {
  // Duplicate arrays to ensure seamless 100% infinite looping without gaps
  const row1Duplicated = [...ROW_1_IMAGES, ...ROW_1_IMAGES, ...ROW_1_IMAGES, ...ROW_1_IMAGES];
  const row2Duplicated = [...ROW_2_IMAGES, ...ROW_2_IMAGES, ...ROW_2_IMAGES, ...ROW_2_IMAGES];

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#16191D]/10 relative overflow-hidden">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          
          <div className="space-y-3 max-w-2xl">
            {/* Eyebrow Badge - UPPERCASE */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/60 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#00cad4]" />
              <span className="text-[11px] font-montserrat font-bold uppercase tracking-[0.25em] text-[#16191D]">
                CUSTOM BOTTLE GALLERY
              </span>
            </div>

            {/* Standardized Headline - Title Case */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#16191D] leading-[1.08] font-serif-editorial tracking-tight">
              Bespoke Bottles Crafted For Every Brand
            </h2>
          </div>

          <div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#00cad4] hover:bg-[#00b5be] text-black font-montserrat text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>DESIGN YOUR BOTTLE</span>
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </a>
          </div>

        </div>
      </div>

      {/* Marquee Image Gallery Container */}
      <div className="relative w-full overflow-hidden marquee-container space-y-5 sm:space-y-6">
        
        {/* Left & Right Smooth Edge Blur Gradient Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent z-20 pointer-events-none" />

        {/* TOP ROW: Pure Images Flowing Left to Right */}
        <div className="flex overflow-hidden select-none">
          <div className="animate-marquee-left-to-right flex gap-5 sm:gap-6 px-3">
            {row1Duplicated.map((item, idx) => (
              <div
                key={`row1-${idx}`}
                className="w-72 sm:w-96 h-48 sm:h-60 flex-shrink-0 group/card relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-[#16191D]/10 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt="Custom Branded Bottled Water"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM ROW: Pure Images Flowing Right to Left */}
        <div className="flex overflow-hidden select-none">
          <div className="animate-marquee-right-to-left flex gap-5 sm:gap-6 px-3">
            {row2Duplicated.map((item, idx) => (
              <div
                key={`row2-${idx}`}
                className="w-72 sm:w-96 h-48 sm:h-60 flex-shrink-0 group/card relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-[#16191D]/10 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt="Custom Branded Bottled Water Showcase"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}

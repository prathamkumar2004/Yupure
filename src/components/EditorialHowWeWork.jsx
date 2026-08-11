import React, { useState } from 'react';
import { ArrowUp, ArrowDown, CheckCircle2, Sparkles } from 'lucide-react';

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'DISCOVERY & CONSULTATION',
    summary: 'We start with a consultation to define your brand identity, bottle quantity needs, and event timeline before any design work begins.',
    details: [
      'Brand & Event Scope Audit',
      'Bottle Size Selection (300ml / 500ml)',
      'Quantity & Logistics Quote',
      'Initial Label Concept Brief'
    ]
  },
  {
    number: '02',
    title: 'BESPOKE LABEL DESIGN',
    summary: 'Our design team crafts high-resolution, Pantone-matched label artwork tailored to your exact brand guidelines and foil finishes.',
    details: [
      '3D Digital Mockup Preview',
      'Pantone Color Precision',
      'Foil Stamping & Texture Finishes',
      'Print Proof Approval'
    ]
  },
  {
    number: '03',
    title: 'BOTTLING & QUALITY ASSURANCE',
    summary: 'Your custom labels are printed using waterproof stock and applied to pristine purified spring water bottles under strict quality controls.',
    details: [
      'Waterproof Polypropylene Label Printing',
      'Micro-Filtered Purified Spring Water',
      'Batch Quality Testing',
      'Secure Pallet Packaging'
    ]
  },
  {
    number: '04',
    title: 'TURNKEY DELIVERY & LAUNCH',
    summary: 'We handle safe, damage-free doorstep logistics directly to your hotel, café, corporate headquarters, or event venue nationwide.',
    details: [
      'Nationwide Doorstep Delivery',
      'Event Schedule Coordination',
      'Damage-Free Guarantee',
      'Automated Re-order Support'
    ]
  }
];

export default function EditorialHowWeWork() {
  const [openStep, setOpenStep] = useState('01');

  const toggleStep = (stepNumber) => {
    setOpenStep(openStep === stepNumber ? null : stepNumber);
  };

  return (
    <section id="how-we-work" className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#16191D]/10 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#00cad4]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Standardized Header Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-8 border-b border-[#16191D]/10">
          
          <div className="space-y-3">
            {/* Eyebrow Badge - UPPERCASE */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/60 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#00cad4]" />
              <span className="text-[11px] font-montserrat font-bold uppercase tracking-[0.25em] text-[#16191D]">
                HOW WE WORK
              </span>
            </div>

            {/* Standardized Headline - Title Case */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#16191D] leading-[1.08] font-serif-editorial tracking-tight">
              Our Process & Timeline
            </h2>
          </div>

          <div className="max-w-xs md:text-right">
            <p className="text-xs sm:text-sm font-montserrat font-semibold uppercase tracking-widest text-[#16191D]/60 leading-relaxed">
              A CLEAR PATH FROM FIRST CALL TO SHIPPED PRODUCT.
            </p>
          </div>

        </div>

        {/* Process Timeline Accordion Dialogue Boxes */}
        <div className="relative space-y-4">
          
          {/* Vertical Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-6 bottom-6 left-6 w-[1px] bg-[#16191D]/10 z-0" />

          {PROCESS_STEPS.map((step) => {
            const isOpen = openStep === step.number;

            return (
              <div
                key={step.number}
                className={`relative z-10 rounded-2xl border transition-all duration-500 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#00cad4]/40 shadow-xl'
                    : 'bg-white/60 hover:bg-white border-[#16191D]/10 shadow-sm'
                }`}
              >
                {/* Clickable Header Row */}
                <button
                  onClick={() => toggleStep(step.number)}
                  className="w-full p-5 sm:p-7 flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-7">
                    
                    {/* Number Circle Badge */}
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center font-montserrat text-xs sm:text-sm font-bold transition-all duration-300 flex-shrink-0 ${
                        isOpen
                          ? 'bg-[#00cad4] text-black border-[#00cad4] shadow-md'
                          : 'bg-[#FAF8F5] text-[#16191D] border-[#16191D]/20 group-hover:border-[#00cad4]'
                      }`}
                    >
                      {step.number}
                    </div>

                    {/* Step Title */}
                    <h3
                      className={`text-lg sm:text-2xl font-bold font-montserrat uppercase tracking-tight transition-colors ${
                        isOpen ? 'text-[#16191D]' : 'text-[#16191D]/80 group-hover:text-[#00cad4]'
                      }`}
                    >
                      {step.title}
                    </h3>

                  </div>

                  {/* Expand / Collapse Icon */}
                  <div
                    className={`p-2 rounded-full border transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#00cad4] text-black border-[#00cad4]'
                        : 'bg-white text-[#16191D]/60 border-[#16191D]/15 group-hover:border-[#00cad4] group-hover:text-[#00cad4]'
                    }`}
                  >
                    {isOpen ? (
                      <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                    ) : (
                      <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </div>
                </button>

                {/* Expandable Dialogue Box Details */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[500px] opacity-100 pb-7 px-5 sm:px-7 pl-14 sm:pl-24' : 'max-h-0 opacity-0 py-0'
                  }`}
                >
                  <div className="pt-4 border-t border-[#16191D]/10 space-y-5">
                    
                    {/* Summary Description */}
                    <p className="text-xs sm:text-base text-[#16191D]/80 font-montserrat font-normal leading-relaxed max-w-3xl">
                      {step.summary}
                    </p>

                    {/* Deliverables Bullet List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#00cad4] flex-shrink-0" />
                          <span className="text-xs sm:text-sm font-montserrat font-medium text-[#16191D]">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

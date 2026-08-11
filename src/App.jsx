import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import MinimalNavbar from './components/MinimalNavbar';
import EditorialHero from './components/EditorialHero';
import EditorialAbout from './components/EditorialAbout';
import DualMarqueeGallery from './components/DualMarqueeGallery';
import EditorialHowWeWork from './components/EditorialHowWeWork';
import ContactSection from './components/ContactSection';
import SimpleFooter from './components/SimpleFooter';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#16191D] flex flex-col font-sans selection:bg-[#00cad4] selection:text-black">
      
      {/* 01 — NAVBAR */}
      <MinimalNavbar />

      <main className="flex-grow">
        {/* 02 — HERO */}
        <EditorialHero />

        {/* 03 — ABOUT US */}
        <EditorialAbout />

        {/* 04 — DUAL-DIRECTION CUSTOM BOTTLE GALLERY MARQUEE */}
        <DualMarqueeGallery />

        {/* 05 — HOW WE WORK */}
        <EditorialHowWeWork />

        {/* 06 — CONTACT US */}
        <ContactSection />
      </main>

      {/* FOOTER */}
      <SimpleFooter />

      {/* FLOATING WHATSAPP BUTTON (Fixed Bottom Right Corner) */}
      <FloatingWhatsAppButton />

      {/* VERCEL ANALYTICS */}
      <Analytics />

    </div>
  );
}

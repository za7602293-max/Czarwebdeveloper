/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Services } from './components/Services.tsx';
import { Packages } from './components/Packages.tsx';
import { BeforeAfterGallery } from './components/BeforeAfterGallery.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { Reviews } from './components/Reviews.tsx';
import { BookingForm } from './components/BookingForm.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { ChatbotWidget } from './components/ChatbotWidget.tsx';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Ceramic Coating');
  const [isChatbotOpen, setIsChatbotOpen] = useState<boolean>(false);

  const scrollToBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      const topOffset = 80;
      const elementPosition = bookingSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#070708] text-neutral-100 flex flex-col font-sans selection:bg-[#E5B54F]/30 selection:text-[#F6D686]">
      {/* 1. Sticky Navbar */}
      <Navbar
        onBookNowClick={() => scrollToBooking()}
        onOpenChatbot={() => setIsChatbotOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onBookClick={() => scrollToBooking()} />

        {/* 3. Services Section */}
        <Services onSelectService={(svc) => scrollToBooking(svc)} />

        {/* 4. Packages Section */}
        <Packages onSelectPackage={(pkg) => scrollToBooking(pkg)} />

        {/* 5. Before/After Gallery Section */}
        <BeforeAfterGallery />

        {/* 6. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 7. Customer Reviews Section */}
        <Reviews />

        {/* 8. Booking Form Section */}
        <BookingForm
          selectedServicePreset={selectedService}
          onClearPreset={() => setSelectedService('')}
        />

        {/* 9. Contact Section */}
        <ContactSection />
      </main>

      {/* 10. Footer Section */}
      <Footer />

      {/* Floating Bottom-Right Concierge Dock (WhatsApp + AI Chatbot) */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5">
        <FloatingWhatsApp />
        <ChatbotWidget
          isOpen={isChatbotOpen}
          onToggle={() => setIsChatbotOpen(!isChatbotOpen)}
          onBookPackage={(pkg) => scrollToBooking(pkg)}
        />
      </div>
    </div>
  );
}

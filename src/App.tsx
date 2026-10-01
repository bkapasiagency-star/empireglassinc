import React, { useCallback, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesShowcase } from './components/ServicesShowcase';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ProjectGallery } from './components/ProjectGallery';
import { QuoteEstimator } from './components/QuoteEstimator';
import { WhyEmpireSection } from './components/WhyEmpireSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { FaqSection } from './components/FaqSection';
import { QuoteSection } from './components/QuoteSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { findOffering } from './data/services';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useBackdropParallax } from './hooks/useBackdropParallax';

export function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteServiceTarget, setQuoteServiceTarget] = useState<string | undefined>(undefined);
  const [activeOfferingId, setActiveOfferingId] = useState<string | null>(null);
  const [configuredScope, setConfiguredScope] = useState<{
    type: 'commercial' | 'residential';
    service: string;
    scopeSize: string;
    timeline: string;
    glassType: string;
  } | null>(null);

  const handleOpenQuoteModal = (service?: string) => {
    setQuoteServiceTarget(service);
    setIsQuoteModalOpen(true);
  };

  // Opens a product/service detail; from the navigation this also brings its category into view
  const handleSelectOffering = (id: string) => {
    const match = findOffering(id);
    if (!match) return;
    document.getElementById(match.category.id)?.scrollIntoView();
    setActiveOfferingId(id);
  };

  const closeOfferingDetail = useCallback(() => setActiveOfferingId(null), []);

  useScrollReveal();
  useBackdropParallax();

  const handleScopeConfigured = (scope: {
    type: 'commercial' | 'residential';
    service: string;
    scopeSize: string;
    timeline: string;
    glassType: string;
  }) => {
    setConfiguredScope(scope);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F1F5F8] text-[#111315] flex flex-col font-sans selection:bg-[#527187]/20 selection:text-[#111315]">
      {/* Sticky Header with Deep Charcoal background */}
      <Header onOpenQuoteModal={handleOpenQuoteModal} onSelectOffering={handleSelectOffering} />

      {/* Main Narrative Flow */}
      <main className="flex-1 pb-16 sm:pb-0">
        {/* 1. Hero & Trust Strip (Deep Charcoal #111315) */}
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 2-3. Products & Services: Commercial, Residential, Shower Enclosures, Glass Products, Aluminum Frames */}
        <ServicesShowcase onSelectOffering={handleSelectOffering} onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 4. Capabilities (Shop Fabrication & Field Installation) */}
        <CapabilitiesSection />

        {/* 5. Projects / Representative Portfolio */}
        <ProjectGallery onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 6. Interactive Glazing Scope Builder */}
        <QuoteEstimator onSelectScope={handleScopeConfigured} />

        {/* 7. Why Empire Glass (Trust & Pillars) */}
        <WhyEmpireSection />

        {/* 8. Client & Contractor Success Stories */}
        <TestimonialsSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 9. 4-Step Process */}
        <ProcessSection />

        {/* 10. About & Leadership */}
        <AboutSection />

        {/* 11. Local Triad Service Areas */}
        <ServiceAreaSection />

        {/* 12. FAQ */}
        <FaqSection />

        {/* 13. Final High-Conversion Quote Section */}
        <QuoteSection
          initialService={quoteServiceTarget}
          initialDetails={configuredScope}
        />
      </main>

      {/* Footer (Deep Charcoal #111315) */}
      <Footer />

      {/* Product / Service Detail Modal */}
      <ServiceDetailModal
        offeringId={activeOfferingId}
        onClose={closeOfferingDetail}
        onRequestQuote={(serviceName) => {
          setActiveOfferingId(null);
          handleOpenQuoteModal(serviceName);
        }}
      />

      {/* Quote Lead Capture Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={quoteServiceTarget}
      />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar onOpenQuoteModal={() => handleOpenQuoteModal()} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { RESIDENTIAL_SERVICES } from '../data/company';
import { ArchitecturalImage } from './ArchitecturalImage';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

interface ResidentialSectionProps {
  onOpenQuoteModal: (initialService?: string) => void;
}

export const ResidentialSection: React.FC<ResidentialSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<string>(RESIDENTIAL_SERVICES[0].id);

  const currentService = RESIDENTIAL_SERVICES.find(s => s.id === activeTab) || RESIDENTIAL_SERVICES[0];

  return (
    <section id="residential" className="py-24 bg-[#F5F4F0] text-[#111315] relative border-b border-[#DDE2E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#DDE2E4] gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#527187] mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#527187]" />
              <span>Residential Architectural Glazing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111315] leading-tight [text-wrap:balance]">
              Designed to Bring More Light, Space and Character Home.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#7B8388] max-w-md">
            Custom frameless shower enclosures, expansive window walls, and architectural skylights crafted with exact digital templating and premium residential craftsmanship.
          </p>
        </div>

        {/* Interactive Segmented Selector */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-[#DDE2E4]">
          {RESIDENTIAL_SERVICES.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeTab === service.id
                  ? 'btn-steel shadow-md'
                  : 'text-[#111315] hover:text-[#527187] bg-[#FFFFFF] hover:bg-[#F5F4F0] border border-[#DDE2E4] shadow-xs'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Active Residential Feature Presentation (Pure White Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FFFFFF] rounded-xl p-6 sm:p-10 border border-[#DDE2E4] shadow-md">
          
          {/* Visual Showcase */}
          <div className="lg:col-span-7 overflow-hidden rounded-lg shadow-md relative group border border-[#DDE2E4]">
            <ArchitecturalImage
              src={currentService.image}
              alt={currentService.title}
              aspectRatio="aspect-[4/3]"
              overlayText={currentService.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-[#FFFFFF]/95 backdrop-blur-md px-3 py-1.5 rounded text-xs font-semibold text-[#527187] border border-[#DDE2E4] shadow-xs">
              Custom Field Templated &amp; Installed
            </div>
          </div>

          {/* Details & Specs */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#527187] mb-1">
                {currentService.specs || 'Custom Fabricated Glass'}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#111315] mb-2">
                {currentService.title}
              </h3>

              <p className="text-xs font-semibold text-[#7B8388] uppercase tracking-wider mb-4">
                {currentService.tagline}
              </p>

              <p className="text-sm text-[#7B8388] leading-relaxed mb-6">
                {currentService.description}
              </p>

              {/* Craftsmanship Features */}
              <div className="space-y-2.5 pt-4 border-t border-[#DDE2E4]">
                <div className="text-xs font-bold text-[#111315] uppercase tracking-wider">
                  Fabrication &amp; Hardware Specs:
                </div>
                {currentService.features.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-xs text-[#7B8388]">
                    <CheckCircle2 className="w-4 h-4 text-[#527187] shrink-0 mt-0.5" />
                    <span className="text-[#111315]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#DDE2E4] flex items-center justify-between">
              <button
                onClick={() => onOpenQuoteModal(currentService.title)}
                className="btn-steel inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider cursor-pointer shadow-md"
              >
                <span>Request Custom Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

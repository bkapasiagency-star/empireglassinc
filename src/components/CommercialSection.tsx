import React, { useState } from 'react';
import { COMMERCIAL_SERVICES, ServiceItem } from '../data/company';
import { ArchitecturalImage } from './ArchitecturalImage';
import { ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';

interface CommercialSectionProps {
  onOpenQuoteModal: (initialService?: string) => void;
}

export const CommercialSection: React.FC<CommercialSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem>(COMMERCIAL_SERVICES[0]);

  return (
    <section id="commercial" className="py-24 section-glass text-[#111315] relative border-b border-[#DDE2E4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#DDE2E4] gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#527187] mb-2">
              Commercial Glazing Division
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111315] leading-tight [text-wrap:balance]">
              Commercial Glass Systems Built for Performance and Presence.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#7B8388] max-w-md">
            From multi-story curtain walls to heavy storefront entrances and unitized glass envelopes, Empire Glass delivers engineered structural glazing for North Carolina general contractors, developers, and architects.
          </p>
        </div>

        {/* Marquee Featured System (Pure White Card with Light Steel Border) */}
        <div className="bg-[#FFFFFF] rounded-xl p-6 sm:p-8 md:p-10 mb-14 border border-[#DDE2E4] shadow-md relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Area */}
            <div className="lg:col-span-7 overflow-hidden rounded-lg shadow-md relative group border border-[#DDE2E4]">
              <ArchitecturalImage
                src={selectedService.image}
                alt={selectedService.title}
                aspectRatio="aspect-[16/10]"
                overlayText={selectedService.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-[#FFFFFF]/95 backdrop-blur-md px-3 py-1.5 rounded text-xs font-semibold text-[#527187] border border-[#DDE2E4] shadow-xs">
                Featured Glazing System
              </div>
            </div>

            {/* Spec & Scope Content */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs font-bold tracking-wider uppercase text-[#527187] mb-1">
                  System Spotlight
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111315] mb-2">
                  {selectedService.title}
                </h3>
                <p className="text-xs font-semibold text-[#7B8388] uppercase tracking-wider mb-4">
                  {selectedService.tagline}
                </p>
                <p className="text-sm text-[#7B8388] leading-relaxed mb-6">
                  {selectedService.description}
                </p>

                {/* Key Engineered Features */}
                <div className="space-y-2.5 pt-3 border-t border-[#DDE2E4]">
                  <div className="text-xs font-bold text-[#111315] uppercase tracking-wider">
                    Engineering Standards:
                  </div>
                  {selectedService.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 text-xs text-[#7B8388]">
                      <CheckCircle2 className="w-4 h-4 text-[#527187] shrink-0 mt-0.5" />
                      <span className="text-[#111315]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#DDE2E4] flex items-center justify-between">
                <button
                  onClick={() => onOpenQuoteModal(selectedService.title)}
                  className="btn-steel inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider cursor-pointer shadow-md"
                >
                  <span>Request Specs for {selectedService.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Bento Selector Grid for All 6 Commercial Services */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7B8388]">
              Commercial Portfolio Offerings (Select to preview specs)
            </h4>
            <span className="text-xs text-[#527187] font-semibold hidden sm:inline">
              Shop Fabricated &amp; Field Glazed
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COMMERCIAL_SERVICES.map((service) => {
              const isSelected = selectedService.id === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`cursor-pointer rounded-xl p-6 transition-all duration-300 relative group flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#FFFFFF] border-2 border-[#527187] shadow-lg ring-2 ring-[#527187]/20'
                      : 'bg-[#FFFFFF] border border-[#DDE2E4] hover:border-[#527187] hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[11px] font-bold tracking-wider uppercase ${
                        isSelected ? 'text-[#527187]' : 'text-[#7B8388]'
                      }`}>
                        {service.specs || 'Commercial Glazing'}
                      </span>
                      <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                        isSelected ? 'text-[#527187]' : 'text-[#7B8388]'
                      }`} />
                    </div>

                    <h5 className="text-base font-bold text-[#111315] mb-2 group-hover:text-[#527187] transition-colors">
                      {service.title}
                    </h5>

                    <p className="text-xs text-[#7B8388] line-clamp-2 leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#DDE2E4] flex items-center justify-between text-[11px]">
                    <span className="text-[#7B8388] font-medium">
                      {service.features.length} Scope Deliverables
                    </span>
                    <span className="font-bold text-[#527187] group-hover:underline">
                      View System Details &rarr;
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

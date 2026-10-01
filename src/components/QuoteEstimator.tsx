import React, { useState } from 'react';
import { ArrowRight, Calculator, CheckCircle2 } from 'lucide-react';

interface QuoteEstimatorProps {
  onSelectScope: (details: {
    type: 'commercial' | 'residential';
    service: string;
    scopeSize: string;
    timeline: string;
    glassType: string;
  }) => void;
}

export const QuoteEstimator: React.FC<QuoteEstimatorProps> = ({ onSelectScope }) => {
  const [projectType, setProjectType] = useState<'commercial' | 'residential'>('commercial');
  const [selectedService, setSelectedService] = useState<string>('Storefront Systems');
  const [scale, setScale] = useState<string>('Standard (Under 500 sq ft)');
  const [glassSpec, setGlassSpec] = useState<string>('1" Insulated Low-E (Energy Efficient)');
  const [timeline] = useState<string>('Standard (4-8 weeks)');

  const commercialOptions = [
    'Storefront Systems',
    'Curtain Wall Systems',
    'Unitized Curtain Wall',
    'Window Wall Systems',
    'Radius / Curved Walls',
    'ACM Panels & Cladding'
  ];

  const residentialOptions = [
    'Frameless Shower Enclosures',
    'Architectural Windows & Doors',
    'Fixed & Retractable Skylights',
    'Custom Mirrors & Glass Railings'
  ];

  const handleTypeChange = (type: 'commercial' | 'residential') => {
    setProjectType(type);
    setSelectedService(type === 'commercial' ? commercialOptions[0] : residentialOptions[0]);
  };

  const handleProceed = () => {
    onSelectScope({
      type: projectType,
      service: selectedService,
      scopeSize: scale,
      timeline,
      glassType: glassSpec
    });
  };

  return (
    <section className="py-20 section-glass text-[#111315] relative border-b border-[#DDE2E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Pure White Card Container */}
        <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-10 md:p-12 border border-[#DDE2E4] relative overflow-hidden shadow-md">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-bold uppercase tracking-widest text-[#527187] mb-2 flex items-center gap-1.5">
              <Calculator className="w-3.5 h-3.5 text-[#527187]" />
              <span>Interactive Project Scope Tool</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#111315] mb-3">
              Configure Your Glazing Requirements.
            </h2>
            <p className="text-sm text-[#7B8388]">
              Select your system profile below to assemble project specifications, receive an engineering takeoff consultation, and expedite budget estimating.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Step 1 & 2 Inputs */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Sector Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#111315] mb-3">
                  1. Project Sector
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleTypeChange('commercial')}
                    className={`py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                      projectType === 'commercial'
                        ? 'btn-steel shadow-md'
                        : 'bg-[#FFFFFF] border-[#DDE2E4] text-[#111315] hover:border-[#527187]'
                    }`}
                  >
                    Commercial Glazing
                  </button>

                  <button
                    type="button"
                    onClick={() => handleTypeChange('residential')}
                    className={`py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                      projectType === 'residential'
                        ? 'btn-steel shadow-md'
                        : 'bg-[#FFFFFF] border-[#DDE2E4] text-[#111315] hover:border-[#527187]'
                    }`}
                  >
                    Custom Residential
                  </button>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#111315] mb-3">
                  2. Glazing System Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {(projectType === 'commercial' ? commercialOptions : residentialOptions).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setSelectedService(opt)}
                      className={`p-3 rounded-lg text-xs text-left font-medium border transition-all cursor-pointer ${
                        selectedService === opt
                          ? 'border-[#527187] bg-[#527187]/10 text-[#527187] font-bold shadow-xs ring-1 ring-[#527187]'
                          : 'bg-[#FFFFFF] border-[#DDE2E4] text-[#111315] hover:border-[#527187]'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scope Size & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#111315] mb-2">
                    3. Estimated Square Footage / Openings
                  </label>
                  <select
                    value={scale}
                    onChange={(e) => setScale(e.target.value)}
                    className="w-full bg-[#FFFFFF] border border-[#DDE2E4] rounded-lg px-3.5 py-2.5 text-xs text-[#111315] focus:outline-none focus:border-[#527187]"
                  >
                    <option value="Single Opening / Custom Shower">Single Opening / Custom Enclosure</option>
                    <option value="Standard (Under 500 sq ft)">Small Scope (Under 500 sq ft)</option>
                    <option value="Medium (500 - 2,500 sq ft)">Medium Scope (500 - 2,500 sq ft)</option>
                    <option value="Large (2,500 - 10,000 sq ft)">Large Scope (2,500 - 10,000 sq ft)</option>
                    <option value="Enterprise (10,000+ sq ft / Multi-Story)">Major Curtain Wall (10,000+ sq ft)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#111315] mb-2">
                    4. Glass Specification
                  </label>
                  <select
                    value={glassSpec}
                    onChange={(e) => setGlassSpec(e.target.value)}
                    className="w-full bg-[#FFFFFF] border border-[#DDE2E4] rounded-lg px-3.5 py-2.5 text-xs text-[#111315] focus:outline-none focus:border-[#527187]"
                  >
                    <option value='1" Insulated Low-E (Energy Efficient)'>1" Insulated Low-E (Energy Efficient)</option>
                    <option value='1/2" Heavy Ultra-Clear Tempered (Frameless)'>1/2" Heavy Ultra-Clear Tempered</option>
                    <option value="Laminated Safety / Acoustic Glass">Laminated Safety &amp; Acoustic Glass</option>
                    <option value="Solar Reflective / Tinted Architectural">Solar Reflective / Tinted Glass</option>
                    <option value="Fire-Rated &amp; Impact Resistant">Fire-Rated &amp; Impact Resistant</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Live Scope Summary Card (Pure White with Light Steel Border) */}
            <div className="lg:col-span-4 bg-[#F1F5F8] rounded-xl p-6 border border-[#DDE2E4] shadow-sm space-y-5">
              <div className="border-b border-[#DDE2E4] pb-4">
                <div className="text-[11px] font-bold text-[#527187] uppercase tracking-widest">
                  Live Scope Summary
                </div>
                <div className="text-xl font-extrabold text-[#111315] mt-1">
                  {selectedService}
                </div>
                <div className="text-xs text-[#7B8388] mt-0.5 capitalize">
                  {projectType} Glazing Scope
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-[#DDE2E4]">
                  <span className="text-[#7B8388]">Scale:</span>
                  <span className="font-semibold text-[#111315] text-right">{scale}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#DDE2E4]">
                  <span className="text-[#7B8388]">Glass Spec:</span>
                  <span className="font-semibold text-[#111315] text-right">{glassSpec}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#DDE2E4]">
                  <span className="text-[#7B8388]">Shop Lead:</span>
                  <span className="font-bold text-[#527187]">Greensboro, NC Shop</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#FFFFFF] border border-[#DDE2E4] text-xs text-[#111315] leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-[#527187] inline-block mr-1.5 -mt-0.5" />
                <span>Ready for blueprint upload and formal RFP estimate.</span>
              </div>

              <button
                type="button"
                onClick={handleProceed}
                className="btn-steel w-full py-3.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Apply to Estimate Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

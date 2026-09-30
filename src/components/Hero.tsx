import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { Phone, ArrowRight, ShieldCheck, Layers, MapPin, Award } from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage';

interface HeroProps {
  onOpenQuoteModal: (initialService?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-[#111315] text-white">
      {/* Background Architectural Hero Image with Multi-layer Scrim */}
      <div className="absolute inset-0 z-0">
        <ArchitecturalImage
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85"
          alt="Modern Commercial Glass Architecture Curtain Wall"
          className="w-full h-full object-cover scale-105 transform motion-safe:animate-subtle-zoom"
          overlayText="Empire Glass Architectural Systems"
        />
        {/* Scrims in Deep Charcoal (#111315) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111315]/95 via-[#111315]/85 to-[#111315]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-transparent to-[#111315]/75" />
        <div className="absolute inset-0 architectural-grid-dark opacity-35 pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="max-w-3xl">
          
          {/* Location & Scope Unboxed Kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#DDE2E4]/20 text-xs font-semibold tracking-wider mb-6 backdrop-blur-xs">
            <span className="text-[#DDE2E4] font-bold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#527187]" />
              Greensboro, North Carolina
            </span>
            <span aria-hidden="true" className="text-[#7B8388]">·</span>
            <span className="text-[#DDE2E4]">Commercial &amp; Residential Glazing</span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 [text-wrap:balance]">
            Precision Glass Systems. <br className="hidden sm:inline" />
            <span className="text-[#DDE2E4]">Fabricated &amp; Installed</span> for Architecture.
          </h1>

          {/* Value Proposition */}
          <p className="text-base sm:text-lg text-[#DDE2E4] leading-relaxed max-w-2xl mb-8 font-normal">
            Empire Glass Inc. furnishes shop fabrication and certified field labor to install commercial curtain walls, storefront systems, architectural window walls, and custom residential glass throughout Greensboro and the Triad region.
          </p>

          {/* Action-Oriented Conversion Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10">
            <button
              onClick={() => onOpenQuoteModal()}
              className="btn-steel inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-bold tracking-wider uppercase rounded shadow-xl cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="btn-secondary-dark inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-semibold tracking-wider uppercase rounded shadow-md"
            >
              <Phone className="w-4 h-4 text-[#527187]" />
              <span>Call {COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* Quick Dual Segment Shortcuts */}
          <div className="pt-3 border-t border-[#DDE2E4]/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#7B8388]">
            <span className="text-[#DDE2E4] font-medium">Quick Navigation:</span>
            <a href="#commercial" className="hover:text-white text-[#DDE2E4] transition-colors font-medium underline-offset-4 hover:underline">
              Commercial Systems &rarr;
            </a>
            <a href="#residential" className="hover:text-white text-[#DDE2E4] transition-colors font-medium underline-offset-4 hover:underline">
              Residential Glazing &rarr;
            </a>
            <a href="#our-work" className="hover:text-white text-[#DDE2E4] transition-colors font-medium underline-offset-4 hover:underline">
              Project Portfolio &rarr;
            </a>
          </div>

        </div>
      </div>

      {/* Trust Strip Immediately Below Hero (Deep Charcoal with Light Steel Dividers) */}
      <div className="relative z-10 w-full mt-12 border-t border-b border-[#DDE2E4]/15 bg-[#111315]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#DDE2E4]/15">
            
            <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:pr-4">
              <Award className="w-5 h-5 text-[#527187] shrink-0" />
              <div>
                <div className="text-xs font-bold text-white tracking-wide uppercase">15+ Years</div>
                <div className="text-[11px] text-[#7B8388]">Industry Experience</div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-4">
              <Layers className="w-5 h-5 text-[#527187] shrink-0" />
              <div>
                <div className="text-xs font-bold text-white tracking-wide uppercase">In-House Shop</div>
                <div className="text-[11px] text-[#7B8388]">Precision Glass Fabrication</div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-4">
              <ShieldCheck className="w-5 h-5 text-[#527187] shrink-0" />
              <div>
                <div className="text-xs font-bold text-white tracking-wide uppercase">Single Source</div>
                <div className="text-[11px] text-[#7B8388]">Fabricate &amp; Install Teams</div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:pl-4">
              <MapPin className="w-5 h-5 text-[#527187] shrink-0" />
              <div>
                <div className="text-xs font-bold text-white tracking-wide uppercase">Triad Regional Hub</div>
                <div className="text-[11px] text-[#7B8388]">4916 Bartlett St, Greensboro</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

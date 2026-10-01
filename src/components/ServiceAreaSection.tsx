import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { MapPin, Navigation, Compass } from 'lucide-react';

export const ServiceAreaSection: React.FC = () => {
  return (
    <section className="py-20 section-clear text-[#111315] relative border-b border-[#DDE2E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold uppercase tracking-widest text-[#527187] mb-2 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#527187]" />
              <span>Service Area &amp; Local Presence</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111315] [text-wrap:balance]">
              Serving Greensboro, the Triad, and Central North Carolina.
            </h2>

            <p className="text-sm text-[#7B8388] leading-relaxed">
              Centrally staged from our facility on Bartlett Street in Greensboro, Empire Glass deploys fabrication and glazing crews throughout the Piedmont Triad and neighboring commercial corridors.
            </p>

            {/* Service Areas Grid (Pure White Cards with Light Steel Borders) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {COMPANY_INFO.serviceAreas.map((area) => (
                <div 
                  key={area.name}
                  className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#DDE2E4] flex flex-col hover:border-[#527187] transition-all shadow-xs"
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#111315] mb-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#527187]" />
                    <span>{area.name}</span>
                  </div>
                  <span className="text-[11px] text-[#7B8388] pl-5">{area.county}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#DDE2E4] text-xs text-[#111315] flex items-start gap-3 shadow-xs">
              <Navigation className="w-4 h-4 text-[#527187] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#527187]">Job Site Travel &amp; Logistics:</span> We furnish crane-rigged delivery, suction vacuum lifters, and certified field crews capable of staging projects throughout Guilford, Forsyth, and surrounding NC counties.
              </div>
            </div>
          </div>

          {/* Regional Visual Map Card (Pure White with Light Steel Border) */}
          <div className="lg:col-span-6">
            <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border border-[#DDE2E4] relative overflow-hidden shadow-md">
              <div className="absolute inset-0 architectural-grid-steel opacity-40 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center justify-center text-center py-6">
                <div className="w-16 h-16 rounded-full bg-[#527187]/10 border border-[#527187]/30 flex items-center justify-center mb-4 text-[#527187] shadow-sm animate-pulse">
                  <MapPin className="w-8 h-8" />
                </div>

                <div className="text-xl font-bold text-[#111315] mb-1">
                  Greensboro Headquarters &amp; Shop
                </div>
                <div className="text-sm font-semibold text-[#527187] mb-4">
                  4916 Bartlett St, Greensboro, NC 27409
                </div>

                <p className="text-xs text-[#7B8388] max-w-sm mb-6">
                  Fast response times and localized delivery for projects throughout Guilford County, High Point, Winston-Salem, and Burlington.
                </p>

                <div className="flex flex-wrap justify-center gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full bg-[#F1F5F8] border border-[#DDE2E4] text-[#111315] font-semibold">
                    Guilford County
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F1F5F8] border border-[#DDE2E4] text-[#111315] font-semibold">
                    Forsyth County
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F1F5F8] border border-[#DDE2E4] text-[#111315] font-semibold">
                    Alamance County
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

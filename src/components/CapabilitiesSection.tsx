import React from 'react';
import { CAPABILITIES } from '../data/company';
import { Hammer, Truck, Shield, Grid, Sliders, Wrench } from 'lucide-react';

const CAPABILITY_ICONS = [
  <Hammer key="hammer" className="w-5 h-5 text-[#527187]" />,
  <Truck key="truck" className="w-5 h-5 text-[#527187]" />,
  <Grid key="grid" className="w-5 h-5 text-[#527187]" />,
  <Sliders key="sliders" className="w-5 h-5 text-[#527187]" />,
  <Wrench key="wrench" className="w-5 h-5 text-[#527187]" />,
  <Shield key="shield" className="w-5 h-5 text-[#527187]" />
];

export const CapabilitiesSection: React.FC = () => {
  return (
    <section id="capabilities" className="py-24 section-glass text-[#111315] relative border-b border-[#DDE2E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#527187] mb-2">
            Glazing Operations &amp; Scope
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111315] mb-4 [text-wrap:balance]">
            What We Do: Integrated Fabrication &amp; Field Glazing.
          </h2>
          <p className="text-sm sm:text-base text-[#7B8388] leading-relaxed">
            By furnishing both shop fabrication and field labor, Empire Glass provides single-source accountability for glass projects in Greensboro and surrounding regions.
          </p>
        </div>

        {/* 6 Capabilities Grid (Pure White Cards with Light Steel Borders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, index) => (
            <div
              key={cap.title}
              className="card-steel rounded-xl p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-lg bg-[#F1F5F8] border border-[#DDE2E4] inline-flex shadow-xs">
                    {CAPABILITY_ICONS[index % CAPABILITY_ICONS.length]}
                  </div>
                  <span className="text-[11px] font-bold tracking-wider text-[#527187] uppercase">
                    {cap.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#111315] mb-2.5">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#7B8388] leading-relaxed">
                  {cap.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DDE2E4] text-[11px] text-[#7B8388] font-medium">
                Verified In-House &amp; Field Scope
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

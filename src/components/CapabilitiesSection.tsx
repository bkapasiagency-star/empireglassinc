import React from 'react';
import { CAPABILITIES } from '../data/company';
import { Hammer, Truck, Shield, Grid, Sliders, Wrench } from 'lucide-react';

const CAPABILITY_ICONS = [
  <Hammer key="hammer" className="w-5 h-5 text-[#8DB3CC]" />,
  <Truck key="truck" className="w-5 h-5 text-[#8DB3CC]" />,
  <Grid key="grid" className="w-5 h-5 text-[#8DB3CC]" />,
  <Sliders key="sliders" className="w-5 h-5 text-[#8DB3CC]" />,
  <Wrench key="wrench" className="w-5 h-5 text-[#8DB3CC]" />,
  <Shield key="shield" className="w-5 h-5 text-[#8DB3CC]" />
];

export const CapabilitiesSection: React.FC = () => {
  return (
    <section id="capabilities" className="py-24 section-dark text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-reveal>
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#8DB3CC] mb-2">
            Glazing Operations &amp; Scope
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 [text-wrap:balance]">
            What We Do: Integrated Fabrication &amp; Field Glazing.
          </h2>
          <p className="text-sm sm:text-base text-[#A9B4BB] leading-relaxed">
            By furnishing both shop fabrication and field labor, Empire Glass provides single-source accountability for glass projects in Greensboro and surrounding regions.
          </p>
        </div>

        {/* 6 Capabilities Grid (Glass Cards on Dark) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, index) => (
            <div
              key={cap.title}
              className="card-glass-dark rounded-xl p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 inline-flex shadow-xs">
                    {CAPABILITY_ICONS[index % CAPABILITY_ICONS.length]}
                  </div>
                  <span className="text-[11px] font-bold tracking-wider text-[#8DB3CC] uppercase">
                    {cap.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A9B4BB] leading-relaxed">
                  {cap.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-[#A9B4BB] font-medium">
                Verified In-House &amp; Field Scope
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

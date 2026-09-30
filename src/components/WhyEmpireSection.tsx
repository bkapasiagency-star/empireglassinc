import React from 'react';
import { TRUST_PILLARS } from '../data/company';
import { Check, ShieldCheck } from 'lucide-react';

export const WhyEmpireSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F5F4F0] text-[#111315] relative border-b border-[#DDE2E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
            <div className="text-xs font-bold uppercase tracking-widest text-[#527187] mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#527187]" />
              <span>Built on Credibility</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111315] mb-6 [text-wrap:balance]">
              Why Contractors &amp; Builders Rely on Empire Glass.
            </h2>
            <p className="text-sm text-[#7B8388] leading-relaxed mb-6">
              In commercial construction and custom residential renovation, glazing failures and schedule delays cost money. Empire Glass provides technical discipline, verified shop fabrication, and dedicated field leadership for every installation.
            </p>

            <div className="p-6 rounded-xl bg-[#FFFFFF] border border-[#DDE2E4] space-y-3.5 shadow-sm">
              <div className="text-xs font-bold text-[#527187] uppercase tracking-wider">
                Our Operating Standard:
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#111315]">
                <Check className="w-4 h-4 text-[#527187] shrink-0 mt-0.5" />
                <span>Single-source accountability: fabrication and installation under one roof</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#111315]">
                <Check className="w-4 h-4 text-[#527187] shrink-0 mt-0.5" />
                <span>Greensboro facility located at 4916 Bartlett St for fast regional staging</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#111315]">
                <Check className="w-4 h-4 text-[#527187] shrink-0 mt-0.5" />
                <span>15+ years of industry experience across commercial and residential glass</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {TRUST_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="card-steel p-6 rounded-xl flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-[#111315] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7B8388] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#DDE2E4] text-[11px] text-[#527187] uppercase font-bold tracking-wider">
                  Verified Principle
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

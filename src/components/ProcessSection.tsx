import React from 'react';
import { WORKFLOW_STEPS } from '../data/company';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 section-clear text-[#111315] relative border-b border-[#DDE2E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#527187] mb-2">
            Execution Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111315] mb-4 [text-wrap:balance]">
            From Architectural Blueprint to Final Seal.
          </h2>
          <p className="text-sm sm:text-base text-[#7B8388]">
            A disciplined four-step project delivery method designed to keep general contractors on schedule and ensure homeowners receive exact, lasting craftsmanship.
          </p>
        </div>

        {/* 4 Steps in Horizontal Grid (Pure White Cards with Light Steel Borders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="card-steel rounded-xl p-7 flex flex-col justify-between relative group"
            >
              <div>
                <div className="text-3xl font-extrabold text-[#7B8388]/40 group-hover:text-[#527187] transition-colors mb-5 font-mono">
                  {item.step}
                </div>

                <h3 className="text-lg font-bold text-[#111315] mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#7B8388] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#DDE2E4] text-[11px] font-bold text-[#527187] uppercase tracking-wider">
                Step 0{index + 1} of 04
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

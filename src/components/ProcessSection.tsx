import React from 'react';
import { WORKFLOW_STEPS } from '../data/company';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 section-dark text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#8DB3CC] mb-2">
            Execution Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 [text-wrap:balance]">
            From Architectural Blueprint to Final Seal.
          </h2>
          <p className="text-sm sm:text-base text-[#A9B4BB]">
            A disciplined four-step project delivery method designed to keep general contractors on schedule and ensure homeowners receive exact, lasting craftsmanship.
          </p>
        </div>

        {/* 4 Steps in Horizontal Grid (Glass Cards on Dark) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="card-glass-dark rounded-xl p-7 flex flex-col justify-between relative group"
            >
              <div>
                <div className="text-3xl font-extrabold text-[#A9B4BB]/40 group-hover:text-[#8DB3CC] transition-colors mb-5 font-mono">
                  {item.step}
                </div>

                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A9B4BB] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-[11px] font-bold text-[#8DB3CC] uppercase tracking-wider">
                Step 0{index + 1} of 04
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/company';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 section-dark text-white relative border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-reveal>
        
        <div className="text-center mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-[#8DB3CC] mb-2 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#8DB3CC]" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#A9B4BB] max-w-lg mx-auto">
            Practical details on our glazing capabilities, service radius, and project bidding process.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white/5 rounded-xl border border-white/10 hover:border-[#8DB3CC]/60 overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base font-semibold transition-colors ${isOpen ? 'text-[#8DB3CC]' : 'text-white'}`}>
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#8DB3CC] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#A9B4BB] leading-relaxed border-t border-white/10">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

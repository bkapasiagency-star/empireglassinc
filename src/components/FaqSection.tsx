import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/company';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 section-glass text-[#111315] relative border-b border-[#DDE2E4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-[#527187] mb-2 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#527187]" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111315] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#7B8388] max-w-lg mx-auto">
            Practical details on our glazing capabilities, service radius, and project bidding process.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#FFFFFF] rounded-xl border border-[#DDE2E4] hover:border-[#527187] overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base font-semibold transition-colors ${isOpen ? 'text-[#527187]' : 'text-[#111315]'}`}>
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#527187] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#7B8388] leading-relaxed border-t border-[#DDE2E4]">
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

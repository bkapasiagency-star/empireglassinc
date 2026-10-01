import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { Phone, ArrowUpRight } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenQuoteModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenQuoteModal }) => {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#111315]/95 backdrop-blur-md border-t border-[#DDE2E4]/20 px-4 py-2.5 shadow-2xl"
    >
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          aria-label={`Call ${COMPANY_INFO.phoneDisplay}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#161a1d] border border-[#DDE2E4]/25 text-white font-bold text-xs uppercase tracking-wide active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-[#527187]" />
          <span>Call</span>
        </a>

        <button
          onClick={onOpenQuoteModal}
          className="btn-steel flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg font-extrabold text-xs uppercase tracking-wide shadow-md active:scale-95 transition-transform cursor-pointer"
        >
          <span>Get Quote</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};

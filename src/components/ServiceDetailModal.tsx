import React, { useEffect } from 'react';
import { ArrowUpRight, Check, Phone, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { findOffering, offeringImage, offeringSrcSet } from '../data/services';
import { ArchitecturalImage } from './ArchitecturalImage';

interface ServiceDetailModalProps {
  offeringId: string | null;
  onClose: () => void;
  onRequestQuote: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ offeringId, onClose, onRequestQuote }) => {
  const match = offeringId ? findOffering(offeringId) : null;
  const isOpen = Boolean(match);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!match) return null;
  const { category, offering } = match;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:p-4 bg-[#111315]/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-detail-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-rise relative bg-[#FFFFFF] text-[#111315] w-full sm:max-w-3xl rounded-t-2xl sm:rounded-2xl border border-[#DDE2E4] shadow-2xl max-h-[92vh] overflow-y-auto"
      >
        <button
          type="button"
          autoFocus
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-[#FFFFFF] text-[#5B6469] hover:text-[#111315] p-2 rounded-full border border-[#DDE2E4] transition-colors cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative aspect-[16/9] w-full bg-[#F1F5F8]">
          <div className="absolute inset-0">
            <ArchitecturalImage
              key={offering.id}
              src={offeringImage(offering.image, 1600)}
              srcSet={offeringSrcSet(offering.image)}
              sizes="(min-width: 768px) 768px, 100vw"
              alt={offering.alt}
              overlayText={offering.name}
              wrapperClassName="h-full"
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="text-xs font-bold uppercase tracking-widest text-[#527187]">{category.navLabel}</div>
          <h2 id="service-detail-title" className="mt-1.5 text-2xl sm:text-3xl font-extrabold tracking-tight">
            {offering.name}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5B6469] leading-relaxed">{offering.description}</p>

          <div className="mt-6 bg-[#F1F5F8] rounded-lg p-5 border border-[#DDE2E4]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#527187]">Relevant applications</h3>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {offering.applications.map((application) => (
                <li key={application} className="flex items-start gap-2 text-sm text-[#111315]">
                  <Check className="w-4 h-4 text-[#527187] shrink-0 mt-0.5" />
                  <span>{application}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-6 border-t border-[#DDE2E4] flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onRequestQuote(offering.name)}
              className="btn-steel flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="btn-secondary-steel flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-lg text-xs uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 text-[#527187]" />
              <span>Talk to Empire Glass</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

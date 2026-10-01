import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { OFFERING_CATEGORIES } from '../data/services';
import { Phone, MapPin, Linkedin, Clock, ShieldCheck, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-[#111315] text-[#DDE2E4] border-t border-[#DDE2E4]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Positioning */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-white font-extrabold text-lg tracking-wider uppercase">
              <span className="w-2.5 h-2.5 bg-[#527187] rotate-45 shadow-sm" />
              <span>EMPIRE GLASS INC.</span>
            </div>

            <p className="text-xs text-[#DDE2E4] leading-relaxed max-w-sm">
              Furnishing shop fabrication and skilled labor to install commercial curtain walls, storefronts, window walls, and custom residential glass throughout Greensboro and the Piedmont Triad.
            </p>

            <div className="pt-2 text-xs text-[#DDE2E4] space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#527187] shrink-0" />
                <span>{COMPANY_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#527187] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-white hover:text-[#527187] font-semibold transition-colors">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#7B8388]">
                <Clock className="w-3.5 h-3.5 text-[#527187] shrink-0" />
                <span>{COMPANY_INFO.hours}</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={COMPANY_INFO.socials.linkedinCompany}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#DDE2E4] hover:text-white transition-colors"
                aria-label="Empire Glass on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-[#527187]" />
                <span>Follow on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Commercial Glass Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Commercial Glass
            </div>
            <ul className="space-y-2 text-xs text-[#DDE2E4]">
              {OFFERING_CATEGORIES[0].items.map((item) => (
                <li key={item.id}><a href="#commercial" className="hover:text-white transition-colors">{item.name}</a></li>
              ))}
            </ul>
          </div>

          {/* Residential, Shower & Product Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Residential &amp; Products
            </div>
            <ul className="space-y-2 text-xs text-[#DDE2E4]">
              {OFFERING_CATEGORIES.slice(1).map((category) => (
                <li key={category.id}><a href={`#${category.id}`} className="hover:text-white transition-colors">{category.navLabel}</a></li>
              ))}
            </ul>
          </div>

          {/* Triad Service Coverage */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Service Areas
            </div>
            <p className="text-xs text-[#DDE2E4] leading-relaxed">
              Greensboro, High Point, Winston-Salem, Burlington, Kernersville, Summerfield, Oak Ridge, and surrounding Guilford County communities.
            </p>
            <div className="pt-2">
              <div className="p-3 rounded-lg bg-[#161a1d] border border-[#DDE2E4]/15 text-xs shadow-xs">
                <span className="text-white font-semibold block mb-0.5">Greensboro Fabrication Shop:</span>
                <span className="text-[11px] text-[#DDE2E4]">4916 Bartlett St, Greensboro, NC</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-14 pt-8 border-t border-[#DDE2E4]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7B8388]">
          <div>
            &copy; 2026 {COMPANY_INFO.legalName}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span aria-hidden="true">·</span>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="hover:text-white transition-colors font-medium text-[#DDE2E4]"
            >
              Direct: {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>

      </div>

      {/* Legal Modal (Pure White with Light Steel Border) */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111315]/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#FFFFFF] border border-[#DDE2E4] rounded-2xl p-6 text-[#111315] space-y-4 max-h-[80vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#DDE2E4]">
              <div className="flex items-center gap-2 text-[#111315] font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-[#527187]" />
                <span>{legalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}</span>
              </div>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1 text-[#7B8388] hover:text-[#111315] cursor-pointer rounded-full"
                aria-label="Close legal modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {legalModal === 'privacy' ? (
              <div className="text-xs space-y-3 leading-relaxed text-[#7B8388]">
                <p>
                  Empire Glass Inc. respects your privacy. When you request a project quote or contact our office via phone or our digital form, we collect your name, phone number, email address, and project specifications solely to prepare bids and communicate regarding your glazing project.
                </p>
                <p>
                  We do not sell, rent, or trade your personal or project data to third-party marketing companies. Project blueprints and confidential architectural plans remain protected and are utilized only by our fabrication and field estimation personnel.
                </p>
                <p>
                  For questions regarding our privacy practices, contact Empire Glass Inc. at 4916 Bartlett St, Greensboro, NC 27409 or by phone at 336-257-2728.
                </p>
              </div>
            ) : (
              <div className="text-xs space-y-3 leading-relaxed text-[#7B8388]">
                <p>
                  All project quotes, bids, and estimates furnished by Empire Glass Inc. are subject to field verification of dimensions and structural framing conditions prior to final fabrication and installation.
                </p>
                <p>
                  Materials and glass products conform to applicable ASTM, ANSI, and North Carolina State Building Code safety glazing standards. Official contracts will outline detailed warranty coverage and payment schedules.
                </p>
                <p>
                  For complete contract specifications, please contact Empire Glass Inc. at 336-257-2728.
                </p>
              </div>
            )}

            <div className="pt-2 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="btn-steel px-5 py-2 text-xs font-bold rounded-lg cursor-pointer shadow-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

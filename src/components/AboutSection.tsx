import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { MapPin, Phone, Linkedin, Building2, UserCheck } from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 section-glass text-[#111315] relative border-b border-[#DDE2E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Facility & Architectural Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#DDE2E4] shadow-xl">
              <ArchitecturalImage
                src="https://images.unsplash.com/photo-1541888946425-d0fbb18f15f9?auto=format&fit=crop&w=1200&q=80"
                alt="Empire Glass Commercial Glazing Work"
                aspectRatio="aspect-[4/3]"
                overlayText="Greensboro Glazing Operations"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#FFFFFF]/95 backdrop-blur-md p-4 rounded-xl border border-[#DDE2E4] shadow-md">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[#111315]">
                    <Building2 className="w-4 h-4 text-[#527187]" />
                    <span className="font-semibold">{COMPANY_INFO.address.full}</span>
                  </div>
                  <span className="text-[#527187] font-mono text-[11px] font-bold">NC 27409</span>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold uppercase tracking-widest text-[#527187] mb-2">
              Company Overview &amp; Leadership
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111315] leading-tight [text-wrap:balance]">
              Fabricating &amp; Installing Glass Projects in the Heart of the Triad.
            </h2>

            <p className="text-sm sm:text-base text-[#111315] leading-relaxed">
              Empire Glass Inc. was established to furnish high-precision glass fabrication and specialized field labor for both commercial structures and custom residential spaces. Rooted in Greensboro, North Carolina, our team brings more than 15 years of hands-on industry expertise to every opening we glaze.
            </p>

            <p className="text-sm text-[#7B8388] leading-relaxed">
              Led by President Jose Portillo, Empire Glass combines structural discipline with a relentless commitment to craftsmanship, integrity, and proactive customer coordination. Whether erecting multi-floor curtain walls for regional developers or fitting custom frameless showers for bespoke homes, we take pride in clean tolerances and dependable delivery.
            </p>

            {/* Leadership & Facility Card (Pure White with Light Steel Border) */}
            <div className="p-6 rounded-xl bg-[#FFFFFF] border border-[#DDE2E4] space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F1F5F8] border border-[#DDE2E4] flex items-center justify-center text-[#527187]">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#111315]">{COMPANY_INFO.president}</div>
                    <div className="text-xs text-[#7B8388]">President, Empire Glass Inc.</div>
                  </div>
                </div>

                <a
                  href={COMPANY_INFO.socials.linkedinPresident}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-[#7B8388] hover:text-[#527187] transition-colors p-2 rounded-lg hover:bg-[#F1F5F8]"
                  aria-label="Jose Portillo LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-[#527187]" />
                  <span className="hidden sm:inline">LinkedIn Profile</span>
                </a>
              </div>

              <div className="pt-3 border-t border-[#DDE2E4] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#111315]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#527187] shrink-0" />
                  <span>4916 Bartlett St, Greensboro, NC</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#527187] shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-[#527187] transition-colors font-semibold">
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a
                href={COMPANY_INFO.socials.linkedinCompany}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#7B8388] hover:text-[#527187] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#527187]" />
                <span>Visit Empire Glass Company Page on LinkedIn</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

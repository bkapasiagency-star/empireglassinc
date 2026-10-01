import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/company';
import { Quote, Building2, Home, MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SectionBackdrop } from './SectionBackdrop';

interface TestimonialsSectionProps {
  onOpenQuoteModal: (initialService?: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenQuoteModal }) => {
  const [filter, setFilter] = useState<'all' | 'commercial' | 'residential'>('all');

  const filteredTestimonials = filter === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.sector === filter);

  return (
    <section id="reviews" className="py-24 section-glass text-[#111315] relative border-b border-[#DDE2E4]">
      <SectionBackdrop image="1481026469463-66327c86e544" flip />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-reveal>
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#DDE2E4] gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#527187] mb-2 flex items-center gap-1.5">
              <Quote className="w-3.5 h-3.5 text-[#527187]" />
              <span>Project Performance &amp; Client Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111315] mb-3 [text-wrap:balance]">
              What General Contractors &amp; Owners Say.
            </h2>
            <p className="text-sm text-[#7B8388] leading-relaxed">
              Real project experiences from commercial general contractors, regional developers, and custom home builders across the Piedmont Triad.
            </p>
          </div>

          {/* Interactive Filter Segment */}
          <div className="flex items-center gap-1 p-1.5 bg-[#FFFFFF] rounded-lg border border-[#DDE2E4] self-start md:self-auto shadow-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                filter === 'all'
                  ? 'btn-steel shadow-xs'
                  : 'text-[#7B8388] hover:text-[#111315]'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('commercial')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                filter === 'commercial'
                  ? 'btn-steel shadow-xs'
                  : 'text-[#7B8388] hover:text-[#111315]'
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => setFilter('residential')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                filter === 'residential'
                  ? 'btn-steel shadow-xs'
                  : 'text-[#7B8388] hover:text-[#111315]'
              }`}
            >
              Residential
            </button>
          </div>
        </div>

        {/* Testimonials Grid (Pure White Cards with Light Steel Borders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="card-steel rounded-2xl p-7 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#527187]">
                    {item.sector === 'commercial' ? (
                      <Building2 className="w-3.5 h-3.5 text-[#527187]" />
                    ) : (
                      <Home className="w-3.5 h-3.5 text-[#527187]" />
                    )}
                    <span>{item.projectType}</span>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-[#7B8388] font-medium">
                    <MapPin className="w-3 h-3 text-[#527187]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-[#527187]/15 absolute -top-3 -left-2 -z-0 pointer-events-none" />
                  <p className="text-sm sm:text-[15px] text-[#111315] leading-relaxed relative z-10 italic">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#DDE2E4] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#111315] tracking-wide">
                    {item.authorTitle}
                  </div>
                  <div className="text-[11px] text-[#7B8388] font-medium">
                    {item.role} · {item.organizationType}
                  </div>
                </div>

                <div className="p-1 rounded bg-[#527187]/10 text-[#527187]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Commercial Contractor References Banner (Deep Charcoal Dark Accent Card) */}
        <div className="rounded-2xl p-6 sm:p-8 bg-[#111315] text-white border border-[#DDE2E4]/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-lg font-bold text-white mb-1.5">
              Need Direct GC or Subcontractor References for an Upcoming RFP?
            </h3>
            <p className="text-xs sm:text-sm text-[#DDE2E4] leading-relaxed">
              We provide formal trade references, insurance certificates, and scope safety logs directly to commercial estimating teams during pre-bid qualification.
            </p>
          </div>

          <button
            onClick={() => onOpenQuoteModal('Commercial General Contracting Reference')}
            className="btn-steel inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap cursor-pointer shadow-md"
          >
            <span>Request Trade References</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

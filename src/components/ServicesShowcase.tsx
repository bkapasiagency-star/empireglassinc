import React from 'react';
import { ArrowRight, ArrowUpRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import {
  OFFERING_CATEGORIES,
  Offering,
  OfferingCategory,
  OfferingCategoryId,
  offeringImage,
  offeringSrcSet
} from '../data/services';
import { ArchitecturalImage } from './ArchitecturalImage';

interface ServicesShowcaseProps {
  onSelectOffering: (id: string) => void;
  onOpenQuoteModal: (initialService?: string) => void;
}

const category = (id: OfferingCategoryId) => OFFERING_CATEGORIES.find((c) => c.id === id) as OfferingCategory;

const revealDelay = (index: number) => ({ '--reveal-delay': `${index * 70}ms` }) as React.CSSProperties;

/* Photo that fills its (positioned) parent; lazy-loaded with responsive sources. */
const Photo: React.FC<{ id: string; alt: string; sizes: string; className?: string }> = ({
  id,
  alt,
  sizes,
  className = ''
}) => (
  <div className="absolute inset-0">
    <ArchitecturalImage
      src={offeringImage(id)}
      srcSet={offeringSrcSet(id)}
      sizes={sizes}
      alt={alt}
      overlayText={alt}
      wrapperClassName="h-full"
      className={`w-full h-full object-cover ${className}`}
    />
  </div>
);

const ZOOM = 'transition-transform duration-700 ease-out group-hover:scale-105';

interface CardProps {
  offering: Offering;
  onSelect: (id: string) => void;
}

/* Full-bleed image card with the copy over a scrim. Used for featured services and shower enclosures. */
const OverlayCard: React.FC<CardProps & { className?: string; sizes: string; large?: boolean }> = ({
  offering,
  onSelect,
  className = '',
  sizes,
  large = false
}) => (
  <article
    className={`group relative isolate flex h-full flex-col justify-end overflow-hidden rounded-xl bg-[#111315] shadow-lg focus-within:ring-2 focus-within:ring-[#8DB3CC] ${className}`}
  >
    <div className="absolute inset-0 -z-10">
      <Photo id={offering.image} alt={offering.alt} sizes={sizes} className={ZOOM} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F]/95 via-[#0B0D0F]/45 to-[#0B0D0F]/5" />
    </div>
    <div className={large ? 'p-6 sm:p-9' : 'p-6'}>
      <h3 className={`font-bold text-white tracking-tight ${large ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
        {offering.name}
      </h3>
      <p className={`mt-2 text-[#DDE2E4] leading-relaxed ${large ? 'text-sm sm:text-base max-w-xl' : 'text-sm'}`}>
        {offering.description}
      </p>
      <button
        type="button"
        onClick={() => onSelect(offering.id)}
        className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white cursor-pointer focus:outline-none after:absolute after:inset-0"
      >
        <span>View details</span>
        <span className="sr-only">: {offering.name}</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  </article>
);

/* Image-over-copy card. On phones it lies flat (image left) so long lists stay compact. */
const ServiceCard: React.FC<CardProps & { sizes: string; index?: string }> = ({ offering, onSelect, sizes, index }) => (
  <article className="group relative flex h-full flex-row sm:flex-col overflow-hidden rounded-xl bg-[#FFFFFF] border border-[#DDE2E4] shadow-[0_4px_20px_-4px_rgba(17,19,21,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#527187] hover:shadow-[0_14px_32px_-6px_rgba(82,113,135,0.2)] focus-within:ring-2 focus-within:ring-[#527187]">
    <div className="relative w-32 shrink-0 self-stretch overflow-hidden sm:w-full sm:aspect-[4/3]">
      <Photo id={offering.image} alt={offering.alt} sizes={sizes} className={ZOOM} />
      {index && (
        <>
          {/* Hairline inset frame and index: a drawing-sheet cue for the framing products */}
          <div className="pointer-events-none absolute inset-2.5 border border-white/70" />
          <span className="absolute left-4 top-4 font-mono text-[11px] font-bold tracking-widest text-white drop-shadow">
            {index}
          </span>
        </>
      )}
    </div>
    <div className="flex flex-1 flex-col p-4 sm:p-5">
      <h3 className="text-base font-bold text-[#111315] group-hover:text-[#527187] transition-colors">
        {offering.name}
      </h3>
      <p className="mt-1.5 flex-1 text-[13px] sm:text-sm text-[#5B6469] leading-relaxed">{offering.description}</p>
      <button
        type="button"
        onClick={() => onSelect(offering.id)}
        className="mt-3 sm:mt-4 inline-flex items-center gap-1.5 self-start text-xs font-bold uppercase tracking-wider text-[#527187] cursor-pointer focus:outline-none after:absolute after:inset-0"
      >
        <span>Learn more</span>
        <span className="sr-only">about {offering.name}</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  </article>
);

const CategoryHeader: React.FC<{
  data: OfferingCategory;
  dark?: boolean;
  onOpenQuoteModal: (initialService?: string) => void;
}> = ({ data, dark = false, onOpenQuoteModal }) => (
  <div
    data-reveal
    className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-8 border-b ${
      dark ? 'border-white/10' : 'border-[#DDE2E4]'
    }`}
  >
    <div className="max-w-3xl">
      <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${dark ? 'text-[#8DB3CC]' : 'text-[#527187]'}`}>
        {data.eyebrow}
      </div>
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight [text-wrap:balance] ${
          dark ? 'text-white' : 'text-[#111315]'
        }`}
      >
        {data.heading}
      </h2>
      <p className={`mt-4 text-sm sm:text-base leading-relaxed max-w-2xl ${dark ? 'text-[#A9B4BB]' : 'text-[#5B6469]'}`}>
        {data.intro}
      </p>
    </div>
    <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 shrink-0">
      <button
        type="button"
        onClick={() => onOpenQuoteModal(data.items[0].name)}
        className="btn-steel inline-flex items-center justify-center gap-2 px-5 py-3 rounded text-xs font-bold uppercase tracking-wider cursor-pointer"
      >
        <span>Request a Quote</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </button>
      <a
        href={`tel:${COMPANY_INFO.phoneRaw}`}
        className={`${
          dark ? 'btn-secondary-dark' : 'btn-secondary-steel'
        } inline-flex items-center justify-center gap-2 px-5 py-3 rounded text-xs uppercase tracking-wider`}
      >
        <Phone className="w-3.5 h-3.5" />
        <span>Talk to Empire Glass</span>
      </a>
    </div>
  </div>
);

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ onSelectOffering, onOpenQuoteModal }) => {
  const commercial = category('commercial');
  const residential = category('residential');
  const showers = category('shower-enclosures');
  const glass = category('glass-products');
  const frames = category('aluminum-frames');

  const [curtainWalls, storefronts, installation] = commercial.items.filter((i) => i.featured);
  const commercialMore = commercial.items.filter((i) => !i.featured);

  return (
    <>
      {/* INTRO: what Empire Glass does, with an index of the five categories */}
      <section id="services" className="scroll-mt-16 py-20 sm:py-24 section-dark text-white relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7" data-reveal>
              <div className="text-xs font-bold uppercase tracking-widest text-[#8DB3CC] mb-3">
                Products &amp; Services
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-white">
                Glass. Framing. <span className="text-[#8DB3CC]">Architecture.</span>
              </h2>
              <p className="mt-6 text-base sm:text-lg text-[#A9B4BB] leading-relaxed max-w-2xl">
                Empire Glass provides commercial and residential glass solutions: architectural glass systems for
                buildings, glass for the home, shower enclosures, glass panels and aluminum framing.
              </p>
            </div>

            <nav aria-label="Service categories" className="lg:col-span-5">
              <ul className="border-t border-white/10">
                {OFFERING_CATEGORIES.map((c, i) => (
                  <li key={c.id} data-reveal style={revealDelay(i)} className="border-b border-white/10">
                    <a
                      href={`#${c.id}`}
                      className="group flex items-center gap-4 py-4 text-white hover:text-[#8DB3CC] transition-colors"
                    >
                      <span className="font-mono text-xs text-[#7B8388] w-6">0{i + 1}</span>
                      <span className="flex-1 text-base sm:text-lg font-bold">{c.navLabel}</span>
                      <span className="text-xs text-[#A9B4BB] hidden sm:inline">
                        {c.items.length} {c.id === 'glass-products' || c.id === 'aluminum-frames' ? 'products' : 'services'}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#8DB3CC] transition-transform group-hover:translate-x-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* A. COMMERCIAL GLASS: three featured systems, then the rest of the range */}
      <section id="commercial" className="scroll-mt-16 py-24 section-glass text-[#111315] relative border-b border-[#DDE2E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryHeader data={commercial} onOpenQuoteModal={onOpenQuoteModal} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-14">
            <div data-reveal className="lg:col-span-7 lg:row-span-2 min-h-[340px] sm:min-h-[420px] lg:min-h-[580px]">
              <OverlayCard
                offering={curtainWalls}
                onSelect={onSelectOffering}
                sizes="(min-width: 1024px) 58vw, 100vw"
                large
              />
            </div>
            <div data-reveal style={revealDelay(1)} className="lg:col-span-5 min-h-[280px]">
              <OverlayCard offering={storefronts} onSelect={onSelectOffering} sizes="(min-width: 1024px) 42vw, 100vw" />
            </div>
            <div data-reveal style={revealDelay(2)} className="lg:col-span-5 min-h-[280px]">
              <OverlayCard offering={installation} onSelect={onSelectOffering} sizes="(min-width: 1024px) 42vw, 100vw" />
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6" data-reveal>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#5B6469]">More commercial systems</h3>
            <span className="h-px flex-1 bg-[#DDE2E4]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {commercialMore.map((offering, i) => (
              <div key={offering.id} data-reveal style={revealDelay(i % 3)}>
                <ServiceCard
                  offering={offering}
                  onSelect={onSelectOffering}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 130px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B. RESIDENTIAL GLASS: one large architectural image beside the service grid */}
      <section id="residential" className="scroll-mt-16 py-24 section-clear text-[#111315] relative border-b border-[#DDE2E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryHeader data={residential} onOpenQuoteModal={onOpenQuoteModal} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div data-reveal className="lg:col-span-5">
              <figure className="group relative isolate overflow-hidden rounded-xl bg-[#111315] shadow-lg aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[560px]">
                <div className="absolute inset-0 -z-10">
                  <Photo
                    id={residential.image}
                    alt={residential.imageAlt}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className={ZOOM}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F]/90 via-transparent to-transparent" />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#DDE2E4]">For homeowners</div>
                  <p className="mt-2 text-lg sm:text-xl font-bold text-white max-w-sm leading-snug">
                    More light, clearer views and glass that suits the way you live.
                  </p>
                </figcaption>
              </figure>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {residential.items.map((offering, i) => (
                <div key={offering.id} data-reveal style={revealDelay(i % 2)}>
                  <ServiceCard
                    offering={offering}
                    onSelect={onSelectOffering}
                    sizes="(min-width: 1024px) 27vw, (min-width: 640px) 46vw, 130px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* C. SHOWER ENCLOSURES: wide feature image, then four tall image cards */}
      <section id="shower-enclosures" className="scroll-mt-16 py-24 section-dark text-white relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryHeader data={showers} dark onOpenQuoteModal={onOpenQuoteModal} />

          <figure
            data-reveal
            className="group relative isolate overflow-hidden rounded-xl bg-[#111315] shadow-lg mb-5 min-h-[300px] sm:min-h-[400px] lg:min-h-[460px] flex items-end"
          >
            <div className="absolute inset-0 -z-10">
              <Photo id={showers.image} alt={showers.imageAlt} sizes="(min-width: 1280px) 1216px, 100vw" className={ZOOM} />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D0F]/85 via-[#0B0D0F]/35 to-transparent" />
            </div>
            <figcaption className="p-6 sm:p-10 max-w-xl">
              <div className="text-xs font-bold uppercase tracking-widest text-[#DDE2E4]">Design · Customization · Installation</div>
              <p className="mt-3 text-2xl sm:text-3xl font-bold text-white leading-tight">
                Shower glass that makes the bathroom feel larger, brighter and finished.
              </p>
              <button
                type="button"
                onClick={() => onOpenQuoteModal(showers.items[0].name)}
                className="btn-steel mt-6 inline-flex items-center gap-2 px-5 py-3 rounded text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                <span>{showers.ctaLabel}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </figcaption>
          </figure>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {showers.items.map((offering, i) => (
              <div key={offering.id} data-reveal style={revealDelay(i)} className="aspect-[4/3] sm:aspect-[3/4]">
                <OverlayCard
                  offering={offering}
                  onSelect={onSelectOffering}
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 46vw, 100vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* D. GLASS PRODUCTS: clean product cards */}
      <section id="glass-products" className="scroll-mt-16 py-24 section-clear text-[#111315] relative border-b border-[#DDE2E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryHeader data={glass} onOpenQuoteModal={onOpenQuoteModal} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {glass.items.map((offering, i) => (
              <div key={offering.id} data-reveal style={revealDelay(i)}>
                <ServiceCard
                  offering={offering}
                  onSelect={onSelectOffering}
                  sizes="(min-width: 768px) 31vw, (min-width: 640px) 46vw, 130px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E. ALUMINUM FRAMES: same cards with a drawing-sheet treatment */}
      <section id="aluminum-frames" className="scroll-mt-16 py-24 section-glass text-[#111315] relative border-b border-[#DDE2E4]">
        <div className="absolute inset-0 architectural-grid-steel opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryHeader data={frames} onOpenQuoteModal={onOpenQuoteModal} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {frames.items.map((offering, i) => (
              <div key={offering.id} data-reveal style={revealDelay(i)}>
                <ServiceCard
                  offering={offering}
                  onSelect={onSelectOffering}
                  sizes="(min-width: 768px) 31vw, (min-width: 640px) 46vw, 130px"
                  index={`0${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

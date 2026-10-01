import React, { useEffect, useRef } from 'react';
import { COMPANY_INFO } from '../data/company';
import { Phone, ArrowRight, ShieldCheck, Layers, MapPin, Award } from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage';

interface HeroProps {
  onOpenQuoteModal: (initialService?: string) => void;
}

const HERO_IMAGE = 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=85';

const layerStyle = (z: number, delay: number) =>
  ({ '--z': `${z}px`, '--d': `${delay}s` }) as React.CSSProperties;

const rise = (delay: number) => ({ animationDelay: `${delay}s` }) as React.CSSProperties;

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const sectionRef = useRef<HTMLElement>(null);

  // Drives the 3D glass stack and parallax through CSS variables on the section:
  // --hero-mx / --hero-my follow the pointer (-1..1), --hero-p is scroll progress (0..1).
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let targetX = 0, targetY = 0, currentX = 0, currentY = 0;

    const tick = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      el.style.setProperty('--hero-mx', currentX.toFixed(4));
      el.style.setProperty('--hero-my', currentY.toFixed(4));
      const settled = Math.abs(targetX - currentX) < 0.001 && Math.abs(targetY - currentY) < 0.001;
      raf = settled ? 0 : requestAnimationFrame(tick);
    };
    const wake = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      const rect = el.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      wake();
    };
    const onPointerLeave = () => {
      targetX = 0;
      targetY = 0;
      wake();
    };
    const onScroll = () => {
      const progress = Math.min(1, Math.max(0, window.scrollY / (el.offsetHeight * 0.85)));
      el.style.setProperty('--hero-p', progress.toFixed(4));
    };

    onScroll();
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerleave', onPointerLeave);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerleave', onPointerLeave);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-[#111315] text-white"
    >
      {/* Background Architectural Hero Image: natural colour, served up to 4K, with neutral scrims for legibility */}
      <div className="absolute inset-0 z-0">
        <div className="hero-bg absolute inset-0">
          <ArchitecturalImage
            src={`${HERO_IMAGE}&w=2560`}
            srcSet={[1280, 1920, 2560, 3840].map((w) => `${HERO_IMAGE}&w=${w} ${w}w`).join(', ')}
            sizes="100vw"
            priority
            alt="Modern Commercial Glass Architecture Curtain Wall"
            className="w-full h-full object-cover object-[70%_65%]"
            wrapperClassName="h-full"
            overlayText="Empire Glass Architectural Systems"
          />
        </div>
        {/* Left-weighted charcoal scrim for headline legibility; right side stays open */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D0F]/90 via-[#0B0D0F]/55 to-transparent" />
        {/* Top fade for the header, bottom fade into the trust strip */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-transparent to-[#0B0D0F]/55" />
      </div>

      {/* 3D glazing stack: aluminum frame and two glass lites that tilt with the pointer and separate on scroll */}
      <div className="hero-3d hidden lg:block" aria-hidden="true">
        <div className="hero-3d__float">
          <div className="hero-3d__rig">
            <div className="hero-3d__layer" style={layerStyle(-110, 0.25)}>
              <div className="hero-3d__pane hero-3d__pane--frame" />
            </div>
            <div className="hero-3d__layer" style={layerStyle(0, 0.45)}>
              <div className="hero-3d__pane hero-3d__pane--glass">
                <i className="hero-3d__glare" />
              </div>
            </div>
            <div className="hero-3d__layer" style={layerStyle(110, 0.65)}>
              <div className="hero-3d__pane hero-3d__pane--glass hero-3d__pane--front">
                <i className="hero-3d__glare" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="hero-content relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="max-w-3xl">
          
          {/* Location & Scope Unboxed Kicker */}
          <div style={rise(0.05)} className="hero-rise inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/5 border border-[#DDE2E4]/20 text-[10px] sm:text-xs font-semibold sm:tracking-wider whitespace-nowrap max-w-full mb-6 backdrop-blur-xs">
            <span className="text-[#DDE2E4] font-bold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#527187]" />
              Greensboro, <span className="sm:hidden">NC</span><span className="hidden sm:inline">North Carolina</span>
            </span>
            <span aria-hidden="true" className="text-[#7B8388]">·</span>
            <span className="text-[#DDE2E4]">Commercial &amp; Residential Glazing</span>
          </div>

          {/* Primary Headline */}
          <h1 style={rise(0.15)} className="hero-rise text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 [text-wrap:balance]">
            Precision Glass Systems. <br className="hidden sm:inline" />
            <span className="text-[#DDE2E4]">Fabricated &amp; Installed</span> for Architecture.
          </h1>

          {/* Value Proposition */}
          <p style={rise(0.3)} className="hero-rise text-base sm:text-lg text-[#DDE2E4] leading-relaxed max-w-2xl mb-8 font-normal">
            Empire Glass Inc. furnishes shop fabrication and certified field labor to install commercial curtain walls, storefront systems, architectural window walls, and custom residential glass throughout Greensboro and the Triad region.
          </p>

          {/* Action-Oriented Conversion Buttons */}
          <div style={rise(0.42)} className="hero-rise flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10">
            <button
              onClick={() => onOpenQuoteModal()}
              className="btn-steel inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-bold tracking-wider uppercase rounded shadow-xl cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              aria-label={`Call ${COMPANY_INFO.phoneDisplay}`}
              className="btn-secondary-dark inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-semibold tracking-wider uppercase rounded shadow-md"
            >
              <Phone className="w-4 h-4 text-[#527187]" />
              <span>Call<span className="hidden sm:inline"> {COMPANY_INFO.phoneDisplay}</span></span>
            </a>
          </div>

          {/* Quick Category Shortcuts */}
          <div style={rise(0.54)} className="hero-rise pt-3 border-t border-[#DDE2E4]/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#7B8388]">
            <span className="text-[#DDE2E4] font-medium">Quick Navigation:</span>
            <a href="#commercial" className="hover:text-white text-[#DDE2E4] transition-colors font-medium underline-offset-4 hover:underline">
              Commercial Glass &rarr;
            </a>
            <a href="#residential" className="hover:text-white text-[#DDE2E4] transition-colors font-medium underline-offset-4 hover:underline">
              Residential Glass &rarr;
            </a>
            <a href="#shower-enclosures" className="hover:text-white text-[#DDE2E4] transition-colors font-medium underline-offset-4 hover:underline">
              Shower Enclosures &rarr;
            </a>
            <a href="#our-work" className="hover:text-white text-[#DDE2E4] transition-colors font-medium underline-offset-4 hover:underline">
              Project Portfolio &rarr;
            </a>
          </div>

        </div>
      </div>

      {/* Trust Strip Immediately Below Hero (Deep Charcoal with Light Steel Dividers) */}
      <div className="relative z-10 w-full mt-12 border-t border-b border-[#DDE2E4]/15 bg-[#111315]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#DDE2E4]/15">
            
            <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:pr-4">
              <Award className="w-5 h-5 text-[#527187] shrink-0" />
              <div>
                <div className="text-xs font-bold text-white tracking-wide uppercase">15+ Years</div>
                <div className="text-[11px] text-[#7B8388]">Industry Experience</div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-4">
              <Layers className="w-5 h-5 text-[#527187] shrink-0" />
              <div>
                <div className="text-xs font-bold text-white tracking-wide uppercase">In-House Shop</div>
                <div className="text-[11px] text-[#7B8388]">Precision Glass Fabrication</div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-4">
              <ShieldCheck className="w-5 h-5 text-[#527187] shrink-0" />
              <div>
                <div className="text-xs font-bold text-white tracking-wide uppercase">Single Source</div>
                <div className="text-[11px] text-[#7B8388]">Fabricate &amp; Install Teams</div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:pl-4">
              <MapPin className="w-5 h-5 text-[#527187] shrink-0" />
              <div>
                <div className="text-xs font-bold text-white tracking-wide uppercase">Triad Regional Hub</div>
                <div className="text-[11px] text-[#7B8388]">4916 Bartlett St, Greensboro</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

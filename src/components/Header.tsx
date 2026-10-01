import React, { useState, useEffect, useRef } from 'react';
import { COMPANY_INFO } from '../data/company';
import { OFFERING_CATEGORIES } from '../data/services';
import { Menu, X, Phone, ArrowUpRight, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: (initialService?: string) => void;
  onSelectOffering: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal, onSelectOffering }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileCategory, setMobileCategory] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the services menu on Escape or a click outside the header
  useEffect(() => {
    if (!servicesOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setServicesOpen(false);
    };
    const handlePointerDown = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('pointerdown', handlePointerDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [servicesOpen]);

  const navLinks = [
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Our Work', href: '#our-work' },
    { name: 'Process', href: '#process' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const linkClass =
    "hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#527187] hover:after:w-full after:transition-all after:duration-200";

  const selectOffering = (id: string) => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
    onSelectOffering(id);
  };

  return (
    <header
      ref={headerRef}
      onMouseLeave={() => setServicesOpen(false)}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#111315]/95 backdrop-blur-md border-b border-[#DDE2E4]/15 ${
        isScrolled ? 'py-3 shadow-lg shadow-black/25' : 'py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* ZONE 1: Brand Wordmark (Strict Top Bar Contract) */}
          <a
            href="#"
            className="flex items-center gap-2.5 group tracking-wider font-extrabold text-lg sm:text-xl uppercase transition-opacity hover:opacity-95"
            aria-label="Empire Glass Inc. Home"
          >
            <span className="inline-block w-2.5 h-2.5 bg-[#527187] rotate-45 transform group-hover:rotate-90 transition-transform duration-300 shadow-[0_0_8px_rgba(82,113,135,0.6)]" />
            <span className="font-bold tracking-tight text-white">
              EMPIRE <span className="text-[#DDE2E4]">GLASS</span>
            </span>
          </a>

          {/* ZONE 2: Clean Text Navigation Links (Desktop) */}
          <nav aria-label="Primary" className="hidden xl:flex items-center space-x-6 text-[13px] font-medium tracking-wide text-[#DDE2E4]">
            <button
              type="button"
              onClick={() => setServicesOpen((open) => !open)}
              onMouseEnter={() => setServicesOpen(true)}
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              className={`${linkClass} inline-flex items-center gap-1 cursor-pointer ${servicesOpen ? 'text-white' : ''}`}
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setServicesOpen(false)}
                className={linkClass}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* ZONE 3: Primary Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-[#DDE2E4] hover:text-white transition-colors px-2 py-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#527187]" />
              <span className="hidden lg:inline">{COMPANY_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={() => onOpenQuoteModal()}
              className="btn-steel hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold tracking-wide uppercase rounded transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile / Tablet Controls */}
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              aria-label="Call Empire Glass"
              className="sm:hidden p-2 text-[#DDE2E4] hover:text-white bg-[#161a1d] border border-[#DDE2E4]/20 rounded-md"
            >
              <Phone className="w-4 h-4 text-[#527187]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#DDE2E4] hover:text-white bg-[#161a1d] border border-[#DDE2E4]/20 rounded-md focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Services Mega Menu (Desktop) */}
      {servicesOpen && (
        <div
          id="services-menu"
          className="hidden xl:block absolute top-full inset-x-0 bg-[#111315] border-t border-b border-[#DDE2E4]/15 shadow-2xl shadow-black/40"
        >
          <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-5 gap-8">
            {OFFERING_CATEGORIES.map((category) => (
              <div key={category.id}>
                <a
                  href={`#${category.id}`}
                  onClick={() => setServicesOpen(false)}
                  className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[#8DB3CC] transition-colors"
                >
                  <span>{category.navLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#527187] group-hover:text-[#8DB3CC]" />
                </a>
                <ul className="mt-4 space-y-2.5 border-t border-[#DDE2E4]/15 pt-4">
                  {category.items.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => selectOffering(item.id)}
                        className="text-left text-[13px] text-[#DDE2E4] hover:text-white hover:translate-x-0.5 transition cursor-pointer"
                      >
                        {item.navLabel}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#111315] border-b border-[#DDE2E4]/20 px-5 py-6 space-y-4 shadow-2xl max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <nav aria-label="Primary" className="flex flex-col">
            <div className="text-[11px] font-bold uppercase tracking-widest text-[#7B8388] mb-1">Services</div>
            {OFFERING_CATEGORIES.map((category) => {
              const isOpen = mobileCategory === category.id;
              return (
                <div key={category.id} className="border-b border-[#DDE2E4]/10">
                  <button
                    type="button"
                    onClick={() => setMobileCategory(isOpen ? null : category.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between py-3 text-base font-medium text-[#DDE2E4] hover:text-white cursor-pointer"
                  >
                    <span>{category.navLabel}</span>
                    <ChevronDown className={`w-4 h-4 text-[#527187] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <ul className="pb-3 pl-3 space-y-1">
                      <li>
                        <a
                          href={`#${category.id}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-2 text-sm font-semibold text-[#8DB3CC]"
                        >
                          View all {category.navLabel}
                        </a>
                      </li>
                      {category.items.map((item) => (
                        <li key={item.id}>
                          <button
                            type="button"
                            onClick={() => selectOffering(item.id)}
                            className="block w-full text-left py-2 text-sm text-[#DDE2E4] hover:text-white cursor-pointer"
                          >
                            {item.navLabel}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}

            <div className="text-[11px] font-bold uppercase tracking-widest text-[#7B8388] mt-5 mb-1">Company</div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#DDE2E4] hover:text-white hover:pl-2 transition-all py-3 border-b border-[#DDE2E4]/10"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 flex flex-col gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              aria-label={`Call ${COMPANY_INFO.phoneDisplay}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded border border-[#DDE2E4]/25 bg-[#161a1d] text-sm font-semibold text-white"
            >
              <Phone className="w-4 h-4 text-[#527187]" />
              <span>Call<span className="hidden sm:inline"> {COMPANY_INFO.phoneDisplay}</span></span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="btn-steel flex items-center justify-center gap-2 w-full py-3 px-4 rounded font-bold text-sm uppercase tracking-wide cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

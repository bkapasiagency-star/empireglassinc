import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/company';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: (initialService?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Commercial', href: '#commercial' },
    { name: 'Residential', href: '#residential' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Our Work', href: '#our-work' },
    { name: 'Process', href: '#process' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
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
          <nav className="hidden xl:flex items-center space-x-6 text-[13px] font-medium tracking-wide text-[#DDE2E4]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#527187] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* ZONE 3: Primary Actions */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#DDE2E4] hover:text-white transition-colors px-2 py-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#527187]" />
              <span className="hidden lg:inline">{COMPANY_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={() => onOpenQuoteModal()}
              className="btn-steel inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold tracking-wide uppercase rounded transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              aria-label="Call Empire Glass"
              className="p-2 text-[#DDE2E4] hover:text-white bg-[#161a1d] border border-[#DDE2E4]/20 rounded-md"
            >
              <Phone className="w-4 h-4 text-[#527187]" />
            </a>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#DDE2E4] hover:text-white bg-[#161a1d] border border-[#DDE2E4]/20 rounded-md focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#111315] border-b border-[#DDE2E4]/20 px-5 py-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#DDE2E4] hover:text-white hover:pl-2 transition-all py-1 border-b border-[#DDE2E4]/10"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 flex flex-col gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded border border-[#DDE2E4]/25 bg-[#161a1d] text-sm font-semibold text-white"
            >
              <Phone className="w-4 h-4 text-[#527187]" />
              <span>Call {COMPANY_INFO.phoneDisplay}</span>
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

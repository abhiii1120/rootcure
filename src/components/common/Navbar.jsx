import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicInfo';

export default function Navbar({ activePage, setActivePage, onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'treatments', label: 'Services' },
    { id: 'studio', label: 'About us' },
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    setActivePage(id);
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: false, duration: 1 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
      <div className="max-w-7xl mx-auto">
        <nav
          className={`relative flex items-center justify-between px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-white/85 backdrop-blur-xl shadow-lg shadow-black/5 border border-white/60'
              : 'bg-white/70 backdrop-blur-md shadow-sm border border-white/50'
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
            aria-label="Root Cure Dental Homepage"
          >
            <img
              src="/images/logo.png"
              alt="Root Cure Dental Logo"
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform bg-white p-0.5"
            />
            <span className="font-semibold text-lg sm:text-xl tracking-tight text-neutral-900 group-hover:text-[#00a8e8] transition-colors">
              Root Cure Dental
            </span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive =
                (item.id === 'home' && activePage === 'home') ||
                (item.id === 'treatments' && activePage === 'treatments') ||
                (item.id === 'studio' && activePage === 'studio');

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-all cursor-pointer ${
                    isActive
                      ? 'text-[#1b2e8c] font-bold'
                      : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#00a8e8] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-bold rounded-full bg-[#1b2e8c] hover:bg-[#00a8e8] text-white active:scale-95 transition-all shadow-md group cursor-pointer"
            >
              <span>BOOK APPOINTMENT</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-800 hover:bg-neutral-100 rounded-full focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-xl border border-neutral-100 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-neutral-800 hover:bg-neutral-50 rounded-xl transition-colors text-left"
                >
                  <span>{item.label}</span>
                  {((item.id === 'home' && activePage === 'home') ||
                    (item.id === 'treatments' && activePage === 'treatments') ||
                    (item.id === 'studio' && activePage === 'studio')) && (
                    <span className="w-2 h-2 rounded-full bg-[#00a8e8]"></span>
                  )}
                </button>
              ))}
              <div className="pt-2 border-t border-neutral-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#1b2e8c] hover:bg-[#00a8e8] text-white font-semibold text-sm rounded-xl shadow-sm transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Consultation</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

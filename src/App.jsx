import { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import BookingModal from './components/common/BookingModal';
import ArticleModal from './components/common/ArticleModal';
import ServiceModal from './components/common/ServiceModal';

import HomeHero from './components/home/HomeHero';
import SignatureServices from './components/home/SignatureServices';
import ExcellenceAbout from './components/home/ExcellenceAbout';

import TreatmentsView from './components/treatments/TreatmentsView';
import StudioView from './components/studio/StudioView';
import JournalView from './components/journal/JournalView';

import { SIGNATURE_SERVICES, TREATMENTS_BENTO, HERO_FILTERS } from './data/services';

export default function App() {
  // Navigation states: 'home' | 'treatments' | 'studio' | 'journal'
  const [activePage, setActivePage] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  // Sync with browser hash if user uses anchor or back/forward
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'treatments', 'studio', 'journal'].includes(hash)) {
        setActivePage(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handlePageChange = (page) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHeroFilter = (filterId) => {
    // Keep hover-based inspection, no disruptive modal popup on click
    const servicesSection = document.getElementById('social-proof-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDoctor = () => {
    handlePageChange('studio');
  };

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-neutral-900 font-sans flex flex-col justify-between selection:bg-[#00a8e8]/25 selection:text-neutral-950">
      {/* Fixed Sticky Header Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {activePage === 'home' && (
          <div className="space-y-4">
            <HomeHero
              onSelectFilter={handleHeroFilter}
              onOpenDoctor={handleOpenDoctor}
              onOpenBooking={() => setIsBookingOpen(true)}
            />
            <SignatureServices
              onSelectService={(service) => setSelectedService(service)}
              onOpenBooking={() => setIsBookingOpen(true)}
            />
            <ExcellenceAbout
              onNavigate={handlePageChange}
              onOpenBooking={() => setIsBookingOpen(true)}
            />
          </div>
        )}

        {activePage === 'treatments' && (
          <TreatmentsView
            onSelectService={(service) => setSelectedService(service)}
            onOpenBooking={() => setIsBookingOpen(true)}
            onNavigate={handlePageChange}
          />
        )}

        {activePage === 'studio' && (
          <StudioView
            onOpenBooking={() => setIsBookingOpen(true)}
            onOpenDoctor={handleOpenDoctor}
          />
        )}

        {activePage === 'journal' && (
          <JournalView
            onSelectArticle={(article) => setSelectedArticle(article)}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}
      </main>

      {/* Global Shared Footer */}
      <Footer onNavigate={handlePageChange} />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
    </div>
  );
}

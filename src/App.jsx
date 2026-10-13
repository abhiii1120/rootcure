import { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import BookingModal from './components/common/BookingModal';

import HomeHero from './components/home/HomeHero';
import SignatureServices from './components/home/SignatureServices';
import ExcellenceAbout from './components/home/ExcellenceAbout';

import TreatmentsView from './components/treatments/TreatmentsView';
import StudioView from './components/studio/StudioView';

export default function App() {
  // Navigation states: 'home' | 'treatments' | 'studio'
  const [activePage, setActivePage] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Sync with browser hash if user uses anchor or back/forward
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'treatments', 'studio'].includes(hash)) {
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
            <SignatureServices />
            <ExcellenceAbout
              onNavigate={handlePageChange}
              onOpenBooking={() => setIsBookingOpen(true)}
            />
          </div>
        )}

        {activePage === 'treatments' && (
          <TreatmentsView
            onNavigate={handlePageChange}
          />
        )}

        {activePage === 'studio' && (
          <StudioView
            onOpenBooking={() => setIsBookingOpen(true)}
            onOpenDoctor={handleOpenDoctor}
          />
        )}
      </main>

      {/* Global Shared Footer */}
      <Footer onNavigate={handlePageChange} />

      {/* Interactive Consultation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}

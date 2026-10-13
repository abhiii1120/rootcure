import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import BookingModal from './components/common/BookingModal';
import ServiceModal from './components/common/ServiceModal';

import HomeHero from './components/home/HomeHero';
import SignatureServices from './components/home/SignatureServices';
import ExcellenceAbout from './components/home/ExcellenceAbout';

import TreatmentsView from './components/treatments/TreatmentsView';
import StudioView from './components/studio/StudioView';

export default function App() {
  // Navigation states: 'home' | 'treatments' | 'studio'
  const [activePage, setActivePage] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    window.lenis = lenis;

    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

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
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: false, duration: 1 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleHeroFilter = (filterId) => {
    const servicesSection = document.getElementById('social-proof-section');
    if (servicesSection) {
      if (window.lenis) {
        window.lenis.scrollTo(servicesSection, { duration: 1.2 });
      } else {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
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
            onSelectService={(service) => setSelectedService(service)}
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

      {/* Treatment Details Modal (Cards 1-4) */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
}

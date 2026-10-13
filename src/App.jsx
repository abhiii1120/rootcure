import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
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
  const [activePage, setActivePage] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'treatments', 'studio'].includes(hash)) {
        return hash;
      }
    }
    return 'home';
  });
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const curtainRef = useRef(null);
  const isTransitioningRef = useRef(false);

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

  // Sync with browser hash if user uses back/forward
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'treatments', 'studio'].includes(hash) && hash !== activePage) {
        handlePageChange(hash);
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [activePage]);

  // Smooth White Slide GSAP Page Transition (Continuous fluid sweep with zero pause)
  const handlePageChange = (newPage) => {
    // If navigating to current page, smoothly scroll to top
    if (newPage === activePage) {
      if (window.lenis) {
        window.lenis.scrollTo(0, { duration: 0.8 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    const curtain = curtainRef.current;
    if (!curtain) {
      setActivePage(newPage);
      window.location.hash = newPage;
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
      isTransitioningRef.current = false;
      return;
    }

    // Intercept clicks during transition
    curtain.style.pointerEvents = 'auto';

    // Slow, uninterrupted continuous sweep:
    // Phase 1: White sheet sweeps down from top (-100% to 0%)
    // power2.in builds smooth speed as it approaches the screen.
    gsap.killTweensOf(curtain);
    gsap.fromTo(
      curtain,
      { y: '-100%' },
      {
        y: '0%',
        duration: 0.65,
        ease: 'power2.in',
        onComplete: () => {
          // Immediately swap page & reset scroll behind the white sheet
          setActivePage(newPage);
          window.location.hash = newPage;

          if (window.lenis) {
            window.lenis.scrollTo(0, { immediate: true });
          } else {
            window.scrollTo(0, 0);
          }

          // Phase 2: Instantly continues gliding down without any pause!
          // power2.out starts at peak velocity and smoothly decelerates off screen.
          gsap.to(curtain, {
            y: '100%',
            duration: 0.7,
            ease: 'power2.out',
            onComplete: () => {
              gsap.set(curtain, { y: '-100%' });
              curtain.style.pointerEvents = 'none';
              isTransitioningRef.current = false;
            }
          });
        }
      }
    );
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
      {/* Fullscreen Pure White Slide Transition Overlay (No logo, no border, continuous sweep) */}
      <div
        ref={curtainRef}
        className="fixed inset-0 w-full h-[105vh] z-[9999] bg-white pointer-events-none"
        style={{ transform: 'translateY(-100%)' }}
      />

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

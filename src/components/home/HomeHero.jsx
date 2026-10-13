import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Calendar, ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { HERO_TREATMENTS } from '../../data/services';
import { CLINIC_INFO } from '../../data/clinicInfo';

const HERO_SLIDES = [
  {
    id: 1,
    image: '/images/hero-patient.jpg',
    imagePosition: 'object-[center_28%]',
    badgeSubtitle: 'All Dental Solutions Under One Roof',
    titleLine1: 'MODERN',
    titleLine2: 'DENTISTRY',
    titleLine3: 'WITH',
    titleLine4: 'GENTLE CARE.',
    description: 'Expert dental care for healthy, confident smiles at every age — delivered with comfort, precision, and trust.',
    doctorRole: 'Cosmetic Surgeon • B.D.S.',
    doctorStat: '10+ Year Experience',
    doctorRating: '★ 4.9 Rating'
  },
  {
    id: 2,
    image: '/images/treatment-suite.jpg',
    imagePosition: 'object-center',
    badgeSubtitle: 'Zero-Pain Single-Sitting Protocols',
    titleLine1: 'PAINLESS',
    titleLine2: 'SINGLE-SITTING',
    titleLine3: 'ROOT CANAL',
    titleLine4: 'SPECIALISTS.',
    description: 'Advanced rotary endodontics and gentle clinical protocols for swift, zero-pain tooth preservation and permanent relief.',
    doctorRole: 'Endodontics & Restorative',
    doctorStat: '10+ Year Experience',
    doctorRating: '★ 4.9 Rating'
  },
  {
    id: 3,
    image: '/images/wellness-lounge.jpg',
    imagePosition: 'object-center',
    badgeSubtitle: 'Artisanal Aesthetic Smile Architecture',
    titleLine1: 'BESPOKE',
    titleLine2: 'SMILE DESIGN',
    titleLine3: '& INVISIBLE',
    titleLine4: 'ALIGNERS.',
    description: 'Computer-guided clear aligners and handcrafted ultra-thin veneers tailored to naturally enhance your facial harmony.',
    doctorRole: 'Cosmetic Surgeon • B.D.S.',
    doctorStat: '5.2k+ Smiles Transformed',
    doctorRating: '★ 4.9 Rating'
  }
];

export default function HomeHero({ onOpenDoctor, onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  const imageRefs = useRef([]);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const doctorInfoRef = useRef(null);
  const badgeSubtitleRef = useRef(null);

  const isAnimatingRef = useRef(false);

  const changeSlide = (nextIndex) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    // Collect elements to animate out
    const titleLines = titleRef.current ? Array.from(titleRef.current.children) : [];
    const elementsToFade = [
      ...titleLines,
      descRef.current,
      doctorInfoRef.current,
      badgeSubtitleRef.current
    ].filter(Boolean);

    // 1. Smoothly dissolve outgoing text upward
    gsap.killTweensOf(elementsToFade);
    gsap.to(elementsToFade, {
      opacity: 0,
      y: -12,
      duration: 0.3,
      ease: 'power2.in',
      stagger: 0.02,
      onComplete: () => {
        // Change slide state while text is invisible
        setCurrentSlide(nextIndex);
      }
    });
  };

  const resetAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((curr) => {
        const next = (curr + 1) % HERO_SLIDES.length;
        changeSlide(next);
        return curr;
      });
    }, 6500);
  };

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // GSAP Smooth Transition for Carousel Images and Text
  useEffect(() => {
    // 1. Crossfade & Subtle Scale Images
    HERO_SLIDES.forEach((_, idx) => {
      const imgEl = imageRefs.current[idx];
      if (!imgEl) return;
      if (idx === currentSlide) {
        gsap.killTweensOf(imgEl);
        gsap.fromTo(
          imgEl,
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 1.1, ease: 'power2.out', overwrite: 'auto' }
        );
      } else {
        gsap.to(imgEl, { opacity: 0, duration: 0.8, ease: 'power2.inOut', overwrite: 'auto' });
      }
    });

    // 2. Animate Staggered Title Lines in
    if (titleRef.current) {
      const lines = titleRef.current.children;
      gsap.killTweensOf(lines);
      gsap.fromTo(
        lines,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.07,
          ease: 'power3.out',
          overwrite: 'auto',
          clearProps: 'transform'
        }
      );
    }

    // 3. Animate Description in
    if (descRef.current) {
      gsap.killTweensOf(descRef.current);
      gsap.fromTo(
        descRef.current,
        { y: 14, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.14,
          ease: 'power3.out',
          overwrite: 'auto',
          clearProps: 'transform'
        }
      );
    }

    // 4. Animate Doctor Role / Info in
    if (doctorInfoRef.current) {
      gsap.killTweensOf(doctorInfoRef.current);
      gsap.fromTo(
        doctorInfoRef.current,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          delay: 0.2,
          ease: 'power2.out',
          overwrite: 'auto',
          clearProps: 'transform',
          onComplete: () => {
            isAnimatingRef.current = false;
          }
        }
      );
    } else {
      isAnimatingRef.current = false;
    }

    // 5. Animate Subtitle Badge in
    if (badgeSubtitleRef.current) {
      gsap.killTweensOf(badgeSubtitleRef.current);
      gsap.fromTo(
        badgeSubtitleRef.current,
        { opacity: 0, x: -10 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          delay: 0.08,
          ease: 'power2.out',
          overwrite: 'auto',
          clearProps: 'transform'
        }
      );
    }
  }, [currentSlide]);

  const handlePrevSlide = () => {
    const prev = currentSlide === 0 ? HERO_SLIDES.length - 1 : currentSlide - 1;
    changeSlide(prev);
    resetAutoplay();
  };

  const handleNextSlide = () => {
    const next = (currentSlide + 1) % HERO_SLIDES.length;
    changeSlide(next);
    resetAutoplay();
  };

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative w-full pt-20 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full min-h-[640px] lg:min-h-[700px] rounded-[2.2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col justify-between p-6 sm:p-10 lg:p-14 border border-neutral-800/40">
          
          {/* Carousel Background Images with GSAP */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {HERO_SLIDES.map((slide, idx) => (
              <img
                key={slide.id}
                ref={(el) => {
                  imageRefs.current[idx] = el;
                }}
                src={slide.image}
                alt={slide.titleLine1}
                className={`absolute inset-0 w-full h-full object-cover ${slide.imagePosition} filter brightness-[0.9] contrast-[1.02]`}
                style={{ opacity: idx === 0 ? 1 : 0 }}
              />
            ))}
            {/* Cinematic Gradients for typography legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/55 to-neutral-950/25 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/30 to-neutral-950/40 pointer-events-none" />
          </div>

          {/* Top Bar with Doctor Credential Badge */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-2">
            <div
              onClick={onOpenDoctor}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-white shadow-sm transition-all cursor-pointer"
            >
              <img
                src="/images/dr-ankita.jpg"
                alt="Dr. Ankita Sarigaonkar"
                className="w-6 h-6 rounded-full object-cover border border-[#00a8e8]"
              />
              <span className="text-[11px] font-semibold tracking-wide text-neutral-100">
                Dr. Ankita Sarigaonkar
              </span>
              <span className="text-white/40">•</span>
              <span className="text-[10px] font-mono tracking-wider text-[#00a8e8] uppercase font-bold">
                B.D.S. Cosmetic Surgeon
              </span>
              <span className="hidden sm:inline text-white/40">•</span>
              <span className="hidden sm:inline text-[10px] text-neutral-300 font-light">
                Regd. No. A-39477
              </span>
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs text-white/80">
              <span className="w-2 h-2 rounded-full bg-[#00a8e8] animate-pulse"></span>
              <span ref={badgeSubtitleRef} className="text-[11px] font-medium tracking-wide">
                {activeSlide.badgeSubtitle}
              </span>
            </div>
          </div>

          {/* Hero Main Content: Left Typography & Right Doctor Card + Subtitle */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end my-auto py-8 sm:py-12">
            {/* Left Column: Bold Typography with GSAP Stagger */}
            <div className="lg:col-span-7 space-y-3">
              <h1
                ref={titleRef}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-extrabold text-white tracking-tight leading-[0.96] uppercase drop-shadow-md overflow-hidden"
              >
                <span className="block">{activeSlide.titleLine1}</span>
                <span className="block">{activeSlide.titleLine2}</span>
                <span className="block">{activeSlide.titleLine3}</span>
                <span className="block">{activeSlide.titleLine4}</span>
              </h1>
            </div>

            {/* Right Column: Subtitle + Doctor Card + Book Appointment CTA */}
            <div className="lg:col-span-5 flex flex-col justify-end space-y-5 lg:pl-4">
              <p
                ref={descRef}
                className="text-neutral-200 text-sm sm:text-base leading-relaxed max-w-md font-light drop-shadow min-h-[48px]"
              >
                {activeSlide.description}
              </p>

              {/* Doctor Card Pill */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-xl border border-white/80 max-w-sm flex items-center gap-3.5 transition-all hover:bg-white hover:scale-[1.02]">
                <img
                  src="/images/dr-ankita.jpg"
                  alt="Dr. Ankita Sarigaonkar"
                  className="w-12 h-12 rounded-xl object-cover shrink-0 border border-neutral-200 shadow-sm"
                />
                <div ref={doctorInfoRef} className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900 truncate">
                      Dr. Ankita Sarigaonkar
                    </h4>
                  </div>
                  <div className="text-[10px] font-mono font-bold tracking-wider text-[#1b2e8c] uppercase mt-0.5">
                    {activeSlide.doctorRole}
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-neutral-500 font-medium mt-0.5">
                    <span>{activeSlide.doctorStat}</span>
                    <span>•</span>
                    <span className="text-amber-500 font-bold flex items-center gap-0.5">
                      {activeSlide.doctorRating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1b2e8c] hover:bg-[#00a8e8] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#1b2e8c]/30 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </a>

                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs tracking-wide backdrop-blur-md border border-white/20 transition-all cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-[#00a8e8]" />
                  <span>{CLINIC_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Non-clickable Static Treatment Pills + Slider Pagination Controls */}
          <div className="relative z-20 w-full pt-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/10 pt-4">
              
              {/* Treatment Pills - Display only, non-clickable, wrap naturally without horizontal scrollbar */}
              <div className="flex flex-wrap items-center gap-2 max-w-full">
                {HERO_TREATMENTS.map((treatment) => (
                  <div
                    key={treatment.id}
                    className="px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium bg-white/15 text-white/90 backdrop-blur-md border border-white/15 select-none"
                  >
                    <span>{treatment.label}</span>
                  </div>
                ))}
              </div>

              {/* Slider Pagination Controls (< 01 ─── 03 >) */}
              <div className="flex items-center gap-3 text-white/80 text-xs shrink-0 select-none self-end md:self-auto">
                <button
                  onClick={handlePrevSlide}
                  aria-label="Previous slide"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="font-mono text-xs font-bold text-white min-w-[20px] text-center">
                  0{currentSlide + 1}
                </span>
                <div className="w-14 h-1 bg-white/25 rounded-full relative overflow-hidden">
                  <div
                    className="absolute inset-y-0 bg-[#00a8e8] rounded-full transition-all duration-300"
                    style={{
                      left: `${(currentSlide / (HERO_SLIDES.length - 1)) * 50}%`,
                      width: '50%'
                    }}
                  />
                </div>
                <span className="font-mono text-xs text-white/50">
                  0{HERO_SLIDES.length}
                </span>
                <button
                  onClick={handleNextSlide}
                  aria-label="Next slide"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

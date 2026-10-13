import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ChevronLeft, ChevronRight, Star, RotateCw, CheckCircle, Clock, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicInfo';

const SERVICES_CARDS = [
  {
    id: 'teeth-cleaning',
    code: '01 / HYGIENE',
    tag: 'PREVENTATIVE PROTOCOL',
    titleLine1: 'Teeth',
    titleLine2: 'Cleaning',
    fullTitle: 'Ultrasonic Teeth Cleaning',
    description: 'Gentle ultrasonic scaling and biological air polishing to eliminate stubborn plaque, tartar, and biofilm without sensitivity.',
    highlights: [
      'Gentle ultrasonic scaling (zero enamel scraping)',
      'Biological air-flow polishing for stubborn stains',
      'Protective remineralization & fresh breath finish'
    ],
    timeline: '30–40 Mins • Single Visit',
    frontBg: 'bg-gradient-to-b from-[#102a5c] to-[#071329]',
    iconType: 'tooth-3d'
  },
  {
    id: 'dental-checkups',
    code: '02 / DIAGNOSTICS',
    tag: 'DIGITAL DIAGNOSTICS',
    titleLine1: 'Dental',
    titleLine2: 'Checkups',
    fullTitle: 'Comprehensive 3D Oral Scan',
    description: 'High-definition digital intraoral mapping and ultra-low radiation scans to detect micro-cavities early and safeguard your oral health.',
    highlights: [
      'Instant low-radiation intraoral 3D scan',
      'Early cavity, micro-fracture & gum detection',
      'Comprehensive biological health roadmap'
    ],
    timeline: '20–30 Mins • Annual Check',
    frontBg: 'bg-gradient-to-b from-[#0e244d] to-[#050e1f]',
    iconType: 'tooth-contour'
  },
  {
    id: 'dental-veneers',
    code: '03 / AESTHETICS',
    tag: 'SMILE ARCHITECTURE',
    titleLine1: 'Dental',
    titleLine2: 'Veneers',
    fullTitle: 'Porcelain Dental Veneers',
    description: 'Handcrafted ultra-thin ceramic restorations designed to mimic the natural vitality, optics, and translucency of enamel.',
    highlights: [
      'Custom 3D facial simulation & shade matching',
      'Minimally invasive preservation of tooth structure',
      'Permanent stain-resistant porcelain brilliance'
    ],
    timeline: '2 Sessions • Custom Craft',
    frontBg: 'bg-[#050e1f]',
    image: '/images/dental-veneers.jpg',
    iconType: 'photo'
  }
];

export default function SignatureServices() {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cardRefs = useRef([]);

  const reviewsAvatars = [
    '/images/dr-theresa.jpg',
    '/images/dr-jonas.jpg',
    '/images/dr-albert.jpg'
  ];

  // GSAP initial setup
  useEffect(() => {
    cardRefs.current.forEach((el) => {
      if (el) {
        gsap.set(el, {
          transformStyle: 'preserve-3d',
          transformPerspective: 1000,
          rotateY: 0
        });
      }
    });

    return () => {
      cardRefs.current.forEach((el) => {
        if (el) gsap.killTweensOf(el);
      });
    };
  }, []);

  // GSAP smooth 3D flip animation
  useEffect(() => {
    SERVICES_CARDS.forEach((_, idx) => {
      const el = cardRefs.current[idx];
      if (!el) return;
      const cardFlipped = flippedIndex === idx || hoveredIndex === idx;
      gsap.to(el, {
        rotateY: cardFlipped ? 180 : 0,
        duration: 0.75,
        ease: 'power2.inOut',
        overwrite: 'auto'
      });
    });
  }, [flippedIndex, hoveredIndex]);

  const handlePrev = () => {
    setHoveredIndex(null);
    setFlippedIndex((prev) => (prev === null || prev === 0 ? SERVICES_CARDS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setHoveredIndex(null);
    setFlippedIndex((prev) => (prev === null || prev === SERVICES_CARDS.length - 1 ? 0 : prev + 1));
  };

  const handleCardClick = (idx) => {
    setFlippedIndex((prev) => (prev === idx ? null : idx));
  };

  const handleMouseLeave = (idx) => {
    setHoveredIndex(null);
    if (flippedIndex === idx) {
      setFlippedIndex(null);
    }
  };

  const handleBookingClick = (e) => {
    e.stopPropagation();
    window.open(CLINIC_INFO.whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const isFlipped = (idx) => flippedIndex === idx || hoveredIndex === idx;

  return (
    <section id="social-proof-section" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Header Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 sm:mb-16">
        {/* Left: Titles */}
        <div className="lg:col-span-6 space-y-3">
          <div className="text-xs sm:text-sm font-bold tracking-widest text-[#00a8e8] uppercase">
            OUR FEATURES /
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.05] uppercase">
            DISCOVER OUR <br />
            <span className="text-[#00a8e8]">SIGNATURE</span> <br />
            DENTAL SERVICES
          </h2>
        </div>

        {/* Right: Description + Social Proof Badge */}
        <div className="lg:col-span-6 space-y-5 lg:pl-8">
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Experience modern dental care delivered with comfort, precision, and attention to detail. Hover on desktop or tap on mobile to explore detailed clinical protocols.
          </p>

          {/* 750+ Happy Reviews Badge */}
          <div className="flex items-center gap-3.5 pt-1">
            <div className="flex -space-x-2.5 overflow-hidden">
              {reviewsAvatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Delighted patient"
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                />
              ))}
            </div>
            <div>
              <div className="text-sm font-extrabold text-neutral-900 flex items-center gap-1.5">
                <span className="text-[#1b2e8c]">750+</span>
                <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
                  HAPPY REVIEWS
                </span>
              </div>
              <div className="flex items-center text-amber-400 text-xs">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Interactive Flip Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
        {SERVICES_CARDS.map((card, idx) => {
          const cardFlipped = isFlipped(idx);

          return (
            <div
              key={card.id}
              className="perspective-1000 h-[430px] sm:h-[470px] select-none"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
              onClick={() => handleCardClick(idx)}
            >
              <div
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className="relative w-full h-full rounded-[2rem] transform-style-3d cursor-pointer"
              >
                {/* FRONT FACE */}
                <div
                  className={`group absolute inset-0 w-full h-full rounded-[2rem] overflow-hidden backface-hidden flip-front shadow-lg hover:shadow-2xl transition-shadow duration-300 ${
                    card.frontBg
                  } text-white p-7 flex flex-col justify-between border border-white/10 ${
                    cardFlipped ? 'pointer-events-none z-0' : 'pointer-events-auto z-10'
                  }`}
                >
                  {/* Card Art / Illustrations */}
                  {card.iconType === 'tooth-3d' && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-85 group-hover:scale-105 transition-transform duration-500 pointer-events-none">
                      <svg
                        className="w-56 h-56 text-[#3b82f6]/25 filter blur-[0.5px]"
                        viewBox="0 0 100 100"
                        fill="currentColor"
                      >
                        <path d="M50 15 C35 15, 20 22, 22 45 C23 58, 25 75, 33 85 C38 90, 42 75, 46 65 C48 60, 52 60, 54 65 C58 75, 62 90, 67 85 C75 75, 77 58, 78 45 C80 22, 65 15, 50 15 Z" />
                      </svg>
                      <div className="absolute w-40 h-40 bg-[#00a8e8]/20 rounded-full blur-2xl"></div>
                    </div>
                  )}

                  {card.iconType === 'tooth-contour' && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:scale-105 transition-transform duration-500">
                      <div className="relative w-44 h-44 flex items-center justify-center">
                        <svg
                          viewBox="0 0 100 100"
                          className="w-40 h-40 text-[#00a8e8] stroke-current fill-none stroke-[1.5] filter drop-shadow-[0_0_14px_rgba(0,168,232,0.8)]"
                        >
                          <path d="M50 20 C36 20, 24 28, 25 48 C26 62, 30 78, 36 84 C40 88, 44 75, 47 66 C49 60, 51 60, 53 66 C56 75, 60 88, 64 84 C70 78, 74 62, 75 48 C76 28, 64 20, 50 20 Z" />
                          <path d="M50 26 C40 26, 32 32, 33 46 C34 56, 38 70, 42 75 C45 78, 48 68, 50 62 C52 68, 55 78, 58 75 C62 70, 66 56, 67 46 C68 32, 60 26, 50 26 Z" strokeDasharray="3 3" opacity="0.6" />
                          <line x1="50" y1="20" x2="50" y2="60" stroke="#00a8e8" strokeDasharray="2 2" opacity="0.5" />
                        </svg>
                        <div className="absolute w-24 h-24 bg-[#00a8e8]/30 rounded-full blur-xl"></div>
                      </div>
                    </div>
                  )}

                  {card.iconType === 'photo' && (
                    <div className="absolute inset-0 pointer-events-none">
                      <img
                        src={card.image}
                        alt={card.fullTitle}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f] via-[#050e1f]/40 to-transparent" />
                    </div>
                  )}

                  {/* Top Bar */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#00a8e8] font-bold">
                      {card.code}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] text-white/70 bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10">
                      <RotateCw className="w-2.5 h-2.5 text-[#00a8e8]" />
                      <span>Flip</span>
                    </span>
                  </div>

                  {/* Bottom: Title & Flip Prompt */}
                  <div className="relative z-10 flex items-end justify-between">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-white leading-tight">
                        {card.titleLine1} <br />
                        {card.titleLine2}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-11 h-11 rounded-full bg-white/10 group-hover:bg-[#00a8e8] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all group-hover:scale-110 shadow-sm">
                        <RotateCw className="w-4 h-4 text-white group-hover:rotate-180 transition-transform duration-500" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* BACK FACE */}
                <div
                  className={`absolute inset-0 w-full h-full rounded-[2rem] overflow-hidden backface-hidden flip-back shadow-2xl p-6 sm:p-7 flex flex-col justify-between bg-gradient-to-br from-[#0c1f44] via-[#071328] to-[#040b17] border border-[#00a8e8]/30 text-white ${
                    cardFlipped ? 'pointer-events-auto z-20' : 'pointer-events-none z-0'
                  }`}
                >
                  {/* Subtle corner light */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#00a8e8]/15 rounded-full blur-2xl pointer-events-none" />

                  {/* Top: Category Tag + Flip Indicator */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest text-[#00a8e8] uppercase font-bold px-2.5 py-1 rounded-full bg-[#00a8e8]/15 border border-[#00a8e8]/30">
                      {card.tag}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setFlippedIndex(null);
                        setHoveredIndex(null);
                      }}
                      className="text-[10px] text-neutral-300 hover:text-white flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full border border-white/15 transition-colors cursor-pointer pointer-events-auto"
                    >
                      <RotateCw className="w-2.5 h-2.5 text-[#00a8e8]" />
                      <span>Flip back</span>
                    </button>
                  </div>

                  {/* Middle: Title, Description & Clinical Highlights */}
                  <div className="relative z-10 space-y-3 my-auto py-2">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
                      {card.fullTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                      {card.description}
                    </p>

                    <div className="space-y-1.5 pt-1">
                      {card.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-neutral-200">
                          <CheckCircle className="w-3.5 h-3.5 text-[#00a8e8] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Timeline & Book CTA */}
                  <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 gap-2">
                    <div className="flex items-center gap-1.5 text-[11px] text-neutral-300 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#00a8e8]" />
                      <span>{card.timeline}</span>
                    </div>

                    <a
                      href={CLINIC_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleBookingClick}
                      className="relative z-30 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1b2e8c] hover:bg-[#00a8e8] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer pointer-events-auto"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Subtext Row + Carousel Arrow Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
        <p className="text-neutral-500 text-xs sm:text-sm max-w-md">
          Discover delighted patient reviews about their comfortable and satisfying dental care experience.
        </p>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            aria-label="Previous service"
            className="w-10 h-10 rounded-full border border-neutral-300 hover:border-neutral-900 text-neutral-700 hover:text-neutral-950 flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next service"
            className="w-10 h-10 rounded-full bg-[#00a8e8] text-white flex items-center justify-center transition-all hover:bg-[#0095d1] cursor-pointer shadow-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

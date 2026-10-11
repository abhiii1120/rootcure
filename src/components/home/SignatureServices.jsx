import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { SIGNATURE_SERVICES } from '../../data/services';

export default function SignatureServices({ onSelectService }) {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const reviewsAvatars = [
    '/images/dr-theresa.jpg',
    '/images/dr-jonas.jpg',
    '/images/dr-albert.jpg'
  ];

  const handlePrev = () => {
    setActiveCardIndex((prev) => (prev === 0 ? SIGNATURE_SERVICES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveCardIndex((prev) => (prev === SIGNATURE_SERVICES.length - 1 ? 0 : prev + 1));
  };

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
            Experience modern dental care delivered with comfort, precision, and attention to detail. Our clinic provides a calm, welcoming environment designed to make every visit stress-free.
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

      {/* 3 Large Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
        {/* Card 1: Teeth Cleaning */}
        <div
          onClick={() => {
            setActiveCardIndex(0);
            onSelectService?.(SIGNATURE_SERVICES[0]);
          }}
          className={`group relative h-[420px] sm:h-[460px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 bg-gradient-to-b from-[#102a5c] to-[#071329] text-white p-7 flex flex-col justify-between ${
            activeCardIndex === 0 ? 'ring-2 ring-[#00a8e8]' : ''
          }`}
        >
          {/* Stylized Tooth graphic */}
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

          <div className="relative z-10">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#00a8e8] font-bold">
              01 / HYGIENE
            </span>
          </div>

          <div className="relative z-10 flex items-end justify-between">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white leading-tight">
                Teeth <br />
                Cleaning
              </h3>
            </div>
            <button
              aria-label="View Teeth Cleaning details"
              className="w-11 h-11 rounded-full bg-white/10 group-hover:bg-[#00a8e8] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all group-hover:scale-110"
            >
              <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
            </button>
          </div>
        </div>

        {/* Card 2: Dental Checkups */}
        <div
          onClick={() => {
            setActiveCardIndex(1);
            onSelectService?.(SIGNATURE_SERVICES[1]);
          }}
          className={`group relative h-[420px] sm:h-[460px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 bg-gradient-to-b from-[#0e244d] to-[#050e1f] text-white p-7 flex flex-col justify-between ${
            activeCardIndex === 1 ? 'ring-2 ring-[#00a8e8]' : ''
          }`}
        >
          {/* Glowing wireframe contour tooth graphic in logo cyan */}
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

          <div className="relative z-10">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#00a8e8] font-bold">
              02 / DIAGNOSTICS
            </span>
          </div>

          <div className="relative z-10 flex items-end justify-between">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white leading-tight">
                Dental <br />
                Checkups
              </h3>
            </div>
            <button
              aria-label="View Dental Checkups details"
              className="w-11 h-11 rounded-full bg-white/10 group-hover:bg-[#00a8e8] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all group-hover:scale-110"
            >
              <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
            </button>
          </div>
        </div>

        {/* Card 3: Dental Veneers */}
        <div
          onClick={() => {
            setActiveCardIndex(2);
            onSelectService?.(SIGNATURE_SERVICES[2]);
          }}
          className={`group relative h-[420px] sm:h-[460px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 bg-[#050e1f] text-white p-7 flex flex-col justify-between ${
            activeCardIndex === 2 ? 'ring-2 ring-[#00a8e8]' : ''
          }`}
        >
          {/* Realistic High-Res Veneers Arch Photo */}
          <div className="absolute inset-0 pointer-events-none">
            <img
              src="/images/dental-veneers.jpg"
              alt="Dental Veneers Restorations"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f] via-[#050e1f]/40 to-transparent" />
          </div>

          <div className="relative z-10">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#00a8e8] font-bold">
              03 / AESTHETICS
            </span>
          </div>

          <div className="relative z-10 flex items-end justify-between">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white leading-tight">
                Dental <br />
                Veneers
              </h3>
            </div>
            <button
              aria-label="View Dental Veneers details"
              className="w-11 h-11 rounded-full bg-white/10 group-hover:bg-[#00a8e8] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all group-hover:scale-110"
            >
              <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
            </button>
          </div>
        </div>
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

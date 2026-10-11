import { useState } from 'react';
import { ArrowUpRight, Calendar, ChevronLeft, ChevronRight, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { HERO_TREATMENTS } from '../../data/services';
import { CLINIC_INFO } from '../../data/clinicInfo';

export default function HomeHero({ onSelectFilter, onOpenDoctor, onOpenBooking }) {
  const [activeTreatmentId, setActiveTreatmentId] = useState('dental-checkups');
  const [hoveredTreatmentId, setHoveredTreatmentId] = useState(null);
  const [sliderIndex, setSliderIndex] = useState(1);

  // Active or hovered treatment object for inspection
  const displayedTreatment =
    HERO_TREATMENTS.find((t) => t.id === (hoveredTreatmentId || activeTreatmentId)) || HERO_TREATMENTS[0];

  const handlePrevSlide = () => {
    setSliderIndex((prev) => (prev === 1 ? 3 : prev - 1));
  };

  const handleNextSlide = () => {
    setSliderIndex((prev) => (prev === 3 ? 1 : prev + 1));
  };

  return (
    <section className="relative w-full pt-20 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full min-h-[640px] lg:min-h-[700px] rounded-[2.2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col justify-between p-6 sm:p-10 lg:p-14 border border-neutral-800/40">
          
          {/* Background Image: Woman Patient with Glasses (SS 4 Reference) */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-patient.jpg"
              alt="Root Cure Multi-Speciality Dental Clinic Patient"
              className="w-full h-full object-cover object-[center_28%] filter brightness-[0.92] contrast-[1.02]"
            />
            {/* Cinematic Gradients for typography legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/55 to-neutral-950/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/30 to-neutral-950/40" />
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
              <span className="text-[11px] font-medium tracking-wide">
                All Dental Solutions Under One Roof
              </span>
            </div>
          </div>

          {/* Hero Main Content: Left Typography & Right Doctor Card + Subtitle */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end my-auto py-8 sm:py-12">
            {/* Left Column: Bold SS 4 Typography */}
            <div className="lg:col-span-7 space-y-3">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-extrabold text-white tracking-tight leading-[0.96] uppercase drop-shadow-md">
                <span className="block">MODERN</span>
                <span className="block">DENTISTRY</span>
                <span className="block">WITH</span>
                <span className="block">GENTLE CARE.</span>
              </h1>
            </div>

            {/* Right Column: Subtitle + Doctor Card + Book Appointment CTA */}
            <div className="lg:col-span-5 flex flex-col justify-end space-y-5 lg:pl-4">
              <p className="text-neutral-200 text-sm sm:text-base leading-relaxed max-w-md font-light drop-shadow">
                Expert dental care for healthy, confident smiles at every age — delivered with comfort, precision, and trust.
              </p>

              {/* Doctor Card Pill matching SS 4 */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-xl border border-white/80 max-w-sm flex items-center gap-3.5 transition-all hover:bg-white hover:scale-[1.02]">
                <img
                  src="/images/dr-ankita.jpg"
                  alt="Dr. Ankita Sarigaonkar"
                  className="w-12 h-12 rounded-xl object-cover shrink-0 border border-neutral-200 shadow-sm"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900 truncate">
                      Dr. Ankita Sarigaonkar
                    </h4>
                  </div>
                  <div className="text-[10px] font-mono font-bold tracking-wider text-[#1b2e8c] uppercase mt-0.5">
                    Cosmetic Surgeon • B.D.S.
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-neutral-500 font-medium mt-0.5">
                    <span>10+ Year Experience</span>
                    <span>•</span>
                    <span className="text-amber-500 font-bold flex items-center gap-0.5">
                      ★ 4.9 Rating
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Theme Colors & Book Appointment */}
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

          {/* Bottom Bar: SS 4 Horizontal Treatment Pills + Interactive Hover Detail Card */}
          <div className="relative z-20 w-full pt-4">
            
            {/* The Horizontal Pills Row matching SS 4 */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/10 pt-4">
              
              {/* Pills List */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full no-scrollbar">
                {HERO_TREATMENTS.map((treatment, idx) => {
                  const isActive = activeTreatmentId === treatment.id;
                  const isHovered = hoveredTreatmentId === treatment.id;

                  return (
                    <div
                      key={treatment.id}
                      className="relative shrink-0"
                      onMouseEnter={() => setHoveredTreatmentId(treatment.id)}
                      onMouseLeave={() => setHoveredTreatmentId(null)}
                    >
                      {/* Floating Hover Preview Card anchored right above this specific pill */}
                      {isHovered && (
                        <div
                          className={`hidden sm:block absolute bottom-full mb-3.5 ${
                            idx === 0
                              ? 'left-0'
                              : idx >= HERO_TREATMENTS.length - 2
                              ? 'right-0'
                              : 'left-1/2 -translate-x-1/2'
                          } z-50 w-72 sm:w-80 p-4 rounded-2xl bg-[#050e1f]/95 backdrop-blur-2xl border border-white/20 shadow-2xl text-left pointer-events-auto animate-in fade-in zoom-in-95 duration-200`}
                        >
                          <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-white/10">
                            <span className="text-[10px] font-mono tracking-widest text-[#00a8e8] uppercase font-bold px-2 py-0.5 rounded-md bg-[#00a8e8]/15 border border-[#00a8e8]/30">
                              {treatment.tagline}
                            </span>
                            <span className="text-[11px] text-neutral-300 font-medium">
                              ⏱ {treatment.duration}
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-white mb-1">
                            {treatment.title}
                          </h4>
                          <p className="text-xs text-neutral-300 font-light leading-relaxed mb-3">
                            {treatment.description}
                          </p>
                          <div className="space-y-1 mb-3">
                            {treatment.highlights?.map((highlight, hIdx) => (
                              <div key={hIdx} className="flex items-center gap-1.5 text-[11px] text-neutral-300">
                                <CheckCircle2 className="w-3 h-3 text-[#00a8e8] shrink-0" />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center justify-between pt-2 border-t border-white/10">
                            <span className="text-[10px] text-neutral-400 font-mono">
                              Zero Pain Protocol
                            </span>
                            <a
                              href={CLINIC_INFO.whatsappUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-bold text-[#00a8e8] hover:text-white transition-colors"
                            >
                              <span>Book Appointment</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          </div>
                          {/* Tooltip Chevron Indicator */}
                          <div
                            className={`absolute top-full -mt-1.5 ${
                              idx === 0
                                ? 'left-6'
                                : idx >= HERO_TREATMENTS.length - 2
                                ? 'right-6'
                                : 'left-1/2 -translate-x-1/2'
                            } w-3 h-3 bg-[#050e1f] border-r border-b border-white/20 rotate-45`}
                          />
                        </div>
                      )}

                      <button
                        onClick={() => {
                          setActiveTreatmentId(treatment.id);
                          onSelectFilter?.(treatment.id);
                        }}
                        className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer select-none flex items-center gap-1.5 ${
                          isActive || isHovered
                            ? 'bg-white text-neutral-900 shadow-lg shadow-white/10 scale-105 font-bold'
                            : 'bg-white/15 hover:bg-white/25 text-white/90 backdrop-blur-md border border-white/10 hover:border-white/25'
                        }`}
                      >
                        <span>{treatment.label}</span>
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Slider Pagination Controls matching SS 4 (< 01 ─── 03 >) */}
              <div className="hidden lg:flex items-center gap-3 text-white/70 text-xs shrink-0 pl-4 select-none">
                <button
                  onClick={handlePrevSlide}
                  aria-label="Previous slide"
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <span className="font-mono text-xs font-bold text-white">
                  0{sliderIndex}
                </span>
                <span className="w-12 h-0.5 bg-white/30 rounded-full relative overflow-hidden">
                  <span
                    className="absolute inset-y-0 bg-white rounded-full transition-all duration-300"
                    style={{
                      left: `${((sliderIndex - 1) / 2) * 50}%`,
                      width: '50%'
                    }}
                  />
                </span>
                <span className="font-mono text-xs text-white/50">
                  03
                </span>
                <button
                  onClick={handleNextSlide}
                  aria-label="Next slide"
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

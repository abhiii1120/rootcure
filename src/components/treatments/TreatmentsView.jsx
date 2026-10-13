import { ArrowUpRight, ArrowRight, Calendar } from 'lucide-react';
import { TREATMENTS_BENTO, CLINICAL_PILLARS } from '../../data/services';
import { CLINIC_INFO } from '../../data/clinicInfo';

export default function TreatmentsView({ onSelectService, onNavigate }) {
  return (
    <div className="pt-24 sm:pt-28 pb-16">
      {/* Hero Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-neutral-200">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#00a8e8] uppercase">
              MODERN HIGH-FIDELITY HEALTHCARE
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-neutral-900 tracking-tight leading-[1.1]">
              The Science of a Bespoke Smile.
            </h1>
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
              Precision clinical protocols meet artisanal aesthetics. We redefine the dental experience through high-texture technology and sensory hospitality.
            </p>
          </div>

          {/* Right Metrics */}
          <div className="flex items-center gap-8 sm:gap-12 shrink-0">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
                15+
              </div>
              <div className="text-[10px] font-semibold text-neutral-500 uppercase tracking-widest mt-1">
                YEARS OF MASTERY
              </div>
            </div>
            <div className="w-px h-12 bg-neutral-200"></div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
                4.9k
              </div>
              <div className="text-[10px] font-semibold text-neutral-500 uppercase tracking-widest mt-1">
                TRANSFORMATIONS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="grid grid-cols-12 gap-6">
          {/* Card 1: Porcelain Veneers (Wide) */}
          <div
            onClick={() => onSelectService(TREATMENTS_BENTO[0])}
            className="col-span-12 lg:col-span-7 relative min-h-[340px] sm:min-h-[400px] rounded-[2.2rem] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src="/images/dental-veneers.jpg"
              alt="Porcelain Veneers"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
            <div className="relative z-10 h-full p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono tracking-widest text-[#00a8e8] uppercase font-bold">
                  RESTORATIVE ART
                </span>
                <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#00a8e8] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <div className="max-w-md space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Porcelain Veneers
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                  Individually layered ceramic restorations designed to mimic the natural optical properties of enamel.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: 3D Mapping */}
          <div
            onClick={() => onSelectService(TREATMENTS_BENTO[1])}
            className="col-span-12 lg:col-span-5 relative min-h-[340px] sm:min-h-[400px] rounded-[2.2rem] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src="/images/digital-mapping.jpg"
              alt="3D Mapping"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
            <div className="relative z-10 h-full p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono tracking-widest text-[#00a8e8] uppercase font-bold">
                  DIAGNOSTICS
                </span>
                <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#00a8e8] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  3D Mapping
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                  Hyper-accurate digital scans for millimeter-perfect treatment planning.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Artisanal Prophylaxis */}
          <div
            onClick={() => onSelectService(TREATMENTS_BENTO[2])}
            className="col-span-12 lg:col-span-5 relative min-h-[340px] sm:min-h-[380px] rounded-[2.2rem] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src="/images/dental-instruments.jpg"
              alt="Artisanal Prophylaxis"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
            <div className="relative z-10 h-full p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono tracking-widest text-[#00a8e8] uppercase font-bold">
                  MAINTENANCE
                </span>
                <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#00a8e8] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Artisanal Prophylaxis
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                  A curated hygienical combi of clinical precision with sensory comfort.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Orthodontic Design */}
          <div
            onClick={() => onSelectService(TREATMENTS_BENTO[3])}
            className="col-span-12 lg:col-span-7 relative min-h-[340px] sm:min-h-[380px] rounded-[2.2rem] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src="/images/orthodontic-aligners.jpg"
              alt="Orthodontic Design"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
            <div className="relative z-10 h-full p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono tracking-widest text-[#00a8e8] uppercase font-bold">
                  ALIGNMENT
                </span>
                <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#00a8e8] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <div className="max-w-md space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Orthodontic Design
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                  Discreet correction protocols utilizing AI-driven structural modeling for optimal facial harmony.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5: Guided Implants (Full Width Feature Card) */}
          <div className="col-span-12 relative min-h-[360px] sm:min-h-[420px] rounded-[2.5rem] overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-300">
            <img
              src="/images/guided-implants.jpg"
              alt="Guided Implants Surgical Navigation"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/70 to-neutral-950/40" />
            <div className="relative z-10 h-full p-8 sm:p-12 flex flex-col justify-between max-w-2xl">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#00a8e8] uppercase block mb-3 font-bold">
                  SURGICAL PRECISION
                </span>
                <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
                  Guided Implants
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light mb-8 max-w-lg">
                  Next-generation osseointegration guided by real-time spatial navigation for unparalleled stability and aesthetics.
                </p>
              </div>

              <div>
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#1b2e8c] hover:bg-[#00a8e8] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 group/btn shadow-lg shadow-[#1b2e8c]/30 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>START BOOKING YOUR APPOINTMENT</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24 py-12 border-t border-b border-neutral-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {CLINICAL_PILLARS.map((pillar, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="font-bold text-xl sm:text-2xl text-neutral-900">
                {pillar.title}
              </h4>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action: "Ready for the Next Evolution of Your Smile?" */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6 my-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-snug">
          Ready for the Next <br className="hidden sm:block" />
          Evolution of Your Smile?
        </h2>
        <p className="text-neutral-600 text-base sm:text-lg max-w-xl mx-auto">
          Join the studio for a comprehensive aesthetic assessment and spatial mapping of your dental health.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#1b2e8c] hover:bg-[#00a8e8] text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all shadow-md inline-flex items-center justify-center gap-2"
          >
            <span>BOOK APPOINTMENT</span>
          </a>
          <button
            onClick={() => onNavigate?.('studio')}
            className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-200 font-bold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer"
          >
            MEET DR. ANKITA
          </button>
        </div>
      </section>
    </div>
  );
}

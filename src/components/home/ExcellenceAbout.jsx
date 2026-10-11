import { ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicInfo';

export default function ExcellenceAbout({ onNavigate }) {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Visual: Dr. Ankita Photo + Clinical Excellence Card */}
        <div className="lg:col-span-6 relative">
          <div className="relative w-full h-[480px] sm:h-[540px] rounded-[2.5rem] bg-[#071529] overflow-hidden flex flex-col justify-end p-6 sm:p-8 shadow-2xl border border-neutral-800">
            {/* Real Doctor Photo with gradient overlay */}
            <img
              src="/images/dr-ankita.jpg"
              alt="Dr. Ankita Sarigaonkar - Founder & Chief Dental Surgeon"
              className="absolute inset-0 w-full h-full object-cover object-top filter brightness-[0.92]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-[#050d1a]/30 to-transparent" />

            {/* Top Verified Doctor Badge */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#00a8e8] animate-pulse"></span>
                <span>Dr. Ankita Sarigaonkar, B.D.S.</span>
              </div>
              <span className="text-[10px] font-mono text-[#00a8e8] font-bold bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                10+ YRS MASTERY
              </span>
            </div>

            {/* Bottom Card */}
            <div className="relative z-10 p-4 sm:p-5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 shadow-xl space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#00a8e8]/25 text-[#00a8e8] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      “Use Your Smile To Change The World”
                    </h4>
                    <p className="text-[10px] text-neutral-300 font-light">
                      All Dental Solutions Under One Roof • Regd. No. A-39477
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Copy + Stats */}
        <div className="lg:col-span-6 space-y-6">
          <div className="text-xs sm:text-sm font-bold tracking-widest text-[#00a8e8] uppercase">
            ABOUT ROOT CURE /
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.08] uppercase">
            EXCELLENCE IN <br />
            DENTISTRY WITH <br />
            <span className="text-[#00a8e8]">COMPASSIONATE</span> CARE
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            At Root Cure Multi-speciality Dental Clinic & Implant Center, Dr. Ankita Sarigaonkar brings gentle touch and state-of-the-art digital technology to every treatment. Specializing in painless single-sitting root canals, invisible clear aligners, aesthetic smile designing, and dental implants.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate?.('studio')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-neutral-900 hover:bg-[#1b2e8c] text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 shadow-md group cursor-pointer"
            >
              <span>Meet Dr. Ankita</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1b2e8c] hover:bg-[#00a8e8] text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 shadow-md cursor-pointer"
            >
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Stats Row */}
          <div className="pt-8 border-t border-neutral-200 grid grid-cols-3 gap-4 sm:gap-6">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#1b2e8c] tracking-tight">
                99%
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-1">
                PATIENT SATISFACTION
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#1b2e8c] tracking-tight">
                10+
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-1">
                YEARS EXPERIENCE
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#1b2e8c] tracking-tight">
                4.9★
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-1">
                PATIENT RATING
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

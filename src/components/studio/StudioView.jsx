import { Check, MessageCircle, Phone, Sparkles, Brain, Microscope, Heart } from 'lucide-react';
import { DOCTORS } from '../../data/doctors';
import { CLINIC_INFO } from '../../data/clinicInfo';
import { ROOTCURE_STANDARDS } from '../../data/services';

export default function StudioView() {
  const doctor = DOCTORS[0]; // Dr. Ankita Sarigaonkar

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      {/* Studio Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="relative min-h-[440px] sm:min-h-[500px] rounded-[2.5rem] overflow-hidden flex flex-col justify-end p-8 sm:p-14 shadow-2xl">
          <img
            src="/images/treatment-suite.jpg"
            alt="Root Cure Multi-Speciality Clinic Interior"
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.88]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/45 to-transparent" />

          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#00a8e8] uppercase">
              ABOUT ROOT CURE & DR. ANKITA
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">
              “Use Your Smile <br />
              To Change The World.”
            </h1>
            <p className="text-neutral-200 text-sm sm:text-base font-light leading-relaxed max-w-xl">
              All dental solutions under one roof. Led by Dr. Ankita Sarigaonkar, we combine 10+ years of clinical mastery, advanced 3D diagnostics, and complete painless patient care.
            </p>
          </div>
        </div>
      </section>

      {/* The Doctor Profile Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Dr. Ankita Sarigaonkar Real Photo Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2.2rem] overflow-hidden shadow-2xl bg-neutral-100 border border-neutral-200/80">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-[480px] sm:h-[540px] object-cover object-top"
              />
              {/* Floating Quote Card */}
              <div className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-white/80">
                <span className="text-[10px] font-mono tracking-widest text-[#00a8e8] uppercase font-bold block mb-1">
                  {doctor.title}
                </span>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">
                  {doctor.name}
                </h3>
                <p className="text-xs font-semibold text-neutral-500 mb-2">
                  {doctor.role}
                </p>
                <p className="text-xs italic text-neutral-700 leading-relaxed">
                  "{doctor.quote}"
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Copy + Clinical Credentials */}
          <div className="lg:col-span-7 space-y-6 lg:pt-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00a8e8]/10 text-[#00a8e8] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Meet The Doctor</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              Dr. Ankita Sarigaonkar
            </h2>

            <p className="text-sm font-semibold text-[#1b2e8c] tracking-wide">
              B.D.S. (Dental & Cosmetic Surgeon) • Regd. No. A-39477
            </p>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              {doctor.bio}
            </p>

            {/* Key Clinical Credentials */}
            <div className="space-y-3 pt-2">
              {doctor.credentials.map((cred, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-neutral-800">
                  <div className="w-5 h-5 rounded-full bg-[#00a8e8]/20 text-[#00a8e8] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{cred}</span>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="pt-6 border-t border-neutral-200 grid grid-cols-2 gap-6 sm:gap-12">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#1b2e8c] tracking-tight">
                  10+
                </div>
                <div className="text-[10px] font-semibold text-neutral-500 uppercase tracking-widest mt-1">
                  YEARS CLINICAL PRACTICE
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#1b2e8c] tracking-tight">
                  5.2k+
                </div>
                <div className="text-[10px] font-semibold text-neutral-500 uppercase tracking-widest mt-1">
                  SMILES TRANSFORMED
                </div>
              </div>
            </div>

            {/* Direct Appointment & Call Buttons */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1b2e8c] hover:bg-[#00a8e8] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#1b2e8c]/20 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Book Appointment</span>
              </a>

              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-neutral-900 text-white font-semibold text-xs tracking-wide hover:bg-neutral-800 transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#00a8e8]" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* THE ROOT CURE STANDARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-[#00a8e8] uppercase font-bold">
            OUR COMMITMENT
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
            The Root Cure Philosophy.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROOTCURE_STANDARDS.map((standard, i) => (
            <div
              key={i}
              className="p-8 rounded-[2rem] bg-white border border-neutral-100 shadow-md hover:shadow-xl transition-all duration-300 space-y-4 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#00a8e8]/15 text-[#00a8e8] flex items-center justify-center">
                {i === 0 && <Brain className="w-6 h-6" />}
                {i === 1 && <Microscope className="w-6 h-6" />}
                {i === 2 && <Heart className="w-6 h-6" />}
              </div>
              <h3 className="font-bold text-xl sm:text-2xl text-neutral-900">
                {standard.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {standard.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

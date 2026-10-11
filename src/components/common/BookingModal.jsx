import { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';
import { DOCTORS } from '../../data/doctors';
import { CLINIC_INFO } from '../../data/clinicInfo';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'root-canal',
    doctor: 'dr-ankita',
    date: '',
    time: '10:00 AM',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Redirect directly to WhatsApp
    window.open(CLINIC_INFO.whatsappUrl, '_blank');
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#05111c] text-white px-6 sm:px-8 py-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 text-neutral-400 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00a8e8]/20 text-[#00a8e8] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Concierge Booking</span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight">Reserve a Private Consultation</h3>
          <p className="text-neutral-300 text-xs sm:text-sm mt-1">
            Experience gentle, bespoke dentistry tailored to your unique anatomy.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Quick Direct Booking Card */}
          <div className="mb-6 p-4 rounded-2xl bg-[#00a8e8]/10 border border-[#00a8e8]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <span className="text-xs font-bold text-[#1b2e8c] block">Priority Clinic Booking</span>
              <span className="text-[11px] text-neutral-600 font-light">Direct appointment with Dr. Ankita's clinic desk • Quick response</span>
            </div>
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#1b2e8c] hover:bg-[#00a8e8] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md shrink-0 transition-transform active:scale-95 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </a>
          </div>

          {submitted ? (
            <div className="py-10 text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-[#00a8e8]/20 text-[#1b2e8c] rounded-full flex items-center justify-center mx-auto ring-8 ring-[#00a8e8]/10">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-neutral-900">Connecting to Clinic Desk...</h4>
              <p className="text-sm text-neutral-600 max-w-xs mx-auto">
                Opening direct appointment desk with Dr. Ankita's team.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Select Treatment
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-800 bg-neutral-50/50 focus:bg-white focus:outline-none focus:border-[#00a8e8]"
                  >
                    <option value="porcelain-veneers">Porcelain Veneers</option>
                    <option value="dental-checkups">Comprehensive Dental Checkup</option>
                    <option value="teeth-cleaning">Artisanal Teeth Cleaning</option>
                    <option value="3d-mapping">3D Craniofacial Mapping</option>
                    <option value="orthodontic-design">Orthodontic Design</option>
                    <option value="guided-implants">Guided Precision Implants</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Preferred Doctor
                  </label>
                  <select
                    value={formData.doctor}
                    onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-800 bg-neutral-50/50 focus:bg-white focus:outline-none focus:border-[#00a8e8]"
                  >
                    {DOCTORS.map((doc) => (
                      <option key={doc.id} value={doc.id}>
                        {doc.name} ({doc.role})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-800 bg-neutral-50/50 focus:bg-white focus:outline-none focus:border-[#00a8e8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Time Window
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-800 bg-neutral-50/50 focus:bg-white focus:outline-none focus:border-[#00a8e8]"
                  >
                    <option value="09:00 AM">09:00 AM - Morning Calm</option>
                    <option value="11:30 AM">11:30 AM - Midday</option>
                    <option value="02:00 PM">02:00 PM - Afternoon</option>
                    <option value="04:30 PM">04:30 PM - Late Twilight</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Eleanor Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-800 bg-neutral-50/50 focus:bg-white focus:outline-none focus:border-[#00a8e8]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="eleanor@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-800 bg-neutral-50/50 focus:bg-white focus:outline-none focus:border-[#00a8e8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-800 bg-neutral-50/50 focus:bg-white focus:outline-none focus:border-[#00a8e8]"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 bg-gradient-to-r from-[#1b2e8c] to-[#00a8e8] hover:opacity-95 text-white font-semibold text-sm rounded-xl transition-all shadow-md active:scale-[0.99] cursor-pointer"
              >
                Confirm Consultation Request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

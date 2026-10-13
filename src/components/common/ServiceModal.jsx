import { X, CheckCircle, Clock, Calendar, Sparkles, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicInfo';

export default function ServiceModal({ service, onClose, onOpenBooking }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-white bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-md transition-colors"
          aria-label="Close treatment detail"
        >
          <X className="w-5 h-5" />
        </button>

        {service.image && (
          <div className="relative h-56 w-full overflow-hidden shrink-0">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-6">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#00a8e8] text-white mb-1.5 shadow-sm">
                {service.category || service.categoryTag || 'CLINICAL PROTOCOL'}
              </span>
              <h2 className="text-2xl font-bold text-white">
                {service.title}
              </h2>
            </div>
          </div>
        )}

        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-neutral-700">
          <p className="text-base text-neutral-700 leading-relaxed">
            "{service.description || service.subtitle}"
          </p>

          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-neutral-900">
              Clinical Protocol Highlights
            </h4>
            <div className="space-y-2.5 text-sm text-neutral-600">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#00a8e8] mt-0.5 shrink-0" />
                <span>Custom digital smile simulation and shade matching prior to treatment</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#00a8e8] mt-0.5 shrink-0" />
                <span>Minimally invasive preservation of natural tooth structure</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#00a8e8] mt-0.5 shrink-0" />
                <span>Relaxing acoustic damping & aromatherapy in private treatment suites</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-4">
            <div>
              <span className="text-[11px] text-neutral-400 block uppercase font-bold">Estimated Timeline</span>
              <span className="text-sm font-semibold text-neutral-900">{service.duration || '1-2 Appointments'}</span>
            </div>
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1b2e8c] hover:bg-[#00a8e8] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

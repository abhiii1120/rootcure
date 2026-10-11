import { X, Clock, User, Share2, BookOpen, ArrowRight } from 'lucide-react';

export default function ArticleModal({ article, onClose, onOpenBooking }) {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-white bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-md transition-colors"
          aria-label="Close article"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image in modal */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden shrink-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#00a8e8] text-white mb-2 shadow-sm">
              {article.category || 'INNOVATION'}
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug">
              {article.title}
            </h2>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-neutral-700">
          <div className="flex items-center justify-between text-xs text-neutral-500 pb-3 border-b border-neutral-100">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#00a8e8]" />
                {article.author || 'Root Cure Clinical Director'}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#00a8e8]" />
                {article.readTime || '5 min read'}
              </span>
            </div>
            <button
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                alert('Article link copied to clipboard!');
              }}
              className="flex items-center gap-1 hover:text-[#00a8e8] transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>

          <p className="text-base sm:text-lg font-serif italic text-neutral-800 leading-relaxed">
            "{article.excerpt}"
          </p>

          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-neutral-600">
            <p>
              {article.content ||
                "At Root Cure Dental, we approach oral health through an uncompromising standard of high-fidelity precision and sensory hospitality. Every clinical protocol is re-engineered around the patient's biological harmony and psychological ease."}
            </p>
            <p>
              By fusing advanced 3D scanning, nanoscale ceramic layering, and biophilic interior atmospheres, our clinic dismantles traditional anxiety and replaces it with enduring confidence.
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-500">
              Published in the <strong>Root Cure Clinical Journal</strong>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-neutral-900 hover:bg-[#00a8e8] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-sm"
            >
              <span>Discuss With A Specialist</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

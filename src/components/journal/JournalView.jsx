import { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { JOURNAL_STATS, JOURNAL_FEATURED, JOURNAL_ARTICLES, JOURNAL_CATEGORIES } from '../../data/articles';

export default function JournalView({ onSelectArticle }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredArticles =
    activeCategory === 'All'
      ? JOURNAL_ARTICLES
      : JOURNAL_ARTICLES.filter((art) => art.category === activeCategory);

  return (
    <div className="pt-24 sm:pt-28 pb-16 animate-in fade-in duration-300">
      {/* Featured Banner Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="relative min-h-[460px] sm:min-h-[520px] rounded-[2.5rem] overflow-hidden flex flex-col justify-end p-8 sm:p-14 shadow-2xl bg-[#081226]">
          <img
            src={JOURNAL_FEATURED.image}
            alt={JOURNAL_FEATURED.title}
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/60 to-transparent" />

          <div className="relative z-10 max-w-2xl space-y-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/20">
                {JOURNAL_FEATURED.badges[0]}
              </span>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#00a8e8] text-white font-semibold">
                {JOURNAL_FEATURED.badges[1]}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.08]">
              {JOURNAL_FEATURED.title}
            </h1>

            <p className="text-neutral-200 text-sm sm:text-base leading-relaxed font-light max-w-lg">
              {JOURNAL_FEATURED.description}
            </p>

            <div className="pt-2">
              <button
                onClick={() => onSelectArticle({ ...JOURNAL_FEATURED, category: 'INNOVATION', excerpt: JOURNAL_FEATURED.description })}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-neutral-950 hover:bg-[#00a8e8] hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md group cursor-pointer"
              >
                <span>{JOURNAL_FEATURED.buttonText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-b border-neutral-200">
          {JOURNAL_STATS.map((stat, i) => (
            <div key={i} className="text-left">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#1b2e8c] tracking-tight">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-neutral-500 uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Insights Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6">
          <div className="space-y-1">
            <span className="text-xs font-bold tracking-widest text-[#00a8e8] uppercase">
              THE JOURNAL
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Latest Insights
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {JOURNAL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeCategory === cat
                    ? 'bg-[#1b2e8c] text-white shadow-sm'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        {activeCategory === 'All' ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Top Row: Article 1 (Large 7 cols) & Article 2 (5 cols) */}
            {JOURNAL_ARTICLES[0] && (
              <div
                onClick={() => onSelectArticle(JOURNAL_ARTICLES[0])}
                className="md:col-span-7 relative min-h-[380px] sm:min-h-[440px] rounded-[2.2rem] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between p-7 sm:p-8 bg-neutral-900 text-white"
              >
                <img
                  src={JOURNAL_ARTICLES[0].image}
                  alt={JOURNAL_ARTICLES[0].title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                <div className="relative z-10 flex justify-between items-start">
                  <span className="text-[10px] font-mono tracking-widest text-[#00a8e8] uppercase font-bold">
                    {JOURNAL_ARTICLES[0].category}
                  </span>
                  <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#00a8e8] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                <div className="relative z-10 space-y-2 max-w-lg">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug">
                    {JOURNAL_ARTICLES[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {JOURNAL_ARTICLES[0].excerpt}
                  </p>
                </div>
              </div>
            )}

            {/* Article 2: The Sensory Connection (5 cols) */}
            {JOURNAL_ARTICLES[1] && (
              <div
                onClick={() => onSelectArticle(JOURNAL_ARTICLES[1])}
                className="md:col-span-5 relative min-h-[380px] sm:min-h-[440px] rounded-[2.2rem] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between p-7 sm:p-8 bg-neutral-900 text-white"
              >
                <img
                  src={JOURNAL_ARTICLES[1].image}
                  alt={JOURNAL_ARTICLES[1].title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                <div className="relative z-10 flex justify-between items-start">
                  <span className="text-[10px] font-mono tracking-widest text-[#00a8e8] uppercase font-bold">
                    {JOURNAL_ARTICLES[1].category}
                  </span>
                  <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#00a8e8] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                <div className="relative z-10 space-y-2">
                  <h3 className="text-xl font-serif font-bold text-white leading-snug">
                    {JOURNAL_ARTICLES[1].title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {JOURNAL_ARTICLES[1].excerpt}
                  </p>
                </div>
              </div>
            )}

            {/* Bottom Row of 3 Cards: 4 cols each */}
            {JOURNAL_ARTICLES.slice(2).map((art) => (
              <div
                key={art.id}
                onClick={() => onSelectArticle(art)}
                className="md:col-span-4 relative min-h-[340px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-6 bg-neutral-900 text-white"
              >
                <img
                  src={art.image}
                  alt={art.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                <div className="relative z-10 flex justify-between items-start">
                  <span className="text-[10px] font-mono tracking-widest text-[#00a8e8] uppercase font-bold">
                    {art.category}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#00a8e8] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div className="relative z-10 space-y-1.5">
                  <h3 className="text-lg font-serif font-bold text-white leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-[11px] text-neutral-300 font-light line-clamp-2">
                    {art.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => onSelectArticle(art)}
                className="relative min-h-[360px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-7 bg-neutral-900 text-white"
              >
                <img
                  src={art.image}
                  alt={art.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                <div className="relative z-10 flex justify-between items-start">
                  <span className="text-[10px] font-mono tracking-widest text-[#00a8e8] uppercase font-bold">
                    {art.category}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#00a8e8] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div className="relative z-10 space-y-2">
                  <h3 className="text-xl font-serif font-bold text-white leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

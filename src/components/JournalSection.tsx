import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, ArrowUpRight, Filter, Sparkles, BookOpen } from 'lucide-react';
import { Article, ARTICLES } from '../data/articles';

interface JournalSectionProps {
  onOpenArticle: (slug: string) => void;
  searchTerm?: string;
  onSearchChange?: (term: string) => void;
}

const CATEGORIES = [
  'All',
  'Technology',
  'Development',
  'Cybersecurity',
  'Creativity',
  'Personal'
] as const;

export const JournalSection: React.FC<JournalSectionProps> = ({
  onOpenArticle,
  searchTerm: externalSearchTerm,
  onSearchChange: externalOnSearchChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [localSearch, setLocalSearch] = useState<string>('');

  const currentSearch = externalSearchTerm !== undefined ? externalSearchTerm : localSearch;
  const setSearch = externalOnSearchChange || setLocalSearch;

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;
      const q = currentSearch.toLowerCase().trim();
      const matchesQuery =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.subtitle.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, currentSearch]);

  return (
    <section id="journal" className="py-24 lg:py-32 bg-[#080B0D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-10">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#F07858] font-sans font-medium">
              <span className="w-2 h-[1px] bg-[#F07858]" />
              <span>THE ARCHIVE</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#F3F0E9] tracking-[-0.02em]">
              Notes from the journey.
            </h2>
            <p className="text-[#AAA9A3] text-sm sm:text-base font-light font-sans leading-relaxed">
              Ideas, experiments, lessons, and discoveries from a life spent learning how things work.
            </p>
          </div>

          {/* Quick Stats or Total Count */}
          <div className="text-xs text-[#AAA9A3] font-mono tabular-nums">
            Showing {filteredArticles.length} of {ARTICLES.length} entries
          </div>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          {/* Category Filter Buttons (Functional Buttons, unboxed styling) */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer rounded-none border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F07858] ${
                    isActive
                      ? 'border-[#F07858] text-[#F07858] bg-[#F07858]/10'
                      : 'border-white/[0.08] text-[#AAA9A3] hover:text-[#F3F0E9] hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Inline Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#AAA9A3]/60" />
            <input
              type="text"
              value={currentSearch}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search essays & notes..."
              className="w-full bg-[#12161A]/60 border border-white/[0.08] focus:border-[#F07858] pl-9 pr-8 py-2 text-xs text-[#F3F0E9] placeholder-[#AAA9A3]/40 focus-visible:outline-none transition-colors"
            />
            {currentSearch && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#AAA9A3] hover:text-[#F3F0E9]"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Editorial Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-white/[0.1] p-12">
            <p className="text-[#AAA9A3] text-sm mb-4">No stories found matching your filter or search criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearch('');
              }}
              className="text-xs text-[#F07858] underline underline-offset-4 tracking-wider uppercase"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => {
              const isFirstReal = article.slug === 'from-curiosity-to-code';

              return (
                <article
                  key={article.slug}
                  onClick={() => onOpenArticle(article.slug)}
                  className={`group relative flex flex-col justify-between border border-white/[0.08] bg-[#0E1216]/50 hover:border-white/20 transition-all duration-300 cursor-pointer overflow-hidden ${
                    isFirstReal ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  {/* Image Container with varied aspect ratios */}
                  <div className={`relative overflow-hidden bg-[#161B22] ${
                    isFirstReal ? 'aspect-[16/9]' : 'aspect-[4/3]'
                  }`}>
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1216] via-transparent to-transparent opacity-80" />

                    {/* Badge Indicator: Real vs Sample */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2 text-[10px] tracking-widest uppercase">
                      {isFirstReal ? (
                        <span className="text-[#F07858] font-medium bg-[#080B0D]/80 backdrop-blur-sm px-2 py-0.5 border border-[#F07858]/30">
                          Primary Story
                        </span>
                      ) : (
                        <span className="text-[#AAA9A3]/80 bg-[#080B0D]/80 backdrop-blur-sm px-2 py-0.5 border border-white/10">
                          Sample Archive Note
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2.5">
                      {/* Category & Read Time (Clean unboxed text metadata) */}
                      <div className="flex items-center gap-2 text-xs text-[#AAA9A3]/70 font-sans">
                        <span className="text-[#F07858]">{article.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{article.readTime}</span>
                        <span aria-hidden="true">·</span>
                        <span>{article.publishedDate}</span>
                      </div>

                      {/* Title */}
                      <h3 className={`font-editorial text-[#F3F0E9] group-hover:text-[#F07858] transition-colors ${
                        isFirstReal ? 'text-2xl sm:text-3xl leading-snug' : 'text-xl leading-snug'
                      }`}>
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-xs sm:text-sm text-[#AAA9A3] line-clamp-3 font-light leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Bottom Action */}
                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs tracking-wider uppercase text-[#AAA9A3] group-hover:text-[#F3F0E9] transition-colors">
                      <span className="flex items-center gap-1.5">
                        <span>Read Entry</span>
                        <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1 text-[#F07858]" />
                      </span>
                      <span className="text-white/30 text-[10px] font-mono tabular-nums">
                        #{String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

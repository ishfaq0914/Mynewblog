import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, BookOpen } from 'lucide-react';
import { Article, ARTICLES } from '../data/articles';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (slug: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = ARTICLES.filter((art) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      art.title.toLowerCase().includes(q) ||
      art.subtitle.toLowerCase().includes(q) ||
      art.excerpt.toLowerCase().includes(q) ||
      art.category.toLowerCase().includes(q)
    );
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#080B0D]/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-[#0E1216] border border-white/[0.12] shadow-2xl overflow-hidden z-10 animate-fade-in">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/[0.08]">
          <Search className="w-4 h-4 text-[#AAA9A3] mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stories, topics, notes (e.g. Linux, security, code)..."
            className="w-full bg-transparent text-sm text-[#F3F0E9] placeholder-[#AAA9A3]/50 focus-visible:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-[#AAA9A3] hover:text-[#F3F0E9] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {results.length === 0 ? (
            <div className="py-8 text-center text-xs text-[#AAA9A3]">
              No articles found matching "{query}".
            </div>
          ) : (
            results.map((art) => (
              <div
                key={art.slug}
                onClick={() => {
                  onSelectArticle(art.slug);
                  onClose();
                }}
                className="group p-3.5 border border-transparent hover:border-white/[0.08] hover:bg-white/[0.03] transition-all cursor-pointer flex items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[10px] text-[#AAA9A3] font-mono uppercase">
                    <span className="text-[#F07858]">{art.category}</span>
                    <span>·</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h4 className="font-editorial text-sm sm:text-base text-[#F3F0E9] group-hover:text-[#F07858] transition-colors">
                    {art.title}
                  </h4>
                  <p className="text-xs text-[#AAA9A3] line-clamp-1 font-light">
                    {art.excerpt}
                  </p>
                </div>

                <ArrowRight className="w-4 h-4 text-[#AAA9A3] group-hover:text-[#F07858] group-hover:translate-x-1 transition-transform shrink-0" />
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-[#080B0D] border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#AAA9A3]/60 font-mono">
          <span>{results.length} entries available</span>
          <span>Press ESC to close</span>
        </div>

      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Share2, 
  Check, 
  Bookmark, 
  ChevronRight, 
  Type, 
  ArrowUp,
  BookOpen
} from 'lucide-react';
import { Article, ARTICLES } from '../data/articles';

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
  onNavigateArticle: (slug: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  onBack,
  onNavigateArticle,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [fontSizeModifier, setFontSizeModifier] = useState<'normal' | 'large'>('normal');

  // Track scroll progress and active chapter section
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Check active chapter
      if (article.sections) {
        for (const section of article.sections) {
          const el = document.getElementById(section.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 200) {
              setActiveSection(section.id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Find other stories for related footer
  const relatedArticles = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <div className="relative min-h-screen bg-[#080B0D] text-[#F3F0E9] pt-20">
      
      {/* Thin Horizontal Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-white/[0.06] z-[60]">
        <div
          className="h-full bg-[#F07858] transition-[width] duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Utility Nav for Article */}
      <div className="border-b border-white/[0.08] bg-[#080B0D]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between text-xs text-[#AAA9A3]">
          
          <button
            onClick={onBack}
            className="group flex items-center gap-2 hover:text-[#F3F0E9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform text-[#F07858]" />
            <span className="uppercase tracking-widest text-[11px]">Back to Journal</span>
          </button>

          {/* Center: Miniature Reading Chapter Indicator */}
          <div className="hidden md:flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#AAA9A3]/60 truncate max-w-sm">
            <span>Reading:</span>
            <span className="text-[#F3F0E9] truncate font-medium">{article.title}</span>
          </div>

          {/* Right Controls: Font Resizer & Copy Link */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setFontSizeModifier(fontSizeModifier === 'normal' ? 'large' : 'normal')}
              className="flex items-center gap-1 hover:text-[#F3F0E9] transition-colors p-1"
              title="Toggle reading font size"
            >
              <Type className="w-3.5 h-3.5 text-[#F07858]" />
              <span className="text-[11px] font-mono">{fontSizeModifier === 'normal' ? 'A' : 'A+'}</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 hover:text-[#F3F0E9] transition-colors p-1"
              title="Copy link to story"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 text-[11px]">Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline text-[11px] uppercase tracking-wider">Share</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Article Header & Editorial Headline */}
      <header className="max-w-4xl mx-auto px-6 pt-12 pb-8 space-y-6 text-center md:text-left">
        
        {/* Category & Date Metadata */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs uppercase tracking-[0.25em] text-[#AAA9A3] font-sans">
          <span className="text-[#F07858] font-medium">{article.category}</span>
          <span aria-hidden="true" className="text-white/20">·</span>
          <span>{article.readTime}</span>
          <span aria-hidden="true" className="text-white/20">·</span>
          <span>{article.publishedDate}</span>
        </div>

        {/* Large Editorial Headline */}
        <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#F3F0E9] leading-[1.12] tracking-[-0.02em] text-balance">
          {article.title}
        </h1>

        {/* Subtitle */}
        {article.subtitle && (
          <p className="text-base sm:text-xl text-[#AAA9A3] font-light leading-relaxed max-w-3xl">
            {article.subtitle}
          </p>
        )}

        {/* Author Byline */}
        <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#F3F0E9] font-medium">
                {article.author.name}
              </div>
              <div className="text-[11px] text-[#AAA9A3]/70 font-sans">
                {article.author.role}
              </div>
            </div>
          </div>

          <div className="text-[11px] tracking-widest uppercase text-[#AAA9A3]/50 font-mono">
            ISSUE 01 · ESSAY
          </div>
        </div>
      </header>

      {/* Full-Width Cover Photograph */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 my-8">
        <div className="relative aspect-[21/9] sm:aspect-[16/7] overflow-hidden bg-[#12161A] border border-white/[0.08]">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D] via-transparent to-transparent opacity-60" />
        </div>
      </div>

      {/* Main Content Area: Sticky Table of Contents + Long-Form Essay */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Clickable Table of Contents (Desktop Sticky) */}
          {article.sections && article.sections.length > 0 && (
            <aside className="lg:col-span-3 sticky top-16 hidden lg:block border-l border-white/[0.08] pl-6 py-2 space-y-4">
              <div className="text-[10px] tracking-[0.25em] uppercase text-[#AAA9A3]/60 font-sans">
                Table of Contents
              </div>
              <nav className="space-y-2 text-xs">
                {article.sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block text-left py-1 text-xs transition-colors cursor-pointer w-full leading-snug ${
                      activeSection === section.id
                        ? 'text-[#F07858] font-medium'
                        : 'text-[#AAA9A3] hover:text-[#F3F0E9]'
                    }`}
                  >
                    <span className="font-mono text-[10px] text-white/30 mr-2">
                      {section.number}
                    </span>
                    {section.title.split(':')[0]}
                  </button>
                ))}
              </nav>
            </aside>
          )}

          {/* Right/Center Column: Comfortable Reading Width */}
          <article className={`lg:col-span-9 max-w-2xl mx-auto space-y-16 prose-editorial ${
            fontSizeModifier === 'large' ? 'text-lg leading-loose' : 'text-base leading-relaxed'
          }`}>

            {/* Mobile TOC Bar */}
            {article.sections && (
              <div className="lg:hidden p-4 border border-white/[0.08] bg-[#12161A]/40 mb-8 space-y-2">
                <div className="text-[10px] tracking-widest uppercase text-[#AAA9A3]/60">Chapters</div>
                <div className="flex flex-wrap gap-2">
                  {article.sections.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className="text-xs px-2.5 py-1 border border-white/10 text-[#AAA9A3] hover:text-[#F07858]"
                    >
                      {sec.number}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Render Each Chapter Section in full detail */}
            {article.sections?.map((section, idx) => (
              <section key={section.id} id={section.id} className="scroll-mt-24 space-y-6">
                
                {/* Numbered Chapter Heading */}
                <div className="space-y-2 border-b border-white/[0.06] pb-4">
                  <div className="text-xs font-mono text-[#F07858] tracking-widest">
                    CHAPTER {section.number}
                  </div>
                  <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#F3F0E9] leading-tight m-0">
                    {section.title}
                  </h2>
                </div>

                {/* Paragraphs with Drop Cap on the First Section */}
                <div className="space-y-6 text-[#DDD9D0] font-sans font-light">
                  {section.content.map((paragraph, pIdx) => (
                    <p
                      key={pIdx}
                      className={
                        idx === 0 && pIdx === 0
                          ? 'first-letter:text-5xl first-letter:font-editorial first-letter:text-[#F07858] first-letter:float-left first-letter:mr-3 first-letter:leading-none'
                          : ''
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Large Pull Quote if present */}
                {section.pullQuote && (
                  <div className="my-10 py-8 border-t border-b border-white/[0.08] text-center px-4">
                    <span className="text-[#F07858] font-editorial text-3xl block leading-none select-none mb-2">“</span>
                    <blockquote className="font-editorial italic text-xl sm:text-2xl text-[#F3F0E9] leading-snug max-w-xl mx-auto">
                      {section.pullQuote}
                    </blockquote>
                  </div>
                )}

                {/* Supporting Image if present */}
                {section.image && (
                  <figure className="my-10 space-y-2">
                    <div className="aspect-[16/9] overflow-hidden bg-[#12161A] border border-white/[0.08]">
                      <img
                        src={section.image.src}
                        alt={section.image.alt}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <figcaption className="text-xs text-[#AAA9A3]/60 italic font-editorial text-center">
                      {section.image.caption}
                    </figcaption>
                  </figure>
                )}

              </section>
            ))}

            {/* Closing Signature Block */}
            <div className="pt-16 border-t border-white/[0.1] text-center space-y-4">
              <div className="text-xs uppercase tracking-[0.25em] text-[#AAA9A3]/50">
                END OF ESSAY
              </div>
              <div className="font-editorial tracking-[0.2em] text-xl sm:text-2xl text-[#F3F0E9] uppercase">
                ISHFAQ SHAFI
              </div>
              <div className="text-xs text-[#AAA9A3] font-light">
                Self-Taught Developer & Security Enthusiast
              </div>
            </div>

            {/* Related Stories Navigation */}
            <div className="pt-16 border-t border-white/[0.08] space-y-6 not-prose">
              <div className="text-xs tracking-[0.25em] uppercase text-[#F07858]">
                More from The Digital Journal
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.slug}
                    onClick={() => {
                      onNavigateArticle(rel.slug);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-5 border border-white/[0.08] hover:border-white/20 bg-[#0E1216]/60 transition-all cursor-pointer group space-y-2"
                  >
                    <div className="text-[10px] text-[#AAA9A3] uppercase tracking-wider">
                      {rel.category} · {rel.readTime}
                    </div>
                    <h4 className="font-editorial text-base text-[#F3F0E9] group-hover:text-[#F07858] transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-xs text-[#AAA9A3] group-hover:text-[#F3F0E9] pt-1">
                      <span>Read Story</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#F07858]" />
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </article>
        </div>
      </main>

    </div>
  );
};

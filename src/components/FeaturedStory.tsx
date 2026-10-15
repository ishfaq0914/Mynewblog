import React from 'react';
import { ArrowRight, Clock, User, Sparkles } from 'lucide-react';
import { Article } from '../data/articles';
import workspaceImage from '../assets/images/workspace_creative_1792059382868.jpg';

interface FeaturedStoryProps {
  article: Article;
  onReadStory: (slug: string) => void;
}

export const FeaturedStory: React.FC<FeaturedStoryProps> = ({ article, onReadStory }) => {
  return (
    <section id="featured-story" className="relative py-20 lg:py-28 border-t border-b border-white/[0.08] bg-[#080B0D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Editorial Split Layout (Left Column / Middle Media / Right Quote) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
          
          {/* Left Column: Metadata & Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Small Label without pill enclosure */}
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#F07858] font-sans font-medium">
                <span className="w-2 h-[1px] bg-[#F07858]" />
                <span>FEATURED STORY</span>
              </div>

              {/* Headline */}
              <h2
                onClick={() => onReadStory(article.slug)}
                className="font-editorial text-2xl sm:text-3xl lg:text-4xl leading-[1.2] text-[#F3F0E9] hover:text-[#F07858] transition-colors cursor-pointer text-balance"
              >
                {article.title}
              </h2>

              {/* Short Description */}
              <p className="text-sm sm:text-base text-[#AAA9A3] leading-relaxed font-light font-sans">
                {article.excerpt}
              </p>
            </div>

            {/* Author, Metadata & Reading CTA */}
            <div className="pt-6 border-t border-white/[0.06] space-y-4">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-[#AAA9A3]">
                <span className="text-[#F3F0E9] font-medium">{article.author.name}</span>
                <span aria-hidden="true" className="text-white/20">·</span>
                <span>{article.category}</span>
                <span aria-hidden="true" className="text-white/20">·</span>
                <span>{article.readTime}</span>
                <span aria-hidden="true" className="text-white/20">·</span>
                <span className="text-white/50">{article.publishedDate}</span>
              </div>

              <div>
                <button
                  onClick={() => onReadStory(article.slug)}
                  className="group inline-flex items-center gap-3 text-xs tracking-[0.18em] uppercase font-medium text-[#F3F0E9] hover:text-[#F07858] transition-colors py-2 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F07858]"
                >
                  <span className="border-b border-white/30 group-hover:border-[#F07858] pb-0.5">Read the Story</span>
                  <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1 text-[#F07858]" />
                </button>
              </div>
            </div>
          </div>

          {/* Middle Column: Large Cinematic Creative Coding Workspace Photograph */}
          <div className="lg:col-span-5 relative group overflow-hidden bg-[#12161A] border border-white/[0.08] min-h-[320px] lg:min-h-[420px]">
            <img
              src={workspaceImage}
              alt="Creative coding workspace with code editor, notebook, and warm ambient light"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Dark gradient scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D]/90 via-[#080B0D]/20 to-transparent pointer-events-none" />
            
            {/* Discrete Image Caption */}
            <div className="absolute bottom-4 left-4 right-4 text-[11px] text-[#AAA9A3]/80 font-sans tracking-wide flex items-center justify-between">
              <span>Studio Desk & Terminal Environment</span>
              <span className="text-white/40">Fig. 00</span>
            </div>
          </div>

          {/* Right Column: Thin Vertical Divider + Short Editorial Quotation */}
          <div className="lg:col-span-2 flex lg:flex-col justify-center items-center lg:items-start pl-0 lg:pl-6 border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-6 lg:pt-0">
            <div className="space-y-3">
              <span className="text-[#F07858] font-editorial text-4xl leading-none select-none">“</span>
              <blockquote className="font-editorial italic text-lg sm:text-xl text-[#F3F0E9]/90 leading-snug">
                The best way to predict the future is to create it.
              </blockquote>
              <div className="text-[11px] tracking-widest uppercase text-[#AAA9A3]/60 font-sans pt-1">
                — Alan Kay
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

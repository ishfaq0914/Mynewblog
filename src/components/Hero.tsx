import React from 'react';
import { ArrowDown, Compass } from 'lucide-react';
import heroImage from '../assets/images/hero_mountain_sunset_1792059347744.jpg';

interface HeroProps {
  onExploreStory: () => void;
  onScrollToJournal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreStory, onScrollToJournal }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-between overflow-hidden bg-[#080B0D]">
      {/* Background Photograph with carefully calibrated dark cinema overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Solitary traveler overlooking misty mountain ridges at dusk sunset"
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic gradient overlays to protect typography and achieve the #080B0D palette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080B0D]/95 via-[#080B0D]/65 to-[#080B0D]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D] via-transparent to-[#080B0D]/60" />
        {/* Subtle warm dusk lighting tint overlay */}
        <div className="absolute inset-0 bg-[#F07858]/[0.03] mix-blend-color" />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 pt-24 pb-16 lg:py-32 flex flex-col justify-center min-h-[90vh]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Oversized Editorial Typography */}
          <div className="lg:col-span-8 space-y-8 animate-fade-in">
            {/* Subtle Publication Header Badge */}
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-[#AAA9A3] uppercase font-sans">
              <span className="w-6 h-[1px] bg-[#F07858]" />
              <span>THE DIGITAL JOURNAL · ISSUE NO. 01</span>
            </div>

            {/* Oversized Headline */}
            <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.03em] text-[#F3F0E9] leading-[1.05] text-balance">
              Curiosity<br />
              Builds<br />
              <span className="text-[#F07858] font-normal italic">What’s Next.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg md:text-xl text-[#AAA9A3] max-w-xl font-sans font-light leading-relaxed tracking-wide text-pretty">
              A self-taught journey through code, cybersecurity, creativity, and the endless pursuit of knowledge.
            </p>

            {/* Primary Action & Handwritten Signature */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-6">
              <button
                onClick={onExploreStory}
                className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 text-xs tracking-[0.18em] uppercase font-medium text-[#F3F0E9] border border-white/20 hover:border-[#F07858] bg-[#080B0D]/40 backdrop-blur-sm hover:bg-[#F07858]/10 transition-all duration-300 rounded-none cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F07858]"
              >
                <span>Explore My Story</span>
                <span className="text-[#F07858] transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>

              {/* Subtle Handwritten-style Signature */}
              <div className="flex items-center gap-3 text-[#AAA9A3]/80 select-none">
                <span className="text-xs uppercase tracking-widest text-[#AAA9A3]/50">Curated by</span>
                <span className="font-signature text-3xl sm:text-4xl text-[#F3F0E9]/90 tracking-wide rotate-[-3deg]">
                  Ishfaq Shafi
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Atmospheric Space (allowing photography to breathe) */}
          <div className="hidden lg:block lg:col-span-4" />
        </div>
      </div>

      {/* Tiny Vertical Chapter Indicator on the Right */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-[#AAA9A3]/50">
        <span className="[writing-mode:vertical-lr] rotate-180">01 / PROLOGUE</span>
        <div className="w-[1px] h-16 bg-white/10" />
        <span className="text-[#F07858] font-mono tabular-nums">2026</span>
      </div>

      {/* Discreet Scroll Indicator on the Left Bottom */}
      <div className="absolute left-6 sm:left-8 bottom-8 z-20 flex items-center gap-3">
        <button
          onClick={onScrollToJournal}
          className="group flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase text-[#AAA9A3]/60 hover:text-[#F3F0E9] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F07858]"
        >
          <ArrowDown className="w-3.5 h-3.5 text-[#F07858] animate-bounce" />
          <span>Scroll to explore</span>
        </button>
      </div>
    </section>
  );
};

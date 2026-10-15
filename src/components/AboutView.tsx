import React from 'react';
import { Mail, Github, Linkedin, ArrowUpRight, Shield, Terminal, Code, Compass } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

interface AboutViewProps {
  onOpenContact: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenContact }) => {
  return (
    <div className="min-h-screen bg-[#080B0D] text-[#F3F0E9] pt-24 pb-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl border-b border-white/[0.08] pb-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#F07858] font-sans font-medium">
            <span className="w-2 h-[1px] bg-[#F07858]" />
            <span>ABOUT THE AUTHOR</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#F3F0E9] tracking-[-0.02em]">
            Always learning.<br />
            <span className="text-[#F07858] italic font-normal">Always building.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#AAA9A3] font-light leading-relaxed">
            The philosophy, background, and ethos behind The Digital Journal by Ishfaq Shafi.
          </p>
        </div>

        {/* Editorial Split: Portrait & Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Portrait Image Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5] overflow-hidden bg-[#12161A] border border-white/[0.08]">
              <img
                src={PROFILE_DATA.portraitImage}
                alt="Ishfaq Shafi working in a contemplative studio workspace"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D]/90 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 text-[11px] text-[#AAA9A3]/80 font-sans tracking-wider flex justify-between">
                <span>Studio & Research Desk</span>
                <span className="font-mono text-white/40">2026</span>
              </div>
            </div>

            {/* Configurable Contact & Social Links */}
            <div className="p-6 border border-white/[0.08] bg-[#0E1216]/50 space-y-4">
              <div className="text-[10px] tracking-[0.25em] uppercase text-[#AAA9A3]/60">
                Direct Channels & Profiles
              </div>
              
              <div className="space-y-3">
                {PROFILE_DATA.socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-xs py-1.5 text-[#AAA9A3] hover:text-[#F07858] border-b border-white/[0.04] transition-colors group"
                  >
                    <span className="font-medium text-[#F3F0E9] group-hover:text-[#F07858]">{link.label}</span>
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      {link.handle}
                      <ArrowUpRight className="w-3 h-3 text-[#AAA9A3] group-hover:text-[#F07858]" />
                    </span>
                  </a>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenContact}
                  className="w-full py-2.5 text-xs uppercase tracking-widest text-center border border-white/20 hover:border-[#F07858] text-[#F3F0E9] hover:bg-[#F07858]/10 transition-colors"
                >
                  Send a Direct Note
                </button>
              </div>
            </div>
          </div>

          {/* Biography & Principles Column */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Biography Paragraphs */}
            <div className="space-y-6 text-[#DDD9D0] text-base sm:text-lg leading-relaxed font-light">
              {PROFILE_DATA.biography.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Core Principles */}
            <div className="space-y-6 pt-8 border-t border-white/[0.08]">
              <div className="text-xs uppercase tracking-[0.25em] text-[#F07858] font-sans font-medium">
                GUIDING PRINCIPLES
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {PROFILE_DATA.principles.map((pr) => (
                  <div key={pr.number} className="p-5 border border-white/[0.06] bg-[#0E1216]/40 space-y-2">
                    <span className="text-[11px] font-mono text-[#F07858] tracking-widest">
                      {pr.number}
                    </span>
                    <h3 className="font-editorial text-lg text-[#F3F0E9]">
                      {pr.title}
                    </h3>
                    <p className="text-xs text-[#AAA9A3] leading-relaxed font-light">
                      {pr.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Quote */}
            <div className="p-6 border-l-2 border-[#F07858] bg-[#12161A]/40 space-y-2">
              <blockquote className="font-editorial italic text-lg sm:text-xl text-[#F3F0E9]">
                “Curiosity is the engine of technical autonomy. When you refuse to treat the machine as a mystery, everything becomes solvable.”
              </blockquote>
              <div className="text-xs tracking-widest uppercase text-[#AAA9A3]/60 font-sans">
                — Ishfaq Shafi
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

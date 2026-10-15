import React from 'react';
import { ArrowUpRight, ArrowUp, Mail, Github, Linkedin, BookOpen } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

interface FooterProps {
  onOpenContact: () => void;
  onNavigate: (tab: string) => void;
  onOpenNetlifyGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenContact,
  onNavigate,
  onOpenNetlifyGuide
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#06080A] text-[#F3F0E9] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Closing Call to Action Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-16 border-b border-white/[0.08]">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#F07858] font-sans font-medium">
              <span className="w-2 h-[1px] bg-[#F07858]" />
              <span>COMMUNICATION & INQUIRIES</span>
            </div>
            
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#F3F0E9] tracking-[-0.02em] leading-tight text-balance">
              Let’s build something meaningful.
            </h2>
            
            <p className="text-sm sm:text-base text-[#AAA9A3] max-w-xl font-light leading-relaxed">
              Whether it’s code, content, or creative ideas — I’m always open to new opportunities, collaborations, and conversations.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-4">
            <button
              onClick={onOpenContact}
              className="px-6 py-3.5 text-xs uppercase tracking-widest font-medium text-[#080B0D] bg-[#F3F0E9] hover:bg-[#F07858] hover:text-[#F3F0E9] transition-all duration-300 cursor-pointer rounded-none"
            >
              Start a Conversation
            </button>
            <span className="text-xs text-[#AAA9A3]/60 font-mono">
              {PROFILE_DATA.email}
            </span>
          </div>
        </div>

        {/* Secondary Navigation & Configurable Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
          
          {/* Col 1: Brand & Publication */}
          <div className="space-y-3 md:col-span-1">
            <div className="text-sm font-semibold tracking-[0.2em] uppercase text-[#F3F0E9]">
              {PROFILE_DATA.name}
            </div>
            <div className="text-[11px] tracking-[0.2em] text-[#AAA9A3]/60 uppercase">
              {PROFILE_DATA.publicationName}
            </div>
            <p className="text-[11px] text-[#AAA9A3]/70 leading-relaxed font-light">
              An independent digital journal dedicated to thoughtful engineering and curiosity.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <div className="text-[10px] tracking-[0.25em] uppercase text-[#AAA9A3]/50">
              Directory
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-[#AAA9A3] hover:text-[#F3F0E9] transition-colors"
                >
                  Home Edition
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('journal')}
                  className="text-[#AAA9A3] hover:text-[#F3F0E9] transition-colors"
                >
                  The Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-[#AAA9A3] hover:text-[#F3F0E9] transition-colors"
                >
                  About the Author
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="text-[#AAA9A3] hover:text-[#F3F0E9] transition-colors"
                >
                  Selected Projects
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Configurable Socials */}
          <div className="space-y-3">
            <div className="text-[10px] tracking-[0.25em] uppercase text-[#AAA9A3]/50">
              Network
            </div>
            <ul className="space-y-2">
              {PROFILE_DATA.socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#AAA9A3] hover:text-[#F07858] transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-white/30" />
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenNetlifyGuide}
                  className="inline-flex items-center gap-1.5 text-[#AAA9A3]/80 hover:text-[#F07858] transition-colors"
                >
                  <span>Netlify & Git Deploy</span>
                  <ArrowUpRight className="w-3 h-3 text-white/30" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Back to Top & Location */}
          <div className="space-y-3 flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-[#AAA9A3] hover:text-[#F3F0E9] transition-colors py-1 group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#F07858] transform group-hover:-translate-y-1 transition-transform" />
            </button>
            <div className="text-[11px] text-[#AAA9A3]/40 font-mono">
              CHARCOAL #080B0D · BURNT CORAL
            </div>
          </div>

        </div>

        {/* Restrained Copyright Line */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#AAA9A3]/60 font-sans">
          <div>
            © {new Date().getFullYear()} {PROFILE_DATA.name.toUpperCase()} · {PROFILE_DATA.publicationName}. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-3">
            <span>Built with React, TypeScript & Vite</span>
            <span aria-hidden="true">·</span>
            <span>Independent Digital Publication</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

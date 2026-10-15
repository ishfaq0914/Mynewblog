import React from 'react';
import { Github, ExternalLink, Code2, Layers, Terminal } from 'lucide-react';
import { SAMPLE_PROJECTS, Project } from '../data/projects';

export const ProjectsView: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#080B0D] text-[#F3F0E9] pt-24 pb-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl border-b border-white/[0.08] pb-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#F07858] font-sans font-medium">
            <span className="w-2 h-[1px] bg-[#F07858]" />
            <span>SELECTED WORK & CASE STUDIES</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#F3F0E9] tracking-[-0.02em]">
            Software, security,<br />
            <span className="text-[#F07858] italic font-normal">& creative systems.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#AAA9A3] font-light leading-relaxed">
            A curated portfolio of software experiments, reconnaissance tools, and digital architecture.
          </p>
          
          {/* Sample projects disclosure notice as requested */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 text-xs text-[#AAA9A3] bg-[#12161A]/60">
            <span className="w-1.5 h-1.5 bg-[#F07858]" />
            <span>Sample projects shown below until custom repositories and destinations are configured.</span>
          </div>
        </div>

        {/* Minimal Image-Led Case Studies Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SAMPLE_PROJECTS.map((project, index) => (
            <article
              key={project.id}
              className="group border border-white/[0.08] bg-[#0E1216]/50 flex flex-col justify-between overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#161B22]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1216] via-transparent to-transparent opacity-80" />
                
                {/* Year & Category Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 text-[10px] tracking-widest uppercase">
                  <span className="text-[#F3F0E9] bg-[#080B0D]/80 backdrop-blur-sm px-2.5 py-1 border border-white/10">
                    {project.category}
                  </span>
                  <span className="text-[#AAA9A3] bg-[#080B0D]/80 backdrop-blur-sm px-2 py-1 border border-white/10 font-mono">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Content Description */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="text-[11px] font-mono text-[#F07858] tracking-widest uppercase">
                    Case Study #{String(index + 1).padStart(2, '0')}
                  </div>
                  
                  <h3 className="font-editorial text-2xl text-[#F3F0E9] group-hover:text-[#F07858] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#AAA9A3]/70 font-mono">
                    {project.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#AAA9A3] font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technology Tags (Clean unboxed inline tags) */}
                <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#AAA9A3]/80">
                    {project.tags.map((tag, tIdx) => (
                      <React.Fragment key={tag}>
                        <span className="text-white/70">{tag}</span>
                        {tIdx < project.tags.length - 1 && (
                          <span aria-hidden="true" className="text-white/20">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Configurable Links */}
                  <div className="flex items-center gap-4 text-xs tracking-wider uppercase pt-2">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#AAA9A3] hover:text-[#F3F0E9] transition-colors group/link"
                      >
                        <Github className="w-3.5 h-3.5 text-[#F07858]" />
                        <span>Source Code</span>
                      </a>
                    )}
                    
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        className="inline-flex items-center gap-1.5 text-[#AAA9A3] hover:text-[#F3F0E9] transition-colors group/link"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#F07858]" />
                        <span>Preview Specs</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};

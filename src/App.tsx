/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedStory } from './components/FeaturedStory';
import { JournalSection } from './components/JournalSection';
import { ArticleView } from './components/ArticleView';
import { AboutView } from './components/AboutView';
import { ProjectsView } from './components/ProjectsView';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { ContactModal } from './components/ContactModal';
import { NetlifyModal } from './components/NetlifyModal';
import { ARTICLES, FEATURED_ARTICLE_SLUG } from './data/articles';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'journal' | 'about' | 'projects'>('home');
  const [activeArticleSlug, setActiveArticleSlug] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isNetlifyGuideOpen, setIsNetlifyGuideOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Handle URL Hash navigation (for direct links and browser back/forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('story/')) {
        const slug = hash.replace('story/', '');
        const exists = ARTICLES.find((a) => a.slug === slug);
        if (exists) {
          setActiveArticleSlug(slug);
        }
      } else if (hash === 'journal') {
        setActiveTab('journal');
        setActiveArticleSlug(null);
      } else if (hash === 'about') {
        setActiveTab('about');
        setActiveArticleSlug(null);
      } else if (hash === 'projects') {
        setActiveTab('projects');
        setActiveArticleSlug(null);
      } else if (hash === 'home' || !hash) {
        setActiveTab('home');
        setActiveArticleSlug(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Global Keyboard Shortcuts (Cmd+K or / to search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      } else if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenArticle = (slug: string) => {
    setActiveArticleSlug(slug);
    window.location.hash = `story/${slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToJournal = () => {
    setActiveArticleSlug(null);
    window.location.hash = 'journal';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab as any);
    setActiveArticleSlug(null);
    window.location.hash = tab === 'home' ? '' : tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreStory = () => {
    handleOpenArticle('from-curiosity-to-code');
  };

  const handleScrollToFeatured = () => {
    const el = document.getElementById('featured-story');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToJournal = () => {
    if (activeTab !== 'home') {
      setActiveTab('home');
    }
    setTimeout(() => {
      const el = document.getElementById('journal');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  // Find the current active article object if reading
  const currentArticle = activeArticleSlug
    ? ARTICLES.find((a) => a.slug === activeArticleSlug) || ARTICLES[0]
    : null;

  const featuredArticle =
    ARTICLES.find((a) => a.slug === FEATURED_ARTICLE_SLUG) || ARTICLES[0];

  return (
    <div className="min-h-screen bg-[#080B0D] text-[#F3F0E9] flex flex-col font-interface selection:bg-[#F07858]/30 selection:text-[#F3F0E9]">
      
      {/* Primary Navigation */}
      <Navbar
        activeTab={activeArticleSlug ? 'journal' : activeTab}
        setActiveTab={handleTabChange}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenArticle={handleOpenArticle}
      />

      {/* Main View Switcher */}
      <div className="flex-1">
        {currentArticle ? (
          /* Dedicated Long-Form Article Reading View */
          <ArticleView
            article={currentArticle}
            onBack={handleBackToJournal}
            onNavigateArticle={handleOpenArticle}
          />
        ) : (
          <>
            {activeTab === 'home' && (
              <>
                {/* 1. Cinematic Hero */}
                <Hero
                  onExploreStory={handleExploreStory}
                  onScrollToJournal={handleScrollToFeatured}
                />

                {/* 2. Editorial Split Featured Story */}
                <FeaturedStory
                  article={featuredArticle}
                  onReadStory={handleOpenArticle}
                />

                {/* 3. Journal Grid with Filters & Search */}
                <JournalSection
                  onOpenArticle={handleOpenArticle}
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                />
              </>
            )}

            {activeTab === 'journal' && (
              <div className="pt-20">
                <JournalSection
                  onOpenArticle={handleOpenArticle}
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                />
              </div>
            )}

            {activeTab === 'about' && (
              <AboutView onOpenContact={() => setIsContactOpen(true)} />
            )}

            {activeTab === 'projects' && (
              <ProjectsView />
            )}
          </>
        )}
      </div>

      {/* Closing Editorial Footer */}
      <Footer
        onOpenContact={() => setIsContactOpen(true)}
        onNavigate={handleTabChange}
        onOpenNetlifyGuide={() => setIsNetlifyGuideOpen(true)}
      />

      {/* Modals & Dialogs */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectArticle={handleOpenArticle}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <NetlifyModal
        isOpen={isNetlifyGuideOpen}
        onClose={() => setIsNetlifyGuideOpen(false)}
      />

    </div>
  );
}

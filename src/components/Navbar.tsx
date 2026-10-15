import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ArrowUpRight, BookOpen, Compass } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSearch: () => void;
  onOpenContact: () => void;
  onOpenArticle: (slug: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenSearch,
  onOpenContact,
  onOpenArticle
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'journal', label: 'Journal' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact', isAction: true },
  ];

  const handleNavClick = (id: string, isAction?: boolean) => {
    if (isAction) {
      onOpenContact();
    } else {
      setActiveTab(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B0D]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5'
          : 'bg-gradient-to-b from-[#080B0D]/80 via-[#080B0D]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
        {/* Brand Zone */}
        <button
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-baseline gap-3 text-left group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F07858]"
        >
          <span className="text-sm font-semibold tracking-[0.2em] text-[#F3F0E9] uppercase transition-colors group-hover:text-[#F07858]">
            ISHFAQ SHAFI
          </span>
          <span className="hidden sm:inline-block text-[11px] font-sans tracking-[0.25em] text-[#AAA9A3]/60 uppercase">
            THE DIGITAL JOURNAL
          </span>
        </button>

        {/* Center/Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id, item.isAction)}
              className={`transition-colors whitespace-nowrap py-1 relative cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F07858] ${
                activeTab === item.id && !item.isAction
                  ? 'text-[#F3F0E9] font-medium'
                  : 'text-[#AAA9A3] hover:text-[#F3F0E9]'
              }`}
            >
              {item.label}
              {activeTab === item.id && !item.isAction && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#F07858]" />
              )}
            </button>
          ))}
        </nav>

        {/* Right Action Zone */}
        <div className="flex items-center gap-3">
          {/* Quick Search */}
          <button
            onClick={onOpenSearch}
            aria-label="Search articles"
            className="p-2 text-[#AAA9A3] hover:text-[#F3F0E9] rounded-lg transition-colors border border-transparent hover:border-white/[0.08] cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F07858]"
            title="Search Journal (Cmd+K / /)"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Quick Read Featured Action */}
          <button
            onClick={() => onOpenArticle('from-curiosity-to-code')}
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#AAA9A3] hover:text-[#F3F0E9] border border-white/[0.08] hover:border-white/[0.2] rounded-md transition-colors cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#F07858]" />
            <span className="tracking-wide">Featured Essay</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-[#AAA9A3] hover:text-[#F3F0E9] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080B0D]/95 backdrop-blur-xl border-b border-white/[0.08] px-6 py-6 space-y-4">
          <div className="text-[11px] font-sans tracking-[0.25em] text-[#AAA9A3]/50 uppercase mb-2">
            THE DIGITAL JOURNAL · ISHFAQ SHAFI
          </div>
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id, item.isAction)}
                className={`text-left text-base py-2 transition-colors flex items-center justify-between ${
                  activeTab === item.id && !item.isAction
                    ? 'text-[#F07858] font-medium'
                    : 'text-[#F3F0E9] hover:text-[#F07858]'
                }`}
              >
                <span>{item.label}</span>
                {item.isAction && <ArrowUpRight className="w-4 h-4 text-[#AAA9A3]" />}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="flex items-center gap-2 text-xs text-[#AAA9A3] hover:text-[#F3F0E9]"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search publication</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenArticle('from-curiosity-to-code');
              }}
              className="text-xs text-[#F07858] hover:underline"
            >
              Read Featured Story →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

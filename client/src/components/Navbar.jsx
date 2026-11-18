import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiMoon, HiSun, HiDownload } from 'react-icons/hi';
import { FaPaperPlane, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme, onOpenCV }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      const sections = NAV_ITEMS.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec) {
          const top = sec.offsetTop - 120;
          if (scrollY >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-nav py-3 shadow-lg shadow-black/10'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#home');
              }}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-[2px] transition-transform duration-300 group-hover:scale-105 shadow-glow-sm">
                <div className="w-full h-full bg-[#070C18] rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 text-lg">
                    LH
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-white dark:text-white light:text-slate-900 group-hover:text-indigo-400 transition-colors">
                  Laiba Hanif
                  <span className="text-pink-500">.</span>
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-semibold -mt-1">
                  Software Engineer &middot; MERN
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-navy-900/60 light:bg-slate-200/60 p-1.5 rounded-full border border-white/5 light:border-slate-300/60 backdrop-blur-md">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href);
                    }}
                    className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-400 hover:text-slate-200 light:text-slate-600 light:hover:text-slate-900'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full -z-10 shadow-sm shadow-indigo-500/50"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Actions: Theme Toggle, CV, Let's Talk & Mobile Menu Button */}
            <div className="flex items-center gap-2.5">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark and light theme"
                className="w-10 h-10 rounded-xl bg-navy-850 light:bg-slate-200/80 border border-white/10 light:border-slate-300 flex items-center justify-center text-slate-300 light:text-slate-700 hover:text-white transition-all hover:scale-105"
                title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
              >
                {theme === 'dark' ? (
                  <HiSun className="w-5 h-5 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
                ) : (
                  <HiMoon className="w-5 h-5 text-indigo-600 transition-transform duration-300" />
                )}
              </button>

              {/* View/Download CV Button */}
              <button
                onClick={onOpenCV}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/5 light:bg-slate-200 border border-white/10 light:border-slate-300 text-slate-200 light:text-slate-800 hover:bg-white/10 transition-all hover:scale-105"
                title="View & Download CV"
              >
                <HiDownload className="w-4 h-4 text-indigo-400" />
                <span>CV</span>
              </button>

              {/* Let's Talk CTA */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#contact');
                }}
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-glow-sm hover:shadow-indigo-500/40 hover:opacity-95 transition-all hover:scale-105 active:scale-95"
              >
                <FaPaperPlane className="w-3 h-3" />
                <span>Let's Talk</span>
              </a>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-xl bg-navy-850 light:bg-slate-200 border border-white/10 light:border-slate-300 flex items-center justify-center text-slate-200 light:text-slate-800 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[70px] z-40 p-4 lg:hidden"
          >
            <div className="bg-[#0B1325]/95 light:bg-white/95 backdrop-blur-2xl rounded-2xl p-5 border border-white/10 light:border-slate-200 shadow-2xl max-w-md mx-auto">
              <div className="flex flex-col gap-1.5">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(item.href);
                      }}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold'
                          : 'text-slate-300 light:text-slate-700 hover:bg-white/5 light:hover:bg-slate-100'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />}
                    </a>
                  );
                })}
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 light:border-slate-200 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCV();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold bg-white/5 light:bg-slate-100 border border-white/10 light:border-slate-300 text-slate-200 light:text-slate-800 flex items-center justify-center gap-2 hover:bg-white/10"
                >
                  <HiDownload className="w-4 h-4 text-indigo-400" />
                  View & Download CV
                </button>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('#contact');
                  }}
                  className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center gap-2 shadow-glow-sm"
                >
                  <FaPaperPlane className="w-3.5 h-3.5" />
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

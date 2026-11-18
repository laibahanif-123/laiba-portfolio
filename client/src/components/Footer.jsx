import React from 'react';
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaEnvelope, FaHeart } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer({ onOpenCV }) {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050811] border-t border-white/10 light:border-slate-200 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#home');
              }}
              className="flex items-center gap-2 mb-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-pink-500 p-[2px] shadow-glow-sm">
                <div className="w-full h-full bg-[#070C18] rounded-[10px] flex items-center justify-center font-extrabold text-white">
                  LH
                </div>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Laiba Hanif<span className="text-pink-500">.</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-6">
              Software Engineering student at COMSATS University Islamabad (2023–2027) &amp; Full Stack MERN Developer. Dedicated to crafting resilient, modern digital software architectures.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-indigo-600 transition-all hover:scale-110"
                title="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#0a66c2] transition-all hover:scale-110"
                title="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#25D366] transition-all hover:scale-110"
                title="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#1dbf73] transition-all hover:scale-110"
                title="Fiverr Freelance Profile"
              >
                <SiFiverr className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-pink-600 transition-all hover:scale-110"
                title="Send Direct Email"
              >
                <FaEnvelope className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-indigo-400 font-bold mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {['home', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact'].map(
                (sec) => (
                  <li key={sec}>
                    <a
                      href={`#${sec}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(`#${sec}`);
                      }}
                      className="text-slate-400 hover:text-indigo-300 capitalize transition-colors"
                    >
                      {sec}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Key Works */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-indigo-400 font-bold mb-4">
              Featured Initiatives
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <span className="text-white font-medium">PakTeeth:</span> Dental Clinic Management &amp; AI
              </li>
              <li>
                <span className="text-white font-medium">Soulmate:</span> Real-time Dating &amp; Matchmaking App
              </li>
              <li>
                <span className="text-white font-medium">HR &amp; Attendance:</span> Enterprise HRMS &amp; Tracking
              </li>
              <li>
                <span className="text-white font-medium">Artisan Coffee:</span> Responsive MERN Storefront
              </li>
              <li>
                <span className="text-white font-medium">Honors:</span> Best Award @ DevelopersHub Corp
              </li>
            </ul>
            <div className="mt-6">
              <button
                onClick={onOpenCV}
                className="text-xs font-bold text-pink-400 hover:text-pink-300 flex items-center gap-1.5 transition-colors"
              >
                <span>Preview Curriculum Vitae &rarr;</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} Laiba Hanif &middot; All Rights Reserved. Built with React.js, Tailwind CSS &amp; Framer Motion.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <FaHeart className="w-3 h-3 text-pink-500 animate-pulse" />
            <span>for Software Engineering Excellence</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

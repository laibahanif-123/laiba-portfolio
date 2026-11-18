import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaFileArrowDown,
  FaEye,
  FaLayerGroup,
  FaAward,
  FaGraduationCap,
  FaCode,
  FaCheck,
  FaCopy,
} from 'react-icons/fa6';
import { SiReact, SiMongodb, SiNodedotjs, SiFiverr } from 'react-icons/si';
import { PERSONAL_INFO, TYPING_PHRASES, STATS } from '../data/portfolioData';

export default function Hero({ onOpenCV, onNotify }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Typing effect
  useEffect(() => {
    const currentPhrase = TYPING_PHRASES[phraseIndex];
    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentPhrase.length) {
      speed = 2200; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
      speed = 400;
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      if (!isDeleting && charIndex === currentPhrase.length) {
        setIsDeleting(true);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
      setCopiedEmail(true);
      onNotify?.('Email copied to clipboard!');
      setTimeout(() => setCopiedEmail(false), 2500);
    });
  };

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="bg-ambient-orb w-[500px] h-[500px] bg-indigo-600 -top-32 -left-32" />
      <div className="bg-ambient-orb w-[600px] h-[600px] bg-purple-600 top-20 right-[-150px]" />
      <div className="bg-ambient-orb w-[400px] h-[400px] bg-pink-600 bottom-0 left-1/3" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Intro & Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-navy-850/90 light:bg-slate-100 border border-indigo-500/30 text-indigo-300 light:text-indigo-700 text-xs font-semibold mb-6 shadow-sm shadow-indigo-500/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>Available for Software Engineering Opportunities & Projects</span>
            </div>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white light:text-slate-900 leading-[1.15] mb-4">
              Hi, I'm{' '}
              <span className="grad-text">Laiba Hanif</span>
            </h1>

            {/* Typing text row */}
            <div className="flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-bold text-slate-300 light:text-slate-800 mb-6 font-mono">
              <span className="text-slate-400 light:text-slate-600 font-sans text-lg sm:text-xl font-normal">
                I am a
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                {TYPING_PHRASES[phraseIndex].slice(0, charIndex)}
              </span>
              <span className="w-0.5 h-7 bg-pink-500 animate-pulse" />
            </div>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg text-slate-300 light:text-slate-600 max-w-2xl leading-relaxed mb-8">
              A <strong>Software Engineering student</strong> (2023–2027) at{' '}
              <span className="text-indigo-400 light:text-indigo-600 font-medium">COMSATS University Islamabad</span>{' '}
              (Sahiwal Campus) with practical experience from <strong>3 industry internships</strong>. Honored with the{' '}
              <span className="text-amber-400 light:text-amber-600 font-medium">Best Award @ DevelopersHub</span>. Passionate
              about building high-performance <strong>MERN Stack</strong> applications and architecting{' '}
              <span className="text-cyan-400 light:text-cyan-600 font-medium">PakTeeth</span>, an AI-powered Dental Clinic
              Management System.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-9 w-full sm:w-auto">
              {/* View Projects */}
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#projects');
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <FaLayerGroup className="w-4 h-4" />
                <span>View Projects</span>
              </a>

              {/* Download CV */}
              <a
                href={PERSONAL_INFO.cvUrl}
                download="Laiba_Hanif_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-navy-850 light:bg-slate-200 border border-white/10 light:border-slate-300 text-slate-100 light:text-slate-900 hover:bg-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FaFileArrowDown className="w-4 h-4 text-indigo-400" />
                <span>Download CV</span>
              </a>

              {/* View CV Modal */}
              <button
                onClick={onOpenCV}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-xs text-slate-300 light:text-slate-700 bg-white/5 light:bg-slate-100 hover:bg-white/10 border border-white/5 light:border-slate-200 transition-all"
                title="Preview CV details online"
              >
                <FaEye className="w-3.5 h-3.5 text-purple-400" />
                <span>Preview CV</span>
              </button>
            </div>

            {/* Social & Contact Strip */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10 light:border-slate-200 w-full">
              <span className="text-xs uppercase tracking-wider text-slate-400 light:text-slate-500 font-semibold">
                Connect:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-navy-850 light:bg-slate-200 border border-white/10 light:border-slate-300 flex items-center justify-center text-slate-300 light:text-slate-700 hover:text-white hover:bg-indigo-600 transition-all hover:scale-110"
                  title="GitHub Profile"
                >
                  <FaGithub className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-navy-850 light:bg-slate-200 border border-white/10 light:border-slate-300 flex items-center justify-center text-slate-300 light:text-slate-700 hover:text-white hover:bg-[#0a66c2] transition-all hover:scale-110"
                  title="LinkedIn Profile"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-navy-850 light:bg-slate-200 border border-white/10 light:border-slate-300 flex items-center justify-center text-slate-300 light:text-slate-700 hover:text-white hover:bg-[#25D366] transition-all hover:scale-110"
                  title="WhatsApp Direct Message"
                >
                  <FaWhatsapp className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-navy-850 light:bg-slate-200 border border-white/10 light:border-slate-300 flex items-center justify-center text-slate-300 light:text-slate-700 hover:text-white hover:bg-[#1dbf73] transition-all hover:scale-110"
                  title="Fiverr Freelance Profile (Placeholder)"
                >
                  <SiFiverr className="w-5 h-5" />
                </a>

                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-850 light:bg-slate-200 border border-white/10 light:border-slate-300 text-xs text-slate-300 light:text-slate-700 hover:text-white transition-all hover:bg-white/10"
                  title="Click to copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <FaCheck className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <FaCopy className="w-3 h-3 text-slate-400" />
                      <span>{PERSONAL_INFO.email}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Avatar with Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-72 sm:w-84 md:w-96 aspect-square">
              {/* Outer Glow Halo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 opacity-40 blur-2xl animate-pulse-glow" />

              {/* Rotating Dashed Border Ring */}
              <div className="absolute -inset-4 rounded-full border border-dashed border-indigo-400/30 animate-spin-slow pointer-events-none" />

              {/* Circular Avatar Container */}
              <div className="relative w-full h-full rounded-full p-2.5 bg-gradient-to-b from-indigo-500/40 via-purple-500/20 to-transparent border border-white/10 backdrop-blur-md overflow-hidden shadow-2xl flex items-center justify-center">
                <img
                  src="/images/avatar.png"
                  alt="Laiba Hanif - Software Engineer & MERN Developer"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    // Fallback stylized monogram if image path fails
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full rounded-full bg-gradient-to-br from-indigo-900 via-purple-900 to-navy-950 flex flex-col items-center justify-center text-white">
                        <span class="text-6xl font-black grad-text">LH</span>
                        <span class="text-xs font-mono uppercase tracking-widest text-indigo-300 mt-2">Laiba Hanif</span>
                      </div>
                    `;
                  }}
                />
              </div>

              {/* Floating Badge 1: Top Left - MERN Stack */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -left-4 sm:-left-6 glass-panel rounded-2xl px-3.5 py-2.5 flex items-center gap-3 shadow-xl border border-indigo-500/30"
              >
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <SiReact className="w-5 h-5 animate-spin-slow" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white light:text-slate-900">MERN Stack</div>
                  <div className="text-[10px] text-slate-400 light:text-slate-600">React &middot; Node &middot; Mongo</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom Right - Best Award Winner */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -right-3 sm:-right-6 glass-panel rounded-2xl px-4 py-2.5 flex items-center gap-3 shadow-xl border border-amber-500/30"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <FaAward className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-amber-400">Best Award Winner</div>
                  <div className="text-[10px] text-slate-300 light:text-slate-600">DevelopersHub Corp</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Metrics / Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-10 border-t border-white/10 light:border-slate-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="glass-panel p-5 rounded-2xl flex items-center gap-4 hover-card-elevate border border-white/5 light:border-slate-200"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 light:text-indigo-600 font-bold text-xl">
                  {stat.icon === 'briefcase' && <FaCode className="w-5 h-5" />}
                  {stat.icon === 'folder' && <FaLayerGroup className="w-5 h-5" />}
                  {stat.icon === 'graduation' && <FaGraduationCap className="w-5 h-5" />}
                  {stat.icon === 'sparkles' && <FaAward className="w-5 h-5" />}
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white light:text-slate-900 tracking-tight flex items-baseline">
                    <span>{stat.value}</span>
                    <span className="text-pink-500 text-xl font-bold ml-0.5">{stat.suffix}</span>
                  </div>
                  <div className="text-xs text-slate-400 light:text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaUniversity,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaAward,
  FaCheckCircle,
  FaLaptopCode,
  FaCompass,
} from 'react-icons/fa';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About({ onOpenCV }) {
  const details = [
    { label: 'Degree', value: PERSONAL_INFO.degree, icon: FaGraduationCap, color: 'text-indigo-400' },
    { label: 'University', value: PERSONAL_INFO.university, icon: FaUniversity, color: 'text-purple-400' },
    { label: 'Degree & Batch', value: `${PERSONAL_INFO.degree} (${PERSONAL_INFO.batch})`, icon: FaLaptopCode, color: 'text-pink-400' },
    { label: 'Location', value: PERSONAL_INFO.location, icon: FaMapMarkerAlt, color: 'text-cyan-400' },
    { label: 'Email', value: PERSONAL_INFO.email, icon: FaEnvelope, color: 'text-emerald-400' },
    { label: 'Honors', value: 'Best Award Winner @ DevelopersHub', icon: FaAward, color: 'text-amber-400' },
  ];

  const highlights = [
    'MERN Stack Web Engineering (MongoDB, Express, React, Node)',
    'AI-Assisted Diagnostics Integration (YOLOv8 + FastAPI Microservices)',
    'Defensive Web Security (OWASP, SQLi/XSS prevention, bcrypt hashing)',
    'Responsive, Mobile-First UI/UX with Tailwind CSS & Framer Motion',
    '3 Software-House Internships with Agile & Git workflows',
    'Object-Oriented Programming (OOP) in C++, Java, and JavaScript',
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-navy-950/40 light:bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
            <FaCompass className="w-3.5 h-3.5" />
            <span>Discover My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight mb-4">
            About <span className="grad-text">Me</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Dedicated Software Engineering student bridging academic theory with industry full-stack practice.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Quick Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 light:border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-indigo-500/20 to-transparent rounded-bl-full pointer-events-none" />

              {/* Header inside card */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-pink-500 p-0.5 shadow-lg">
                  <img
                    src="/images/avatar.png"
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover rounded-[14px]"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white light:text-slate-900">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs font-mono text-indigo-400 font-semibold">{PERSONAL_INFO.title}</p>
                  <span className="inline-block mt-1 text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium border border-emerald-500/20">
                    Open to Work
                  </span>
                </div>
              </div>

              {/* Bio summary */}
              <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-6 border-b border-white/10 light:border-slate-200 pb-6">
                {PERSONAL_INFO.bio}
              </p>

              {/* Details List */}
              <div className="space-y-4">
                {details.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`mt-0.5 p-2 rounded-lg bg-navy-850 light:bg-slate-200/80 ${item.color}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 light:text-slate-500 font-medium">{item.label}</div>
                        <div className="text-sm font-semibold text-slate-200 light:text-slate-800 leading-snug">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Button to view CV */}
              <div className="mt-8 pt-6 border-t border-white/10 light:border-slate-200">
                <button
                  onClick={onOpenCV}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold tracking-wide uppercase bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-glow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  View Full CV & Credentials
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Narrative & Engineering Goals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Mission & Background Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 light:border-slate-200">
              <h3 className="text-2xl font-bold text-white light:text-slate-900 mb-4 flex items-center gap-2.5">
                <span className="text-indigo-400">&#x2756;</span> Engineering Mindset & Professional Goals
              </h3>

              <div className="space-y-4 text-slate-300 light:text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Currently pursuing my <strong>BS in Software Engineering (2023–2027)</strong> at{' '}
                  <span className="text-indigo-400 light:text-indigo-600 font-medium">COMSATS University Islamabad (Sahiwal Campus)</span>,
                  I believe software engineering is not just about writing code, but about crafting resilient, maintainable architectures that solve tangible human challenges.
                </p>
                <p>
                  Through three rigorous internships at <strong>Tech Step IT Training Center</strong>,{' '}
                  <strong>DevelopersHub Corporation</strong> (recognized with the prestigious <em>Best Award</em>), and{' '}
                  <strong>Elevvo Pathways</strong>, I transitioned from foundational UI design to constructing end-to-end full-stack architectures.
                </p>
                <p>
                  Currently, I am architecting <strong>PakTeeth</strong>, a dental clinic management and AI diagnostics platform
                  as my Final Year Project. My goal is to join a progressive engineering team where I can apply my MERN stack proficiency,
                  contribute to high-impact web ecosystems, and continue learning cutting-edge software engineering standards.
                </p>
              </div>

              {/* Core Strengths Checklist */}
              <div className="mt-8 pt-6 border-t border-white/10 light:border-slate-200">
                <h4 className="text-sm uppercase tracking-wider font-bold text-indigo-400 light:text-indigo-600 mb-4">
                  What I Bring to the Table:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 light:text-slate-700">
                      <FaCheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Education Callout Banner */}
            <div className="rounded-3xl p-6 bg-gradient-to-r from-indigo-900/40 via-purple-900/30 to-pink-900/20 border border-indigo-500/20 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs font-mono uppercase text-pink-400 font-bold">Academic Milestone</div>
                <div className="text-lg font-bold text-white light:text-slate-900">
                  COMSATS University Islamabad &middot; BS Software Engineering
                </div>
                <div className="text-xs text-slate-300 light:text-slate-600">
                  Batch 2023–2027 &middot; Currently Pursuing &middot; Final Year Project: PakTeeth
                </div>
              </div>
              <a
                href="#education"
                className="shrink-0 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-all hover:scale-105"
              >
                View Education Details &rarr;
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

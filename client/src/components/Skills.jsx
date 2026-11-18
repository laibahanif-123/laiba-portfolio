import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaPhp,
  FaDatabase,
  FaCode,
  FaServer,
  FaMobileAlt,
  FaShieldAlt,
  FaSearch,
  FaTools,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFastapi,
  SiVercel,
  SiElectron,
  SiFramer,
  SiPostman,
  SiCplusplus,
} from 'react-icons/si';
import { TbApi, TbBrain } from 'react-icons/tb';
import { SKILL_CATEGORIES } from '../data/portfolioData';

// Map icon strings to React Icons
const ICON_MAP = {
  react: FaReact,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  html5: FaHtml5,
  css3: FaCss3Alt,
  bootstrap: FaBootstrap,
  mobile: FaMobileAlt,
  framer: SiFramer,
  nodejs: FaNodeJs,
  express: SiExpress,
  mongodb: SiMongodb,
  api: TbApi,
  mysql: FaDatabase,
  python: FaPython,
  fastapi: SiFastapi,
  php: FaPhp,
  security: FaShieldAlt,
  git: FaGitAlt,
  github: FaGithub,
  vscode: FaCode,
  postman: SiPostman,
  electron: SiElectron,
  code: FaCode,
  algo: TbBrain,
  cpp: SiCplusplus,
  vercel: SiVercel,
  users: FaTools,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract all skills
  const allSkills = SKILL_CATEGORIES.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, categoryId: cat.id, categoryTitle: cat.title }))
  );

  const filteredSkills = allSkills.filter((skill) => {
    const matchesTab = activeTab === 'all' || skill.categoryId === activeTab;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.categoryTitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-3">
            <FaTools className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight mb-4">
            Skills &amp; <span className="grad-text">Expertise</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Proficient in modern full-stack web engineering, API design, database modeling, and software engineering principles.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-navy-850/80 light:bg-slate-200/80 border border-white/10 light:border-slate-300 w-full md:w-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-sm'
                  : 'text-slate-400 light:text-slate-700 hover:text-white light:hover:text-slate-900'
              }`}
            >
              All Skills ({allSkills.length})
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === cat.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-sm'
                    : 'text-slate-400 light:text-slate-700 hover:text-white light:hover:text-slate-900'
                }`}
              >
                {cat.title.split('&')[0].trim()}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5 pointer-events-none" />
            <input
              type="text"
              placeholder="Search skill (e.g. React, Mongo)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-navy-850 light:bg-white border border-white/10 light:border-slate-300 text-slate-200 light:text-slate-800 focus:outline-none focus:border-indigo-500 transition-all placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const Icon = ICON_MAP[skill.icon] || FaCode;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  key={skill.name}
                  className="glass-panel rounded-2xl p-4 sm:p-5 border border-white/5 light:border-slate-200 hover-card-elevate flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm"
                      style={{
                        backgroundColor: `${skill.color}15`,
                        border: `1px solid ${skill.color}35`,
                        color: skill.color,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 light:text-slate-600">
                      {skill.level}%
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white light:text-slate-900 group-hover:text-indigo-400 transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-[10px] text-slate-400 light:text-slate-500 font-mono">
                      {skill.categoryTitle}
                    </span>
                  </div>

                  {/* Proficiency Bar */}
                  <div className="mt-3.5 w-full bg-navy-950 light:bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, #6366f1, ${skill.color})`,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">
            No matching skills found for "{searchQuery}".
          </div>
        )}

        {/* Featured Core Badges Cloud */}
        <div className="mt-14 p-6 glass-panel rounded-3xl border border-white/10 light:border-slate-200 text-center">
          <div className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold mb-3">
            Primary Stack At A Glance
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {[
              'React.js',
              'Node.js',
              'Express.js',
              'MongoDB',
              'Tailwind CSS',
              'JavaScript ES6+',
              'REST APIs',
              'Git & GitHub',
              'FastAPI / Python',
              'YOLOv8',
              'Electron',
              'PHP & MySQL',
              'C++ & Java OOP',
            ].map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 light:bg-slate-100 border border-white/10 light:border-slate-300 text-slate-200 light:text-slate-800 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

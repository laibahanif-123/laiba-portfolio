import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTooth,
  FaCoffee,
  FaUserAstronaut,
  FaUniversity,
  FaHeart,
  FaUsers,
  FaUserCheck,
  FaInfoCircle,
  FaFolderOpen,
  FaCheck,
} from 'react-icons/fa';
import { PROJECTS } from '../data/portfolioData';

// Map project IDs to custom hero icons
const PROJECT_ICONS = {
  pakteeth: FaTooth,
  'coffee-shop': FaCoffee,
  'personal-portfolio': FaUserAstronaut,
  'online-banking': FaUniversity,
  soulmate: FaHeart,
  'hr-portal': FaUsers,
  'attendance-mgmt': FaUserCheck,
};

const FILTER_TABS = [
  { id: 'all', label: 'All Projects' },
  { id: 'mern', label: 'Full Stack MERN' },
  { id: 'ai-fullstack', label: 'AI & Healthcare' },
  { id: 'frontend', label: 'Frontend & UI' },
];

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-navy-950/30 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold mb-3">
            <FaFolderOpen className="w-3.5 h-3.5" />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight mb-4">
            Engineering <span className="grad-text">Projects</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Real-world full-stack web applications, AI-integrated healthcare systems, and security-fortified software.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-md shadow-indigo-600/30 scale-105'
                  : 'bg-navy-850 light:bg-slate-200 text-slate-300 light:text-slate-700 hover:bg-white/10 light:hover:bg-slate-300 border border-white/5 light:border-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const Icon = PROJECT_ICONS[project.id] || FaFolderOpen;
              return (
                <motion.article
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  key={project.id}
                  className="glass-panel rounded-3xl overflow-hidden border border-white/10 light:border-slate-200 hover-card-elevate flex flex-col justify-between group"
                >
                  {/* Card Visual Header */}
                  <div className="relative h-48 bg-gradient-to-br from-indigo-950 via-navy-900 to-purple-950 light:from-slate-100 light:to-slate-200 p-6 flex flex-col justify-between overflow-hidden border-b border-white/10 light:border-slate-200">
                    {/* Decorative abstract glow */}
                    <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-indigo-500/20 via-purple-500/20 to-transparent rounded-full blur-xl pointer-events-none" />

                    {/* Top Row: Category Label & Badge */}
                    <div className="flex items-center justify-between relative z-10">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-300 light:text-indigo-600 font-semibold">
                        {project.categoryLabel}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-full border shadow-sm ${
                          project.badgeType === 'featured'
                            ? 'bg-pink-500/10 text-pink-400 border-pink-500/30'
                            : project.badgeType === 'security'
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                            : 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                        }`}
                      >
                        {project.badge}
                      </span>
                    </div>

                    {/* Center Icon Graphic */}
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 light:bg-white/80 border border-white/20 light:border-slate-300 flex items-center justify-center text-white light:text-slate-800 shadow-xl group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-indigo-400 light:text-indigo-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white light:text-slate-900 leading-snug group-hover:text-indigo-300 transition-colors">
                          {project.title.split('–')[0].trim()}
                        </h3>
                        <p className="text-xs text-slate-400 light:text-slate-600 line-clamp-1">
                          {project.title.split('–')[1]?.trim() || project.categoryLabel}
                        </p>
                      </div>
                    </div>

                    {/* Quick View Details Button Overlay */}
                    <button
                      onClick={() => onSelectProject(project)}
                      className="absolute bottom-3 right-4 z-10 text-[11px] font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-black/60 transition-all"
                    >
                      <FaInfoCircle className="w-3 h-3 text-indigo-400" />
                      <span>Details &amp; Architecture</span>
                    </button>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Highlights preview */}
                      <div className="space-y-1.5 mb-5">
                        {project.highlights.slice(0, 2).map((hl, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-400 light:text-slate-600">
                            <FaCheck className="w-3 h-3 text-emerald-400 mt-0.5 shrink-0" />
                            <span className="line-clamp-2">{hl}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-navy-850 light:bg-slate-200 border border-white/5 light:border-slate-300 text-slate-300 light:text-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer: Live Demo & GitHub Buttons */}
                    <div className="pt-4 border-t border-white/10 light:border-slate-200 flex items-center justify-between gap-3">
                      {/* GitHub Button */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold bg-white/5 light:bg-slate-200 border border-white/10 light:border-slate-300 text-slate-200 light:text-slate-800 hover:bg-white/10 transition-all hover:scale-[1.02]"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        <span>GitHub Repo</span>
                      </a>

                      {/* Live Demo / Architecture Modal Button */}
                      <button
                        onClick={() => onSelectProject(project)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-glow-sm hover:opacity-95 transition-all hover:scale-[1.02]"
                      >
                        <FaExternalLinkAlt className="w-3 h-3" />
                        <span>Live Demo / Info</span>
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

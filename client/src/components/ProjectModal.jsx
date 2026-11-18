import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaTimes,
  FaGithub,
  FaExternalLinkAlt,
  FaCheck,
  FaLaptopCode,
  FaInfoCircle,
  FaLayerGroup,
  FaShieldAlt,
} from 'react-icons/fa';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-[#0B1325] light:bg-white rounded-3xl border border-white/10 light:border-slate-300 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="p-6 border-b border-white/10 light:border-slate-200 flex items-center justify-between bg-navy-900/60 light:bg-slate-100/60">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-bold">
                {project.categoryLabel}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-white/5 light:bg-slate-200 flex items-center justify-center text-slate-400 hover:text-white light:hover:text-slate-900 transition-colors"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            {/* Status note banner */}
            {project.statusNote && (
              <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 light:text-indigo-700 text-xs sm:text-sm flex items-start gap-3">
                <FaInfoCircle className="w-4 h-4 mt-0.5 shrink-0 text-indigo-400" />
                <div>
                  <span className="font-bold">Project Status: </span>
                  {project.statusNote}
                </div>
              </div>
            )}

            {/* Overview */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 light:text-slate-500 mb-2 font-mono">
                Project Overview
              </h4>
              <p className="text-sm sm:text-base text-slate-200 light:text-slate-700 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 light:text-slate-500 mb-3 font-mono flex items-center gap-1.5">
                <FaLayerGroup className="w-3.5 h-3.5 text-indigo-400" />
                Key Engineering &amp; Architectural Highlights
              </h4>
              <div className="space-y-2.5">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 light:text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mt-0.5 shrink-0">
                      <FaCheck className="w-2.5 h-2.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 light:text-slate-500 mb-3 font-mono flex items-center gap-1.5">
                <FaLaptopCode className="w-3.5 h-3.5 text-purple-400" />
                Technologies &amp; Libraries Mastered
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-navy-850 light:bg-slate-100 border border-white/10 light:border-slate-300 text-slate-200 light:text-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-white/10 light:border-slate-200 bg-navy-900/60 light:bg-slate-100/60 flex flex-wrap items-center justify-between gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/5 light:bg-slate-200 border border-white/10 light:border-slate-300 text-white light:text-slate-900 hover:bg-white/10 transition-colors"
            >
              <FaGithub className="w-4 h-4" />
              <span>Explore GitHub Repository</span>
            </a>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white light:hover:text-slate-900"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-glow-sm hover:opacity-95"
              >
                Inquire About Project
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

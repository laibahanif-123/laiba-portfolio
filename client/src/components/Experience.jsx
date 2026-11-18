import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaTrophy, FaBuilding, FaCheck } from 'react-icons/fa';
import { EXPERIENCES } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
            <FaBriefcase className="w-3.5 h-3.5" />
            <span>Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight mb-4">
            Professional <span className="grad-text">Experience</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Hands-on software-house engineering experience across three industry internships.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Bar */}
          <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Icon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-navy-950 light:bg-white border-2 border-indigo-500 flex items-center justify-center z-10 shadow-glow-sm">
                    {exp.award ? (
                      <FaTrophy className="w-4 h-4 text-amber-400" />
                    ) : (
                      <FaBriefcase className="w-3.5 h-3.5 text-indigo-400" />
                    )}
                  </div>

                  {/* Content Card (Left or Right on desktop) */}
                  <div className="ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] w-full">
                    <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 light:border-slate-200 hover-card-elevate">
                      {/* Award Badge (if present) */}
                      {exp.award && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-3 shadow-sm">
                          <FaTrophy className="w-3.5 h-3.5" />
                          <span>{exp.award}</span>
                        </div>
                      )}

                      {/* Header */}
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold text-white light:text-slate-900">{exp.role}</h3>
                        <span className="inline-flex items-center gap-1 text-xs font-mono text-indigo-400 light:text-indigo-600 font-semibold">
                          <FaCalendarAlt className="w-3 h-3" />
                          {exp.period}
                        </span>
                      </div>

                      {/* Company Name */}
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 light:text-slate-700 mb-4">
                        <FaBuilding className="text-purple-400" />
                        <span>{exp.company}</span>
                        <span className="text-slate-500">&bull;</span>
                        <span className="text-slate-400">{exp.duration}</span>
                      </div>

                      {/* Bullet Highlights */}
                      <div className="space-y-2 mb-5">
                        {exp.highlights.map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 light:text-slate-600">
                            <FaCheck className="w-3.5 h-3.5 text-emerald-400 mt-1 shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10 light:border-slate-200">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-navy-850 light:bg-slate-200 text-slate-300 light:text-slate-700 border border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

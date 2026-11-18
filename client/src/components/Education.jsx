import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaCheckCircle, FaBookOpen } from 'react-icons/fa';
import { EDUCATION } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-navy-950/40 light:bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-3">
            <FaGraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight mb-4">
            Education &amp; <span className="grad-text">Qualifications</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Formal Software Engineering degree program combined with strong science and mathematics foundations.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`glass-panel rounded-3xl p-6 sm:p-7 border hover-card-elevate flex flex-col justify-between ${
                idx === 0
                  ? 'border-indigo-500/40 relative shadow-glow-sm'
                  : 'border-white/10 light:border-slate-200'
              }`}
            >
              <div>
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                      idx === 0
                        ? 'bg-pink-500/10 text-pink-400 border-pink-500/30'
                        : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30'
                    }`}
                  >
                    {edu.status}
                  </span>
                  <span className="text-xs font-mono text-slate-400 light:text-slate-500 flex items-center gap-1 font-semibold">
                    <FaCalendarAlt className="w-3 h-3" />
                    {edu.period}
                  </span>
                </div>

                {/* Degree Title */}
                <h3 className="text-lg font-bold text-white light:text-slate-900 leading-snug mb-2">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 light:text-indigo-600 mb-4">
                  <FaUniversity className="w-3.5 h-3.5 shrink-0" />
                  <span>{edu.institution}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-5">
                  {edu.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-white/10 light:border-slate-200 space-y-2">
                {edu.highlights.map((hl, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400 light:text-slate-600">
                    <FaCheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

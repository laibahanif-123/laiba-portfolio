import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaAward, FaCalendarAlt, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';
import { CERTIFICATIONS } from '../data/portfolioData';

export default function Certifications({ onSelectCert }) {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
            <FaAward className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight mb-4">
            Honors &amp; <span className="grad-text">Certifications</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Recognized industry achievements including the prestigious Best Award from DevelopersHub Corporation.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 light:border-slate-200 hover-card-elevate flex flex-col justify-between group"
            >
              <div>
                {/* Certificate Visual Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500/20 to-purple-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    {cert.award?.includes('Best') ? (
                      <FaAward className="w-6 h-6 text-amber-400" />
                    ) : (
                      <FaCertificate className="w-6 h-6 text-indigo-400" />
                    )}
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${cert.awardColor}`}>
                    {cert.award || 'Verified Credential'}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-base font-bold text-white light:text-slate-900 leading-snug mb-1 group-hover:text-indigo-300 transition-colors">
                  {cert.title}
                </h3>
                <div className="text-xs font-semibold text-indigo-400 light:text-indigo-600 mb-2">
                  {cert.issuer}
                </div>

                {/* Date & Credential ID */}
                <div className="flex items-center gap-3 text-xs text-slate-400 light:text-slate-500 font-mono mb-4">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="w-3 h-3" />
                    {cert.date}
                  </span>
                  <span>&bull;</span>
                  <span>ID: {cert.credentialId}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Card Action */}
              <div className="pt-4 border-t border-white/10 light:border-slate-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <FaCheckCircle className="w-3.5 h-3.5" />
                  Verified Completion
                </span>
                <button
                  onClick={() => onSelectCert(cert)}
                  className="text-xs font-bold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 hover:underline"
                >
                  <span>Preview</span>
                  <FaExternalLinkAlt className="w-2.5 h-2.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

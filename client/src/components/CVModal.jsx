import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaTimes,
  FaFilePdf,
  FaPrint,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaTrophy,
  FaCheck,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

export default function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-[#0B1325] light:bg-white rounded-3xl border border-white/10 light:border-slate-300 shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="p-5 sm:p-6 border-b border-white/10 light:border-slate-200 flex items-center justify-between bg-navy-900/80 light:bg-slate-100/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white">
                <FaFilePdf className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white light:text-slate-900">
                  Curriculum Vitae &middot; Laiba Hanif
                </h3>
                <span className="text-xs text-indigo-400 font-mono">
                  Software Engineering Student &middot; MERN Stack Developer
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Direct PDF Download button */}
              <a
                href={PERSONAL_INFO.cvUrl}
                download="Laiba_Hanif_Resume.pdf"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-glow-sm hover:scale-105 transition-all"
              >
                <FaFilePdf className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-xl bg-white/5 light:bg-slate-200 flex items-center justify-center text-slate-400 hover:text-white light:hover:text-slate-900 transition-colors"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* CV Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-200 light:text-slate-800 text-sm">
            {/* Header info */}
            <div className="border-b border-white/10 light:border-slate-200 pb-5">
              <h2 className="text-2xl font-black text-white light:text-slate-900 mb-1">{PERSONAL_INFO.name}</h2>
              <div className="text-sm font-semibold text-indigo-400 light:text-indigo-600 mb-2">
                {PERSONAL_INFO.title} &middot; BS Software Engineering (2023–2027)
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400 light:text-slate-600 font-mono">
                <span className="flex items-center gap-1">
                  <FaMapMarkerAlt className="w-3 h-3 text-pink-400" />
                  {PERSONAL_INFO.location}
                </span>
                <span className="flex items-center gap-1">
                  <FaPhone className="w-3 h-3 text-emerald-400" />
                  {PERSONAL_INFO.phone}
                </span>
                <span className="flex items-center gap-1">
                  <FaEnvelope className="w-3 h-3 text-indigo-400" />
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-indigo-400 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                Professional Summary
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Technical Skills Overview */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-indigo-400 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                Technical Competencies
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-navy-850 light:bg-slate-100 border border-white/5">
                  <span className="font-bold text-white light:text-slate-900 block mb-1">Frontend &amp; UI:</span>
                  <span className="text-slate-400 light:text-slate-600">
                    React.js, JavaScript (ES6+), Tailwind CSS, Bootstrap 5, HTML5, CSS3, Responsive Design
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-navy-850 light:bg-slate-100 border border-white/5">
                  <span className="font-bold text-white light:text-slate-900 block mb-1">Backend &amp; Databases:</span>
                  <span className="text-slate-400 light:text-slate-600">
                    Node.js, Express.js, MongoDB (Mongoose), RESTful APIs, MySQL, Python (FastAPI), PHP
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-navy-850 light:bg-slate-100 border border-white/5">
                  <span className="font-bold text-white light:text-slate-900 block mb-1">Tools &amp; Practices:</span>
                  <span className="text-slate-400 light:text-slate-600">
                    Git, GitHub, VS Code, Postman, Electron, OWASP Security, OOP Architecture
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-navy-850 light:bg-slate-100 border border-white/5">
                  <span className="font-bold text-white light:text-slate-900 block mb-1">Core Fundamentals:</span>
                  <span className="text-slate-400 light:text-slate-600">
                    Data Structures &amp; Algorithms, C++, Java, Software Requirements Engineering
                  </span>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-indigo-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                Work Experience (3 Internships)
              </h4>
              <div className="space-y-4">
                {EXPERIENCES.map((exp, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-navy-850 light:bg-slate-100 border border-white/5">
                    <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                      <span className="font-bold text-white light:text-slate-900">{exp.role}</span>
                      <span className="text-xs font-mono text-indigo-400 font-semibold">{exp.period}</span>
                    </div>
                    <div className="text-xs text-purple-400 font-semibold mb-2">
                      {exp.company} {exp.award && <span className="text-amber-400 font-bold ml-2">({exp.award})</span>}
                    </div>
                    <ul className="space-y-1 text-xs text-slate-300 light:text-slate-600 list-disc list-inside">
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-indigo-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                Education
              </h4>
              <div className="space-y-3">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-start text-xs border-b border-white/5 pb-2">
                    <div>
                      <div className="font-bold text-white light:text-slate-900">{edu.degree}</div>
                      <div className="text-slate-400 light:text-slate-600">{edu.institution}</div>
                    </div>
                    <div className="text-right font-mono text-slate-400 light:text-slate-500">
                      <div>{edu.period}</div>
                      <div className="text-indigo-400 font-semibold">{edu.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-indigo-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                Honors &amp; Certifications
              </h4>
              <div className="space-y-2 text-xs">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.id} className="flex items-center gap-2 text-slate-300 light:text-slate-700">
                    <FaCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>
                      <strong>{cert.title}</strong> &ndash; {cert.issuer} ({cert.date})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="p-4 sm:p-5 border-t border-white/10 light:border-slate-200 bg-navy-900/80 light:bg-slate-100/80 flex items-center justify-between">
            <span className="text-xs text-slate-400 light:text-slate-500">
              Verified document for software engineering internships and freelance contracts.
            </span>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.cvUrl}
                download="Laiba_Hanif_Resume.pdf"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-glow-sm hover:scale-105 transition-all"
              >
                Download PDF
              </a>
              <button
                onClick={onClose}
                className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white light:hover:text-slate-900"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

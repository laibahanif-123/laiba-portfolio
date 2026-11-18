import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaShieldAlt, FaMobileAlt, FaLayerGroup } from 'react-icons/fa';
import { SERVICES } from '../data/portfolioData';

const ICONS = {
  layers: FaLayerGroup,
  layout: FaMobileAlt,
  server: FaServer,
  shield: FaShieldAlt,
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-navy-950/20 light:bg-slate-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
            <FaLaptopCode className="w-3.5 h-3.5" />
            <span>Specialized Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight mb-4">
            Services &amp; <span className="grad-text">Expertise</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Engineering robust digital web experiences tailored for scalability, performance, and clean maintainability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv, idx) => {
            const Icon = ICONS[srv.icon] || FaLaptopCode;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 light:border-slate-200 hover-card-elevate flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 light:text-indigo-600 mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white light:text-slate-900 mb-3 group-hover:text-indigo-400 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                    {srv.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10 light:border-slate-200">
                  {srv.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-navy-850 light:bg-slate-200 text-slate-300 light:text-slate-700 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

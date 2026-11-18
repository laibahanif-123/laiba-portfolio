import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaInfoCircle } from 'react-icons/fa';

export default function Toast({ toast, onClose }) {
  if (!toast.show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#0B1325]/95 light:bg-white/95 backdrop-blur-xl border border-indigo-500/30 text-white light:text-slate-900 shadow-2xl text-xs sm:text-sm font-semibold"
      >
        <FaCheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
        <span>{toast.message}</span>
      </motion.div>
    </AnimatePresence>
  );
}

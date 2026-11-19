import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaCopy,
  FaWhatsapp,
  FaGithub,
  FaLinkedinIn,
} from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact({ onNotify }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
      setCopiedEmail(true);
      onNotify?.('Email address copied to clipboard!');
      setTimeout(() => setCopiedEmail(false), 2500);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#6366f1', '#a855f7', '#ec4899', '#10b981'],
      });
    } catch (e) {
      // Ignore if canvas-confetti is unavailable
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Please fill in all required fields (Name, Email, Message).',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Please enter a valid email address.',
      });
      return;
    }

    setStatus({ submitting: true, success: false, error: false, message: '' });

    // Send to backend /api/contact → Express → MongoDB
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || 'Portfolio Inquiry',
          message: formData.message.trim(),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // ✅ Successfully saved to MongoDB (or memory fallback on server)
        setStatus({
          submitting: false,
          success: true,
          error: false,
          message: `Thank you, ${formData.name}! Your message has been received. I will respond to you at ${formData.email} within 24 hours.`,
        });
        triggerConfetti();
        onNotify?.(`Message sent successfully from ${formData.name}!`);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Server returned an error
        setStatus({
          submitting: false,
          success: false,
          error: true,
          message: data.message || 'Failed to send message. Please try again.',
        });
      }
    } catch (err) {
      // Network error – backend not running
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Could not reach the server. Please email me directly at ' + (window.__PERSONAL_EMAIL__ || 'anshaneef919@gmail.com'),
      });
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-navy-950/40 light:bg-slate-50/60">
      {/* Ambient background glow */}
      <div className="bg-ambient-orb w-[500px] h-[500px] bg-purple-600 -bottom-32 -right-32" />
      <div className="bg-ambient-orb w-[450px] h-[450px] bg-indigo-600 top-20 left-[-150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold mb-3">
            <FaPaperPlane className="w-3.5 h-3.5" />
            <span>Initiate Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight mb-4">
            Get In <span className="grad-text">Touch</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Whether you have an internship opportunity, freelance project, or full-stack software inquiry, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Email Card */}
            <div
              onClick={handleCopyEmail}
              className="glass-panel p-5 rounded-2xl border border-white/10 light:border-slate-200 hover-card-elevate cursor-pointer flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 light:text-slate-500 font-medium">Email Address</div>
                  <div className="text-sm font-semibold text-white light:text-slate-900">{PERSONAL_INFO.email}</div>
                </div>
              </div>
              <button
                className="text-xs text-indigo-400 flex items-center gap-1 font-semibold group-hover:underline"
                title="Copy email"
              >
                {copiedEmail ? <span className="text-emerald-400">Copied!</span> : <><FaCopy className="w-3 h-3" /> Copy</>}
              </button>
            </div>

            {/* WhatsApp & Phone Card */}
            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-5 rounded-2xl border border-white/10 light:border-slate-200 hover-card-elevate flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <FaWhatsapp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 light:text-slate-500 font-medium">WhatsApp / Phone</div>
                  <div className="text-sm font-semibold text-white light:text-slate-900">{PERSONAL_INFO.phone}</div>
                </div>
              </div>
              <span className="text-xs text-emerald-400 font-semibold group-hover:underline">Chat &rarr;</span>
            </a>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-5 rounded-2xl border border-white/10 light:border-slate-200 hover-card-elevate flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0a66c2]/10 border border-[#0a66c2]/30 flex items-center justify-center text-[#0a66c2] group-hover:scale-110 transition-transform">
                  <FaLinkedinIn className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 light:text-slate-500 font-medium">LinkedIn Network</div>
                  <div className="text-sm font-semibold text-white light:text-slate-900">linkedin.com/in/laibahanif</div>
                </div>
              </div>
              <span className="text-xs text-indigo-400 font-semibold group-hover:underline">Connect &rarr;</span>
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-5 rounded-2xl border border-white/10 light:border-slate-200 hover-card-elevate flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white light:text-slate-800 group-hover:scale-110 transition-transform">
                  <FaGithub className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 light:text-slate-500 font-medium">GitHub Repositories</div>
                  <div className="text-sm font-semibold text-white light:text-slate-900">github.com/laibahanif-123</div>
                </div>
              </div>
              <span className="text-xs text-indigo-400 font-semibold group-hover:underline">Explore &rarr;</span>
            </a>

            {/* Fiverr Freelance Profile Card */}
            <a
              href={PERSONAL_INFO.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-5 rounded-2xl border border-white/10 light:border-slate-200 hover-card-elevate flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1dbf73]/10 border border-[#1dbf73]/30 flex items-center justify-center text-[#1dbf73] group-hover:scale-110 transition-transform">
                  <SiFiverr className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 light:text-slate-500 font-medium">Fiverr Freelance Profile</div>
                  <div className="text-sm font-semibold text-white light:text-slate-900">fiverr.com/laibahanif_dev</div>
                </div>
              </div>
              <span className="text-xs text-[#1dbf73] font-semibold group-hover:underline">Hire &rarr;</span>
            </a>

            {/* Location Card */}
            <div className="glass-panel p-5 rounded-2xl border border-white/10 light:border-slate-200 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
                <FaMapMarkerAlt className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 light:text-slate-500 font-medium">Physical Location</div>
                <div className="text-sm font-semibold text-white light:text-slate-900">{PERSONAL_INFO.location}</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 light:border-slate-200">
              <h3 className="text-xl font-bold text-white light:text-slate-900 mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 mb-6">
                Fill out the form below. I will personally reply within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1.5">
                      Your Full Name <span className="text-pink-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe / Tech Recruiter"
                      className="w-full px-4 py-3 rounded-xl bg-navy-850 light:bg-white border border-white/10 light:border-slate-300 text-sm text-white light:text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-500"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1.5">
                      Email Address <span className="text-pink-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-navy-850 light:bg-white border border-white/10 light:border-slate-300 text-sm text-white light:text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-500"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1.5">
                    Subject / Project Topic
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineering Opportunity / MERN Project"
                    className="w-full px-4 py-3 rounded-xl bg-navy-850 light:bg-white border border-white/10 light:border-slate-300 text-sm text-white light:text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1.5">
                    Your Message <span className="text-pink-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share the details of your project, internship position, or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-navy-850 light:bg-white border border-white/10 light:border-slate-300 text-sm text-white light:text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-500 resize-none"
                    required
                  />
                </div>

                {/* Status alerts */}
                {status.success && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm flex items-start gap-2.5">
                    <FaCheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{status.message}</span>
                  </div>
                )}

                {status.error && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm flex items-start gap-2.5">
                    <FaExclamationCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{status.message}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-glow-sm hover:shadow-indigo-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {status.submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

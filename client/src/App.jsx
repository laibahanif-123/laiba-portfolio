import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import CVModal from './components/CVModal';
import BackToTop from './components/BackToTop';
import Toast from './components/Toast';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('laiba_portfolio_theme') || 'dark';
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });

  // Synchronize theme with documentElement
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      document.body.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      document.body.classList.add('light');
    }
    localStorage.setItem('laiba_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showNotification = useCallback((message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 3500);
  }, []);

  return (
    <div className="min-h-screen bg-[#070C18] light:bg-[#F8FAFC] text-slate-100 light:text-slate-900 selection:bg-indigo-500/30 selection:text-white transition-colors duration-300">
      {/* Navbar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenCV={() => setCvModalOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenCV={() => setCvModalOpen(true)}
          onNotify={showNotification}
        />

        {/* About Section */}
        <About onOpenCV={() => setCvModalOpen(true)} />

        {/* Services Section */}
        <Services />

        {/* Technical Skills Section */}
        <Skills />

        {/* Featured Projects Section */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Work Experience Section */}
        <Experience />

        {/* Education Section */}
        <Education />

        {/* Certifications Section */}
        <Certifications onSelectCert={(cert) => setCvModalOpen(true)} />

        {/* Contact Section */}
        <Contact onNotify={showNotification} />
      </main>

      {/* Footer */}
      <Footer onOpenCV={() => setCvModalOpen(true)} />

      {/* Back to Top Floating Button */}
      <BackToTop />

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive CV Viewer & Download Modal */}
      <CVModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

      {/* Floating Notification Toast */}
      <Toast toast={toast} onClose={() => setToast({ show: false, message: '' })} />
    </div>
  );
}

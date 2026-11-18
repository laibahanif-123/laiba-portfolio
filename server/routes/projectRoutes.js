const express = require('express');
const router = express.Router();

const cvProjects = [
  {
    id: 'pakteeth',
    title: 'PakTeeth – Dental Clinic Management & AI System',
    category: 'AI & Full Stack · FYP',
    badge: 'Final Year Project · In Progress',
    description:
      'A comprehensive intelligent healthcare solution to digitize dental clinic operations: electronic patient records, appointments, billing, and integrated AI-powered dental X-ray analysis.',
    techStack: [
      'Electron',
      'JavaScript',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Python',
      'FastAPI',
      'YOLOv8',
    ],
    features: [
      'Digital patient record keeping with dental history and billing',
      'AI-powered dental X-ray pathology detection leveraging YOLOv8',
      'FastAPI microservices bridging deep learning with Node.js backend',
      'Role-based dashboards for Dentists, Receptionists, and Staff',
    ],
    githubUrl: 'https://github.com/laibahanif-123',
    liveUrl: 'https://pakteeth-demo.vercel.app',
  },
  {
    id: 'coffee',
    title: 'Artisan Coffee Shop Website',
    category: 'MERN Stack Web',
    badge: 'Full Stack Storefront',
    description:
      'A modern, responsive coffee shop website featuring interactive drink menus, reservation booking system, and dynamic administrative product management.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Mobile-first responsive interface with fluid layout',
      'Interactive drink menu and category filters',
      'Table reservation and takeout booking form with validation',
    ],
    githubUrl: 'https://github.com/laibahanif-123',
    liveUrl: 'https://artisan-coffee-demo.vercel.app',
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio Website',
    category: 'Frontend & Personal Branding',
    badge: 'Personal Branding',
    description:
      'Modern, high-performance personal portfolio built for showcasing software engineering projects, internship milestones, and full-stack capabilities with dark/light mode and EmailJS contact automation.',
    techStack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript', 'EmailJS', 'Vercel'],
    features: [
      'Dark navy modern UI with purple/blue gradients and glassmorphism styling',
      'Framer Motion micro-interactions and animated typing hero',
      'Integrated downloadable PDF resume and interactive CV modal',
    ],
    githubUrl: 'https://github.com/laibahanif-123',
    liveUrl: '#home',
  },
  {
    id: 'banking',
    title: 'Online Banking System',
    category: 'Security-Hardened App',
    badge: 'Defensive Cybersecurity',
    description:
      'Built a secure banking app with fund transfer, balance inquiry, and transaction history, plus session-based login/logout and a responsive dashboard.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Web Security'],
    features: [
      'Peer-to-peer balance inquiries and fund transfers',
      'Applied input sanitization and password hashing',
      'Protection against SQL injection, XSS, and CSRF',
    ],
    githubUrl: 'https://github.com/laibahanif-123',
    liveUrl: 'https://secure-banking-demo.vercel.app',
  },
  {
    id: 'soulmate',
    title: 'Soulmate – Modern Dating & Matchmaking Web App',
    category: 'Full Stack MERN / Dating App',
    badge: 'Real-time Dating App',
    description:
      'A modern, responsive dating and matchmaking web platform featuring interactive profile matching, real-time 1-on-1 messaging, smart compatibility discovery, and intuitive swipe/connect UI.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Socket.io', 'JWT'],
    features: [
      'Smart compatibility matching algorithm based on interests, age, and location',
      'Real-time 1-on-1 instant messaging & notifications powered by Socket.io',
      'Interactive card swipe interface with rich photo galleries and match animations',
      'Secure user authentication (JWT) and profile privacy controls',
    ],
    githubUrl: 'https://github.com/laibahanif-123',
    liveUrl: 'https://soulmate-dating-demo.vercel.app',
  },
  {
    id: 'hr-portal',
    title: 'HR Portal – Employee & Payroll Management System',
    category: 'MERN Stack Enterprise',
    badge: 'Enterprise HRMS',
    description:
      'A comprehensive enterprise Human Resource Management System (HRMS) to streamline employee lifecycle onboarding, attendance tracking, leave request approval pipelines, and automated payroll generation.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST APIs', 'JWT'],
    features: [
      'Comprehensive employee directory and onboarding lifecycle management',
      'Leave application & multi-tier approval workflow with automated tracking',
      'Granular Role-Based Access Control (RBAC) for Admins, Managers, and Employees',
      'Automated monthly salary calculation, downloadable payslips, and attendance analytics',
    ],
    githubUrl: 'https://github.com/laibahanif-123',
    liveUrl: 'https://hr-portal-demo.vercel.app',
  },
  {
    id: 'attendance',
    title: 'Attendance Management System',
    category: 'Full Stack MERN / Automation',
    badge: 'Smart Tracking & Analytics',
    description:
      'An automated web-based Attendance Management System designed to record daily attendance, manage leave balances, track working hours with timestamp integrity, and generate analytical reports.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST APIs', 'JWT'],
    features: [
      'Real-time check-in and check-out tracking with timestamp validation and IP logging',
      'Automated monthly attendance percentage calculation with low-attendance warnings',
      'Comprehensive admin dashboard for shifts, leave approvals, and schedule management',
      'One-click export of department attendance summaries to PDF and Excel formats',
    ],
    githubUrl: 'https://github.com/laibahanif-123',
    liveUrl: 'https://attendance-system-demo.vercel.app',
  },
];

// @route   GET /api/projects
// @desc    Get all CV projects
router.get('/', (req, res) => {
  res.json({
    success: true,
    count: cvProjects.length,
    data: cvProjects,
  });
});

module.exports = router;

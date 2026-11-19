/**
 * api/index.js — Vercel Serverless Function
 *
 * This is the PRODUCTION backend for Vercel deployment.
 * It is identical in logic to server/server.js but:
 *   1. Does NOT call app.listen() — Vercel injects its own HTTP layer
 *   2. Uses module.exports = app — Vercel calls this as a function
 *   3. Uses a cached MongoDB connection — prevents connection pool exhaustion
 *
 * Local development still uses server/server.js (via `npm run dev`).
 */

const express = require('express');
const cors = require('cors');
const connectDB = require('./lib/db');
const Contact = require('./models/Contact');

const app = express();

// ─────────────────────────────────────────────────────────────
// CORS — allow the Vercel frontend + local dev
// ─────────────────────────────────────────────────────────────
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  // Vercel preview and production URLs — both patterns allowed
  /https:\/\/laiba-portfolio.*\.vercel\.app$/,
  process.env.CLIENT_ORIGIN,
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      // No origin = Postman / curl / server-to-server → allow
      if (!origin) return callback(null, true);

      const allowed = allowedOrigins.some((o) =>
        typeof o === 'string' ? o === origin : o.test(origin)
      );

      if (allowed) return callback(null, true);
      return callback(new Error('CORS: Origin not allowed – ' + origin));
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.options('*', cors()); // Pre-flight for all routes

app.use(express.json());

// ─────────────────────────────────────────────────────────────
// Middleware: Connect to MongoDB before every request
// (uses cached connection — not a new connect each time)
// ─────────────────────────────────────────────────────────────
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    return res.status(503).json({
      success: false,
      message: 'Database unavailable. Please try again shortly.',
    });
  }
});

// ─────────────────────────────────────────────────────────────
// ROUTES
// ─────────────────────────────────────────────────────────────

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    server: 'online',
    database: 'connected',
    platform: 'Vercel Serverless',
    timestamp: new Date().toISOString(),
  });
});

// Root info
app.get('/api', (req, res) => {
  res.json({
    status: 'success',
    message: 'Laiba Hanif Portfolio API – running on Vercel Serverless',
    version: '2.0.0',
    developer: 'Laiba Hanif – Software Engineering @ COMSATS University Islamabad',
    endpoints: {
      health:     'GET  /api/health',
      contact:    'POST /api/contact',
      getMessages:'GET  /api/contact',
      projects:   'GET  /api/projects',
    },
  });
});

// ─────────────────────────────────────────────────────────────
// Contact Routes (inline — no sub-require for serverless clarity)
// ─────────────────────────────────────────────────────────────

// POST /api/contact — Save message to MongoDB
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message.',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    const newContact = new Contact({
      name:    name.trim(),
      email:   email.trim().toLowerCase(),
      subject: subject?.trim() || 'Portfolio Inquiry',
      message: message.trim(),
    });

    const saved = await newContact.save();
    console.log(`📩 Contact message saved to MongoDB Atlas from: ${email}`);

    return res.status(201).json({
      success: true,
      storage: 'mongodb-atlas',
      message: 'Your message has been saved successfully! I will respond within 24 hours.',
      data: {
        id:        saved._id,
        name:      saved.name,
        email:     saved.email,
        subject:   saved.subject,
        createdAt: saved.createdAt,
      },
    });
  } catch (error) {
    console.error('Contact POST error:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Server error while processing your message. Please try again.',
    });
  }
});

// GET /api/contact — Retrieve all messages
app.get('/api/contact', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    return res.json({
      success: true,
      storage: 'mongodb-atlas',
      count:   messages.length,
      data:    messages,
    });
  } catch (err) {
    console.error('Contact GET error:', err.message);
    return res.status(500).json({
      success: false,
      message: 'Error retrieving messages.',
    });
  }
});

// ─────────────────────────────────────────────────────────────
// Projects Route
// ─────────────────────────────────────────────────────────────
const cvProjects = [
  {
    id: 'pakteeth',
    title: 'PakTeeth – Dental Clinic Management & AI System',
    category: 'AI & Full Stack · FYP',
    badge: 'Final Year Project · In Progress',
    description:
      'A comprehensive intelligent healthcare solution to digitize dental clinic operations: electronic patient records, appointments, billing, and integrated AI-powered dental X-ray analysis.',
    techStack: ['Electron', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'FastAPI', 'YOLOv8'],
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
      'Modern, high-performance personal portfolio built for showcasing software engineering projects, internship milestones, and full-stack capabilities with dark/light mode.',
    techStack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript', 'Node.js', 'MongoDB', 'Vercel'],
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

app.get('/api/projects', (req, res) => {
  res.json({
    success: true,
    count: cvProjects.length,
    data: cvProjects,
  });
});

// ─────────────────────────────────────────────────────────────
// 404 & Error Handlers
// ─────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.path}`,
  });
});

app.use((err, req, res, next) => {
  console.error('API Error:', err.message);
  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

// ─────────────────────────────────────────────────────────────
// EXPORT — Vercel calls this as a serverless function
// DO NOT call app.listen() here
// ─────────────────────────────────────────────────────────────
module.exports = app;

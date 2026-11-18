export const PERSONAL_INFO = {
  name: "Laiba Hanif",
  title: "Software Engineer | MERN Stack Developer",
  degree: "BS Software Engineering",
  university: "COMSATS University Islamabad, Sahiwal Campus",
  batch: "2023–2027",
  status: "Currently Pursuing (2023–2027)",
  location: "Mian Channu, Punjab, Pakistan",
  phone: "+92 312 4850025",
  email: "laibahanif0909@gmail.com",
  linkedin: "https://linkedin.com/in/laibahanif-b42a7035b",
  github: "https://github.com/laibahanif-123",
  whatsapp: "https://wa.me/923124850025",
  fiverr: "https://www.fiverr.com/users/laibahanif_dev", // placeholder link as requested
  cvUrl: "/Laiba_Hanif_CV.pdf",
  bio: "Software Engineering student at COMSATS University Islamabad (2023–2027) with hands-on full-stack development experience through 3 software-house internships. Honored with the Best Award at DevelopersHub Corporation. Currently architecting PakTeeth, an intelligent Dental Clinic Management System with AI-powered X-ray diagnostics. Dedicated to building scalable, secure, and user-centric web applications.",
};

export const TYPING_PHRASES = [
  "Software Engineer",
  "MERN Stack Developer",
  "React.js & Node.js Specialist",
  "Full Stack Web Engineer",
  "Best Award Winner @ DevHub",
  "AI & Healthcare Tech Builder",
];

export const STATS = [
  { value: 3, suffix: "+", label: "Software Internships", icon: "briefcase" },
  { value: 7, suffix: "+", label: "Production & Academic Projects", icon: "folder" },
  { value: 2027, suffix: "", label: "Expected Graduation", icon: "graduation" },
  { value: 100, suffix: "%", label: "Dedication to Clean Code", icon: "sparkles" },
];

export const SKILL_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend & UI Engineering",
    skills: [
      { name: "React.js", level: 90, icon: "react", color: "#61DAFB" },
      { name: "JavaScript (ES6+)", level: 92, icon: "javascript", color: "#F7DF1E" },
      { name: "Tailwind CSS", level: 90, icon: "tailwind", color: "#06B6D4" },
      { name: "HTML5 & Semantic UI", level: 95, icon: "html5", color: "#E34F26" },
      { name: "CSS3 & Animations", level: 92, icon: "css3", color: "#1572B6" },
      { name: "Bootstrap 5", level: 85, icon: "bootstrap", color: "#7952B3" },
      { name: "Responsive & Mobile UI", level: 94, icon: "mobile", color: "#10B981" },
      { name: "Framer Motion", level: 85, icon: "framer", color: "#EC4899" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", level: 88, icon: "nodejs", color: "#6CC24A" },
      { name: "Express.js", level: 88, icon: "express", color: "#A855F7" },
      { name: "MongoDB & Mongoose", level: 86, icon: "mongodb", color: "#47A248" },
      { name: "RESTful APIs", level: 92, icon: "api", color: "#F59E0B" },
      { name: "MySQL / Relational DB", level: 82, icon: "mysql", color: "#00758F" },
      { name: "Python & FastAPI", level: 80, icon: "python", color: "#38BDF8" },
      { name: "PHP & Server Logic", level: 78, icon: "php", color: "#777BB4" },
      { name: "JWT & Web Security", level: 84, icon: "security", color: "#EF4444" },
    ],
  },
  {
    id: "tools",
    title: "Tools, CS Practices & Desktop",
    skills: [
      { name: "Git & GitHub", level: 90, icon: "git", color: "#F05032" },
      { name: "VS Code & Postman", level: 92, icon: "vscode", color: "#007ACC" },
      { name: "Electron (Desktop Apps)", level: 82, icon: "electron", color: "#47848F" },
      { name: "OOP & Design Patterns", level: 88, icon: "code", color: "#818CF8" },
      { name: "Data Structures & Algos", level: 85, icon: "algo", color: "#10B981" },
      { name: "C++ & Java Core", level: 82, icon: "cpp", color: "#60A5FA" },
      { name: "Vercel & Cloud Deploy", level: 88, icon: "vercel", color: "#F8FAFC" },
      { name: "Agile & Team Workflows", level: 90, icon: "users", color: "#FB923C" },
    ],
  },
];

export const PROJECTS = [
  {
    id: "pakteeth",
    title: "PakTeeth – Dental Clinic Management & AI System",
    category: "ai-fullstack",
    categoryLabel: "AI & Full Stack · FYP",
    badge: "Final Year Project · In Progress",
    badgeType: "featured",
    image: "/images/pakteeth-preview.png",
    description:
      "A comprehensive intelligent healthcare solution designed to digitize dental clinic management. Features electronic patient dental records, automated scheduling, billing, and integrated deep learning for dental X-ray lesion detection.",
    highlights: [
      "Dental clinic workflow digitization (EHR, appointments, invoices, prescriptions)",
      "AI-powered dental X-ray analysis leveraging YOLOv8 model for rapid anomaly detection",
      "FastAPI microservice bridging deep learning inference with Node.js backend",
      "Cross-platform desktop integration via Electron and responsive React frontend",
      "Role-based access control for Dentists, Clinic Staff, and Clinic Administrators",
    ],
    techStack: [
      "Electron",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "FastAPI",
      "YOLOv8",
    ],
    liveUrl: "https://pakteeth-demo.vercel.app", // Placeholder link with working preview modal
    githubUrl: "https://github.com/laibahanif-123",
    statusNote: "Final Year Project in active development. Architecture diagrams and video walkthrough available.",
  },
  {
    id: "coffee-shop",
    title: "Artisan Coffee Shop Website",
    category: "mern",
    categoryLabel: "MERN Stack Web",
    badge: "Full Stack Storefront",
    badgeType: "accent",
    image: "/images/coffee-preview.png",
    description:
      "A modern, responsive full-stack coffee shop storefront with interactive drink menus, customer testimonials, reservation booking system, and dynamic administrative product management.",
    highlights: [
      "Mobile-first responsive interface with fluid Tailwind CSS styling",
      "Interactive drink catalog with category filters and price calculators",
      "Online table reservation and takeout booking form with validation",
      "RESTful backend endpoints for menu management and order logging",
      "Optimized load times and fluid micro-interactions with Framer Motion",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://artisan-coffee-demo.vercel.app", // Placeholder link with working preview modal
    githubUrl: "https://github.com/laibahanif-123",
    statusNote: "Complete working MERN prototype with mock API server.",
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    category: "frontend",
    categoryLabel: "Modern React & Tailwind",
    badge: "Personal Branding",
    badgeType: "purple",
    image: "/images/portfolio-preview.png",
    description:
      "Modern, high-performance personal portfolio built for showcasing software engineering projects, internship milestones, and full-stack capabilities with dark/light mode and EmailJS contact automation.",
    highlights: [
      "Dark navy modern UI with purple/blue gradients and glassmorphism styling",
      "Framer Motion animations, interactive typing hero, and responsive drawer",
      "Direct EmailJS contact form with instant validation and confetti celebration",
      "Integrated downloadable PDF resume and interactive CV modal",
      "SEO-optimized metadata, OpenGraph cards, and 100/100 responsive layout",
    ],
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "JavaScript", "EmailJS", "Vercel"],
    liveUrl: "#home",
    githubUrl: "https://github.com/laibahanif-123",
    statusNote: "Live and deployed on Vercel.",
  },
  {
    id: "online-banking",
    title: "Online Banking System",
    category: "mern",
    categoryLabel: "Security-Hardened App",
    badge: "Defensive Cybersecurity",
    badgeType: "security",
    image: "/images/banking-preview.png",
    description:
      "A secure web banking portal featuring peer-to-peer balance transfers, complete transaction audit logs, and hardened defenses against OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF).",
    highlights: [
      "Peer-to-peer fund transfer with balance integrity checks and ACID transactions",
      "Session-based authentication with automatic timeout and secure cookie tokens",
      "Sanitized inputs, parameterized queries, and bcrypt password hashing",
      "Responsive customer dashboard with downloadable statements and audit records",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Web Security"],
    liveUrl: "https://secure-banking-demo.vercel.app",
    githubUrl: "https://github.com/laibahanif-123",
    statusNote: "Academic project demonstrating defensive application security.",
  },
  {
    id: "soulmate",
    title: "Soulmate – Modern Dating & Matchmaking Web App",
    category: "mern",
    categoryLabel: "Full Stack MERN / Dating App",
    badge: "Real-time Dating App",
    badgeType: "accent",
    image: "/images/soulmate-preview.png",
    description:
      "A modern, responsive dating and matchmaking web platform featuring interactive profile matching, real-time 1-on-1 messaging, smart compatibility discovery, and intuitive swipe/connect UI.",
    highlights: [
      "Smart compatibility matching algorithm based on interests, age preference, and location filters",
      "Real-time 1-on-1 instant chat and notification workflows built with Socket.io & REST APIs",
      "Interactive card swipe interface with rich photo galleries, bio previews, and match animations",
      "Secure user authentication (JWT), profile verification, and robust privacy controls",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Socket.io", "JWT"],
    liveUrl: "https://soulmate-dating-demo.vercel.app",
    githubUrl: "https://github.com/laibahanif-123",
    statusNote: "Full stack MERN dating application with real-time matchmaking and messaging.",
  },
  {
    id: "hr-portal",
    title: "HR Portal – Employee & Payroll Management System",
    category: "mern",
    categoryLabel: "MERN Stack Enterprise",
    badge: "Enterprise HRMS",
    badgeType: "featured",
    image: "/images/hr-preview.png",
    description:
      "A comprehensive enterprise Human Resource Management System (HRMS) to streamline employee lifecycle onboarding, attendance tracking, leave request approval pipelines, and automated payroll generation.",
    highlights: [
      "Comprehensive employee directory, department organization, and onboarding lifecycle management",
      "Leave application & approval workflow with automated multi-tier status updates and quota tracking",
      "Granular Role-Based Access Control (RBAC) for System Admins, HR Managers, and Employees",
      "Automated monthly salary calculation, downloadable payslips, and attendance analytics dashboard",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs", "JWT"],
    liveUrl: "https://hr-portal-demo.vercel.app",
    githubUrl: "https://github.com/laibahanif-123",
    statusNote: "Enterprise-grade MERN HR management system with RBAC security and payroll workflows.",
  },
  {
    id: "attendance-mgmt",
    title: "Attendance Management System",
    category: "mern",
    categoryLabel: "Full Stack MERN / Automation",
    badge: "Smart Tracking & Analytics",
    badgeType: "accent",
    image: "/images/attendance-preview.png",
    description:
      "An automated web-based Attendance Management System designed to record daily attendance, manage leave balances, track working hours with timestamp integrity, and generate comprehensive analytical reports.",
    highlights: [
      "Real-time clock-in and clock-out tracking with timestamp validation and geo/IP logging",
      "Automated monthly attendance percentage calculation with low-attendance warning triggers",
      "Comprehensive admin dashboard for shift planning, holiday calendars, and manual corrections",
      "One-click export of department-wise attendance summaries to PDF and Excel formats",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs", "JWT"],
    liveUrl: "https://attendance-system-demo.vercel.app",
    githubUrl: "https://github.com/laibahanif-123",
    statusNote: "Full stack MERN automated attendance tracking system with analytics dashboard.",
  },
];

export const EXPERIENCES = [
  {
    role: "Full Stack Development Intern",
    company: "Tech Step IT Training Center / Software House",
    period: "Jul – Sep 2026",
    duration: "3 Months",
    location: "Pakistan",
    award: null,
    badgeColor: "indigo",
    highlights: [
      "Built and tested full-stack web applications integrating RESTful APIs and relational/NoSQL databases.",
      "Collaborated in a software house environment adhering to sprint planning, modular architecture, and code reviews.",
      "Implemented responsive frontend layouts and debugged backend data flows for production readiness.",
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git"],
  },
  {
    role: "Full Stack Development Intern",
    company: "DevelopersHub Corporation",
    period: "May – Jun 2026",
    duration: "6 Weeks",
    location: "Pakistan",
    award: "★ Best Award Winner",
    badgeColor: "amber",
    highlights: [
      "Completed an intensive 6-week software engineering program with exceptional performance.",
      "Honored with the prestigious 'Best Award' for top performance and outstanding project delivery.",
      "Engineered and deployed full-stack web applications integrating React frontends with Node/Express backends.",
    ],
    skills: ["MERN Stack", "React.js", "Node.js", "MongoDB", "Express.js", "Full Stack Architecture"],
  },
  {
    role: "Front-End Development Intern",
    company: "Elevvo Pathways",
    period: "Sep 2025",
    duration: "1 Month",
    location: "Pakistan",
    award: null,
    badgeColor: "cyan",
    highlights: [
      "Constructed clean, responsive UI components using HTML5, CSS3, and JavaScript.",
      "Enhanced user experience and cross-browser consistency across core platform sections.",
      "Mentored by senior frontend engineers on clean, reusable, component-based frontend workflows.",
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
  },
];

export const CERTIFICATIONS = [
  {
    id: "cert-devhub",
    title: "Certificate of Achievement & Best Award",
    issuer: "DevelopersHub Corporation",
    date: "May – Jun 2026",
    award: "★ Best Award Winner",
    awardColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
    credentialId: "DHC-FS-2026-092",
    description:
      "Awarded for exceptional engineering excellence, top performance across the 6-week intensive full-stack program, and outstanding contribution to deployed web apps.",
    icon: "award",
  },
  {
    id: "cert-techstep",
    title: "Certificate of Achievement – Full Stack Development",
    issuer: "Tech Step IT Training Center / Software House",
    date: "Jul – Sep 2026",
    award: "Full Stack Credential",
    awardColor: "text-indigo-400 bg-indigo-400/10 border-indigo-400/30",
    credentialId: "TS-FS-2026-348",
    description:
      "Awarded for hands-on mastery in building end-to-end full-stack web applications, REST API integration, and collaborative software house practices.",
    icon: "code",
  },
  {
    id: "cert-elevvo",
    title: "Certificate of Achievement – Front-End Web Development",
    issuer: "Elevvo Pathways",
    date: "Sep 2025",
    award: "Frontend Credential",
    awardColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
    credentialId: "ELV-FE-2025-117",
    description:
      "Recognized for delivering clean, accessible, and responsive user interfaces with modular JavaScript and modern CSS standards.",
    icon: "palette",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Software Engineering (BS SE)",
    institution: "COMSATS University Islamabad, Sahiwal Campus",
    period: "2023 – 2027",
    status: "Currently Pursuing (2023–2027)",
    badge: "Current Degree",
    description:
      "Comprehensive Software Engineering curriculum covering Distributed Systems, Web Engineering, Software Design & Architecture, Database Systems, Data Structures & Algorithms, and AI Systems.",
    highlights: [
      "Currently Pursuing BS Software Engineering (Batch 2023–2027)",
      "Final Year Project: PakTeeth (Dental Clinic Management & AI System)",
      "Active participant in technical workshops and campus coding events",
    ],
  },
  {
    degree: "Intermediate (Pre-Medical)",
    institution: "Superior College, Mian Channu",
    period: "2021 – 2023",
    status: "Completed",
    badge: "Higher Secondary",
    description:
      "Solid pre-medical foundation in Biology, Physics, and Chemistry, cultivating strong analytical reasoning, scientific inquiry, and disciplined problem-solving skills.",
    highlights: ["Pre-Medical foundation with strong analytical and scientific reasoning"],
  },
  {
    degree: "Matriculation (Science)",
    institution: "Govt. Girls Model High School, Mian Channu",
    period: "2019 – 2021",
    status: "Completed",
    badge: "Secondary School",
    description:
      "Completed secondary education with high distinction in core sciences: Physics, Chemistry, Biology, and Mathematics.",
    highlights: ["Academic distinction in core science disciplines"],
  },
];

export const SERVICES = [
  {
    title: "Full Stack MERN Development",
    icon: "layers",
    description:
      "Architecting end-to-end web applications with MongoDB, Express.js, React.js, and Node.js. Clean API boundaries, secure authentication, and scalable schemas.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    title: "Modern UI/UX & Frontend Engineering",
    icon: "layout",
    description:
      "Crafting pixel-perfect, accessible, mobile-first web applications using Tailwind CSS, Framer Motion, and modern React patterns.",
    tags: ["Tailwind CSS", "Framer Motion", "Responsive Design", "UI/UX"],
  },
  {
    title: "API Development & Backend Integration",
    icon: "server",
    description:
      "Designing robust, secure RESTful APIs with Node.js/Express, Python/FastAPI microservices, input validation, and database indexing.",
    tags: ["REST APIs", "FastAPI", "JWT Auth", "Postman", "Data Modeling"],
  },
  {
    title: "Web Security & Performance Optimization",
    icon: "shield",
    description:
      "Hardening applications against OWASP Top 10 risks (SQLi, XSS, CSRF), implementing password hashing (bcrypt), and optimizing frontend bundle performance.",
    tags: ["OWASP Guidelines", "Input Sanitization", "Bcrypt", "Code Refactoring"],
  },
];

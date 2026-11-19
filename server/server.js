const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ─────────────────────────────────────────
// CORS Configuration
// ─────────────────────────────────────────
const allowedOrigins = [
  process.env.CLIENT_ORIGIN || 'http://localhost:3000',
  'http://localhost:5173',
  'http://localhost:3000',
  'https://laiba-portfolio.vercel.app', // Update with your actual Vercel URL
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (Postman, curl, server-to-server)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error('CORS policy: Origin not allowed – ' + origin));
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json());

// ─────────────────────────────────────────
// MongoDB Connection
// ─────────────────────────────────────────
const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/laiba_portfolio';

let dbConnected = false;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // Fail fast if DB not reachable
    });
    dbConnected = true;
    console.log('✅ MongoDB connected successfully → Database: laiba_portfolio');
  } catch (err) {
    dbConnected = false;
    console.warn('⚠️  MongoDB connection failed:', err.message);
    console.warn('   Server will run without database (contact form uses in-memory fallback)');
    // Retry after 10 seconds
    setTimeout(connectDB, 10000);
  }
};

connectDB();

// Listen for disconnections and auto-reconnect
mongoose.connection.on('disconnected', () => {
  dbConnected = false;
  console.warn('⚠️  MongoDB disconnected. Retrying in 10 seconds...');
  setTimeout(connectDB, 10000);
});

mongoose.connection.on('reconnected', () => {
  dbConnected = true;
  console.log('✅ MongoDB reconnected successfully');
});

// ─────────────────────────────────────────
// API Routes
// ─────────────────────────────────────────
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));

// ─────────────────────────────────────────
// Health Check
// ─────────────────────────────────────────
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Laiba Hanif MERN Portfolio API is running',
    version: '1.0.0',
    developer: 'Laiba Hanif – Software Engineering @ COMSATS University Islamabad',
    database: dbConnected ? '🟢 MongoDB Connected' : '🔴 MongoDB Offline (in-memory fallback active)',
    endpoints: {
      contact: 'POST /api/contact',
      getMessages: 'GET /api/contact',
      projects: 'GET /api/projects',
    },
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    server: 'online',
    database: dbConnected ? 'connected' : 'offline',
    timestamp: new Date().toISOString(),
  });
});

// ─────────────────────────────────────────
// 404 Handler
// ─────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route not found: ${req.method} ${req.path}` });
});

// ─────────────────────────────────────────
// Global Error Handler
// ─────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Server Error:', err.message);
  res.status(500).json({ success: false, message: err.message || 'Internal Server Error' });
});

// ─────────────────────────────────────────
// Start Server
// ─────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Backend server running at http://localhost:${PORT}`);
  console.log(`   Health check: http://localhost:${PORT}/api/health`);
});

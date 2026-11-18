const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/laiba_portfolio';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected successfully for Laiba Portfolio API'))
  .catch((err) => console.log('MongoDB connection notice (Server running in offline/mock mode if DB not running):', err.message));

// Routes
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));

// Health check
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Laiba Hanif MERN Portfolio API is running',
    version: '1.0.0',
    developer: 'Laiba Hanif (Software Engineering @ COMSATS)'
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});

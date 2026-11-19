const mongoose = require('mongoose');

// Prevent OverwriteModelError in serverless hot-reload environments
const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  subject: {
    type: String,
    default: 'Portfolio Inquiry',
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports =
  mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

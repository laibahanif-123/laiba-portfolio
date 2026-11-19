const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const mongoose = require('mongoose');

// In-memory fallback when MongoDB is offline
const inMemoryMessages = [];

// Helper: Check if MongoDB is connected
const isDbConnected = () => mongoose.connection.readyState === 1;

// ─────────────────────────────────────────────────────────────
// @route   POST /api/contact
// @desc    Save a new contact message to MongoDB
// @access  Public
// ─────────────────────────────────────────────────────────────
router.post('/', async (req, res) => {
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

    // Try to save to MongoDB
    if (isDbConnected()) {
      const newContact = new Contact({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        subject: subject?.trim() || 'Portfolio Inquiry',
        message: message.trim(),
      });

      const saved = await newContact.save();
      console.log(`📩 New contact message saved to MongoDB from: ${email}`);

      return res.status(201).json({
        success: true,
        storage: 'mongodb',
        message: 'Your message has been saved successfully! I will respond within 24 hours.',
        data: {
          id: saved._id,
          name: saved.name,
          email: saved.email,
          subject: saved.subject,
          createdAt: saved.createdAt,
        },
      });
    }

    // Fallback: in-memory storage
    const msgObj = {
      id: `mem_${Date.now()}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject?.trim() || 'Portfolio Inquiry',
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };
    inMemoryMessages.push(msgObj);
    console.log(`📩 Contact message saved in memory (DB offline) from: ${email}`);

    return res.status(201).json({
      success: true,
      storage: 'memory',
      message: 'Your message has been received! (Database offline – using session memory)',
      data: msgObj,
    });
  } catch (error) {
    console.error('Contact route error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Server error while processing your message. Please try again.',
    });
  }
});

// ─────────────────────────────────────────────────────────────
// @route   GET /api/contact
// @desc    Retrieve all contact messages (admin use)
// @access  Public (add auth middleware for production)
// ─────────────────────────────────────────────────────────────
router.get('/', async (req, res) => {
  try {
    if (isDbConnected()) {
      const messages = await Contact.find().sort({ createdAt: -1 });
      return res.json({
        success: true,
        storage: 'mongodb',
        count: messages.length,
        data: messages,
      });
    }

    // Fallback: in-memory
    return res.json({
      success: true,
      storage: 'memory',
      count: inMemoryMessages.length,
      data: inMemoryMessages.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
    });
  } catch (err) {
    console.error('Get messages error:', err.message);
    res.status(500).json({ success: false, message: 'Error retrieving messages.' });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// In-memory fallback if MongoDB is not running locally
const inMemoryMessages = [];

// @route   POST /api/contact
// @desc    Receive a new contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Please provide name, email, and message.' });
    }

    try {
      const newContact = new Contact({ name, email, subject, message });
      await newContact.save();
      return res.status(201).json({ success: true, message: 'Message saved to database successfully!', data: newContact });
    } catch (dbErr) {
      // Fallback
      const msgObj = { id: Date.now(), name, email, subject, message, date: new Date() };
      inMemoryMessages.push(msgObj);
      return res.status(201).json({ success: true, message: 'Message received (saved in memory session)', data: msgObj });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error processing contact form' });
  }
});

// @route   GET /api/contact
// @desc    Get all messages (for admin review)
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: messages.length, data: messages });
  } catch (err) {
    res.json({ success: true, count: inMemoryMessages.length, data: inMemoryMessages });
  }
});

module.exports = router;

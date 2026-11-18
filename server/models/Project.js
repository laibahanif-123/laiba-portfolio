const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  badge: { type: String },
  description: { type: String, required: true },
  techStack: [String],
  features: [String],
  githubUrl: { type: String },
  liveUrl: { type: String }
});

module.exports = mongoose.model('Project', ProjectSchema);

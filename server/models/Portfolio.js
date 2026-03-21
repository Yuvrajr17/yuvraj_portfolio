const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  hero: {
    name: { type: String, required: true },
    role: { type: String },
    bio: { type: String },
    tagline: { type: String },
    github: { type: String },
    linkedin: { type: String },
    email: { type: String },
    phone: { type: String },
  },
  about: {
    intro: { type: String },
    qualities: [{ type: String }],
  },
  skills: [{
    category: { type: String },
    items: [{
      name: { type: String },
      level: { type: Number, min: 0, max: 100 }
    }]
  }],
  projects: [{
    name: { type: String },
    stack: { type: String },
    period: { type: String },
    description: [{ type: String }],
    tech: [{ type: String }],
    github: { type: String },
    live: { type: String },
  }],
  education: [{
    institution: { type: String },
    degree: { type: String },
    period: { type: String },
    location: { type: String },
    score: { type: String },
    scoreLabel: { type: String },
    accentColor: { type: String, default: '#63b3ed' }
  }],
  certifications: [{
    name: { type: String },
    issuer: { type: String },
    period: { type: String },
    icon: { type: String }
  }],
  achievements: [{
    title: { type: String },
    description: { type: String },
    badge: { type: String }
  }],
  extracurricular: [{
    title: { type: String },
    description: { type: String },
    icon: { type: String }
  }],
}, { timestamps: true });

module.exports = mongoose.model('Portfolio', portfolioSchema);

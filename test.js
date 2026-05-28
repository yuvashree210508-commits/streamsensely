const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const TestResult = require('../models/TestResult');

// GET /api/career/roadmap/:field
router.get('/roadmap/:field', (req, res) => {
  const roadmaps = {
    'ai-robotics': {
      title: 'AI & Robotics Career Roadmap',
      what: 'Artificial Intelligence and Robotics is the science of creating intelligent machines that can think, learn, and perform tasks autonomously.',
      future: 'India is investing ₹10,000 crore in AI infrastructure. By 2025, AI will create 97 million new jobs worldwide. Tamil Nadu is becoming a major tech hub.',
      careers: ['AI/ML Engineer', 'Robotics Engineer', 'Data Scientist', 'Computer Vision Expert', 'NLP Engineer', 'Automation Engineer'],
      avgSalary: '₹8-45 LPA',
      topColleges: ['IIT Madras', 'Anna University', 'NIT Trichy', 'SRM University', 'VIT Vellore'],
      entranceExams: ['JEE Main & Advanced', 'TNEA', 'BITSAT', 'VITEEE'],
      motivation: 'You could build the next Sophia robot, or create an AI that diagnoses cancer before doctors can. The future belongs to those who can teach machines to think!'
    }
  };
  res.json(roadmaps[req.params.field] || roadmaps['ai-robotics']);
});

module.exports = router;

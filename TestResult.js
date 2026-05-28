const mongoose = require('mongoose');

const testResultSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  answers: [{
    questionId: Number,
    questionText: String,
    selectedOption: String,
    category: String
  }],
  scores: {
    science: { type: Number, default: 0 },
    commerce: { type: Number, default: 0 },
    arts: { type: Number, default: 0 },
    vocational: { type: Number, default: 0 }
  },
  suggestedStream: { type: String, required: true },
  subFields: [String],
  primaryCareer: { type: String },
  roadmap: {
    school: [String],
    college: [String],
    advanced: [String]
  },
  skillsRequired: [String],
  courses: [{
    name: String,
    duration: String,
    type: String
  }],
  confidenceScore: { type: Number, default: 0 },
  takenAt: { type: Date, default: Date.now },
  isLatest: { type: Boolean, default: true }
});

// Mark previous results as not latest when new one is created
testResultSchema.pre('save', async function(next) {
  if (this.isNew) {
    await this.constructor.updateMany(
      { userId: this.userId, isLatest: true },
      { isLatest: false }
    );
  }
  next();
});

module.exports = mongoose.model('TestResult', testResultSchema);

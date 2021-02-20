const mongoose = require('mongoose');

// Round schema (name, course, type, par, score, date)
// All fields are required
const roundSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['18 holes', 'Front 9', 'Back 9'],
    default: '18 holes',
    required: true,
  },
  par: {
    type: Number,
    requied: true,
  },
  score: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

// Create model
const Round = mongoose.model('Round', roundSchema);

module.exports = Round;

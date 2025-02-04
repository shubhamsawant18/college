const mongoose = require('mongoose');

const gateCollegeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true,
    min: 0,
    max: 1000
  },
  category: {
    type: String,
    required: true,
    enum: ['general', 'obc', 'sc/st', 'ntc']
  },
  stream: {
    type: String,
    required: true,
    enum: ['computer science', 'information technology', 'chemical engineering']
  }
});

const GateCollege = mongoose.model('GateCollege', gateCollegeSchema);

module.exports = GateCollege;

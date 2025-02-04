const mongoose = require('mongoose');

const gateStreamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ['computer science', 'information technology', 'chemical engineering']
  }
});

const GateStream = mongoose.model('GateStream', gateStreamSchema);

module.exports = GateStream;

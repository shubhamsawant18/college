const mongoose = require('mongoose');

const gateCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ['general', 'obc', 'sc/st', 'ntc']
  }
});

const GateCategory = mongoose.model('GateCategory', gateCategorySchema);

module.exports = GateCategory;

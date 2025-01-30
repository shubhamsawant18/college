// models/buttons/Catcollege.js
const mongoose = require('mongoose');

// Check if the model is already defined
const CatCollege = mongoose.models.CatCollege || mongoose.model('CatCollege', new mongoose.Schema({
  collegename: {
    type: String,
    required: true,
  },
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CatCategory' }],
  percentile: { type: Number, required: true },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CatCourse' }],
}));

module.exports = CatCollege;

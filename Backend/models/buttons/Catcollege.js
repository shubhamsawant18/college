// models/buttons/Catcollege.js
const mongoose = require('mongoose');

const CatCollegeSchema = new mongoose.Schema({
  collegename: { type: String, required: true },
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CatCategory' }],
  percentile: { type: Number, required: true },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CatCourse' }],
});

module.exports = mongoose.model('CatCollege', CatCollegeSchema);


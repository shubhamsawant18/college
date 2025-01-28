const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
  collegename: String,
  cityid: { type: mongoose.Schema.Types.ObjectId, ref: 'City' },
  categoryid: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  rank: Number,
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }], // Correct reference
});

module.exports = mongoose.model('College', collegeSchema);

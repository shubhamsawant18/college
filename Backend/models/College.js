const mongoose = require('mongoose');

const CollegeSchema = new mongoose.Schema({
  collegeid: { type: mongoose.Schema.Types.ObjectId, auto: true },
  collegename: { type: String, required: true },
  cityid: { type: mongoose.Schema.Types.ObjectId, ref: 'city', required: true },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'course', required: true }], // Changed to array of ObjectId
  categoryid: { type: mongoose.Schema.Types.ObjectId, ref: 'category', required: true },
  rank: { type: Number, required: true },
});

const College = mongoose.model('College', CollegeSchema);
module.exports = College;

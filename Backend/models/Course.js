const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  _id:{ type: mongoose.Schema.Types.ObjectId, auto:true},
  coursename: { type: String, required: true },
  duration: { type: Number, required: true },
});

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;

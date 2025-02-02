const mongoose = require('mongoose');


const CourseSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  coursename: { type: String, required: true },
});

module.exports = mongoose.model('JeemCourse', CourseSchema);

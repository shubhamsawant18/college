const mongoose = require('mongoose');

const CatCourseSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  coursename: { type: String, required: true },
});

const CatCourse = mongoose.model('CatCourse', CatCourseSchema);
module.exports = CatCourse;

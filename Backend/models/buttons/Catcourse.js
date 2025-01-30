// models/buttons/CatCourse.js
const mongoose = require('mongoose');

const CatCourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model('CatCourse', CatCourseSchema);

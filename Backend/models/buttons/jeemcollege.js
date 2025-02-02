const mongoose = require('mongoose');


const collegeSchema = new mongoose.Schema({
  collegename: { type: String, required: true },
  districtid: { type: mongoose.Schema.Types.ObjectId, ref: 'District', required: true },
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }],
  rank: { type: Number, required: true },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'JeemCourse', required: true }],
});

module.exports = mongoose.models.JeemCollege || mongoose.model('JeemCollege', collegeSchema);

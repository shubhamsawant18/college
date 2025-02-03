const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jeemCollegeSchema = new Schema({
  collegename: {
    type: String,
    required: true
  },
  districtid: {
    type: Schema.Types.ObjectId,
    ref: 'District',
    required: true
  },
  category: [{
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }],
  rank: {
    type: Number,
    required: true
  },
  courses: [{
    type: Schema.Types.ObjectId,
    ref: 'JeemCourse',
    required: true
  }],
  gender: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('JeemCollege', jeemCollegeSchema);

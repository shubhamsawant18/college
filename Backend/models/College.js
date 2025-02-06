const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collegeSchema = new Schema({
  collegename: {
    type: String,
    required: true
  },
  cityid: {
    type: Schema.Types.ObjectId,
    ref: 'City',
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
    ref: 'Course',
    required: true
  }]
});

module.exports = mongoose.models.College || mongoose.model('College', collegeSchema);

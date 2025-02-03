const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jeeadvCollegeSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  collegename: { type: String, required: true },
  rank: { type: Number, required: true },
  category: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female'], required: true }
});

module.exports = mongoose.models.JeeAdvCollege || mongoose.model('JeeAdvCollege', jeeadvCollegeSchema);

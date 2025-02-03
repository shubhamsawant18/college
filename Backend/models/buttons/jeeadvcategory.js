const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JeeAdvCategorySchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  categoryname: { type: String, required: true },
});

module.exports = mongoose.models.JeeAdvCategory || mongoose.model('JeeAdvCategory', JeeAdvCategorySchema);

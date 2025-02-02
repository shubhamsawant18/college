const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  categoryname: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female'], required: true } // Added gender field
});

module.exports = mongoose.models.Category || mongoose.model('Category', CategorySchema);

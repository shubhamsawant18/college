const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  name: { type: String, required: true, unique: true }
});

module.exports = mongoose.models.City || mongoose.model('City', CitySchema);

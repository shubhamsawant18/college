const mongoose = require('mongoose');

const DistrictSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  name: { type: String, required: true, unique: true },
});

const District = mongoose.model('District', DistrictSchema);
module.exports = District;

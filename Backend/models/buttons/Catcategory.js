// models/buttons/Catcategory.js
const mongoose = require('mongoose');

const CatCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model('CatCategory', CatCategorySchema);


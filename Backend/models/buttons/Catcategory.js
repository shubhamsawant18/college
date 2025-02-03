// models/buttons/Catcategory.js
const mongoose = require('mongoose');

const CatCategorySchema = new mongoose.Schema({
  categoryname: { type: String, required: true },
});

module.exports = mongoose.model('CatCategory', CatCategorySchema);



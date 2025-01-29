const mongoose = require('mongoose');

const CatCategorySchema = new mongoose.Schema({
  categoryname: { type: String, required: true },
});

const Catcategory = mongoose.model('CatCategory', CatCategorySchema);
module.exports = Catcategory;

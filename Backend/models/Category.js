const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  _id: {type: mongoose.Schema.Types.ObjectId, auto:true},
  categoryname: { type: String, required: true },
});

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;

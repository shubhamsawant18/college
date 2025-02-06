const Category = require('../models/Category');

const allowedCategories = ['General', 'OBC', 'SC/ST', 'NTC'];

const postCategory = async (req, res) => {
  try {
    const { categoryname } = req.body;

    if (!allowedCategories.includes(categoryname)) {
      return res.status(400).json({ msg: 'Category not allowed' });
    }

    const category = new Category({ categoryname });
    await category.save();

    return res.status(201).json({
      msg: "success",
      data: category,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const getCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json({
      msg: "success",
      data: categories,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  postCategory,
  getCategory
};

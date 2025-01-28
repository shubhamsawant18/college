const express = require('express');
const Category = require('../models/Category'); // Import the Category model

const router = express.Router();

router.use(express.json()); // Middleware to parse JSON bodies

// Define the allowed categories
const allowedCategories = ['General', 'OBC', 'SC/ST', 'NTC'];

const postCategory = async (req, res) => {
  try {
    const { name } = req.body;

    // Check if the category is allowed
    if (!allowedCategories.includes(name)) {
      return res.status(400).json({ msg: 'Category not allowed' });
    }

    const category = new Category({ categoryname: name });
    await category.save();
    return res.status(201).json({
      msg: "success",
      data: category, // Return the saved category document
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

const express = require('express');
const JeeAdvCategory = require('../../models/buttons/jeeadvcategory'); // Corrected path for jeeadvcategory model

const allowedCategories = ['General', 'OBC', 'SC/ST', 'NTC']; // Define the allowed categories

const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

// POST method to create a new category
const postCategory = async (req, res) => {
  try {
    const { categoryname } = req.body;

    // Check if the category is allowed
    if (!allowedCategories.includes(categoryname)) {
      return res.status(400).json({ msg: 'Category not allowed' });
    }

    // Create and save the category
    const category = new JeeAdvCategory({ categoryname });
    await category.save();

    // Return success response with category data
    return res.status(201).json({
      msg: "success",
      data: category, // Return the saved category document
    });
  } catch (error) {
    // Handle errors and return an error response
    res.status(400).json({ msg: error.message });
  }
};

// GET method to retrieve all categories
const getCategories = async (req, res) => {
  try {
    const categories = await JeeAdvCategory.find();
    
    // Return the list of categories
    return res.status(200).json({
      msg: "success",
      data: categories,
    });
  } catch (error) {
    // Handle errors and return an error response
    res.status(400).json({ msg: error.message });
  }
};

// Exporting the functions to be used in routes
module.exports = {
  postCategory,
  getCategories
};

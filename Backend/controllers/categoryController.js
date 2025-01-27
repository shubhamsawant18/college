const express = require('express');
const Category = require('../models/Category'); // Import the Category model

const router = express.Router();

router.use(express.json()); // Middleware to parse JSON bodies

const postCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = new Category({categoryname: name });
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
    let data = await Category.find();
    return res.status(200).json({
      msg: "success",
      data: data,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

 // Define the route for GET /categories

module.exports = {
 postCategory,getCategory
};

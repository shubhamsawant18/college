const express = require('express');
const JeeAdvCollege = require('../../models/buttons/jeeadvcollege'); // Corrected path for jeeadvcollege model
const Category = require('../../models/buttons/jeeadvcategory');

const allowedCategories = ['General', 'OBC', 'SC/ST', 'NTC']; // Define the allowed categories

const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

// POST method to create a new college entry
const postCollege = async (req, res) => {
  try {
    const { collegename, rank, category, gender } = req.body;

    // Check if the category is allowed
    if (!allowedCategories.includes(category)) {
      return res.status(400).json({ msg: 'Category not allowed' });
    }

    // Create and save the college entry
    const college = new JeeAdvCollege({ collegename, rank, category, gender });
    await college.save();

    // Return success response with college data
    return res.status(201).json({
      success: true,
      msg: "College added successfully",
      data: college, // Return the saved college document
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Error adding college",
      error: error.message
    });
  }
};

// GET method to retrieve all college entries
const getColleges = async (req, res) => {
  try {
    const colleges = await JeeAdvCollege.find();
    
    // Return the list of colleges
    return res.status(200).json({
      success: true,
      msg: "Success",
      total: colleges.length,
      data: colleges,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error fetching colleges",
      error: error.message,
    });
  }
};

// GET method to filter colleges based on query parameters
const queryColleges = async (req, res) => {
  try {
    const { category, rank, gender, collegename } = req.query;

    const query = {};

    if (category) {
      query.category = category;
    }

    if (rank) {
      const parsedRank = Number(rank);
      if (!isNaN(parsedRank)) {
        query.rank = parsedRank;
      } else {
        return res.status(400).json({
          success: false,
          msg: "Invalid rank value",
        });
      }
    }

    if (gender) {
      query.gender = gender;
    }

    if (collegename) {
      query.collegename = collegename;
    }

    console.log('Query:', query); // Log the query

    const colleges = await JeeAdvCollege.find(query);

    console.log('Colleges:', colleges); // Log the fetched colleges

    res.status(200).json({
      success: true,
      msg: "Success",
      total: colleges.length,
      data: colleges,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Error filtering colleges",
      error: error.message,
    });
  }
};

module.exports = {
  postCollege,
  getColleges,
  queryColleges,
};

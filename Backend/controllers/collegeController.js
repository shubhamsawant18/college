const express = require('express');
const College = require('../models/College');  // Import the College model

const router = express.Router();

router.use(express.json()); // Middleware to parse JSON bodies

const postCollege = async (req, res) => {
  try {
    const { collegename, cityid, courses, categoryid, rank } = req.body;
    const college = new College({ collegename, cityid, courses, categoryid, rank });
    await college.save();
    return res.status(201).json({
      msg: "success",
      data: college, // Return the saved college document
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const getColleges = async (req, res) => {
  try {
    const colleges = await College.find()
      .populate({ path: 'cityid', model: 'City', select: 'name' }) // Populating city details
      .populate({ path: 'courses', model: 'Course', select: 'coursename duration' }) // Populating course details
      .populate({ path: 'categoryid', model: 'Category', select: 'categoryname' }); // Populating category details

    res.status(200).json({
      success: true,
      data: colleges
    });
  } catch (error) {
    console.error('Error fetching colleges:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching colleges.',
      error: error.message
    });
  }
  };
  
  
  const queryColleges = async (req, res) => {
    try {
      const { rank, category, college, course } = req.query;
  
      // Build the query object
      const query = {};
      if (rank) query.rank = rank;
      if (category) query.categoryid = category;
      if (college) query.collegename = new RegExp(college, 'i'); // Case-insensitive search
      if (course) query.courses = course;
  
      const colleges = await College.find(query)
        .populate({ path: 'cityid', model: 'City', select: 'name' })
        .populate({ path: 'courses', model: 'Course', select: 'coursename duration' })
        .populate({ path: 'categoryid', model: 'Category', select: 'categoryname' });
  
      return res.status(200).json({
        success: true,
        msg: "success",
        data: colleges,
      });
    } catch (error) {
      console.error('Error querying colleges:', error);
      res.status(400).json({
        success: false,
        msg: error.message
      });
    }
  };
  
module.exports ={
    postCollege,getColleges,queryColleges,
  };
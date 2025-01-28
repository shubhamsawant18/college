const express = require('express');
const mongoose = require('mongoose');
const College = require('../models/College');  // Import the College model

const router = express.Router();

router.use(express.json()); // Middleware to parse JSON bodies

const postCollege = async (req, res) => {
  try {
    const { collegename, cityid, courses, category, rank } = req.body;

    // Ensure courses and category are arrays
    const college = new College({
      collegename,
      cityid,
      courses: Array.isArray(courses) ? courses : [courses],
      category: Array.isArray(category) ? category : [category],
      rank
    });

    await college.save();

    return res.status(201).json({
      success: true,
      msg: "College successfully created",
      data: college, // Return the saved college document
    });
  } catch (error) {
    console.error('Error creating college:', error);
    res.status(400).json({
      success: false,
      msg: error.message
    });
  }
};
const getColleges = async (req, res) => {
  try {
    const colleges = await College.find()
      .populate({ path: 'cityid', model: 'City', select: 'name' }) // Populating city details
      .populate({ path: 'courses', model: 'Course', select: 'coursename duration' }) // Populating course details
      .populate({ path: 'category', model: 'Category', select: 'categoryname' }); // Populating category details

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


const isValidObjectId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

const queryColleges = async (req, res) => {
  try {
    const { rank, category, city, course } = req.query;

    // Validate the provided ids
    let cityId, categoryId, courseId;
    if (city && isValidObjectId(city)) {
      cityId = new mongoose.Types.ObjectId(city);
    }
    if (category && isValidObjectId(category)) {
      categoryId = new mongoose.Types.ObjectId(category);
    }
    if (course && isValidObjectId(course)) {
      courseId = new mongoose.Types.ObjectId(course);
    }

    // Build the query object dynamically
    const query = {};
    if (rank) query.rank = rank;
    if (categoryId) query.category = { $in: [categoryId] };
    if (cityId) query.cityid = cityId;
    if (courseId) query.courses = { $in: [courseId] }; // Ensure courses is treated as an array

    const colleges = await College.find(query)
      .populate({ path: 'cityid', model: 'City', select: 'name' })
      .populate({ path: 'courses', model: 'Course', select: 'coursename duration' })
      .populate({ path: 'category', model: 'Category', select: 'categoryname' }).lean();

    return res.status(200).json({
      success: true,
      msg: "success",
      total: colleges.length,
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

module.exports = {
  postCollege,
  getColleges,
  queryColleges,
};

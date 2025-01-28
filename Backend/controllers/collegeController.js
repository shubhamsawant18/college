const express = require('express');
const mongoose = require('mongoose');
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
    const { rank, category, city, course } = req.query;

    // Define the allowed cities, reservations, and courses
    const allowedCities = [
      new mongoose.Types.ObjectId('679742528144d9a79d4493f4'), // Satara
      new mongoose.Types.ObjectId('6797435b798748a613b211f3'), // Mumbai
      new mongoose.Types.ObjectId('67977ed2de4e5932ec336ea8'), // Nagpur
      new mongoose.Types.ObjectId('6798a85d103c5a2e747cbeb0')  // Pune
    ];
    const allowedReservations = [
      new mongoose.Types.ObjectId('67974b80114034b38e1b71eb'), // SC/ST
      new mongoose.Types.ObjectId('67974b97114034b38e1b71f1'), // General
      new mongoose.Types.ObjectId('67974bfa114034b38e1b71f3'), // OBC
      new mongoose.Types.ObjectId('67974c45114034b38e1b71f5')  // NTC
    ];
    const allowedCourses = [
      new mongoose.Types.ObjectId('6797593d622cc4b6a046a25c'), // B.Sc Nursing
      new mongoose.Types.ObjectId('6798afe056edfdb1bae1e7c9'), // BDS
      new mongoose.Types.ObjectId('6798b006b2b599f4a28ac59a')  // MBBS
    ];

    // Check if the requested city, category, and course are allowed
    let cityId, categoryId, courseId;
    if (city) {
      cityId = new mongoose.Types.ObjectId(city);
      if (!allowedCities.includes(cityId)) {
        return res.status(400).json({ success: false, msg: 'City not allowed' });
      }
    }
    if (category) {
      categoryId = new mongoose.Types.ObjectId(category);
      if (!allowedReservations.includes(categoryId)) {
        return res.status(400).json({ success: false, msg: 'Reservation category not allowed' });
      }
    }
    if (course) {
      courseId = new mongoose.Types.ObjectId(course);
      if (!allowedCourses.includes(courseId)) {
        return res.status(400).json({ success: false, msg: 'Course not allowed' });
      }
    }

    // Build the query object
    const query = {};
    if (rank) query.rank = rank;
    if (categoryId) query.categoryid = categoryId;
    if (cityId) query.cityid = cityId;
    if (courseId) query.courses = courseId;

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

module.exports = {
  postCollege,
  getColleges,
  queryColleges,
};

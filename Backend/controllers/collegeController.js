const mongoose = require('mongoose');
const College = require('../models/College');
const Course = require('../models/Course');
const Category = require('../models/Category');
const City = require('../models/City');

const queryColleges = async (req, res) => {
  try {
    const { rank, category, city, course } = req.query;

    console.log('Received query:', { rank, category, city, course });

    // Validate and log the provided IDs
    let cityId, categoryId, courseId;

    if (city) {
      if (mongoose.Types.ObjectId.isValid(city)) {
        cityId = new mongoose.Types.ObjectId(city);
        console.log('Valid city ID:', cityId);
      } else {
        console.error('Invalid city ID:', city);
        return res.status(400).json({ msg: `Invalid city ID: ${city}` });
      }
    }

    if (category) {
      if (mongoose.Types.ObjectId.isValid(category)) {
        categoryId = new mongoose.Types.ObjectId(category);
        console.log('Valid category ID:', categoryId);
      } else {
        console.error('Invalid category ID:', category);
        return res.status(400).json({ msg: `Invalid category ID: ${category}` });
      }
    }

    if (course) {
      if (mongoose.Types.ObjectId.isValid(course)) {
        courseId = new mongoose.Types.ObjectId(course);
        console.log('Valid course ID:', courseId);
      } else {
        console.error('Invalid course ID:', course);
        return res.status(400).json({ msg: `Invalid course ID: ${course}` });
      }
    }

    // Build the query object dynamically
    const query = {};
    if (rank) {
      if (!isNaN(Number(rank))) {
        query.rank = Number(rank);
        console.log('Filtering by rank:', rank);
      } else {
        console.error('Invalid rank value:', rank);
        return res.status(400).json({ msg: `Invalid rank value: ${rank}` });
      }
    }

    if (categoryId) {
      query.category = { $in: [categoryId] };
      console.log('Filtering by category ID:', categoryId);
    }

    if (cityId) {
      query.cityid = cityId;
      console.log('Filtering by city ID:', cityId);
    }

    if (courseId) {
      query.courses = { $in: [courseId] };
      console.log('Filtering by course ID:', courseId);
    }

    console.log('Built query:', query);

    const colleges = await College.find(query)
      .populate({ path: 'cityid', model: 'City', select: 'name' })
      .populate({ path: 'courses', model: 'Course', select: 'coursename duration' })
      .populate({ path: 'category', model: 'Category', select: 'categoryname' })
      .lean();

    console.log('Queried colleges:', colleges);

    return res.status(200).json({
      success: true,
      msg: 'success',
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

// POST request to add a new college
const postCollege = async (req, res) => {
  try {
    const { collegename, cityid, category, rank, courses } = req.body;

    const newCollege = new College({
      collegename,
      cityid,
      category,
      rank,
      courses
    });

    await newCollege.save();
    res.status(201).json({
      success: true,
      msg: "College added successfully",
      data: newCollege
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Error adding college",
      error: error.message
    });
  }
};

// GET request to fetch all colleges
const getColleges = async (req, res) => {
  try {
    const colleges = await College.find()
      .populate('cityid')
      .populate('category')
      .populate('courses');
    res.status(200).json({
      success: true,
      msg: "Success",
      total: colleges.length,
      data: colleges
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Error fetching colleges",
      error: error.message
    });
  }
};

module.exports = {
  postCollege,
  getColleges,
  queryColleges,
};

const express = require('express');
const router = express.Router();
const JeemCollege = require('../../models/buttons/jeemcollege');
const JeemCourse = require('../../models/buttons/jeemcourse');
const Category = require('../../models/buttons/jeemcategory');
const District = require('../../models/buttons/jeemdistrict');

// Middleware to parse JSON bodies
router.use(express.json());

// POST request to add a new college
const postCollege = async (req, res) => {
  try {
    const { collegename, districtid, category, rank, courses, gender } = req.body;

    const newCollege = new JeemCollege({
      collegename,
      districtid,
      category,
      rank,
      courses,
      gender
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
    const colleges = await JeemCollege.find()
      .populate('districtid')
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

// GET request to filter colleges based on query parameters
const queryColleges = async (req, res) => {
  try {
    const { category, rank, courses, district, gender } = req.query;

    const query = {};

    if (category) {
      const categoryArray = category.split(',').map(cat => cat.trim());
      const categoryDocs = await Category.find({ categoryname: { $in: categoryArray } });
      const categoryIds = categoryDocs.map(cat => cat._id);
      if (categoryIds.length > 0) {
        query.category = { $in: categoryIds };
      } else {
        return res.status(400).json({
          success: false,
          msg: "Category not found",
        });
      }
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

    if (courses) {
      const courseArray = courses.split(',').map(course => course.trim());
      const courseIds = await JeemCourse.find({ coursename: { $in: courseArray } }).select('_id');
      if (courseIds.length > 0) {
        query.courses = { $in: courseIds.map(course => course._id) };
      } else {
        return res.status(400).json({
          success: false,
          msg: "Courses not found",
        });
      }
    }

    if (district) {
      const districtDoc = await District.findOne({ name: district });
      if (districtDoc) {
        query.districtid = districtDoc._id;
      } else {
        return res.status(400).json({
          success: false,
          msg: "District not found",
        });
      }
    }

    if (gender) {
      query.gender = gender;
    }

    console.log('Query:', query); // Log the query

    const colleges = await JeemCollege.find(query)
      .populate({ path: 'districtid', strictPopulate: false })
      .populate('category')
      .populate('courses');

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

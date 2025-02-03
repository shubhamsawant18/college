const mongoose = require('mongoose');
const CatCollege = require('../../models/buttons/Catcollege');
const CatCourse = require('../../models/buttons/Catcourse');
const CatCategory = require('../../models/buttons/Catcategory');

const postCollege = async (req, res) => {
  try {
    const { collegename, category, percentile, courses } = req.body;

    // Create a new college document
    const newCollege = new CatCollege({
      collegename,
      category,
      percentile,
      courses,
    });

    // Save the new college to the database
    await newCollege.save();

    res.status(201).json({
      success: true,
      msg: "College added successfully",
      data: newCollege,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Error adding college",
      error: error.message,
    });
  }
};

const getColleges = async (req, res) => {
  try {
    const colleges = await CatCollege.find()
      .populate("category")
      .populate("courses");

    res.status(200).json({
      success: true,
      msg: "Success",
      total: colleges.length,
      data: colleges,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Error fetching colleges",
      error: error.message,
    });
  }
};

const queryColleges = async (req, res) => {
  try {
    const { category, percentile, courses } = req.query;

    const query = {};

    if (category) {
      const categoryDoc = await CatCategory.findOne({ categoryname: category });
      if (categoryDoc) {
        query.category = categoryDoc._id;
      } else {
        return res.status(400).json({ success: false, msg: "Category not found" });
      }
    }

    if (percentile) {
      const parsedPercentile = Number(percentile);
      if (!isNaN(parsedPercentile)) {
        query.percentile = parsedPercentile;
      } else {
        return res.status(400).json({ success: false, msg: "Invalid percentile value" });
      }
    }

    if (courses) {
      const courseArray = courses.split(',').map(course => course.trim());
      const courseIds = await CatCourse.find({ coursename: { $in: courseArray } }).select('_id');
      if (courseIds.length > 0) {
        query.courses = { $in: courseIds.map(course => course._id) };
      } else {
        return res.status(400).json({ success: false, msg: "Courses not found" });
      }
    }

    const colleges = await CatCollege.find(query)
      .populate("category")
      .populate("courses");

    res.status(200).json({
      success: true,
      msg: "Success",
      total: colleges.length,
      data: colleges,
    });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Error filtering colleges", error: error.message });
  }
};

module.exports = {
  postCollege,
  getColleges,
  queryColleges,
};

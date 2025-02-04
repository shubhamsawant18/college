const mongoose = require("mongoose");
const CatCollege = require("../../models/buttons/Catcollege");
const CatCourse = require("../../models/buttons/Catcourse"); // Ensure the correct path
const CatCategory = require("../../models/buttons/Catcategory"); 
// POST request to add a new college
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

// GET request to fetch all colleges
const getColleges = async (req, res) => {
  try {
    const colleges = await CatCollege.find()
      .populate("category")
      .populate("courses"); // Assuming you want to populate related category and courses

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

// GET request to filter colleges based on query parameters
const queryColleges = async (req, res) => {
  try {
    const { category, percentile, courses } = req.query;

    const query = {};

    if (category) {
      // Find the category ID based on the category name
      const categoryDoc = await CatCategory.findOne({ categoryname: category });
      console.log('Category Document:', categoryDoc); // Log category document
      if (categoryDoc) {
        query.category = categoryDoc._id;
      } else {
        return res.status(400).json({
          success: false,
          msg: "Category not found",
        });
      }
    }

    if (percentile) {
      const parsedPercentile = Number(percentile);

      if (!isNaN(parsedPercentile)) {
        query.percentile = parsedPercentile;
      } else {
        return res.status(400).json({
          success: false,
          msg: "Invalid percentile value",
        });
      }
    }

    if (courses) {
      const courseArray = courses.split(',').map(course => course.trim());
      const courseIds = await CatCourse.find({ coursename: { $in: courseArray } }).select('_id');
      console.log('Course IDs:', courseIds); // Log course IDs

      if (courseIds.length > 0) {
        query.courses = { $in: courseIds.map(course => course._id) };
      } else {
        return res.status(400).json({
          success: false,
          msg: "Courses not found",
        });
      }
    }

    console.log('Query:', query); // Log the query

    const colleges = await CatCollege.find(query)
      .populate("category")
      .populate("courses");

    console.log('Colleges:', colleges); // Log colleges result

    // Filter out colleges where the category doesn't exactly match
    const filteredColleges = colleges.filter(college => 
      college.category.some(cat => cat._id.toString() === query.category.toString())
    );

    res.status(200).json({
      success: true,
      msg: "Success",
      total: filteredColleges.length,
      data: filteredColleges,
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
const CatCollege = require("../../models/buttons/Catcollege");
const mongoose = require("mongoose");

// Add a new college
const postCollege = async (req, res) => {
  try {
    const { collegename, category, percentile, courses } = req.body;

    // Create new college document
    const college = new CatCollege({
      collegename,
      category: Array.isArray(category) ? category : [category],
      percentile,
      courses: Array.isArray(courses) ? courses : [courses],
    });

    await college.save();

    return res.status(201).json({
      success: true,
      msg: "College successfully created",
      data: college,
    });
  } catch (error) {
    console.error("Error creating college:", error);
    res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

// Get all colleges
const getColleges = async (req, res) => {
  try {
    const colleges = await CatCollege.find()
      .populate({ path: "category", model: "CatCategory", select: "categoryname" })
      .populate({ path: "courses", model: "CatCourse", select: "coursename" });

    res.status(200).json({
      success: true,
      data: colleges,
    });
  } catch (error) {
    console.error("Error fetching colleges:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching colleges.",
      error: error.message,
    });
  }
};

// Query colleges with filters (e.g., category, course, percentile)
const queryColleges = async (req, res) => {
  try {
    const { percentile, category, course } = req.query;

    let categoryId, courseId;
    if (category && mongoose.Types.ObjectId.isValid(category)) {
      categoryId = new mongoose.Types.ObjectId(category);
    }
    if (course && mongoose.Types.ObjectId.isValid(course)) {
      courseId = new mongoose.Types.ObjectId(course);
    }

    const query = {};
    if (percentile) query.percentile = { $lte: percentile };
    if (categoryId) query.category = { $in: [categoryId] };
    if (courseId) query.courses = { $in: [courseId] };

    const colleges = await CatCollege.find(query)
      .populate({ path: "category", model: "CatCategory", select: "categoryname" })
      .populate({ path: "courses", model: "CatCourse", select: "coursename" })
      .lean();

    return res.status(200).json({
      success: true,
      msg: "success",
      total: colleges.length,
      data: colleges,
    });
  } catch (error) {
    console.error("Error querying colleges:", error);
    res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports = {
  postCollege,
  getColleges,
  queryColleges,
};

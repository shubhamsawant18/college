const express = require('express');
const CatCourse = require('../../models/buttons/Catcourse');  // Correct import path

// Define the allowed courses
const allowedCourses = ['MBA', 'Executive MBA'];

// Post course - to add a new course
const postCourse = async (req, res) => {
  try {
    const { coursename } = req.body;  // Extract only coursename from the request body

    // Check if the course is allowed
    if (!allowedCourses.includes(coursename)) {
      return res.status(400).json({ msg: 'Course not allowed' });
    }

    // Create and save the new course
    const course = new CatCourse({ coursename });
    await course.save();

    // Return the created course in the response
    return res.status(201).json({
      msg: "Course successfully added",
      data: course,  // Return the saved course data
    });
  } catch (error) {
    // If an error occurs, return a detailed error message
    return res.status(400).json({ msg: 'Error adding course: ' + error.message });
  }
};

// Get courses - to fetch courses with filtering options (category, percentile, courses)
const getCourse = async (req, res) => {
  try {
    const { category, percentile, courses } = req.query; // Extract query parameters

    let filter = {}; // Initialize filter object

    // Apply category filter if provided
    if (category) {
      filter.category = category;
    }

    // Apply percentile filter if provided
    if (percentile) {
      filter.percentile = { $gte: percentile };
    }

    // Apply courses filter if provided
    if (courses) {
      // Split courses in case multiple are passed
      const courseArray = courses.split(',').map(course => course.trim());
      filter.coursename = { $in: courseArray };
    }

    // Fetch courses from the database using filters
    const coursesList = await CatCourse.find(filter);

    // Return the fetched courses in the response
    return res.status(200).json({
      msg: "success",
      data: coursesList,  // Return the filtered courses data
    });
  } catch (error) {
    // If an error occurs, return a detailed error message
    return res.status(400).json({ msg: 'Error fetching courses: ' + error.message });
  }
};

module.exports = {
  postCourse,
  getCourse
};

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
      msg: "success",
      data: course,  // Return the saved course data
    });
  } catch (error) {
    // If an error occurs, return a detailed error message
    res.status(400).json({ msg: error.message });
  }
};

// Get courses - to fetch all courses
const getCourse = async (req, res) => {
  try {
    // Fetch all courses from the database
    const courses = await CatCourse.find();
    
    // Return the fetched courses in the response
    return res.status(200).json({
      msg: "success",
      data: courses,  // Return the courses data
    });
  } catch (error) {
    // If an error occurs, return a detailed error message
    res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  postCourse,
  getCourse
};

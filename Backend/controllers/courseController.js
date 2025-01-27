const express = require('express');
const mongoose = require('mongoose');
const Course = require('../models/Course'); // Import the Course model

const router = express.Router();

router.use(express.json()); // Middleware to parse JSON bodies

const postCourse = async (req, res) => {
  try {
    const { name, duration } = req.body;
    
    const course = new Course({coursename
      : name, duration:duration });
    await course.save();
    return res.status(201).json({
      msg: "success",
      data: course, 
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const getCourse = async (req, res) => {
  try {
    let data = await Course.find();
    return res.status(200).json({
      msg: "success",
      data: data,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// Define the route for GET /courses

module.exports ={
  postCourse,getCourse
};

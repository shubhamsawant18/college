const express = require('express');
const router = express.Router();
const { postCourse, getCourse } = require('../../controllers/buttons/catCourseController');

// Define the POST route to create a course
router.post('/', postCourse);

// Define the GET route to fetch all courses
router.get('/', getCourse);

module.exports = router;

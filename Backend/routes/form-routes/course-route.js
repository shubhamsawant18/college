const express = require('express');
const { postCourse, getCourse } = require('../../controllers/coursecontroller');

const router = express.Router();

// POST route to create a new course
router.post('/', postCourse);

// GET route to retrieve all courses
router.get('/', getCourse);

module.exports = router;

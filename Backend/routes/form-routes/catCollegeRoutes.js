// routes/form-routes/catCollegeRoutes.js
const express = require('express');
const router = express.Router();
const { postCollege, getColleges, queryColleges } = require('../../controllers/buttons/catCollegeController');

// Route to create a new college
router.post('/', postCollege);

// Route to get all colleges
router.get('/', getColleges);

// Route to filter colleges based on query parameters
router.get('/filter', queryColleges);

module.exports = router;
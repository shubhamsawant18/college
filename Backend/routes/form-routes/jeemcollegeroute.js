const express = require('express');
const { postCollege, getColleges, queryColleges } = require('../../controllers/buttons/jeemcollegecontroller');

const router = express.Router();

// POST route to create a new college
router.post('/', postCollege);

// GET route to retrieve all colleges
router.get('/', getColleges);

// GET route to filter colleges based on query parameters
router.get('/query', queryColleges);

module.exports = router;

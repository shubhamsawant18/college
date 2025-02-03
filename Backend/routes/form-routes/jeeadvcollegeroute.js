const express = require('express');
const { postCollege, getColleges, queryColleges } = require('../../controllers/buttons/jeeadvcollegecontroller');

const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

// POST route to create a new college entry
router.post('/', postCollege);

// GET route to retrieve all college entries
router.get('/', getColleges);

// GET route to filter colleges based on query parameters
router.get('/query', queryColleges);

module.exports = router;

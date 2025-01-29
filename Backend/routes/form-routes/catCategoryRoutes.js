const express = require('express');
const router = express.Router();

// Import the controller functions
const { postCategory, getCategory } = require('../../controllers/buttons/catCategoryController'); // Correct path

// POST route for creating a new category
router.post('/', postCategory);

// GET route for fetching all categories
router.get('/', getCategory);

module.exports = router;

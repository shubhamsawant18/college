const express = require('express');
const { postCategory, getCategories } = require('../../controllers/buttons/jeeadvcategorycontroller');

const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

// POST route to create a new category
router.post('/', postCategory);

// GET route to retrieve all categories
router.get('/', getCategories);

module.exports = router;

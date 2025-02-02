const express = require('express');
const { postCategory, getCategory } = require('../../controllers/buttons/jeemcategorycontroller');

const router = express.Router();

// POST route to create a new category
router.post('/', postCategory);

// GET route to retrieve all categories
router.get('/', getCategory);

module.exports = router;

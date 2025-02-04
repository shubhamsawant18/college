const express = require('express');
const { postGateCategory, getGateCategory } = require('../../controllers/buttons/gatecategorycontroller');

const router = express.Router();

// POST route to create a new gate category
router.post('/', postGateCategory);

// GET route to retrieve all gate categories
router.get('/', getGateCategory);

module.exports = router;

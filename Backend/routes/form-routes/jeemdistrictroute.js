const express = require('express');
const { postDistrict, getDistricts } = require('../../controllers/buttons/jeemdistrictcontroller');

const router = express.Router();

// POST route to create a new district
router.post('/', postDistrict);

// GET route to retrieve all districts
router.get('/', getDistricts); // Ensure getDistricts function is correctly imported and defined

module.exports = router;

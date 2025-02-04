const express = require('express');
const { postGateCollege, getGateCollege, queryGateColleges } = require('../../controllers/buttons/gatecollegecontroller');

const router = express.Router();

// POST route to create a new college entry
router.post('/', postGateCollege);

// GET route to retrieve all colleges
router.get('/', getGateCollege);

// GET route to retrieve filtered colleges
router.get('/filter', queryGateColleges);

module.exports = router;

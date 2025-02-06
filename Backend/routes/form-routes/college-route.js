const express = require('express');
const { postCollege, getColleges, queryColleges } = require('../../controllers/collegeController');

const router = express.Router();

router.post('/', postCollege);
router.get('/', getColleges);
router.get('/filter', queryColleges);

module.exports = router;

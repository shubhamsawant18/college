const express = require('express');
const router = express.Router();
const {postCollege,getColleges,queryColleges}  = require('../../controllers/collegeController');
router.post('/',postCollege,);
router.get('/',getColleges,);
router.get('/filter',queryColleges,);

module.exports = router;
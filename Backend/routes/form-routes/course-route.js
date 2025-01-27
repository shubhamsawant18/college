const express = require('express');
const router = express.Router();
const {postCourse,getCourse}  = require('../../controllers/courseController');
router.post('/',postCourse);
router.get('/',getCourse);

module.exports = router;
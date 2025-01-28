const express = require('express');
const { postCourse, getCourse } = require('../../controllers/courseController');
const router = express.Router();

router.post('/', postCourse);
router.get('/', getCourse);

module.exports = router;

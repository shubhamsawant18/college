const express = require('express');
const { postCategory, getCategory } = require('../../controllers/categoryController');
const router = express.Router();

router.post('/', postCategory);
router.get('/', getCategory);

module.exports = router;

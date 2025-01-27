const express = require('express');
const router = express.Router();
const {postCategory,getCategory}  = require('../../controllers/categoryController');
router.post('/',postCategory);
router.get('/',getCategory);

module.exports = router;
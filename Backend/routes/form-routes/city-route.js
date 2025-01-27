const express = require('express');
const router = express.Router();
const {postCity,getCity}  = require('../../controllers/cityController');
router.post('/',postCity);
router.get('/',getCity);

module.exports = router;
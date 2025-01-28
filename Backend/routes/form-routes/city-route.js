const express = require('express');
const { postCity, getCity } = require('../../controllers/cityController');
const router = express.Router();

router.post('/', postCity);
router.get('/', getCity);

module.exports = router;

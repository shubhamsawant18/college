const express = require('express');
const { postCity, getCities } = require('../../controllers/citycontroller');

const router = express.Router();

router.post('/', postCity);
router.get('/', getCities);

module.exports = router;

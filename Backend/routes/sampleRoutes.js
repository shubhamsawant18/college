const express = require('express');
const { getSamples, createSample } = require('../controllers/sampleController');

const router = express.Router();

router.route('/').get(getSamples).post(createSample);

module.exports = router;

const express = require('express');
const { postGateStream, getGateStream } = require('../../controllers/buttons/gatestreamcontroller');

const router = express.Router();

// POST route to create a new gate stream
router.post('/', postGateStream);

// GET route to retrieve all gate streams
router.get('/', getGateStream);

module.exports = router;

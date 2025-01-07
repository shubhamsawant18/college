// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const Registration = require('../models/registration'); // Reuse existing model

// Endpoint to get all registrations
router.get('/registrations', async (req, res) => {
  try {
    const registrations = await Registration.find();
    console.log('Registrations:', registrations); // Debug log
    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching registrations', error });
  }
});

module.exports = router;



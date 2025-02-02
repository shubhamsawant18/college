const express = require('express');
const District = require('../../models/buttons/jeemdistrict');

const router = express.Router();

router.use(express.json()); // Middleware to parse JSON bodies

// Define the allowed districts
const allowedDistricts = ['Satara', 'Mumbai', 'Pune', 'Nagpur'];

const postDistrict = async (req, res) => {
  try {
    const { name } = req.body;

    // Check if the district is allowed
    if (!allowedDistricts.includes(name)) {
      return res.status(400).json({ msg: 'District not allowed' });
    }

    const district = new District({ name });
    await district.save();
    return res.status(201).json({
      msg: "success",
      data: district, // Return the saved district document
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const getDistricts = async (req, res) => {
  try {
    const districts = await District.find();
    return res.status(200).json({
      msg: "success",
      data: districts,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  postDistrict,
  getDistricts,
};

const City = require('../models/City');

const allowedCities = ['Satara', 'Mumbai', 'Pune', 'Nagpur'];

const postCity = async (req, res) => {
  try {
    const { name } = req.body;

    // Check if the city is allowed
    if (!allowedCities.includes(name)) {
      return res.status(400).json({ msg: 'City not allowed' });
    }

    const city = new City({ name });
    await city.save();
    return res.status(201).json({
      msg: "success",
      data: city,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const getCities = async (req, res) => {
  try {
    const cities = await City.find();
    return res.status(200).json({
      msg: "success",
      data: cities,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  postCity,
  getCities,
};

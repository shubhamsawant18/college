const Sample = require('../models/sampleModel');

const getSamples = async (req, res) => {
    try {
        const samples = await Sample.find();
        res.json(samples);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const createSample = async (req, res) => {
    try {
        const newSample = new Sample(req.body);
        const savedSample = await newSample.save();
        res.json(savedSample);
    } catch (error) {
        res.status(400).json({ message: 'Error Creating Sample' });
    }
};

module.exports = { getSamples, createSample };

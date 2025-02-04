const GateCollege = require('../../models/buttons/gatecollege');

// POST method to create a new college entry
const postGateCollege = async (req, res) => {
  try {
    const { name, score, category, stream } = req.body;

    if (!name || score === undefined || category === undefined || stream === undefined) {
      return res.status(400).json({ msg: 'Name, score, category, and stream are required' });
    }

    // Validate the category and stream names
    const allowedCategories = ['general', 'obc', 'sc/st', 'ntc'];
    const allowedStreams = ['computer science', 'information technology', 'chemical engineering'];

    if (!allowedCategories.includes(category.toLowerCase()) || !allowedStreams.includes(stream.toLowerCase())) {
      return res.status(400).json({ msg: 'Invalid category or stream' });
    }

    // Create and save the college entry
    const gateCollege = new GateCollege({
      name: name,
      score: parseInt(score, 10),
      category: category.toLowerCase(),
      stream: stream.toLowerCase()
    });
    await gateCollege.save();

    return res.status(201).json({
      msg: "success",
      data: gateCollege,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// GET method to retrieve all colleges
const getGateCollege = async (req, res) => {
  try {
    const colleges = await GateCollege.find();
    return res.status(200).json({
      msg: "success",
      data: colleges,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// GET method to retrieve filtered colleges
const queryGateColleges = async (req, res) => {
  try {
    const { score, category, stream } = req.query;

    const query = {};
    if (score) query.score = { $lte: score };
    if (category) query.category = category.toLowerCase();
    if (stream) query.stream = stream.toLowerCase();

    const colleges = await GateCollege.find(query);
    return res.status(200).json({
      msg: "success",
      data: colleges,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  postGateCollege,
  getGateCollege,
  queryGateColleges
};

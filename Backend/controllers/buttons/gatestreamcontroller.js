const GateStream = require('../../models/buttons/gatestream');

// POST method to create a new gate stream
exports.postGateStream = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ msg: 'Stream name is required' });
    }

    // Validate the stream name
    const allowedStreams = ['computer science', 'information technology', 'chemical engineering'];
    if (!allowedStreams.includes(name.toLowerCase())) {
      return res.status(400).json({ msg: 'Stream not allowed' });
    }

    // Create and save the stream
    const gateStream = new GateStream({ name: name.toLowerCase() });
    await gateStream.save();

    return res.status(201).json({
      msg: "success",
      data: gateStream,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// GET method to retrieve all gate streams
exports.getGateStream = async (req, res) => {
  try {
    const streams = await GateStream.find();

    return res.status(200).json({
      msg: "success",
      data: streams,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

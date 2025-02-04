const GateCategory = require('../../models/buttons/gatecategory');

// POST method to create a new gate category
exports.postGateCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ msg: 'Category name is required' });
    }

    // Validate the category name
    const allowedCategories = ['general', 'obc', 'sc/st', 'ntc'];
    if (!allowedCategories.includes(name.toLowerCase())) {
      return res.status(400).json({ msg: 'Category not allowed' });
    }

    // Create and save the category
    const gateCategory = new GateCategory({ name: name.toLowerCase() });
    await gateCategory.save();

    return res.status(201).json({
      msg: "success",
      data: gateCategory,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// GET method to retrieve all gate categories
exports.getGateCategory = async (req, res) => {
  try {
    const categories = await GateCategory.find();

    return res.status(200).json({
      msg: "success",
      data: categories,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

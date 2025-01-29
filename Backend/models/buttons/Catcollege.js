const mongoose = require("mongoose");

const catCollegeSchema = new mongoose.Schema({
  collegename: {
    type: String,
    required: true,
  },
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CatCategory",
      required: true,
    },
  ],
  percentile: {
    type: Number,
    required: true,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CatCourse",
      required: true,
    },
  ],
});

const CatCollege = mongoose.model("CatCollege", catCollegeSchema);

module.exports = CatCollege;

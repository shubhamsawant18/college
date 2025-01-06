const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  const { fullName, email, phone, city, course, onlineCourse } = req.body;

  try {
    // Validate input (if necessary)
    if (!fullName || !email || !phone || !city || !course) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Save the user data in the database
    const newUser = new User({
      fullName,
      email,
      phone,
      city,
      course,
      onlineCourse,
    });

    await newUser.save();

    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error registering user" });
  }
});

module.exports = router;

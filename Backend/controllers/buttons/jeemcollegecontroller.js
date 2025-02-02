// const express = require('express');
// const College = require('../../models/buttons/jeemcollege');
// const router = express.Router();

// // Middleware to parse JSON bodies
// router.use(express.json());

// // POST method to create a new college
// const postCollege = async (req, res) => {
//   try {
//     const { collegename, cityid, category, rank, courses } = req.body;
//     const newCollege = new College({ collegename, cityid, category, rank, courses });
//     await newCollege.save();
//     return res.status(201).json({
//       msg: "success",
//       data: newCollege,
//     });
//   } catch (error) {
//     res.status(400).json({ msg: error.message });
//   }
// };

// // GET method to retrieve all colleges
// const getColleges = async (req, res) => {
//   try {
//     const colleges = await College.find().populate('cityid category courses');
//     return res.status(200).json({
//       msg: "success",
//       data: colleges,
//     });
//   } catch (error) {
//     res.status(400).json({ msg: error.message });
//   }
// };

// // Exporting the functions to be used in routes
// module.exports = {
//   postCollege,
//   getColleges,
// };

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Ensure this is before your routes

// Routes
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const cityRoute = require('./routes/form-routes/city-route');
const categoryRoute = require('./routes/form-routes/category-route');
const courseRoute = require('./routes/form-routes/course-route');
const collegeRoute = require('./routes/form-routes/college-route');
const catCategoryRoute = require('./routes/form-routes/catCategoryRoutes');
const catCourseRoute = require('./routes/form-routes/catCourseRoutes');
const catCollegeRoute = require('./routes/form-routes/catCollegeRoutes');
const jeemCategoryRoute = require('./routes/form-routes/jeemcategoryroute');
const jeemCollegeRoute = require('./routes/form-routes/jeemcollegeroute');
const jeemDistrictRoute = require('./routes/form-routes/jeemdistrictroute');
const jeemCourseRoute = require('./routes/form-routes/jeemcourseroute');
const jeeadvCategoryRoutes = require('./routes/form-routes/jeeadvcategoryroute'); // Correct the import path
const jeeadvCollegeRoutes = require('./routes/form-routes/jeeadvcollegeroute'); // New route

// Use routes
app.use("/api", userRoutes);
app.use("/api/admin", adminRoutes);
app.use('/api/city', cityRoute);
app.use('/api/category', categoryRoute);
app.use('/api/course', courseRoute);
app.use('/api/college', collegeRoute);
app.use('/api/catcategory', catCategoryRoute);
app.use('/api/catcourse', catCourseRoute);
app.use('/api/catcollege', catCollegeRoute);
app.use('/api/jeemcategory', jeemCategoryRoute);
app.use('/api/jeemcollege', jeemCollegeRoute);
app.use('/api/jeemdistrict', jeemDistrictRoute);
app.use('/api/jeemcourse', jeemCourseRoute);
app.use('/api/jeeadvcategory', jeeadvCategoryRoutes); // Corrected the route usage
app.use('/api/jeeadvcollege', jeeadvCollegeRoutes); // New route usage

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const cityRoute = require('./routes/form-routes/city-route');
const categoryRoute = require('./routes/form-routes/category-route');
const courseRoute = require('./routes/form-routes/course-route');
const collegeRoute = require('./routes/form-routes/college-route'); // Import the college route

app.use("/api", userRoutes);
app.use("/api/admin", adminRoutes);
app.use('/api/city', cityRoute);
app.use('/api/category', categoryRoute);
app.use('/api/course', courseRoute);
app.use('/api/college', collegeRoute); // Ensure this line is present

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

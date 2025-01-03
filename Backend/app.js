const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); // Import database connection
const sampleRoutes = require('./routes/sampleRoutes'); // Import routes
require('dotenv').config();


dotenv.config(); // Load environment variables

connectDB(); // Connect to MongoDB

const app = express();

// Middleware
app.use(cors()); // Handle CORS
app.use(bodyParser.json()); // Parse JSON request body

// Routes
app.use('/api/samples', sampleRoutes); // API route for samples

// Base route
app.get('/', (req, res) => {
    res.send('Server is running and connected to MongoDB!');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

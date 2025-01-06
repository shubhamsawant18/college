const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv').config(); // Load environment variables

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error('Error: MONGO_URI is undefined!');
    process.exit(1);
}

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB Atlas');
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1);
    });

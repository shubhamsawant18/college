const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  course: { type: String, required: true },
  onlineCourse: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now }, // Automatically adds timestamp
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;

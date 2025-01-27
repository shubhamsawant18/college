const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

const College = require('./models/College');
const Course = require('./models/Course');
const City = require('./models/City');
const Category = require('./models/Category');

// Sample data
const colleges = [
  { collegeid: 1, collegename: 'College A', cityid: '1', courseid: '1', categoryid: '1', rank: 5 },
  { collegeid: 2, collegename: 'College B', cityid: '1', courseid: '1', categoryid: '1', rank: 8 },
  { collegeid: 3, collegename: 'College C', cityid: '2', courseid: '2', categoryid: '2', rank: 10 },
  // Add more sample colleges
];

const courses = [
  { courseid: 1, coursename: 'MBBS', duration: 5 },
  { courseid: 2, coursename: 'BSC (Nursing)', duration: 4 },
  // Add more sample courses
];

const cities = [
  { id: 1, cityname: 'Pune' },
  { id: 2, cityname: 'Mumbai' },
  // Add more sample cities
];

const categories = [
  { id: 1, categoryname: 'General' },
  { id: 2, categoryname: 'OBC' },
  // Add more sample categories
];

// Insert sample data
const seedDB = async () => {
  await College.insertMany(colleges);
  await Course.insertMany(courses);
  await City.insertMany(cities);
  await Category.insertMany(categories);
  console.log('Database seeded!');
  mongoose.connection.close();
};

seedDB();

import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'; // Adjusted the import path to correctly reference the Navbar component
import Footer from './Footer'; // Import Footer component
import '../assets/styles/AdminPage.css'; // Corrected import path for AdminPage.css

const AdminPage = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    // Fetch registration data from the backend
    const fetchRegistrations = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/admin/registrations');
        const data = await response.json();
        setRegistrations(data);
      } catch (error) {
        console.error('Error fetching registrations:', error);
      }
    };

    fetchRegistrations();
  }, []);

  return (
    <div className="admin-page">
      <Navbar /> {/* Include Navbar at the top */}
      <div className="content">
        <h1 class="registration">Registration Information</h1>
        <table className="registration-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Course</th>
              <th>Online Course</th>
              <th>Registration Time</th>
            </tr>
          </thead>
          <tbody>
            {registrations.length === 0 ? (
              <tr>
                <td colSpan="7">No registrations found.</td>
              </tr>
            ) : (
              registrations.map((registration) => (
                <tr key={registration._id}>
                  <td>{registration.fullName}</td>
                  <td>{registration.email}</td>
                  <td>{registration.phone}</td>
                  <td>{registration.city}</td>
                  <td>{registration.course}</td>
                  <td>{registration.onlineCourse ? 'Yes' : 'No'}</td>
                  <td>{new Date(registration.createdAt).toLocaleString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <Footer /> {/* Include Footer at the bottom */}
    </div>
  );
};

export default AdminPage;

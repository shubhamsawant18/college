import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Adjust import path if needed
import Footer from './Footer'; // Adjust import path if needed
import '../assets/styles/Login.css'; // Import CSS for styling

const Login = ({ setAuthenticated }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Dummy authentication logic, replace with your backend call
    if (formData.username === 'admin' && formData.password === 'admin123') {
      setAuthenticated(true);
      navigate('/admin');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <Navbar /> {/* Include Navbar at the top */}
      <div 
        className="login-form-container"
        style={{
          backgroundImage: "url('/assets/images/loginbg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: 'calc(100vh - 150px)', // Adjust height to fit between Navbar and Footer
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <form onSubmit={handleSubmit}>
          <h2 class="h2admin">Admin Login</h2>
          <div className="input-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="submit-button">Login</button>
        </form>
      </div>
      <Footer /> {/* Include Footer at the bottom */}
    </div>
  );
};

export default Login;

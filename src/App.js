import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminPage from './components/AdminPage'; // Import the AdminPage component
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <main>
                <Routes> {/* Use Routes instead of Switch */}
  <Route path="/admin" element={<AdminPage />} /> {/* Corrected closing angle bracket */}

</Routes>

                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import SignInSignUp from './SignInSignUp';
import axios from 'axios';

const App = () => {
  const [markers, setMarkers] = useState([]);

  const fetchMarkers = async (key) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/markers?key=${key}`);
      setMarkers(response.data);
    } catch (error) {
      console.error('Error fetching markers:', error);
    }
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home fetchMarkers={fetchMarkers} markers={markers} />} />
          <Route path="/signin" element={<SignInSignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

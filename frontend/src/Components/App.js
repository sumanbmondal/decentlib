import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';
import Signup from './Signup';
import axios from 'axios';
import PrivateRoute from './PrivateRoute';
import ProtectedComponent from './ProtectedComponent';
import AuthenticatedHome from './AuthenticatedHome';

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
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/authenticated-home" element={<AuthenticatedHome fetchMarkers={fetchMarkers} markers={markers} />} />
          <Route path="/protected" element={<PrivateRoute element={ProtectedComponent} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

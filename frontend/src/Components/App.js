import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './Signup';
import axios from 'axios';
import PrivateRoute from './PrivateRoute';
import ProtectedComponent from './ProtectedComponent';
import AuthenticatedHome from './AuthenticatedHome';
import useAuth from '../Hooks/useAuth';

const App = () => {
  const isAuthenticated = useAuth();
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
          <Route path="/" element={isAuthenticated ? <Navigate to="/authenticated-home" /> : <Navigate to="/home" />} />
          <Route path="/home" element={<Home fetchMarkers={fetchMarkers} markers={markers} />} />
          <Route path="/signin" element={isAuthenticated ? <Navigate to="/authenticated-home" /> : <SignIn />} />
          <Route path="/signup" element={ <SignUp />} />
          <Route path="/authenticated-home" element={<AuthenticatedHome fetchMarkers={fetchMarkers} markers={markers} />} />
          <Route path="/protected" element={<PrivateRoute element={ProtectedComponent} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

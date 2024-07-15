// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check for token

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/signin" />;
};

export default PrivateRoute;

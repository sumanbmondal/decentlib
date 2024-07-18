// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ element: Component }) => {
  const isAuthenticated = useAuth(); // Use custom hook to get authentication status

  return isAuthenticated ? <Component /> : <Navigate to="/signin" />;
};

export default PrivateRoute;

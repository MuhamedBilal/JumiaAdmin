
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  console.log('PrivateRoute token:', token); // add this line to log the token

  const auth = token ? true : false;
  return auth ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;

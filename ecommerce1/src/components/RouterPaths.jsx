// Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import LoginComponent from './LoginComponent/LoginComponent';
import Signup from './SignUpComponent/Signup';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginComponent />} />
      <Route path="/signup" element={<Signup />} />  
    </Routes>
  );
};

export default AppRoutes;

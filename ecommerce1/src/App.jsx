// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import './App.css'
import AppRoutes from './components/RouterPaths';
function App() {
  return (
    <div>
      <Router>
        <div>
          <NavBar />
          <AppRoutes />
        </div>
      </Router>
    </div>
  );
}

export default App;

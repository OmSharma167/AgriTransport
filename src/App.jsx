import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VehicleListPage from './pages/VehicleListPage';
import AboutPage from './pages/AboutPage';



function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:vehicleType" element={<VehicleListPage />} />
      <Route path="/AboutPage" element={<AboutPage />} />
     
    </Routes>
  );
}

export default App;
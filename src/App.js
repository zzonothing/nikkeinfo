// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Toolbar from './components/Toolbar';
import GachaPage from './components/GachaPage';
import OverloadPage from './components/OverloadPage';

const App = () => {
  return (
    <Router>
      <div>
        <Toolbar />
        <Routes>
          <Route path="/gacha" element={<GachaPage />} />
          <Route path="/overload" element={<OverloadPage />} />
          <Route path="/" element={<div><h1>홈 페이지</h1></div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
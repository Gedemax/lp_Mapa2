import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TerapeutaPage from './components/TerapeutaPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/oneida-fernanda" replace />} />
        <Route path="/:slug" element={<TerapeutaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
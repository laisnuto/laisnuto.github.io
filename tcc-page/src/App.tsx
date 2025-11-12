import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import TCCPage from './TCCPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tcc" element={<TCCPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

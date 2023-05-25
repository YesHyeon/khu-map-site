import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Start from './pages/Start';
import Main from './pages/Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import About from './components/About';
import Quotes from './components/Quotes';
import './App.css';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Calculator />} />
      <Route path="/quote" element={<Quotes />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </>
);

export default App;

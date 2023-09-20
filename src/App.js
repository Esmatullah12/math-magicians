import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Navbar from './components/Navbar';
import About from './components/About';
import './App.css';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </>
);

export default App;

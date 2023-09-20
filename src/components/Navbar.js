import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header>
      <Link to="/" className="logo">Math Magicians</Link>
      <nav className="nav-menu">
        <ul>
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/quote">Quote</Link>
          <Link className="nav-link" to="/about">About</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

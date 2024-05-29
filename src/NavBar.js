import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="na.png" alt="Logo" />
        <span>ACADEMICS</span>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/statistics">Statistics</Link></li>
        <li><Link to="/Conseil">Conseil</Link></li>
        <li><Link to="/Chatbot">ChatBot</Link></li>
      </ul>
      <button className="apply-button">APPLY NOW</button>
    </nav>
  );
}

export default NavBar;

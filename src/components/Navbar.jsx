import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">StudNest.in</div>
      <nav>
        <div className="language-selector">
          <span className="material-symbols-outlined globe-icon">language</span>
          <select>
            <option hidden></option>
            <option defaultValue>English (default)</option>
            <option>Hindi</option>
          </select>
        </div>
        <Link to="/list-property" className="btn-list">List Your Property</Link>
        <Link to="/login" className="btn-login">Login</Link>
      </nav>
    </header>
  );
};

export default Navbar;



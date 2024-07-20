// src/components/TopBar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TopBar.css';

const TopBar = ({ onLogout, onAddBook }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    onLogout(navigate);
  };

  return (
    <div className="top-bar">
      <div className="title">Decentralized Library</div>
      <div className="menu-button" onClick={toggleMenu}>
        &#9776;
      </div>
      {menuOpen && (
        <div className="dropdown-menu">
          <button onClick={onAddBook}>Add a book</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default TopBar;

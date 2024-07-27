// SearchBox.js
import React, { useState } from 'react';
import './SearchBox.css'; // Ensure you have this file

const SearchBox = ({ onSearch }) => {
  const [searchKey, setSearchKey] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchKey.trim() !== '') {
      onSearch(searchKey);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <div className="search-box-container">
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Enter search key"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <span className="search-icon" onClick={handleSearch}>
          <i className="fas fa-search"></i> {/* Font Awesome icon */}
        </span>
      </div>
    </div>
  );
};

export default SearchBox;

import React, { useState } from 'react';
import Map from './Map';
import axios from 'axios';

const App = () => {
  const [markers, setMarkers] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/api/markers?key=${searchKey}`);
      setMarkers(response.data);
    } catch (error) {
      console.error('Error fetching markers:', error);
    }
  };

  return (
    <div>
      <header>
        <h1>Welcome to Decentralised Library</h1>
        <p>A community-driven platform for users to list, exchange, give away, and receive books.</p>
        <button id="cta-button">Get Started</button>
      </header>
      <main>
        <img src="https://via.placeholder.com/600x400" alt="Landing Page Image" />
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search by key"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <Map markers={markers} />
      </main>
      <footer>
        <p>© 2024 My Landing Page. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

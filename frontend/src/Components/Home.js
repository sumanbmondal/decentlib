import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Map from './Map';

const Home = ({ fetchMarkers, markers }) => {
  const [key, setKey] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchMarkers(key);
  };

  return (
    <div>
      <header>
        <h1>Welcome to Decentralised Library</h1>
        <p>A community-driven platform for users to list, exchange, give away, and receive books.</p>
        <button id="signin-button" onClick={() => navigate('/signin')}>Sign In</button>
      </header>
      <main>
        <img src="https://via.placeholder.com/600x400" alt="Landing Page" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Enter search key"
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

export default Home;

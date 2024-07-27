// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Map from './Map';
import SearchBox from './SearchBox'; // Import the updated SearchBox component
import logo from './library_vector_art.png';

const Home = ({ fetchMarkers, markers }) => {
  const navigate = useNavigate();

  const handleSearch = (key) => {
    fetchMarkers(key);
  };

  return (
    <div>
      <header>
        <h1>Welcome to Decentralized Library</h1>
        <p>A community-driven platform for users to list, exchange, give away, and receive books.</p>
        <div className="button-container">
        <button id="signin-button" className="sign-button" onClick={() => navigate('/signin')}>Sign In</button>
        <button id="signup-button" className="sign-button" onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
      </header>
      <main>
      <img src={logo} alt="Logo" className="logo" />
        <SearchBox onSearch={handleSearch} /> {/* Use the updated SearchBox component */}
        <Map markers={markers} />
      </main>
      <footer>
        <p>© 2024 My Landing Page. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

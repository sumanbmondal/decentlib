import React, { useState } from 'react';
import Map from './Map';

const AuthenticatedHome = ({ fetchMarkers, markers }) => {
  const [key, setKey] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchMarkers(key);
  };

    return (
        <div>  
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
        </div>
    );
};

export default AuthenticatedHome;

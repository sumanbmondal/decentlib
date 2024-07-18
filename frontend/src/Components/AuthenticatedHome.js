import React, { useState, useEffect } from 'react';
import Map from './Map';
import { useNavigate } from 'react-router-dom';

const AuthenticatedHome = ({ fetchMarkers, markers }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleBackButton = (event) => {
      event.preventDefault();
      navigate('/authenticated-home', { replace: true });
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [navigate]);

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

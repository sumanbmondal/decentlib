import React, { useState, useEffect } from 'react';
import Map from './Map';
import { useNavigate } from 'react-router-dom';
import AddBookModal from './AddBookModal';
import TopBar from './TopBar';
import axios from 'axios';
import SearchBox from './SearchBox';
import logo from './library_vector_art.png';

const AuthenticatedHome = ({ fetchMarkers, markers, onLogout, onAddBook }) => {
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddBook = async (bookData) => {
    const email = localStorage.getItem('email');
    const username = localStorage.getItem('username'); 
    try {
      const response = await axios.post('http://localhost:5000/api/markers', {
        title: bookData.bookName,
        location: {
          type: 'Point',
          coordinates: [bookData.longitude, bookData.latitude],
        },
        key: bookData.bookName,
        user: {
          name: username,
          contact: email,
        },
      });
      console.log('Book added:', response.data);
      fetchMarkers(''); // Fetch all markers after adding a new one
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const handleSearch = (key) => {
    fetchMarkers(key);
  };

    return (
        <div>  
          <main>
          <TopBar onLogout={onLogout} onAddBook={() => setIsModalOpen(true)} />
          <img src={logo} alt="Logo" className="logo" />
            <SearchBox onSearch={handleSearch} /> 
            <Map markers={markers} />

            <AddBookModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onAddBook={handleAddBook}
            />
          </main>
        </div>
    );
};

export default AuthenticatedHome;

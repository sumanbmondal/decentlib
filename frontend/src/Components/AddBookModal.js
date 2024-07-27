// src/components/AddBookModal.js
import React, { useState } from 'react';
import './AddBookModal.css';

const AddBookModal = ({ isOpen, onClose, onAddBook }) => {
  const [bookName, setBookName] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook({ bookName, latitude, longitude });
    setBookName('');
    setLatitude('');
    setLongitude('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Add a Book</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Book Name:
            <input
              type="text"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
              required
            />
          </label>
          <label>
            Latitude:
            <input
              type="number"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              required
            />
          </label>
          <label>
            Longitude:
            <input
              type="number"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              required
            />
          </label>
          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default AddBookModal;

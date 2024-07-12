import React, { useState } from 'react';
import axios from 'axios';

function AddMarkerForm() {
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [key, setKey] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/markers', { lat, lng, key });
      console.log('Marker added:', response.data);
      setLat('');
      setLng('');
      setKey('');
    } catch (error) {
      console.error('Error adding marker:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Latitude:</label>
        <input type="number" value={lat} onChange={(e) => setLat(e.target.value)} required />
      </div>
      <div>
        <label>Longitude:</label>
        <input type="number" value={lng} onChange={(e) => setLng(e.target.value)} required />
      </div>
      <div>
        <label>Key:</label>
        <input type="text" value={key} onChange={(e) => setKey(e.target.value)} required />
      </div>
      <button type="submit">Add Marker</button>
    </form>
  );
}

export default AddMarkerForm;

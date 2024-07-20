// src/components/SignIn.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = ({handleLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Correctly initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/signin', { email, password });
      localStorage.setItem('token', res.data.token); // Store the token in localStorage
      setMessage('Sign in successful');
      handleLogin(res.data.token);
      navigate('/authenticated-home'); // Redirect to authenticated home page
    } catch (err) {
      setMessage(err.response.data.message || 'Error signing in');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignIn;

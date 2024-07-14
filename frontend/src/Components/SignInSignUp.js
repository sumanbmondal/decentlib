import React, { useState } from 'react';

const SignInSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
      <header>
        <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
        <button onClick={toggleForm}>
          {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
        </button>
      </header>
      <main>
        {isSignUp ? (
          <form>
            <div>
              <label>Username</label>
              <input type="text" name="username" required />
            </div>
            <div>
              <label>Email</label>
              <input type="email" name="email" required />
            </div>
            <div>
              <label>Password</label>
              <input type="password" name="password" required />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        ) : (
          <form>
            <div>
              <label>Email</label>
              <input type="email" name="email" required />
            </div>
            <div>
              <label>Password</label>
              <input type="password" name="password" required />
            </div>
            <button type="submit">Sign In</button>
          </form>
        )}
      </main>
    </div>
  );
};

export default SignInSignUp;

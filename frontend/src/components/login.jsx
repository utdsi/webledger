// Login.js
import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    if (!email || !password) {
      alert('Email and password are required.');
      return;
    }

    setIsSubmitting(true);

    const userData = {
      email,
      password
    };

    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        alert('Login successful');
        // Redirect the user to the appropriate page
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Logging In...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default Login;

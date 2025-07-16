import React, { useState } from 'react';

function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setLoading(true);

    // simulate an API call
    setTimeout(() => {
      setLoading(false);
      if (email === 'admin@example.com' && password === 'admin123') {
        setSuccess(true);
      } else {
        setError('Invalid email or password.');
      }
    }, 1000);
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2 style={titleStyle}>Admin Login</h2>
        {error && <p style={errorStyle}>{error}</p>}
        {success ? (
          <p style={successStyle}>Login successful!</p>
        ) : (
          <form onSubmit={handleSubmit} style={formStyle}>
            <div style={fieldStyle}>
              <label htmlFor="email" style={labelStyle}>Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                placeholder="Enter email"
              />
            </div>
            <div style={fieldStyle}>
              <label htmlFor="password" style={labelStyle}>Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
                placeholder="Enter password"
              />
            </div>
            <button type="submit" style={buttonStyle} disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#e0e0e0',
};

const boxStyle = {
  padding: '30px',
  borderRadius: '8px',
  backgroundColor: '#fff',
  minWidth: '300px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
  textAlign: 'center',
};

const titleStyle = {
  marginBottom: '20px',
  fontSize: '24px',
  color: '#333',
};

const errorStyle = {
  color: 'red',
  marginBottom: '15px',
};

const successStyle = {
  color: 'green',
  marginBottom: '15px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const fieldStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  textAlign: 'left',
};

const labelStyle = {
  marginBottom: '5px',
  fontWeight: 'bold',
};

const inputStyle = {
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  width: '100%',
  boxSizing: 'border-box',
};

const buttonStyle = {
  padding: '10px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#007bff',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer',
};

export default Admin
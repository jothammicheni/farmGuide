import React, { useState } from 'react';
import axios from 'axios';

const Login=()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const fd=new FormData();
      fd.append('email',email);
      fd.append('password',password);
      const response = await axios.post('http://localhost/farmguide/register.php', fd);

      if (response.data ===1) {
        alert('Logged in successfully!');
      } else {
        alert('User not found');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred during login.');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;


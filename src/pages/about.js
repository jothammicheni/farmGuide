import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);

      const response = await axios.post('http://localhost/farmguide/login.php', formData);

      if (response.data.Message === 'Success') {
        alert('Logged in successfully!');
      } else if (response.data.Message === 'pw WRONG') {
        alert('Incorrect password');
      } else if (response.data.Message === 'No account yet') {
        alert('User not found');
      }else{
        alert(1234)
        }
      }
     catch (error) {
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

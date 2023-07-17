import { useState } from 'react';
import { Navigate } from "react-router-dom";
import axiosInstance from '../axios/axios'

function Signin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const handleSignIn = async (event) => {
    event.preventDefault();

    try {
      const response = await axiosInstance.post('/auth/login', { email, password });
      const token = response.data.token;

      // Store the token in local storage
      localStorage.setItem('token', token);

      // Redirect to the dashboard page
      <Navigate to="/src/Components/allUsers"/>
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSignIn}>
    <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
    <button type="submit">Sign In</button>
  </form>
  )
}

export default Signin
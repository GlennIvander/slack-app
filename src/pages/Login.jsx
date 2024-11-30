import React, { useState } from 'react';
import './Login.css';
import dota2 from '../Assets/dota2.png';
import emailimg from '../Assets/email.png';
import passwordimg from '../Assets/password.png';
import axios from "axios";
import { API_URL } from "../constants/Constants";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataProvider";

function Login(props) {
  const { onLogin } = props;
  const { handleHeaders } = useData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset errors before validation

    // Validate inputs
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail) {
      setError("Please enter a valid email address.");
      setTimeout(() => {
        setError("");
      }, 5000);
      return;
    }
    
    try {
      const loginCredentials = { email, password };

      const response = await axios.post(`${API_URL}/auth/sign_in`, loginCredentials);
      const { data, headers } = response;

      if (data && headers) {
        // Save headers globally
        handleHeaders(headers);

        // Trigger login callback and navigate to the dashboard
        onLogin();
        navigate('/dashboard');
      }
    } catch (error) {
      if (error.response?.data?.errors) {
        setError("Invalid credentials. Please try again.");
        setTimeout(() => {
          setError("");
        }, 5000);
      } else {
        setError("An unexpected error occurred. Please try again later.");
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    }
  };

  return (
    <div className="container">
      <div className="logo">
        <img src={dota2} alt="Dota 2 Logo" className="dota2" />
      </div>
      <div className="header">
        <div className="signup">DotesChat</div>
      </div>
      {error && <div className="error-message">{error}</div>}
      <form className="inputs" onSubmit={handleSubmit}>
        <div className="input">
          <img src={emailimg} alt="Email Icon" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="input">
          <img src={passwordimg} alt="Password Icon" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <div className="forgot">Forgot Password?</div>
        <div className="submit-container">
          <button type="submit" className="submit">Log in</button>
        </div>
        <div className="noaccount">No account?<span> Sign up</span></div>
      </form>
    </div>
  );
}

export default Login;

// AdminLogin.jsx

import React, { useState } from "react";
import "../CSS/Adlogin.css";
import { Link } from "react-router-dom";

const AdLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add logic here to handle login (e.g., send data to backend, check credentials, etc.)
    console.log("Logging in with:", { username, password });
    // Clear form fields after login attempt
    setUsername("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Admin Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Link to="/dash">Login</Link>
      </form>
    </div>
  );
};

export default AdLogin;

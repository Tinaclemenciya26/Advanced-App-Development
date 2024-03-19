import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing in with:", email, password);
    // You can add your sign-in logic here, such as API calls, authentication, etc.
  };

  return (
    <div>
      <h1 className="big-heading">Edemy for a better future!</h1>
      <div className="signup-container">
        <h2 className="login-header">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

// === File: studnest-react/src/pages/Login.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
  return (
    <>
      <header className="navbar">
        <div className="logo">StudNest.in</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <section className="login-container">
        <div className="login-card">
          <h2>Welcome Back 👋</h2>
          <p>Please log in to continue</p>
          <form className="login-form">
            <label>Email address</label>
            <input type="email" placeholder="you@example.com" required />

            <label>Password</label>
            <input type="password" placeholder="••••••••" required />

            <button type="submit" className="btn">Login</button>
            <p className="register-link">Don't have an account? <Link to="/register">Create now</Link></p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
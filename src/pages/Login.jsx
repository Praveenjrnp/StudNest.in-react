import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    navigate('/');
  };

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
          <form className="login-form" onSubmit={handleLogin}>
            <label>Email address</label>
            <input type="email" placeholder="you@example.com" required />

            <label>Password</label>
            <input type="password" placeholder="••••••••" required />

            <button type="submit" className="btn">Login</button>
            <p className="register-link">
              Don't have an account? <Link to="/register">Create now</Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;

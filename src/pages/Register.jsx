import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/register.css';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // After successful registration, redirect to Home
    navigate('/');
  };

  return (
    <>
      <header className="navbar">
        <div className="logo">StudNest.in</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <section className="register-container">
        <div className="register-card">
          <h2>Create Your Account 📝</h2>
          <p>Join StudNest and find your perfect stay</p>
          <form className="register-form" onSubmit={handleRegister}>
            <label>Full Name</label>
            <input type="text" required placeholder="John Doe" />

            <label>Email address</label>
            <input type="email" required placeholder="you@example.com" />

            <label>Password</label>
            <input type="password" required placeholder="••••••••" />

            <label>Confirm Password</label>
            <input type="password" required placeholder="••••••••" />

            <button type="submit" className="btn">Register</button>
            <p className="login-link">
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;

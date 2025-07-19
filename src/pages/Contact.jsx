import React from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>If you have any questions or need support, feel free to reach out to us:</p>
        <ul>
          <li>Email: support@studnest.in</li>
          <li>Phone: +91-9876543210</li>
          <li>Address: 123, StudNest HQ, Mathura, India</li>
        </ul>
      </div>
    </>
  );
};

export default Contact;

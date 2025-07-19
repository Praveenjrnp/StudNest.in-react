import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/terms.css'; 

const TermsPage = () => {
  return (
    <>
      <Navbar />
      <div className="terms-container">
        <h1>Terms and Conditions</h1>
        <p>Welcome to StudNest! These terms and conditions outline the rules and regulations for the use of our platform.</p>
        
        <h3>1. Acceptance of Terms</h3>
        <p>By accessing this website, you agree to be bound by these terms and conditions, all applicable laws, and regulations.</p>
        
        <h3>2. Services Provided</h3>
        <p>StudNest provides hostel and property listings for students. We are not responsible for the accuracy of listings.</p>
        
        <h3>3. User Responsibilities</h3>
        <p>Users are responsible for providing accurate information and complying with all applicable laws when listing properties.</p>
        
        <h3>4. Privacy</h3>
        <p>We respect your privacy. Please read our Privacy Policy to understand how your data is managed.</p>
        
        <h3>5. Changes to Terms</h3>
        <p>We may revise these terms anytime without prior notice. By using this site, you agree to be bound by the current version.</p>
        
        <h3>6. Contact Us</h3>
        <p>If you have any questions about these Terms, please contact us via our Contact Us page.</p>
      </div>
    </>
  );
};

export default TermsPage;

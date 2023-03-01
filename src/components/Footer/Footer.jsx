import React from 'react';
import './Footer.css';
import Instagram from '../../assets/instagram.svg';
import Email from '../../assets/email.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://www.instagram.com"><img src={Instagram} alt="Instagram" /></a>
          <a href="mailto:your.email@example.com"><img src={Email} alt="Email" /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

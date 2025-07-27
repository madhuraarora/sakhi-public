import React from "react";
import "../styles/footer.css";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import sakhiLogo from "/logo/logo 2.png";
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

function Footer() {
  return (
    <footer className="minimal-footer">
      <img src={sakhiLogo} alt="Sakhi Logo" className="footer-logo" />

      <nav className="footer-nav">
        <Link to="/team">Behind Sakhi</Link>
        <Link to="/contact">Say Hello</Link>
        <Link to="/">Home</Link>
        <Link to="/volunteer-apply">Volunteer</Link>
        <HashLink smooth to="/#pad">The Sakhi Pad</HashLink>
      </nav>

      <div className="footer-icons">
        <a href="mailto:madhura8429@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/sakhi-india" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>

      <p className="tiny-credit">Website designed and developed by Madhura Arora. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

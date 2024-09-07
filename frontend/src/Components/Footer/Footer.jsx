import React from "react";
import logo from "../../assets/logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="footer-copyright">
        <p>© 2022 I-Notovek Academy. All right reserved</p>
      </div>

      <ul className="footer-links">
        <li>
            <a href="https://www.facebook.com/">
                <i className="fa-brands fa-facebook-f"></i>
            </a>
        </li>
        <li>
            <a href="https://x.com/home">
                <i className="fa-brands fa-twitter"></i>
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/">
                <i className="fa-brands fa-instagram"></i>
            </a>
        </li>
        <li>
            <a href="https://www.youtube.com">
                <i className="fa-brands fa-youtube"></i>
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com">
                <i className="fa-brands fa-linkedin"></i>
            </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

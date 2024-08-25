import React from "react";
import logo from "../../assets/logo.png";
import './Navbar.css';
const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/about">Services</a>
            </li>
            <li>
                <a href="/about">Portfolio</a>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

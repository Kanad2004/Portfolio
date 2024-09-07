import React from "react";
import Typical from "react-typical";
import profileImage from '../../assets/profile.png';
import './Header.css';
const Header = () => {
  return (
    <div className="header-container">
      {/* Header content */}
      <div className="header-content">
        <h1>Hy! Am</h1>
        <h2 className="fullname">Kanad Kulkarni</h2>
        <h2>
          I'm a
          <Typical
            steps={[
              " Full Stack Developer ❤️",
              1000,
              " Frontend Developer ✅",
              1000,
              " Backend Developer 🏆",
              1000,
              " React Developer ⚛️",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusamus veritatis earum, obcaecati sequi consequatur voluptas non architecto iste dolore modi voluptatem ab facere aliquam soluta? Eos animi culpa velit?
        </p>
        {/* payment links */}
        <div className="header-payment-container">
            <button>Hire me</button>
            <i className="fa-brands fa-paypal"></i>
            <i className="fa-brands fa-cc-visa"></i>
            <i className="fa-brands fa-cc-mastercard"></i>
            <i className="fa-brands fa-cc-amex"></i>
        </div>
      </div>

      {/* image container */}
      <div className="profile-img-container">
        <img src={profileImage} alt="" />
        <div className="circle-1">
        </div>
        <div className="circle-2">
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import MochaLogo from "../../assets/logo.png";
import Login from "../../assets/login.png";
import Demo from "../../assets/demo.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="main-header">
        <div className="logo-nav">
          <div className="mocha-logo">
            <img src={MochaLogo} alt="MochaLogo" />
          </div>
          <div className="main-navbar">
            <ul className="navbar">
              <li className="home">HOME</li>
              <li className="other">USE CASES</li>
              <li className="other">PRICING</li>
              <li className="other">RESOURCES</li>
              <li className="other">ABOUT US</li>
              <li className="other">CONTACT US</li>
              <li className="other">FEATURES</li>
            </ul>
          </div>
          <div className="main_login">
          <div className="login">
              <img src={Login} alt="SignUp" />
              <img src={Demo} alt="Demo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <header>
      <div className="nav">
        <div id="text-container">
          <p id="name-header">Valley Installers</p>
          <div id="right-header">
            <p id="about-header">About</p>
            <a id="contact-container" href="mailto:valleyinstallers@yahoo.com">
              <i class="far fa-envelope"></i>
              <p id="contact-header">Contact Us</p>
            </a>
          </div>
        </div>
      </div>

      <div className="image-container">
        <div id="image-text">
          <h1>Quality Laminte Countertops Serving The Greater Flathead Area</h1>
          <Link to="/about-us">Learn More About Us →</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

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
            <div id="contact-container">
              <i class="far fa-envelope"></i>
              <p id="contact-header">Contact Us</p>
            </div>
          </div>
        </div>
      </div>

      <div className="image-container">
        {/* <img
          alt="placeholder"
          src="https://wearemortar.com/wp-content/uploads/2019/09/placeholder.png"
        /> */}
        <div id="image-text">
          <h1>Quality Laminte Countertops Serving The Greater Flathead Area</h1>
          <Link to="/about-us">Learn More About Us →</Link>
          {/* <h2>Learn More About Us →</h2> */}
        </div>
      </div>
    </header>
  );
}

export default Header;

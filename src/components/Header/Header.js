import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  const [showDropDownContent, setShowDropDownContent] = useState(false);

  function handleNavClick() {
    if (showDropDownContent) {
      setShowDropDownContent(false);
    } else {
      setShowDropDownContent(true);
    }
  }
  return (
    <header>
      <div className="nav">
        <div id="text-container">
          <p id="name-header">Valley Installers</p>
          <div id="right-header">
            <Link id="about-header" to="/about-us">
              <p>About</p>
            </Link>
            <a id="contact-container" href="mailto:valleyinstallers@yahoo.com">
              <i class="far fa-envelope"></i>
              <p>Contact Us</p>
            </a>
          </div>

          <div
            onClick={handleNavClick}
            class="navbar"
            style={{
              borderBottomRightRadius: showDropDownContent ? "0px" : "7px",
              borderBottomLeftRadius: showDropDownContent ? "0px" : "7px"
            }}
          >
            <div class="dropdown">
              <button class="dropbtn">
                <p>About</p>
                <div id="icon-container">
                  <div id="icon-border"></div>
                  <i
                    style={{ display: showDropDownContent ? "none" : "inline" }}
                    class="fa fa-caret-down"
                  ></i>
                  <i
                    style={{ display: showDropDownContent ? "inline" : "none" }}
                    class="fa fa-caret-up"
                  ></i>
                </div>
              </button>
              <div id="dropdown-content-container">
                {showDropDownContent && (
                  <div class="dropdown-content">
                    <Link to="/about-us">About</Link>
                    <a href="mailto:valleyinstallers@yahoo.com">Contact Us</a>
                    <p></p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="image-container-header">
        <div id="image-text">
          <h1>Quality Laminte Countertops Serving The Greater Flathead Area</h1>
          <Link to="/about-us">Learn More About Us →</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

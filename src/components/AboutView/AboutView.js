import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./AboutView.css";

function AboutView(props) {
  return (
    <>
      <Header />
      <div className="about-container" className="content-view">
        <div className="col-1">
          <img
            alt="placeholder"
            src="https://wearemortar.com/wp-content/uploads/2019/09/placeholder.png"
          />
        </div>
        <div id="about-text-container" className="col-2">
          <h2>About Us</h2>
          <p>
            Valley Installers attention to detail and unsurpassed quality has
            made us the first and only choice for cabinet installation. Laminate
            countertops are our what we specialize in. Rigo can build just about
            any project you can come up with. Call us today to discuss your
            projects.
          </p>
          <p>Valley Installers are licensed and insured.</p>
        </div>
        <div className="about-address">
          <p>
            Valley Installers, Inc. 955 3rd. St. W.N. Columbia Falls, MT 59912
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutView;

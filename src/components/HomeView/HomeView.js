import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./HomeView.css";

function HomeView(props) {
  return (
    <>
      <Header />
      <div className="content-view">
        <div id="countertop-text" className="col-1">
          <h2> Laminate Countertops</h2>
          <p className="countertop-sub-text">
            We specialize in laminate countertops. We use Wilsonart, Formica or
            Nevamar laminate giving you a wide range of selection. We also offer
            you a variety of edging, from a standard square edge to a beveled
            edge.
          </p>
          <p className="countertop-sub-text">
            With the Wilsonart HD and the Formica FX lines, your laminate
            countertops can look like traditional hardsurface tops at a fraction
            of the cost.
          </p>
          <p className="countertop-sub-text">
            There are more benefits to laminate that just the price. They are
            more bacterial and scratch resistant than hardsurface. And you have
            a greater variety of colors and patterns to choose from.
          </p>
          <p className="countertop-sub-text">
            We are also proud to introduce you to our process of installing
            undermount sink in laminate. So yes you can have an undermount sink
            with a laminate top!
          </p>

          <p className="countertop-sub-text" id="see-photos">
            See All Photos {""} →
          </p>
        </div>
        <div className="col-2">
          <img
            className="countertops-photo"
            src="https://dummyimage.com/500x400/ededed/fcfcfc.jpg"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomeView;

import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./GalleryView.css";

let images = [
  "https://dummyimage.com/480x390/ededed/fcfcfc.jpg",
  "https://dummyimage.com/480x390/ededed/fcfcfc.jpg",
  "https://dummyimage.com/480x390/ededed/fcfcfc.jpg",
  "https://dummyimage.com/480x390/ededed/fcfcfc.jpg"
];

function GalleryView(props) {
  return (
    <>
      <Header />
      <div className="content-view">
        <div className="gallery-container">
          {images.map(image => (
            <img src={image} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GalleryView;

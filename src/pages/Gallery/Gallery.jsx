import React, { useContext } from "react";
import { LanguageContext } from "../../components/languageContext";
import { GalleryContent } from "./GalleryContent";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./galleryStyles.css";
function Gallery() {
  return (
    <div>
      <NavBar />
      <div className="galleryContainer">
        <p>{currentContent.galleryIntro.title}</p>
      </div>
      {/* <Footer /> Footer component */}
    </div>
  );
}

export default Gallery;

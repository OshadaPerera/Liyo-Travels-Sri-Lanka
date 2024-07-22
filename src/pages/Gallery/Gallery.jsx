import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../../components/languageContext";
import { GalleryContent, GalleryImages } from "./GalleryContent";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./galleryStyles.css";
function Gallery() {
  const { language } = useContext(LanguageContext);
  const currentContent = GalleryContent[language];

  // Use useEffect to scroll to the top of the page whenever the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <NavBar />
      <div className="galleryContainer">
        <p>{currentContent.galleryIntro.title}</p>
      </div>

      <div className="gallery">
        {GalleryImages.map((image) => (
          <div key={image.id} className="galleryImage">
            <img src={image.src} alt={image.title} />
            <p>{image.title}</p>
            <a href={image.location} target="_blank" rel="noreferrer">
              View Location
            </a>
          </div>
        ))}
      </div>

      {/* <Footer /> Footer component */}
    </div>
  );
}

export default Gallery;

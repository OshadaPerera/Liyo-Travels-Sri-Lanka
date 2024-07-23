import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../components/languageContext";
import { GalleryContent, GalleryImages } from "./GalleryContent";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./galleryStyles.css";

function Gallery() {
  // Use the LanguageContext to get the current language
  const { language } = useContext(LanguageContext);
  
  // Get the content based on the current language
  const currentContent = GalleryContent[language];

  // Use useEffect to scroll to the top of the page whenever the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // State for managing the modal display and the currently selected image
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  // Function to handle the image click and display the modal
  const getImg = (src) => {
    setTempImgSrc(src);
    setModel(true);
  };

  return (
    <div>
      {/* <NavBar /> NavBar component */}
      <NavBar />

      {/* Display the gallery image when clicked*/}
      <div className={model? "model open" : "model"}>
        <img src={tempImgSrc} alt="Selected" />
        <button onClick={() => setModel(false)}>Close</button>
      </div>
      <div className="galleryContainer">
        {/* Display the gallery introduction based on the current language */}
        <p>{currentContent.galleryIntro.description}</p>
      </div>

      <div className="gallery">
        {/* Map over the GalleryImages array to display each image */}
        {GalleryImages.map((image) => (
          <div
            key={image.id}
            className="galleryImage"
            onClick={() => getImg(image.src)}
          >
            <img src={image.src} alt={image.title} />
            <p>{image.title}</p>
            <a href={image.location} target="_blank" rel="noreferrer">
              View Location
            </a>
          </div>
        ))}
      </div>

      {/* Conditionally render the modal if model state is true */}
      {model && (
        <div className="model">
          <img src={tempImgSrc} alt="Selected" />
          <button onClick={() => setModel(false)}>Close</button>
        </div>
      )}

      {/* <Footer /> Footer component */}
    </div>
  );
}

export default Gallery;

import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../components/languageContext";
import { GalleryContent, GalleryImages } from "./GalleryContent";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./galleryStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import useIntersectionObserver from "../../hooks/useIntersectionObserver"; // Import a custom hook for transition Animations

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

  // Use the custom hook for each section to observe visibility
  const galleryHeadRef = useIntersectionObserver({ threshold: 0.1 });
  const galleryImgRef = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div>
      {/* NavBar component */}
      <NavBar />

      {/* Display the gallery image when clicked */}
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="Selected" />
        <button onClick={() => setModel(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <div className="galleryContainer" ref={galleryHeadRef}>
        {/* Display the gallery introduction based on the current language */}
        <h2>{currentContent.galleryIntro.heading}</h2>
        <p>{currentContent.galleryIntro.description}</p>
      </div>

      <div className="gallery" ref={galleryImgRef}>
        {/* Map over the GalleryImages array to display each image */}
        {GalleryImages.map((image) => (
          <div
            key={image.id}
            className="galleryImage"
            onClick={() => getImg(image.src)}
          >
            <img src={image.src} alt={image.title} />
            <div className="imageOverlay">
              <p>{image.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default Gallery;

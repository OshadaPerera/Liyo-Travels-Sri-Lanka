// src/pages/AboutUs/AboutUs.jsx

import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../../components/languageContext";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import { aboutContent } from "./AboutUsContent";
import "./aboutUsStyles.css"; // Create a CSS file for About Us page styling

function AboutUs() {
  const { language } = useContext(LanguageContext);
  const currentContent = aboutContent[language];

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  return (
    <div className="aboutBody">
      <NavBar theme="white" />{" "}
      {/* Render the NavBar component with a white theme */}
      <div className="about-us">
        <div className="aboutHeadingSection">
          <h2>{currentContent.title}</h2> {/* Render the title */}
          <p>{currentContent.description}</p> {/* Render the description */}
        </div>
        {/* Mission Section */}
        <div className="aboutSection">
          <h3>{currentContent.missionTitle}</h3>
          <p>{currentContent.missionContent}</p>
        </div>
        {/* Vision Section */}
        <div className="aboutSection">
          <h3>{currentContent.visionTitle}</h3>
          <p>{currentContent.visionContent}</p>
        </div>
      </div>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}

export default AboutUs; // Export the AboutUs component as the default export

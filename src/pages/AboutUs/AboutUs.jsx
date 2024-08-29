import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../../components/LanguageContext";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import { aboutContent } from "./AboutUsContent";
import "./aboutUsStyles.css"; // Create a CSS file for About Us page styling

function AboutUs() {
  const { language } = useContext(LanguageContext);
  const currentContent = aboutContent[language];

  
  // Use the custom hook for each section to observe visibility
  const aboutHeadingRef = useIntersectionObserver({ threshold: 0.1 });
  const aboutMissionRef = useIntersectionObserver({ threshold: 0.1 });
  const aboutVisionRef = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  return (
    <div className="aboutBody">
      <NavBar /> {/* Render the NavBar component with a white theme */}
      <div className="about-us">
        <div className="aboutHeadingSection" ref={aboutHeadingRef}>
          <h2>{currentContent.title}</h2> {/* Render the title */}
          <p>{currentContent.description}</p> {/* Render the description */}
          {/* <div className="aboutUsAnimation">
            <dotlottie-player
              src="https://lottie.host/ebb8df0b-da55-40a2-88df-ef4bebe2a7ef/aPAKy9okXa.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              style={{ width: "100%", height: "100%" }}
            ></dotlottie-player>
          </div> */}
        </div>
        {/* Mission Section */}
        <div className="aboutContent">
          <div className="aboutSection missionSection" ref={aboutMissionRef}>
            <h3>{currentContent.missionTitle}</h3>
            <div className="missionAnimation">
              <dotlottie-player
                src="https://lottie.host/0590f06f-74fa-4473-8d97-e00956b5af45/Nv6xVbMAkC.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <p>{currentContent.missionContent}</p>
          </div>
          {/* Vision Section */}
          <div className="aboutSection visionSection" ref={aboutVisionRef}>
            <h3>{currentContent.visionTitle}</h3>
            <div className="visionAnimation">
              <dotlottie-player
                src="https://lottie.host/86962a6a-cadb-424b-94f6-0c8b8073dea6/8PZDOWTSFs.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <p>{currentContent.visionContent}</p>
          </div>
        </div>
      </div>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}

export default AboutUs; // Export the AboutUs component as the default export

// Import necessary modules and components from React and other files
import React, { useContext } from "react";
import { LanguageContext } from "../../components/languageContext";
import { content } from "./HomeContent";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import Destinations from "../../components/DestinationCards/Destinations";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import "./homeStyles.css";
import "../../components/styles/animations.css"; // Import CSS for animations

const Home = () => {
  // Get the current language from the LanguageContext
  const { language } = useContext(LanguageContext);
  const currentContent = content[language];

  // Use the custom hook for each section to observe visibility
  const homeWelcomeRef = useIntersectionObserver({ threshold: 0.1 });
  const homeChooseRef = useIntersectionObserver({ threshold: 0.1 });
  const homeBookRef = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="homePage">
      {/* Cover section with NavBar and introductory content */}
      <div className="coverSection">
        <NavBar theme="white" />

        <div className="homeIntro">
          <h1 className="introHeading">Liyo Travels Sri Lanka</h1>
          <div className="introSlogan">Experience the Extraordinary</div>
        </div>
      </div>

      {/* Main content section */}
      <div className="homeContentSection">
        {/* Home Welcome section with animation */}
        <div className="homeWelcome" ref={homeWelcomeRef}>
          <h2>{currentContent.homeWelcome.title}</h2>
          <p>{currentContent.homeWelcome.description}</p>
        </div>

        {/* Destinations component */}
        <Destinations />

        {/* Home Choose section with animation */}
        <div className="homeChoose" ref={homeChooseRef}>
          <h2>{currentContent.homeChoose.title}</h2>
          <div className="chooseCards">
            {currentContent.homeChoose.chooseCards.map((card, index) => (
              <div className="chooseCard" key={index}>
                <div className="cardImg">{card.imgSrc}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Home Book section with animation */}
        <div className="homeBook" ref={homeBookRef}>
          <div className="bookNow">
            <h2>{currentContent.homeBook.title}</h2>
            <p>{currentContent.homeBook.content}</p>
            <button className="bookButton">Book Now</button>
          </div>
        </div>
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

// Export the Home component as the default export
export default Home;

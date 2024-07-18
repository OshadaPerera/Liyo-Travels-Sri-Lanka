// Import necessary modules and components from React and other files
import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../../components/languageContext";
import { content } from "./HomeContent";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import Destinations from "../../components/DestinationCards/Destinations";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import "./homeStyles.css";
import "../../components/styles/animations.css"; // Import CSS for animations
import { Link } from "react-router-dom";

const Home = () => {
  // Get the current language from the LanguageContext
  const { language } = useContext(LanguageContext);
  const currentContent = content[language];

  // Use useEffect to scroll to the top of the page whenever the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Use the custom hook for each section to observe visibility
  const homeWelcomeRef = useIntersectionObserver({ threshold: 0.1 });
  const homeChooseRef = useIntersectionObserver({ threshold: 0.1 });
  const homeBookRef = useIntersectionObserver({ threshold: 0.1 });

  // Refs for each card in the chooseCards section
  const chooseCardRefs = currentContent.homeChoose.chooseCards.map(() =>
    useIntersectionObserver({ threshold: 0.1 })
  );

  return (
    <div className="homePage">
      {/* Cover section with NavBar and introductory content */}
      <div className="coverSection">
        <NavBar theme="white" />

        <div className="homeIntro">
          <h1 className="introHeading">Liyo Travels Sri Lanka</h1>
          <div className="introSlogan">{currentContent.slogan.title}</div>
          <div></div>
        </div>
      </div>
      {/* Main content section */}
      <div className="homeContentSection">
        {/* Home Welcome section with animation */}
        <div className="homeWelcome" ref={homeWelcomeRef}>
          <h2>{currentContent.homeWelcome.title}</h2>

          <p>{currentContent.homeWelcome.description}</p>
          <div className="welcomeLanguage">
            <h5>{currentContent.homeWelcome.languageTitle}</h5>
            <ul>
              {currentContent.homeWelcome.languageList.map(
                (language, index) => (
                  <li key={index}>{language}</li>
                )
              )}
            </ul>
          </div>
          <div className="welcomeAnimation">
            <dotlottie-player
              src="https://lottie.host/30f0524c-05f6-45cd-a569-ece39977edb7/HRitPqQ1I8.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </div>

        {/* Destinations component */}
        <Destinations />

        {/* Home Choose section with animation */}
        <div className="homeChoose" ref={homeChooseRef}>
          <h2>{currentContent.homeChoose.title}</h2>
          <div className="chooseCards">
            {currentContent.homeChoose.chooseCards.map((card, index) => (
              <div
                className={`chooseCard animation${index}`}
                ref={chooseCardRefs[index]}
                key={index}
              >
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

            {/* Linked to the contat us page  */}
            <Link to="/contact">
              <button className="bookButton">
                <span>{currentContent.homeBook.book}</span>
                <i></i>{" "}
              </button>
            </Link>
            <div className="bookAnimation">
              <dotlottie-player
                src="https://lottie.host/811c1632-33c1-44a2-b106-dcb9e08f48c8/YlPbrW5waM.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></dotlottie-player>
            </div>
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

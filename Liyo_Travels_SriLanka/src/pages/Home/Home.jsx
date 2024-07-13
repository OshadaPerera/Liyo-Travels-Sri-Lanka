// src/components/Home.js

import React, { useContext } from "react";
import { LanguageContext } from "../../components/languageContext";
import { content } from "./HomeContent";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import Destinations from "../../components/DestinationCards/Destinations";
import "./homeStyles.css";

const Home = () => {
  const { language } = useContext(LanguageContext);
  const currentContent = content[language];

  return (
    <div className="homePage">
      <div className="coverSection">
        <NavBar theme="white" />

        <div className="homeIntro">
          <h1 className="introHeading">Liyo Travels Sri Lanka</h1>
          <div className="introSlogan">Experience the Extraordinary</div>
          <div></div>
        </div>
      </div>
      <div className="homeContentSection">
        <div className="homeWelcome">
          <h2>{currentContent.homeWelcome.title}</h2>
          <p>{currentContent.homeWelcome.description}</p>
        </div>
        <Destinations />

        <div className="homeChoose">
          <h1>{currentContent.homeChoose.title}</h1>
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
        <div className="homeBook">
          <div className="bookNow">
            <h2>{currentContent.homeBook.title}</h2>
            <p>{currentContent.homeBook.content}</p>
            <button className="bookButton">Book Now</button>
          </div>
        </div>
      </div>
      <Footer /> {/* Footer component */}
    </div>
  );
};

export default Home;

import React, { useContext } from "react";
import { LanguageContext } from "../languageContext";
import { DestinationContent } from "./DestinationContent";
import "./destinationStyles.css";

function Destinations() {
  const { language } = useContext(LanguageContext);
  const currentContent = DestinationContent[language];
  return (
    <div className="homeDestinations">
      <h2>{currentContent.homeDestinations.title}</h2>
      <div className="destinationCards">
        {currentContent.homeDestinations.destinations.map(
          (destination, index) => (
            <div className="destinationCard photo" key={index}>
              <img src={destination.imgSrc} alt={destination.altText} />
              <h3 className="description-title">{destination.title}</h3>
              <p className="description-text">
                {destination.description.length > 200
                  ? destination.description.substring(0, 200) + "..."
                  : destination.description}
              </p>
              <div className="description-overlay">
                <p>{destination.description}</p>
              </div>
              <div className="glow-wrap">
                <i className="glow"></i>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Destinations;

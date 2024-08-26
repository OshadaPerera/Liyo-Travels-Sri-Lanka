import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import { DestinationContent } from "./DestinationContent";
import "./destinationStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

function Destinations() {
  const { language } = useContext(LanguageContext);
  const currentContent = DestinationContent[language];

  const destinationRef = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="homeDestinations" ref={destinationRef}>
      <h2>{currentContent.homeDestinations.title}</h2>
      <Swiper
        className="destinationCards"
        modules={[EffectCoverflow, Navigation, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
      >
        <div className="swiperContainer">
          {currentContent.homeDestinations.destinations.map(
            (destination, index) => (
              <SwiperSlide className="destinationCard photo" key={index}>
                <img src={destination.imgSrc} alt={destination.altText} />
                <div className="description-overlay">
                  <h3 className="description-title">{destination.title}</h3>
                  <p>{destination.description}</p>
                </div>
                <div className="glow-wrap">
                  <i className="glow"></i>
                </div>
              </SwiperSlide>
            )
          )}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <FontAwesomeIcon icon={faArrowLeft} fade />
            </div>
            <div className="swiper-button-next slider-arrow">
              <FontAwesomeIcon icon={faArrowRight} fade />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Destinations;

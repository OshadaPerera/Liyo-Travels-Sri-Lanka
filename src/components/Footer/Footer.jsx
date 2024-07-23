// Footer.jsx

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./footerStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "../languageContext";
import { footerContent } from "./FooterContent";
import Logo from "../../assets/images/logo.png";

function Footer() {
  const { language } = useContext(LanguageContext);
  const currentContent = footerContent[language];

  return (
    <footer>
      <div className="row">
        <div className="col">
          <div className="footerLogo">
            <NavLink to="/">
              <img src={Logo} alt="Liyo Travels Logo" />
            </NavLink>
          </div>
          <p>{currentContent.description}</p>
        </div>
        <div className="col">
          <h3>
            {currentContent.office.title}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <p>
            <FontAwesomeIcon icon={faLocationDot} />{" "}
            {currentContent.office.addressLine1}
          </p>
          <p>{currentContent.office.addressLine2}</p>
          <p>{currentContent.office.city}</p>
          <p>{currentContent.office.postalCode}</p>
          <p className="footerEmail">
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <span>
              <a href={`mailto:${currentContent.office.email}`}>
                {currentContent.office.email}
              </a>
            </span>
          </p>
          {/* This is the phone number */}
          {/* <p>
            <FontAwesomeIcon icon={faPhone} /> {currentContent.office.phone}
          </p> */}
        </div>
        <div className="col footerlinks">
          <h3>
            {currentContent.quickLinks.title}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            {currentContent.quickLinks.links.map((link, index) => (
              <li key={index}>
                <NavLink to={link.url}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h3>
            {currentContent.socialLinks.title}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <div className="footerSocial">
            <ul>
              {currentContent.socialLinks.links.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>
                    <FontAwesomeIcon icon={link.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">
        {currentContent.copyright} {new Date().getFullYear()} -{" "}
        {currentContent.rightsReserved}. {currentContent.solutionBy} | {"  "}
        <span className="designer">
          <a
            href="https://www.linkedin.com/in/oshada-perera-3536a1248/"
            target="new"
          >
            Oshada Perera
          </a>
        </span>
      </p>
    </footer>
  );
}

export default Footer;

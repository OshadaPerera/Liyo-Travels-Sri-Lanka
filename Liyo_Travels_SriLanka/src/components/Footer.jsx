import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink for routing
import "./styles/footerStyles.css"; // Import your custom CSS for additional styling
import CustomDropdown from "./navDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"; // Import specific icons
import { faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <h3>Liyo Travels Sri Lanka</h3>
          <p>
            We are a travel agency that provides the best travel experience to
            our customers. We provide the best tour packages and travel
            services.
          </p>
        </div>
        <div className="col">
          <h3>
            Office{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <p>
            {" "}
            <FontAwesomeIcon icon={faLocationDot} /> No.425/B
          </p>
          <p>Paluwelgala Road</p>
          <p>Koswatta, Sri Lanka</p>
          <p>10107</p>
          <p className="footerEmail">
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <span>
              {" "}
              <a href="mailto:liampaynce@gmail.com">
                LiyoTravelsSriLanka@gmail.com
              </a>
            </span>
          </p>
          <p><FontAwesomeIcon icon={faPhone} /> {" "}+94 767251336</p>
        </div>
        <div className="col footerlinks">
          <h3>
            Quick Links{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>
            Social Links{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <div className="footerSocial">
            <ul>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">
        Liyo Travels Sri Lanka &copy; {new Date().getFullYear()} - All Rights
        Reserved. Solution By | <span className="designer"><a href="https://www.linkedin.com/in/oshada-perera-3536a1248/" target="new">Oshada Perera</a></span>
      </p>
    </footer>
  );
}

export default Footer;

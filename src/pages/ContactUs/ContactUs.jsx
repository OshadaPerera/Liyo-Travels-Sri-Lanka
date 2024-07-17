import React, { useContext } from "react";
import { LanguageContext } from "../../components/languageContext";
import { contactContent } from "./contactContent"; // Import content for both languages
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./contactUsStyles.css";

function ContactUs() {
  // Get the current language from the LanguageContext
  const { language } = useContext(LanguageContext);
  const currentContent = contactContent[language];

  return (
    <div>
      <NavBar />
      <div className="contact-us">
        <h1>{currentContent.title}</h1>
        <p>{currentContent.description}</p>
        <div className="contact-methods">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} /> {currentContent.whatsapp}
          </a>
          <a href="mailto:info@liyotravels.com">
            <FontAwesomeIcon icon={faEnvelope} /> {currentContent.email}
          </a>
        </div>

        {/* Additional Content */}
        <div className="additional-content">
          <div className="followus">
            <h3>{currentContent.followUs}</h3>
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} /> {currentContent.facebook}
            </a>
            <a
              href="https://www.instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} /> {currentContent.instagram}
            </a>
          </div>
          <div className="address">
            <h3>{currentContent.addressTitle}</h3>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {currentContent.address}
            </p>
          </div>
          {/* <div className="phone">
            <h3>{currentContent.phoneTitle}</h3>
            <p>
              <FontAwesomeIcon icon={faPhone} /> {currentContent.phone}
            </p>
          </div> */}
          <div className="map">
            <h3>{currentContent.mapTitle}</h3>
            <iframe
              src={currentContent.mapEmbedUrl}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact-form">
            <h3>{currentContent.formTitle}</h3>
            <form action="https://example.com/contact" method="post">
              <div>
                <label htmlFor="name">{currentContent.nameLabel}</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email">{currentContent.emailLabel}</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="message">{currentContent.messageLabel}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit">{currentContent.submitButton}</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;

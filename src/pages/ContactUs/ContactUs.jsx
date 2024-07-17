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
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

function ContactUs() {
  // Get the current language from the LanguageContext
  const { language } = useContext(LanguageContext);
  const currentContent = contactContent[language];

  // Use the custom hook for each section to observe visibility
  const contactHeadRef = useIntersectionObserver({ threshold: 0.1 });
  const addressRef = useIntersectionObserver({ threshold: 0.1 });
  const contactMapRef = useIntersectionObserver({ threshold: 0.1 });
  const contactFormRef = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="contactBody">
      <NavBar theme="white"/>
      <div className="contact-us">
        <div className="contactHeadingSection" ref={contactHeadRef}>
          <h2>{currentContent.title}</h2>
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
              <FontAwesomeIcon icon={faEnvelope} />
              {currentContent.email}
            </a>
          </div>
          <div className="contactAnimation">
            <dotlottie-player
              src="https://lottie.host/863758b5-bffe-4f93-ae5f-c0dceed14bcd/aL5OlN0QPf.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </div>
        {/* Additional Content */}
        <div className="additional-content">
          <div className="addressNfollow" ref={addressRef}>
            <div className="address">
              <h3>{currentContent.addressTitle}</h3>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                {currentContent.address}
              </p>
            </div>
            <div className="followus">
              <h3>{currentContent.followUs}</h3>
              <div className="followLinks">
                <a
                  href="https://www.facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} className="fbIcon" />
                </a>
                <a
                  href="https://www.instagram.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} className="instaIcon" />
                </a>
              </div>
            </div>

            {/* <div className="phone">
            <h3>{currentContent.phoneTitle}</h3>
            <p>
              <FontAwesomeIcon icon={faPhone} /> {currentContent.phone}
            </p>
          </div> */}
          </div>
          <div className="map" ref={contactMapRef}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.073292073073!2d79.8613663147725!3d6.9274229950000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a0b4d4b4b3d%3A0x1b3b3b3b3b3b3b3b!2sLiyo%20Travels!5e0!3m2!1sen!2slk!4v1629783660004!5m2!1sen!2slk"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact-form" ref={contactFormRef}>
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

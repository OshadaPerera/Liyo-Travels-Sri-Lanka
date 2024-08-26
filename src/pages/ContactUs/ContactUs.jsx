import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LanguageContext } from "../../components/LanguageContext";
import { contactContent } from "./contactContent";
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
import emailjs from "emailjs-com";
import "./contactUsStyles.css";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import fbQR from "../../assets/images/qr_codes/fb 1.png";
import instaQR from "../../assets/images/qr_codes/insta 1.png";
import Notification from "../../components/Notification";

function ContactUs() {
  const { language } = useContext(LanguageContext);
  const currentContent = contactContent[language];
  const location = useLocation();
  const [notification, setNotification] = useState({ message: "", type: "" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const contactHeadRef = useIntersectionObserver({ threshold: 0.1 });
  const addressRef = useIntersectionObserver({ threshold: 0.1 });
  const contactMapRef = useIntersectionObserver({ threshold: 0.1 });
  const contactFormRef = useIntersectionObserver({ threshold: 0.1 });

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification({ message: "", type: "" });
    }, 5000); // Hide the notification after 3 seconds
  };

  const handleCloseNotification = () => {
    setNotification({ message: "", type: "" }); // Close the notification
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gtcaqbv",
        "template_mlfx2cq",
        e.target,
        "jarWRPtLuJteQJhtU"
      )
      .then(
        (result) => {
          console.log(result.text);
          showNotification("Message sent successfully!", "success");
        },
        (error) => {
          console.error("EmailJS error:", error);
          showNotification(
            "Failed to send message, please try again.",
            "error"
          );
        }
      )
      .finally(() => {
        e.target.reset(); // Ensure the form is reset after the promise is resolved
      });
  };

  return (
    <div className="contactBody">
      <NavBar theme="white" />
      {/* Render the notification here */}
      {notification.message && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={handleCloseNotification} // Pass the close handler
        />
      )}
      <div className="contact-us">
        <div className="contactHeadingSection" ref={contactHeadRef}>
          <h2>{currentContent.title}</h2>
          <p>{currentContent.description}</p>
          <div className="contact-methods">
            <a
              href="https://wa.me/message/VICGCNPT3UEWK1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} /> {currentContent.whatsapp}
            </a>
            <a href="mailto:liyotravelssrilanka@gmail.com">
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

        <div className="additional-content">
          {/* The below code is commented out because the map and address details are not available. Uncomment the code to display the map and address details. */}

          {/* <div className="addressNfollow" ref={addressRef}>
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
                  href="https://www.facebook.com/people/Liyo-Travels-Sri-Lanka/61564623182427/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} className="fbIcon" />
                </a>
                <a
                  href="https://www.instagram.com/liyo_travels_sl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} className="instaIcon" />
                </a>
              </div>
            </div>
          </div>

          <div className="map" ref={contactMapRef}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.073292073073!2d79.8613663147725!3d6.9274229950000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a0b4d4b4b3d%3A0x1b3b3b3b3b3b3b3b!2sLiyo%20Travels!5e0!3m2!1sen!2slk!4v1629783660004!5m2!1sen!2slk"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> */}

          {/* Remove the below code when the address is added */}
          <div className="addressNfollow" ref={addressRef}>
            <div className="followus">
              <h3>{currentContent.followUs}</h3>
              <div className="followLinks">
                <a
                  href="https://www.facebook.com/people/Liyo-Travels-Sri-Lanka/61564623182427/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="qrImg" src={fbQR} alt="fb QR Code" />
                </a>
                <a
                  href="https://www.instagram.com/liyo_travels_sl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="qrImg" src={instaQR} alt="insta QR Code" />
                </a>
              </div>
            </div>
          </div>

          {/* Remove up to here */}

          <div className="contact-form" ref={contactFormRef}>
            <h3>{currentContent.formTitle}</h3>
            <form onSubmit={sendEmail}>
              <div>
                <label htmlFor="from_name">{currentContent.nameLabel}</label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  required
                  placeholder="Add your name here ..."
                />
              </div>
              <div>
                <label htmlFor="from_email">{currentContent.emailLabel}</label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  placeholder="Add your email here..."
                  required
                />
              </div>
              <div>
                <label htmlFor="from_contact">
                  {currentContent.contactLabel}
                </label>
                <input
                  type="text"
                  id="from_contact"
                  name="from_contact"
                  placeholder="Add your contact number here..."
                  required
                />
              </div>
              <div>
                <label htmlFor="message">{currentContent.messageLabel}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
              <button className="submitButton" type="submit">
                {currentContent.submitButton}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;

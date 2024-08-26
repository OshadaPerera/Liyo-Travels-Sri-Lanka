import React, { useState, useRef, useEffect, useContext } from "react";
import { LanguageContext } from "./LanguageContext"; // Importing the LanguageContext to manage language state globally
import UKflag from "../assets/images/ukflag.png"; // Importing the UK flag image
import Israel from "../assets/images/israel.png"; // Importing the Israel flag image
import "./styles/navDropDownStyles.css"; // Importing custom styles for the dropdown component

function CustomDropdown({ isInFooter }) {
  const { language, toggleLanguage } = useContext(LanguageContext);
  // Destructuring to get the current language and the function to toggle language from context

  const [isOpen, setIsOpen] = useState(false);
  // State to track whether the dropdown is open or closed

  const [selectedLanguage, setSelectedLanguage] = useState({
    language: language === "en" ? "English" : "עִברִית", // Setting the initial language based on the context
    flag: language === "en" ? UKflag : Israel, // Setting the initial flag based on the context
  });

  const dropdownRef = useRef(null);
  // Reference to the dropdown element to detect clicks outside of it

  // Function to toggle the dropdown open/closed
  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle language selection
  const handleSelect = (language, flag, langCode) => {
    setSelectedLanguage({ language, flag }); // Update the selected language and flag
    toggleLanguage(langCode); // Toggle the language in the context
    setIsOpen(false); // Close the dropdown after selection
  };

  // Effect to handle clicks outside the dropdown and close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close the dropdown if the click is outside of it
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Effect to update the selected language and flag when the global language changes
  useEffect(() => {
    setSelectedLanguage({
      language: language === "en" ? "English" : "עִברִית",
      flag: language === "en" ? UKflag : Israel,
    });
  }, [language]); // Dependency array ensures this runs whenever the language changes

  return (
    <div
      className={`custom-dropdown ${isInFooter ? "footer-dropdown" : ""}`}
      ref={dropdownRef} // Attaching the ref to the dropdown div
    >
      {/* Toggle button for the dropdown */}
      <div className="dropdown-toggle" onClick={handleToggleDropdown}>
        {selectedLanguage.language}{" "}
        <img
          src={selectedLanguage.flag}
          alt={`${selectedLanguage.language} flag`}
          className="flag activeflag"
        />
      </div>

      {/* Dropdown menu, displayed only when isOpen is true */}
      <div
        className={`dropdown-menu ${isOpen ? "active" : ""} ${
          isInFooter ? "footer-dropdown-menu" : ""
        }`}
      >
        {/* English language selection */}
        <div
          className={`dropdown-item ${
            selectedLanguage.language === "English" ? "active" : ""
          }`}
          onClick={() => handleSelect("English", UKflag, "en")}
        >
          <img src={UKflag} alt="UK flag" className="flag" /> English
        </div>

        {/* Hebrew language selection */}
        <div
          className={`dropdown-item ${
            selectedLanguage.language === "עִברִית" ? "active" : ""
          }`}
          onClick={() => handleSelect("עִברִית", Israel, "he")}
        >
          <img src={Israel} alt="Israel flag" className="flag" /> עִברִית
        </div>
      </div>
    </div>
  );
}

export default CustomDropdown;

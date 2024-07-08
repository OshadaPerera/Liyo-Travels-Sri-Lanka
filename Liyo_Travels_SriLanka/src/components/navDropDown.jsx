import React, { useState, useRef, useEffect } from "react";
import UKflag from "../assets/images/ukflag.png"; // Importing the UK flag image
import Israel from "../assets/images/israel.png"; // Import the Israel flag image
import "./styles/navDropDownStyles.css"; // Importing the CSS file for custom dropdown

function CustomDropdown({ isInFooter }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    language: "English",
    flag: UKflag,
  });

  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (language, flag) => {
    setSelectedLanguage({ language, flag });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`custom-dropdown ${isInFooter ? "footer-dropdown" : ""}`}
      ref={dropdownRef}
    >
      <div className="dropdown-toggle" onClick={handleToggleDropdown}>
        {selectedLanguage.language}{" "}
        <img
          src={selectedLanguage.flag}
          alt={`${selectedLanguage.language} flag`}
          className="flag activeflag"
        />
      </div>
      <div
        className={`dropdown-menu ${isOpen ? "active" : ""} ${
          isInFooter ? "footer-dropdown-menu" : ""
        }`}
      >
        <div
          className={`dropdown-item ${
            selectedLanguage.language === "English" ? "active" : ""
          }`}
          onClick={() => handleSelect("English", UKflag)}
        >
          <img src={UKflag} alt="UK flag" className="flag" /> English
        </div>
        <div
          className={`dropdown-item ${
            selectedLanguage.language === "עִברִית" ? "active" : ""
          }`}
          onClick={() => handleSelect("עִברִית", Israel)}
        >
          <img src={Israel} alt="Israel flag" className="flag" /> עִברִית
        </div>
      </div>
    </div>
  );
}

export default CustomDropdown;

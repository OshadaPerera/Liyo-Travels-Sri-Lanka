// src/components/CustomDropdown.js

import React, { useState, useRef, useEffect, useContext } from "react";
import { LanguageContext } from "./languageContext"; // Importing the LanguageContext
import UKflag from "../assets/images/ukflag.png";
import Israel from "../assets/images/israel.png";
import "./styles/navDropDownStyles.css";

function CustomDropdown({ isInFooter }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    language: "Hebrew",
    flag: Israel,
  });

  const { toggleLanguage } = useContext(LanguageContext);

  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (language, flag, langCode) => {
    setSelectedLanguage({ language, flag });
    toggleLanguage(langCode);
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
          onClick={() => handleSelect("English", UKflag, "en")}
        >
          <img src={UKflag} alt="UK flag" className="flag" /> English
        </div>
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

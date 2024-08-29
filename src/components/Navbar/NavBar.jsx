import React, { useContext, useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./navBarStyles.css"; // Importing the CSS file
import CustomDropdown from "../NavDropDown"; // Importing the CustomDropdown component
import { navbarContent } from "./NavbarContent";
import { LanguageContext } from "../LanguageContext"; // Importing the LanguageContext
import Logo from "../../assets/images/logo.png"; // Importing the logo image

function NavBar({ theme }) {
  const { language } = useContext(LanguageContext);
  const currentContent = navbarContent[language];

  // State to manage whether the navbar is open or closed
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Determine the color classes based on the theme prop
  const navbarColorClass = theme === "white" ? "navbar-light" : "navbar-dark";
  const textColorClass = theme === "white" ? "text-light" : "text-dark";

  // Ref to detect clicks outside the navbar
  const navbarRef = useRef(null);

  // Function to handle outside click
  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setNavbarOpen(false);
    }
  };

  // Add and remove event listeners for outside clicks
  useEffect(() => {
    if (navbarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`bg-transparent navigation ${navbarColorClass}`}
      ref={navbarRef}
    >
      <div className="container-fluid navBar">
        <Navbar.Brand as={NavLink} to="/" className={`navLogo`}>
          <img src={Logo} alt="Liyo Travels Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarNav"
          className="toggler-light"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {/* Change icon based on navbar state */}
          {navbarOpen ? (
            <span className="close-icon">✖</span> // Close button (you can replace this with a custom icon)
          ) : (
            <span className="hamburger-icon">☰</span> // Hamburger icon (you can replace this with a custom icon)
          )}
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarNav" in={navbarOpen}>
          <Nav className={`ms-auto ${textColorClass}`}>
            {currentContent.links.map((link, index) => (
              <Nav.Link
                key={index}
                as={NavLink}
                to={link.url}
                className={`nav-link ${textColorClass}`}
                onClick={() => setNavbarOpen(false)} // Close navbar on link click
              >
                {link.label}
              </Nav.Link>
            ))}
            {/* Custom dropdown for language selection */}
            <CustomDropdown />
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavBar;

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./navBarStyles.css"; // Importing the CSS file
import CustomDropdown from "../navDropDown"; // Importing the CustomDropdown component
import { navbarContent } from "./NavbarContent";
import { LanguageContext } from "../languageContext"; // Importing the LanguageContext
import Logo from "../../assets/images/logo.png"; // Importing the logo image

function NavBar({ theme }) {
  const { language } = useContext(LanguageContext);
  const currentContent = navbarContent[language];

  // Determine the color classes based on the theme prop
  const navbarColorClass = theme === "white" ? "navbar-light" : "navbar-dark";
  const textColorClass = theme === "white" ? "text-light" : "text-dark";
  const togglerColorClass =
    theme === "white" ? "toggler-light" : "toggler-dark";

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`bg-transparent navigation ${navbarColorClass}`}
    >
      <div className="container-fluid navBar">
        <Navbar.Brand
          as={NavLink}
          to="/"
          className={`navLogo ${textColorClass}`}
        >
          <img src={Logo} alt="Liyo Travels Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarNav"
          className={togglerColorClass}
        />
        <Navbar.Collapse id="navbarNav">
          <Nav className={`ms-auto ${textColorClass}`}>
            {currentContent.links.map((link, index) => (
              <Nav.Link
                key={index}
                as={NavLink}
                to={link.url}
                className={`nav-link ${textColorClass}`}
              >
                {link.label}
              </Nav.Link>
            ))}
            {/* Custom dropdown for language selection */}
            {/* <CustomDropdown />  */}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavBar;

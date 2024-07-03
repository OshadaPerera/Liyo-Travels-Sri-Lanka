import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './styles/navBarStyles.css'; // Importing the CSS file
import CustomDropdown from './navDropDown'; // Importing the CustomDropdown component

function NavBar({ theme }) {
  // Determine the color classes based on the theme prop
  const navbarColorClass = theme === 'white' ? 'navbar-light' : 'navbar-dark';
  const textColorClass = theme === 'white' ? 'text-light' : 'text-dark';
  const togglerColorClass = theme === 'white' ? 'toggler-light' : 'toggler-dark';

  return (
    <Navbar expand="lg" fixed="top" className={`bg-transparent ${navbarColorClass}`}>
      <div className="container-fluid navBar">
        <Navbar.Brand as={NavLink} to="/" className={`navLogo ${textColorClass}`}>
          Liyo Travels Sri Lanka
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" className={togglerColorClass} />
        <Navbar.Collapse id="navbarNav">
          <Nav className={`ms-auto ${textColorClass}`}>
            <Nav.Link as={NavLink} to="/" className={`nav-link ${textColorClass}`}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/gallery" className={`nav-link ${textColorClass}`}>
              Gallery
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className={`nav-link ${textColorClass}`}>
              About Us
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className={`nav-link ${textColorClass}`}>
              Contact Us
            </Nav.Link>
            <CustomDropdown /> {/* Custom dropdown for language selection */}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavBar;

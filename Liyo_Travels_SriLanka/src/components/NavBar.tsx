import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './styles/navBarStyles.css'; // Importing the CSS file

function NavBar() {
  // State to manage the selected language
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  // Function to handle selection change
  const handleSelect = (eventKey) => {
    setSelectedLanguage(eventKey); // Update selected language
  };

  return (
    <Navbar expand="lg" bg="light" fixed="top">
      <div className="container-fluid navBar">
        <Navbar.Brand as={Link} to="/" className="navLogo">
          Liyo Travels Sri Lanka
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto"> {/* ms-auto for aligning items to the right */}
            <Nav.Link as={Link} to="/" className="nav-link" active>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery" className="nav-link">
              Gallery
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">
              Contact Us
            </Nav.Link>
            <NavDropdown
              title={selectedLanguage} // Display selected language
              id="language-dropdown"
              onSelect={handleSelect} // Handle selection change
              className='langDropDown'
            >
              <NavDropdown.Item
                as={Link}
                to="/"
                eventKey="English"
                active={selectedLanguage === 'English'} // Set active state for English
              >
                English
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/"
                eventKey="Hebrew"
                active={selectedLanguage === 'Hebrew'} // Set active state for Hebrew
              >
                Hebrew
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavBar;

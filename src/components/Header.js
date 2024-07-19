import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1100, // Ensure this is higher than other headers
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #ddd',
    height: '56px', // Adjust based on your header height
  };

  const navbarContainerStyle = {
    display: 'flex',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    height: '100%',
    width:'100%'

  };

  const navCenterStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
  };

  const navEndStyle = {
    display: 'flex',
    alignItems: 'center',
    marginRight:"90px"
  };

  return (
    <Navbar style={headerStyle} bg="light" expand="lg">
      <div style={navbarContainerStyle}>
        <Navbar.Brand as={Link} to="/home" style={{marginLeft:'70px'}}>Sri Mandri</Navbar.Brand>
        
        <div style={navCenterStyle}>
          <Nav>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/puja">Puja</Nav.Link>
            <Nav.Link as={Link} to="/panchang">Panchang</Nav.Link>
            <Nav.Link as={Link} to="/temples">Temples</Nav.Link>
            <NavDropdown title="Library" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">a</NavDropdown.Item>
              <NavDropdown.Item href="/">b</NavDropdown.Item>
              <NavDropdown.Item href="/">c</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
        
        <div style={navEndStyle}>
          <Nav>
            <NavDropdown title="Language" id="language-nav-dropdown">
              <NavDropdown.Item href="#english">English</NavDropdown.Item>
              <NavDropdown.Item href="#hindi">Hindi</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Account" id="account-nav-dropdown">
              <NavDropdown.Header>Account Details</NavDropdown.Header>
              <NavDropdown.Item as={Link} to="/profile">My Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/puja-booking">My Puja Bookings</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
      </div>
    </Navbar>
  );
}

export default Header;

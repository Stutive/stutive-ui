import React from 'react';
import styled from 'styled-components';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import UIContainer from '../UIComponents/containers/UIContainer';

const StyledNavbar = styled(Navbar)`
  background-color: #ffffff !important;
`;

const NavigationBar = () => (
  <StyledNavbar bg="light" expand="lg">
    <UIContainer>
      <Navbar.Brand href="#home">Learn Seed</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </UIContainer>
  </StyledNavbar>
);

export default NavigationBar;

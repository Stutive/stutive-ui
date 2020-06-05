import React from 'react';
import styled from 'styled-components';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import UIContainer from '../UIComponents/containers/UIContainer';

import * as Colors from '../UIComponents/StyleTokens/colors';

const StyledNavbar = styled(Navbar)`
  background-color: ${Colors.OZ_DARK} !important;
`;

const NavigationBar = () => (
  <StyledNavbar bg="dark" expand="lg" fixed="top">
    <UIContainer>
      <Navbar.Brand href="/">Stutive</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <Nav.Link href="/search">Search</Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <Nav.Link href="/general-education">
            General Education Requirements
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </UIContainer>
  </StyledNavbar>
);

export default NavigationBar;

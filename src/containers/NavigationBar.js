import React from 'react';
import styled from 'styled-components';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import UIContainer from '../UIComponents/containers/UIContainer';

import * as Colors from '../UIComponents/StyleTokens/colors';

const StyledNavbar = styled(Navbar)`
  background-color: ${Colors.OLAF} !important;
`;

const StyledBrand = styled(Navbar.Brand)`
  color: ${Colors.OZ} !important;
  font-size: 1.4em;
  font-weight: 400;
`;

const NavigationBar = () => (
  <StyledNavbar bg="dark" expand="lg" fixed="top">
    <UIContainer>
      <StyledBrand href="/">Stutive</StyledBrand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/search">Search</Nav.Link>
          <Nav.Link href="/general-education">
            General Education Requirements
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </UIContainer>
  </StyledNavbar>
);

export default NavigationBar;

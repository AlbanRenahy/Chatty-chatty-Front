// imports npm
import React from 'react';

 // imports local
import './nav.scss';
import Logo from '../../data/logo.png';
import { Navbar } from 'react-bootstrap';

 const NavLogo = () => (
  <Navbar expand={false} className="td-navbar">
    <Navbar.Text>&nbsp;</Navbar.Text>
    <Navbar.Text className="td-navbar-logo"><img src={Logo} alt="Chattychatty" height="33"/></Navbar.Text>
    <Navbar.Text>&nbsp;</Navbar.Text>
  </Navbar>
);

 export default NavLogo;
// imports npm
import React from 'react';

 // imports local
import './nav.scss';
import { MdAccountCircle, MdChat } from 'react-icons/md';
import { Navbar } from 'react-bootstrap';

 const NavDefault = () => (
  <Navbar expand={false} className="chattychatty">
    <Navbar.Text className="icon"><MdAccountCircle /></Navbar.Text>
    <Navbar.Text className="chattychatty-logo">Chatty Chatty</Navbar.Text>
    <Navbar.Text className="icon"><MdChat /></Navbar.Text>
  </Navbar>
);

 export default NavDefault;
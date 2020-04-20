// imports npm
import React from 'react';

 // imports local
import './nav.scss';
import { MdAccountCircle, MdChat } from 'react-icons/md';
import { Navbar } from 'react-bootstrap';

 const NavDefault = () => (
  <Navbar expand={false} className="chattychatty">
    <Navbar.Text className="icon" onClick={(e) => {console.log('>>> User Button', e)}}><MdAccountCircle /></Navbar.Text>
    <Navbar.Text className="chattychatty-logo">Chatty Chatty</Navbar.Text>
    <Navbar.Text className="icon" onClick={(e) => {console.log('>>> User Chat', e)}}><MdChat /></Navbar.Text>
  </Navbar>
);

 export default NavDefault;
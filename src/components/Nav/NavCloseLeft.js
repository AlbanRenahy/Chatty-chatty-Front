// imports npm
import React from 'react';

 // imports local
import './nav.scss';
import { MdClose } from 'react-icons/md';
import { Navbar } from 'react-bootstrap';

 const NavCloseLeft = () => (
  <Navbar className="chattychatty">
    <Navbar.Text className="icon" onClick={(e) => {console.log('>>> Close Button', e)}}><MdClose /></Navbar.Text>
  </Navbar>
);

 export default NavCloseLeft;
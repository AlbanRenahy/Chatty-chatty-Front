// imports npm
import React from 'react';

 // imports local
import './nav.scss';
import { MdClose } from 'react-icons/md';
import { Navbar } from 'react-bootstrap';

 const NavCloseRight = () => (
  <Navbar className="chattychatty">
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text className="icon" onClick={(e) => {console.log('>>> Close Button', e)}}><MdClose /></Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

 export default NavCloseRight;
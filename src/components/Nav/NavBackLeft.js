// imports npm
import React from "react";

// imports locals
import "./nav.scss";
import { MdArrowBack } from "react-icons/md";
import { Navbar } from "react-bootstrap";

const NavBackLeft = () => (
  <Navbar className="chattychatty">
    <Navbar.Collapse className="justify-content-start">
      <Navbar.Text className="icon" onClick={(e) => {console.log('>>> Back Button', e)}}>
        <MdArrowBack />
      </Navbar.Text>
    </Navbar.Collapse>
    <Navbar.Collapse>
      <Navbar.Text>Match</Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBackLeft;

// imports npm
import React from "react";

// imports local
import "./nav.scss";
import { MdArrowForward } from "react-icons/md";
import { Navbar } from "react-bootstrap";

const NavBackRight = () => (
  <Navbar className="chattychatty">
    <Navbar.Collapse className="justify-content-right">
      <Navbar.Text className="navbar-title">Mon profil</Navbar.Text>
    </Navbar.Collapse>
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text className="icon">
        <MdArrowForward />
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBackRight;

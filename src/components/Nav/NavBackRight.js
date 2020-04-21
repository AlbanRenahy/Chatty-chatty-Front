// imports npm
import React from "react";
import PropTypes from 'prop-types';

// imports local
import "./nav.scss";
import { MdArrowForward } from "react-icons/md";
import { Navbar } from "react-bootstrap";

const NavBackRight = () => (
  <Navbar className="chattychatty">
    <Navbar.Collapse className="justify-content-right">
      <Navbar.Text className="navbar-title padding-right" onClick={(e) => {console.log('>>> Back Button', e)}}>Mon profil</Navbar.Text>
    </Navbar.Collapse>
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text className="icon">
        <MdArrowForward />
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBackRight;

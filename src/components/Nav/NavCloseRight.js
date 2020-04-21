// imports npm
import React from "react";
import PropTypes from "prop-types";

// imports local
import "./nav.scss";
import { MdClose } from "react-icons/md";
import { Navbar } from "react-bootstrap";

const NavCloseRight = ({ title }) => (
  <Navbar className="chattychatty">
    <Navbar.Collapse className="justify-content-right">
      <Navbar.Text
        className="navbar-title padding-right text-truncate"
        onClick={(e) => {
          console.log(">>> Back Button", e);
        }}
      >
        {title}
      </Navbar.Text>
    </Navbar.Collapse>
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text
        className="icon"
        onClick={(e) => {
          console.log(">>> Close Button", e);
        }}
      >
        <MdClose />
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

NavCloseRight.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NavCloseRight;

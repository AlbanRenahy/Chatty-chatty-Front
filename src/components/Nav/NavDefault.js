// imports npm
import React from "react";
import { NavLink } from "react-router-dom";

// imports local
import "./nav.scss";
import { MdAccountCircle, MdChat } from "react-icons/md";
import { Navbar } from "react-bootstrap";
import Logo from '../../data/logo.png';

const NavDefault = () => (
  <Navbar expand={false} className="chattychatty">
    <Navbar.Text 
    className="icon" onClick={(e) => {console.log('>>> User Button', e)}}>
    <NavLink to="/profil" ><MdAccountCircle/></NavLink></Navbar.Text>
    <Navbar.Text 
    className="td-navbar-logo">
    <NavLink to ="/matching"><img src={Logo} alt="chattychatty" height="33"/></NavLink></Navbar.Text>
    <Navbar.Text 
    className="icon" onClick={(e) => {console.log('>>> User Chat', e)}}>
    <NavLink to="/chat" ><MdChat /></NavLink></Navbar.Text>
  </Navbar>
);

export default NavDefault;

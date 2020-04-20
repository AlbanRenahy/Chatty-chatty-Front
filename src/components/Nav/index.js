// imports npm
import React from 'react';
import logo from '../../data/logo.png'

 // imports styles
import { FaUserAlt, FaRegCommentDots } from "react-icons/fa";

 // imports local
import './nav.scss';

 // Component
const Nav = () => {

   return (
        <div className="navbar">
            <div className="navbar-item"><FaUserAlt /></div>
            <img alt="Chatty-Chatty" src={logo}/>
            <div className="navbar-item"><FaRegCommentDots /></div>
        </div>
    )
};


 // export
export default Nav; 
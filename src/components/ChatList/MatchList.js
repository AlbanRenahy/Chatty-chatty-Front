// == Import : npm
import React from "react";
import Image from "react-bootstrap/Image";
// import { NavLink } from 'react-router-dom';

// == Import : local
import "./matchlist.scss";

// == Import : style

// == Composant
const MatchList = ({ users }) => (
  <div className="scrolling-wrapper d-flex">
    {users.map((user) => (
      <Image
        className="user-card"
        src="http://placeimg.com/150/150/people"
        roundedCircle
      />
    ))}
  </div>
);

// == Export
export default MatchList;

// == Import : npm
import React from 'react';
import Image from 'react-bootstrap/Image';
// import { NavLink } from 'react-router-dom';

 // == Import : local

 // == Import : style
import './messagepreview.scss';

 // == Composant
const MessagePreview = () => (
  <div className="message-wrapper d-flex">
    <div className="avatar-mini my-auto">
    <Image
      className="user-card"
      src='http://placeimg.com/500/500/people'
      roundedCircle
    />
    </div>
    <div className="message-preview-container">
      <p>Je suis un message...</p>

     </div>
  </div>
);

 // == Export
export default MessagePreview;
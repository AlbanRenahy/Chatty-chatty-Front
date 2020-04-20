// == Import : npm
import React from 'react';

 // imports styles
 import { Button } from 'react-bootstrap';

 // == Import : local
import './homePage.scss';

 // == Composant
const HomePage = () => (
    <>
    <div id="home">
        <div className='mainHome'>
          <h1>Chatty Chatty</h1>
          <h2>Le réseau social des développeurs !</h2> 
          <h3>(Par les devs, pour les devs)</h3>
          <p>Trouves des points communs avec d'autres développeurs :)  </p>
        </div>
        <div className='footerHome'>
          <p>Trouves ici ton perfect Dev-Match pour staffer tes projets</p>
          <Button variant="dark"> S'identifier via Github </Button>
        </div>
      </div>
    </>
);

 // == Export
export default HomePage; 
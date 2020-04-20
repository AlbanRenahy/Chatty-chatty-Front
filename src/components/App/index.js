// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';

// == Import : style

// Import locaux
//import Nav from '../../components/Nav';
import HomePage from '../../components/HomePage';
//import UserProfil from '../../components/UserProfil';

// == Composant
const App = () => (
  <div className="app">
    {/* <Nav /> */}
    <HomePage />
    {/* <UserProfil /> */}
  </div>
);

// == Export
export default App;
// == Import : npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import : local
import messages from '../../data/messages';

// == Import : style
import './app.scss';

// Import locaux
import HomePage from '../../components/HomePage';
import UserProfil from '../User/Menu';
import ChatList from '../ChatList';
import MessagesList from '../ChatList/MessagesList';
import EditUserProfil from '../User/Profil/Edit';
import ShowUserProfil from '../../containers/User/Profil/Show';
import UserMenu from '../../components/User/Menu';
import MatchingContainer from '../../containers/MatchingContainer';
import Form from '../../containers/ChatRoom/Form';
import Messages from '../../containers/ChatRoom/Messages';
import Page from '../../components/Page'
import Matrix from '../../components/Matrix';

// Import All Nav components
import Nav from '../../components/Nav';
import NavBackLeft from '../Nav/NavBackLeft.js';
import NavChat from '../Nav/NavChat.js';
import NavBackRight from '../Nav/NavBackRight.js';
import NavCloseRight from '../Nav/NavCloseRight.js';



// == Composant
const App = () => (
  <div className="app">
    <>
      <Switch > 
        <Route exact path ="/profil">
          <NavBackRight/>
          <UserMenu />
        </Route>
        <Route exact path ="/profil/edit">
          <NavCloseRight title="Éditer mon profil"/>
          <EditUserProfil />
        </Route>
        <Route exact path ="/profil/show">
          <Nav />
          <ShowUserProfil />
        </Route>
        <Route exact path="/matching">
            <Nav />
            <MatchingContainer />
        </Route>
        <Route exact path ="/chat">
          <NavBackLeft/>
          <ChatList />
        </Route>
        <Route exact path ="/chat/1">
          <NavChat />
          <Messages />
          <Form />
        </Route>
      </Switch>
    </>
      <Route exact path="/">
        <Page logged />
      </Route>
  </div>
);
// == Export
export default App;
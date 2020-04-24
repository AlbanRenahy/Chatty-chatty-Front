// == Import : npm
import React from 'react';

// == Import : local
import messages from '../../data/messages';

// == Import : style
import './app.scss';

// Import locaux
// import Nav from '../../components/Nav';
// import HomePage from '../../components/HomePage';
// import UserProfil from '../User/Menu';
// import ChatList from '../ChatList';
// import MessagesList from '../ChatList/MessagesList';
import EditUserProfil from '../User/Profil/Edit';
import ShowUserProfil from '../../containers/User/Profil/Show';
import UserMenu from '../../components/User/Menu';
// import MatchingContainer from '../../containers/MatchingContainer';
// import Form from '../../containers/ChatRoom/Form';
// import Messages from '../../containers/ChatRoom/Messages';
// import Page from '../../components/Page'



// == Composant
const App = () => (
  <div className="app">
    {/* <HomePage /> */}
    {<UserMenu />}
    <EditUserProfil />
    {/* <Nav /> */}
    {/* <ChatList /> */}
    {/* <MessagesList /> */}
    {/* <EditUserProfil /> */}
    <ShowUserProfil />
    {/* <MatchingContainer /> */}
    {/* <Messages messages={messages} />
    <Form /> */}
    {/* <Page logged={true} /> */}
  </div>
);

// == Export
export default App;
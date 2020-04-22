// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';

// == Import : style

// Import locaux
// import Nav from '../../components/Nav';
// import HomePage from '../../components/HomePage';
// import UserProfil from '../../components/UserProfil';
// import ChatList from '../ChatList';
// import MessagesList from '../ChatList/MessagesList';
// import EditUserProfil from '../UserProfil/EditUserProfil';
// import MatchingContainer from '../../containers/MatchingContainer';
import Form from '../../components/ChatRoom/Form';
import Messages from '../../components/ChatRoom/Messages';


// == Composant
const App = () => (
  <div className="app">
    {/* <HomePage /> */}
    {/* <UserProfil /> */}
    {/* <Nav /> */}
    {/* <ChatList /> */}
    {/* <MessagesList /> */}
    {/* <EditUserProfil /> */}
    {/* <MatchingContainer /> */}
    <Messages />
    <Form />
  </div>
);

// == Export
export default App;
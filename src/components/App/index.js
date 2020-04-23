// == Import : npm
import React from 'react';

// == Import : local
import messages from '../../data/messages';

// == Import : style
import './app.scss';

// Import locaux
// import Nav from '../../components/Nav';
// import HomePage from '../../components/HomePage';
// import UserProfil from '../../components/UserProfil';
// import ChatList from '../ChatList';
// import MessagesList from '../ChatList/MessagesList';
// import EditUserProfil from '../UserProfil/EditUserProfil';
// import MatchingContainer from '../../containers/MatchingContainer';
// import Form from '../../containers/ChatRoom/Form';
// import Messages from '../../containers/ChatRoom/Messages';
// import Matrix from '../../components/Matrix';
import Location from '../../components/Location';


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
    {/* <Messages messages={messages} />
    <Form /> */}
    {/* <Matrix /> */}
    <Location />
  </div>
);

// == Export
export default App;
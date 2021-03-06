// == Import : npm
import React from 'react';

 // == Import : local
// import MenuNav from './Menu';
import Nav from '../Nav';
import MatchList from './MatchList';
import MessagesList from './MessagesList';


 // == Import : style
// import './chatlist.scss';
import users from './users';

 // == Composant
const ChatList = () => (
  <div className="chatlist">
    {/* <Nav nav="chat" /> */}
    <MatchList users={users} />
    <MessagesList users={users} />
  </div>
);

 // == Export
export default ChatList;
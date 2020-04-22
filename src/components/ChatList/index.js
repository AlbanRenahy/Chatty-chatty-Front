// == Import : npm
import React from 'react';

 // == Import : local
// import MenuNav from './Menu';
import MatchList from './MatchList';
import MessagesList from './MessagesList';


 // == Import : style
// import './chatlist.scss';
import users from './users';

 // == Composant
const ChatList = () => (
  <div className="messages">
    {/* <MenuNav /> */}
    <MatchList users={users} />
    <MessagesList users={users} />
  </div>
);

 // == Export
export default ChatList;
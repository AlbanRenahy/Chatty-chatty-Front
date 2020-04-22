/* eslint-disable import/no-cycle */
// == Import : npm
import { connect } from 'react-redux';

 // == Import : local
import Messages from '../../../components/ChatRoom/Messages';

 const mapStateToProps = (state) => ({
  messages: state.chatroom.messages,
});


 const mapDispatchToProps = {};

 // Container
const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Messages);

 // == Export
export default MessagesContainer;
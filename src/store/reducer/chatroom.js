// == Initial State
import messageData from "../../data/messages"; // data

import { getMaxId } from "../../store/selectors";

const initialState = {
  messages: messageData,
  messageValue: "",
};

// == Types
const CHANGE_MESSAGE = "CHANGE_MESSAGE";
const ADD_MESSAGE = "ADD_MESSAGE";

const chatroom = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_MESSAGE:
      return {
        ...state,
        messageValue: action.value,
      };
    case ADD_MESSAGE: {
      const maxId = getMaxId(state.messages);
      const newMessage = {
        text: state.messageValue,
        id: maxId + 1,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        messageValue: "",
      };
    }

    default:
      return state;
  }
};

export const addMessage = () => ({
  type: ADD_MESSAGE,
});

// // == Selectors

// == Export
export default chatroom;

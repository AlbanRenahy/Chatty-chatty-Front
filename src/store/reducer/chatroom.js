// == Initial State
import messageData from "../../data/messages"; // data

import { getMaxId } from "../../store/selectors";

const initialState = {
  messages: messageData,
  messageValue: "",
  currentUser: "TOto",
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
      if (state.messageValue.trim().length > 0) {
        const maxId = getMaxId(state.messages);
        const newMessage = {
          text: state.messageValue,
          id: maxId + 1,
        };

        if (state.currentUser.trim().length > 0) {
          newMessage.author = state.currentUser.trim();
        }
        return {
          ...state,
          messages: [...state.messages, newMessage],
          messageValue: "",
        };
      }
      break;
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

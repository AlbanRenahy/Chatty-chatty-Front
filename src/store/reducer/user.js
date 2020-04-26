import connectedUserData from '../../data/user-info';
import levelsTable from '../../data/levels-table';
import wishesTable from '../../data/wishes-table';

 // == Initial State
const initialState = {
  ...connectedUserData,
  levelsList: levelsTable,
  wishesList: wishesTable,
};

 // == Types
const DO_SOMETHING = 'DO_SOMETHING';

 // == Reducer
const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        ...state,
        message: action.message,
      };

     default:
      return state;
  }
};

 // == Action Creators
export const doSomething = message => ({
  type: DO_SOMETHING,
  message,
});


 // == Selectors


 // == Export
export default user;
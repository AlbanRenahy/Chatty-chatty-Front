// Here i will find the parent reducer in which i am going to combine my reducers

// redux provided a combineReducers function that combines multiple reducer into one
import { combineReducers } from 'redux';

// we import each of the sub-reducers
// import user from './user';
import home from './home';
import matching from './matching';
import chatroom from './chatroom';
import matchlistReducer from './matchlistReducer.js';
import chatlistReducer from './chatlistReducer';

// combineReducers returns us the generated parent reducer
// we must supply an object as parameter
// with a given name given to each reducer and in value, each function reducer
// https://redux.js.org/api/combinereducers

const reducer = combineReducers({
  // user: user
  // user,
  home,
  matching,
  chatroom,
  matchlistReducer,
  chatlistReducer,
});

export default reducer;
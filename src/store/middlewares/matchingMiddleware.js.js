// Import npm
import axios from 'axios';

 // Import actions
import { DO_REQUEST, DO_LIKE, DO_UNLIKE, getUsers } from '../reducer/matching';


const matchingMiddleware = (store) => (next) => (action) => {

  console.log('I am the middleware, and I pass this action: ', action);
  
  switch (action.type) {
      case DO_REQUEST:
            console.log("Une requête Ajax est envoyée pour avoir de nouveaux profils");
            break;
      case DO_LIKE:
            console.log("Cet utilisateur est envoyé dans mes profils likés");
            break;
      case DO_UNLIKE:
            console.log("Cet utilisateur est envoyé dans mes profils Dislikés");
            break;
       default:
          next(action);
  }
};

export default matchingMiddleware;

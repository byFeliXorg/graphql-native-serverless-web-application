import { combineReducers } from 'redux';
import sessionReducer from './session';
import userReducer from './user';
import offerReducer from './offer';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  offersState: offerReducer,
});

export default rootReducer;

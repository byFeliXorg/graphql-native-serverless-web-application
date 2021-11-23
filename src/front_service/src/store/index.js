import {createStore,applyMiddleware,compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const middleware =  [thunk];

const initStore = () => {
  const store =  createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middleware),
      )
);

  return store;
};

export default initStore;
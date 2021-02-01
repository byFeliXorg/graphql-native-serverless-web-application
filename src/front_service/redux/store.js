import {createStore,applyMiddleware,compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
const initialState = {value: 0};

const middleware =  [thunk];


const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middleware),
      )
);


export default store;
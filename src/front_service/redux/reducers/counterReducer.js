//This create an initial state with the counter value being set to 0
/*
const counterReducer = (state = {value: 0}, action) => {
    return {...state};
};

export default counterReducer;
*/

//This will either increment or decrement our counter when INCREMENT_COUNTER or DECREMENT_COUNTER actions are dispatched.
import {DECREMENT_COUNTER, INCREMENT_COUNTER} from '../actions/counterActions';

const counterReducer = (state = {value: 0}, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {...state, value: state.value + 1};
        case DECREMENT_COUNTER:
            return {...state, value: state.value - 1};
        default:
            return {...state};
    }
};

export default counterReducer;
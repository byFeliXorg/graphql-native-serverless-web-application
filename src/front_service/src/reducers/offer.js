import { FETCH_OFFERS } from '../actions/types';

const initialState = {
    offers: []
};

export default function offerReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_OFFERS:
        return {
          ...state,
          offers: action.payload
        };
      default:
        return state;
    }
  }
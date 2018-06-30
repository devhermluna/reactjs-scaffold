import { AUTHENTICATE_USER, REMOVE_USER } from '../actions/types';

const initialState = {
  authenticated: false,
  user_details: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return {
        ...state,
        authenticated: true,
        user_details: action.payload
      };

    case REMOVE_USER:
      return {
        ...state,
        authenticated: false,
        user_details: {}
      };

    default:
      return state;
  }
}
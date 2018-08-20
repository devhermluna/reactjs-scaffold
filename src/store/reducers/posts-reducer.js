import { FETCH_POSTS, NEW_POSTS } from '../actions/types';

const initialState = {
  items: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    
    case NEW_POSTS: 
      return {
        ...state,
        items: state.items.concat(action.payload)
      };

    default:
      return state;
  }
}
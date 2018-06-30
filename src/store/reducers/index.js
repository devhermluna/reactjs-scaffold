import { combineReducers } from 'redux';
import PostsReducer from './posts-reducer'

export default combineReducers({
  posts: PostsReducer
});
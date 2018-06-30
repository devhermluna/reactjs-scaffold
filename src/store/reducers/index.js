import { combineReducers } from 'redux';
import PostsReducer from './posts-reducer'
import AuthReducer from './auth-reducer'

export default combineReducers({
  posts: PostsReducer,
  auth: AuthReducer
});
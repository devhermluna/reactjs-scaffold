import { FETCH_POSTS, NEW_POSTS } from './types';
import Posts from '../../api/repositories/Posts'

export const fetchPosts = () => async dispatch => {
  let _api = new Posts()
  let response = await _api.get()

  dispatch({
    type: FETCH_POSTS,
    payload: response
  })
}

export const createPosts = (name) => dispatch => {
  dispatch({
    type: NEW_POSTS,
    payload: name
  })
}
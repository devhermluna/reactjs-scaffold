import { FETCH_POSTS, NEW_POSTS } from './types';
import API from '../../api'

export const fetchPosts = () => dispatch => {
  API.get('/posts')
    .then(response => {
      console.log(response.data)
      dispatch({
        type: FETCH_POSTS,
        payload: response.data
      })
    })
}

export const createPosts = (name) => dispatch => {
  dispatch({
    type: NEW_POSTS,
    payload: name
  })
}
import { AUTHENTICATE_USER, REMOVE_USER } from './types';

export const authenticateUser = () => async dispatch => {
  dispatch({
    type: AUTHENTICATE_USER,
    payload: {
      first_name: 'Herman',
      last_name: 'Luna',
      email: 'devhermluna@gmail.com' 
    }
  })
}

export const removeAuthUser = () => dispatch => {
  dispatch({
    type: REMOVE_USER
  })
}
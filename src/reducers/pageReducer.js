import { ADD, SET_USERS, ERROR_USERS } from '../constants/actionTypes'
import initialState from './initialState'

export default function pageReducer(state = initialState.page, action) {
  // let newState

  switch (action.type) {

    case ADD:
      return Object.assign({}, state, { counter: action.counter })
    
    case SET_USERS:
      return Object.assign({}, state, { users: action.users })

    case ERROR_USERS:
      return Object.assign({}, state, { error: action.error })
    
    default:
      return state

  }

}
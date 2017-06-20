import * as types from '../constants/actionTypes'

export function incrementCounter(value) {
  return {
    type: types.ADD,
    counter: value
  }
}

export function getUsers() {
  return function (dispatch) {
    return fetchUsers().then(
      userData => userData.json().then(data => dispatch(setUsers(data))),
      error => dispatch(errorUsers(error))
    )
  }
}

function fetchUsers () {
  return fetch('http://localhost:3004/users')
}

function setUsers (userData) {
  return {
    type: types.SET_USERS,
    users: userData
  }
}

function errorUsers (error) {
  return {
    type: types.ERROR_USERS,
    error: error.message
  }
}
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

export default function configureStore(initialState){
  return createStore(
    rootReducer, 
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  )
}

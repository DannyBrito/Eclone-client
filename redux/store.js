import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension';

// import { createStore, applyMiddleware } from 'redux';
import reducer from "./reducer"
// import secondReducer from "./secondReducer"


const rootReducer = combineReducers({first: reducer})


const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk) 
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))
  

export default store
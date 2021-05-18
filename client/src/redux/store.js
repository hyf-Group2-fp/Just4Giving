// store takes two parameters combined reducer and middlewares .....

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension' ;
import thunk from "redux-thunk";
import allReducers from "./reducers/index";

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunk),
)


const store = createStore(
  allReducers,
    composedEnhancer

);

export default store;

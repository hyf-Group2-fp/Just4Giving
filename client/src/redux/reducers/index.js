
import { combineReducers } from "redux";

// import all reducers
import {userInfoReducer} from './userInfoReducer'



// all reducers takes an object with each properties express one reducers
const allReducers = combineReducers({
  userInfo:userInfoReducer ,
});

export default allReducers;
